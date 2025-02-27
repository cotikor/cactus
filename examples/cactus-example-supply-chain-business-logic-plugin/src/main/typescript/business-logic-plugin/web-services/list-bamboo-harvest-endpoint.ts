import { Express, Request, Response } from "express";

import {
  Logger,
  Checks,
  LogLevelDesc,
  LoggerProvider,
  IAsyncProvider,
} from "@hyperledger/cactus-common";
import {
  IEndpointAuthzOptions,
  IExpressRequestHandler,
  IWebServiceEndpoint,
} from "@hyperledger/cactus-core-api";
import { registerWebServiceEndpoint } from "@hyperledger/cactus-core";
import {
  DefaultApi as QuorumApi,
  EthContractInvocationType,
  Web3SigningCredentialType,
} from "@hyperledger/cactus-plugin-ledger-connector-quorum";

import OAS from "../../../json/openapi.json";
import { BambooHarvestConverter } from "../../model/converter/bamboo-harvest-converter";

export interface IListBambooHarvestEndpointOptions {
  logLevel?: LogLevelDesc;
  contractName: string;
  //  contractAbi: any;
  apiClient: QuorumApi;
  keychainId: string;
}

export class ListBambooHarvestEndpoint implements IWebServiceEndpoint {
  public static readonly CLASS_NAME = "ListBambooHarvestEndpoint";

  private readonly log: Logger;

  public get className() {
    return ListBambooHarvestEndpoint.CLASS_NAME;
  }

  constructor(public readonly opts: IListBambooHarvestEndpointOptions) {
    const fnTag = `${this.className}#constructor()`;
    Checks.truthy(opts, `${fnTag} arg options`);
    Checks.truthy(opts.apiClient, `${fnTag} options.apiClient`);
    //  Checks.truthy(opts.contractAddress, `${fnTag} options.contractAddress`);
    //  Checks.truthy(opts.contractAbi, `${fnTag} options.contractAbi`);
    Checks.nonBlankString(
      opts.contractName,
      `${fnTag} options.contractAddress`,
    );

    const level = this.opts.logLevel || "INFO";
    const label = this.className;
    this.log = LoggerProvider.getOrCreate({ level, label });
  }

  public getOasPath() {
    return OAS.paths[
      "/api/v1/plugins/@hyperledger/cactus-example-supply-chain-backend/list-bamboo-harvest"
    ];
  }

  getAuthorizationOptionsProvider(): IAsyncProvider<IEndpointAuthzOptions> {
    // TODO: make this an injectable dependency in the constructor
    return {
      get: async () => ({
        isProtected: true,
        requiredRoles: [],
      }),
    };
  }

  public async registerExpress(
    expressApp: Express,
  ): Promise<IWebServiceEndpoint> {
    await registerWebServiceEndpoint(expressApp, this);
    return this;
  }

  public getVerbLowerCase(): string {
    const apiPath = this.getOasPath();
    return apiPath.get["x-hyperledger-cactus"].http.verbLowerCase;
  }

  public getPath(): string {
    const apiPath = this.getOasPath();
    return apiPath.get["x-hyperledger-cactus"].http.path;
  }

  public getExpressRequestHandler(): IExpressRequestHandler {
    return this.handleRequest.bind(this);
  }

  async handleRequest(req: Request, res: Response): Promise<void> {
    const tag = `${this.getVerbLowerCase().toUpperCase()} ${this.getPath()}`;
    try {
      this.log.debug(`${tag}`);

      const { data } = await this.opts.apiClient.invokeContractV1({
        contractName: this.opts.contractName,
        invocationType: EthContractInvocationType.Call,
        methodName: "getAllRecords",
        gas: 1000000,
        params: [],
        signingCredential: {
          type: Web3SigningCredentialType.None,
        },
        keychainId: this.opts.keychainId,
      });
      const { callOutput } = data;

      const rows = BambooHarvestConverter.ofSolidityStructList(callOutput);
      this.log.debug(`apiV1QuorumInvokeContract() => %o`, data);

      const body = { data: rows };
      res.status(200);
      res.json(body);
    } catch (ex) {
      this.log.debug(`${tag} Failed to serve request:`, ex);
      res.status(500);
      res.json({ error: ex.stack });
    }
  }
}
