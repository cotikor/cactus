/* tslint:disable */
/* eslint-disable */
/**
 * Hyperledger Cactus Plugin - Connector Fabric
 * Can perform basic tasks on a fabric ledger
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * Enumerates the supported programming language runtimes of Hyperledger Fabric
 * @export
 * @enum {string}
 */

export enum ChainCodeLanguageRuntime {
    Golang = 'golang',
    Node = 'node',
    Java = 'java'
}

/**
 * 
 * @export
 * @interface ChainCodeLifeCycleCommandResponses
 */
export interface ChainCodeLifeCycleCommandResponses {
    /**
     * 
     * @type {SSHExecCommandResponse}
     * @memberof ChainCodeLifeCycleCommandResponses
     */
    packaging?: SSHExecCommandResponse;
    /**
     * 
     * @type {Array<SSHExecCommandResponse>}
     * @memberof ChainCodeLifeCycleCommandResponses
     */
    installList: Array<SSHExecCommandResponse>;
    /**
     * 
     * @type {Array<SSHExecCommandResponse>}
     * @memberof ChainCodeLifeCycleCommandResponses
     */
    queryInstalledList: Array<SSHExecCommandResponse>;
    /**
     * 
     * @type {Array<SSHExecCommandResponse>}
     * @memberof ChainCodeLifeCycleCommandResponses
     */
    approveForMyOrgList: Array<SSHExecCommandResponse>;
    /**
     * 
     * @type {SSHExecCommandResponse}
     * @memberof ChainCodeLifeCycleCommandResponses
     */
    commit?: SSHExecCommandResponse;
    /**
     * 
     * @type {SSHExecCommandResponse}
     * @memberof ChainCodeLifeCycleCommandResponses
     */
    queryCommitted?: SSHExecCommandResponse;
    /**
     * 
     * @type {SSHExecCommandResponse}
     * @memberof ChainCodeLifeCycleCommandResponses
     */
    init?: SSHExecCommandResponse;
}
/**
 * Enumerates the supported source code programming languages of Hyperledger Fabric
 * @export
 * @enum {string}
 */

export enum ChainCodeProgrammingLanguage {
    Golang = 'golang',
    Javascript = 'javascript',
    Typescript = 'typescript',
    Java = 'java'
}

/**
 * 
 * @export
 * @interface ConnectionProfile
 */
export interface ConnectionProfile {
    [key: string]: object | any;

    /**
     * 
     * @type {string}
     * @memberof ConnectionProfile
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectionProfile
     */
    x_type?: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectionProfile
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectionProfile
     */
    version: string;
    /**
     * 
     * @type {ConnectionProfileClient}
     * @memberof ConnectionProfile
     */
    client?: ConnectionProfileClient;
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ConnectionProfile
     */
    channels?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ConnectionProfile
     */
    organizations: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ConnectionProfile
     */
    orderers?: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ConnectionProfile
     */
    peers: { [key: string]: object; };
    /**
     * 
     * @type {{ [key: string]: object; }}
     * @memberof ConnectionProfile
     */
    certificateAuthorities?: { [key: string]: object; };
}
/**
 * 
 * @export
 * @interface ConnectionProfileClient
 */
export interface ConnectionProfileClient {
    /**
     * 
     * @type {string}
     * @memberof ConnectionProfileClient
     */
    organization?: string;
}
/**
 * 
 * @export
 * @enum {string}
 */

export enum DefaultEventHandlerStrategy {
    MspidScopeAllfortx = 'MSPID_SCOPE_ALLFORTX',
    MspidScopeAnyfortx = 'MSPID_SCOPE_ANYFORTX',
    NetworkScopeAllfortx = 'NETWORK_SCOPE_ALLFORTX',
    NetworkScopeAnyfortx = 'NETWORK_SCOPE_ANYFORTX'
}

/**
 * 
 * @export
 * @interface DeployContractGoSourceV1Request
 */
export interface DeployContractGoSourceV1Request {
    /**
     * 
     * @type {string}
     * @memberof DeployContractGoSourceV1Request
     */
    policyDslSource: string;
    /**
     * The TLS root cert files that will be passed to the chaincode instantiation command.
     * @type {string}
     * @memberof DeployContractGoSourceV1Request
     */
    tlsRootCertFiles: string;
    /**
     * The name of the Fabric channel where the contract will get instantiated.
     * @type {string}
     * @memberof DeployContractGoSourceV1Request
     */
    channelId: string;
    /**
     * 
     * @type {Array<DeploymentTargetOrganization>}
     * @memberof DeployContractGoSourceV1Request
     */
    targetOrganizations: Array<DeploymentTargetOrganization>;
    /**
     * An array of peer addresses where the contract will be instantiated. Note that at present only the first item from this array will be used which is the behavior taken from the official Fabric samples repository and therefore it is assumed to be correct usage.
     * @type {Array<string>}
     * @memberof DeployContractGoSourceV1Request
     */
    targetPeerAddresses: Array<string>;
    /**
     * 
     * @type {DeployContractGoSourceV1RequestConstructorArgs}
     * @memberof DeployContractGoSourceV1Request
     */
    constructorArgs?: DeployContractGoSourceV1RequestConstructorArgs;
    /**
     * 
     * @type {string}
     * @memberof DeployContractGoSourceV1Request
     */
    chainCodeVersion: string;
    /**
     * 
     * @type {FileBase64}
     * @memberof DeployContractGoSourceV1Request
     */
    goSource: FileBase64;
    /**
     * 
     * @type {FileBase64}
     * @memberof DeployContractGoSourceV1Request
     */
    goMod?: FileBase64;
    /**
     * The go module name that will be used for the go compilation process.
     * @type {string}
     * @memberof DeployContractGoSourceV1Request
     */
    moduleName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DeployContractGoSourceV1Request
     */
    pinnedDeps?: Array<string>;
    /**
     * Indicates to the go chaincode compiler of Cactus if it should do an actual go compilation with the contact source or if it should just execute the go mod tidy command.
     * @type {boolean}
     * @memberof DeployContractGoSourceV1Request
     */
    modTidyOnly?: boolean | null;
}
/**
 * 
 * @export
 * @interface DeployContractGoSourceV1RequestConstructorArgs
 */
export interface DeployContractGoSourceV1RequestConstructorArgs {
    /**
     * 
     * @type {Array<any>}
     * @memberof DeployContractGoSourceV1RequestConstructorArgs
     */
    Args?: Array<any>;
}
/**
 * 
 * @export
 * @interface DeployContractGoSourceV1Response
 */
export interface DeployContractGoSourceV1Response {
    /**
     * 
     * @type {boolean}
     * @memberof DeployContractGoSourceV1Response
     */
    success: boolean;
    /**
     * 
     * @type {Array<SSHExecCommandResponse>}
     * @memberof DeployContractGoSourceV1Response
     */
    installationCommandResponses: Array<SSHExecCommandResponse>;
    /**
     * 
     * @type {SSHExecCommandResponse}
     * @memberof DeployContractGoSourceV1Response
     */
    instantiationCommandResponse: SSHExecCommandResponse;
}
/**
 * 
 * @export
 * @interface DeployContractV1Request
 */
export interface DeployContractV1Request {
    /**
     * 
     * @type {ChainCodeProgrammingLanguage}
     * @memberof DeployContractV1Request
     */
    ccLang: ChainCodeProgrammingLanguage;
    /**
     * File-system path pointing at the CA file.
     * @type {string}
     * @memberof DeployContractV1Request
     */
    caFile: string;
    /**
     * Ordering service endpoint specified as <hostname or IP address>:<port>
     * @type {string}
     * @memberof DeployContractV1Request
     */
    orderer: string;
    /**
     * The hostname override to use when validating the TLS connection to the orderer
     * @type {string}
     * @memberof DeployContractV1Request
     */
    ordererTLSHostnameOverride: string;
    /**
     * Timeout for client to connect (default 3s)
     * @type {number}
     * @memberof DeployContractV1Request
     */
    connTimeout?: number;
    /**
     * Passed in to the peer via the --signature-policy argument on the command line. See also: https://hyperledger-fabric.readthedocs.io/en/release-2.2/endorsement-policies.html#setting-chaincode-level-endorsement-policies
     * @type {string}
     * @memberof DeployContractV1Request
     */
    signaturePolicy?: string;
    /**
     * Name of the collections config file as present in the sourceFiles array of the request.
     * @type {string}
     * @memberof DeployContractV1Request
     */
    collectionsConfigFile?: string;
    /**
     * The name of the Fabric channel where the contract will get instantiated.
     * @type {string}
     * @memberof DeployContractV1Request
     */
    channelId: string;
    /**
     * 
     * @type {Array<DeploymentTargetOrganization>}
     * @memberof DeployContractV1Request
     */
    targetOrganizations: Array<DeploymentTargetOrganization>;
    /**
     * 
     * @type {DeployContractGoSourceV1RequestConstructorArgs}
     * @memberof DeployContractV1Request
     */
    constructorArgs?: DeployContractGoSourceV1RequestConstructorArgs;
    /**
     * 
     * @type {number}
     * @memberof DeployContractV1Request
     */
    ccSequence: number;
    /**
     * 
     * @type {string}
     * @memberof DeployContractV1Request
     */
    ccVersion: string;
    /**
     * 
     * @type {string}
     * @memberof DeployContractV1Request
     */
    ccName: string;
    /**
     * Human readable label to uniquely identify the contract. Recommended to include in this at least the contract name and the exact version in order to make it easily distinguishable from other deployments of the same contract.
     * @type {string}
     * @memberof DeployContractV1Request
     */
    ccLabel: string;
    /**
     * The your-smart-contract.go file where the functionality of your contract is implemented.
     * @type {Array<FileBase64>}
     * @memberof DeployContractV1Request
     */
    sourceFiles: Array<FileBase64>;
}
/**
 * 
 * @export
 * @interface DeployContractV1Response
 */
export interface DeployContractV1Response {
    /**
     * 
     * @type {boolean}
     * @memberof DeployContractV1Response
     */
    success: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof DeployContractV1Response
     */
    packageIds: Array<string>;
    /**
     * 
     * @type {ChainCodeLifeCycleCommandResponses}
     * @memberof DeployContractV1Response
     */
    lifecycle: ChainCodeLifeCycleCommandResponses;
}
/**
 * 
 * @export
 * @interface DeploymentTargetOrgFabric2x
 */
export interface DeploymentTargetOrgFabric2x {
    /**
     * Transient map of arguments in JSON encoding
     * @type {string}
     * @memberof DeploymentTargetOrgFabric2x
     */
    _transient?: string;
    /**
     * Mapped to environment variables of the Fabric CLI container.
     * @type {string}
     * @memberof DeploymentTargetOrgFabric2x
     */
    CORE_PEER_LOCALMSPID: string;
    /**
     * Mapped to environment variables of the Fabric CLI container.
     * @type {string}
     * @memberof DeploymentTargetOrgFabric2x
     */
    CORE_PEER_ADDRESS: string;
    /**
     * Mapped to environment variables of the Fabric CLI container.
     * @type {string}
     * @memberof DeploymentTargetOrgFabric2x
     */
    CORE_PEER_MSPCONFIGPATH: string;
    /**
     * Mapped to environment variables of the Fabric CLI container.
     * @type {string}
     * @memberof DeploymentTargetOrgFabric2x
     */
    CORE_PEER_TLS_ROOTCERT_FILE: string;
    /**
     * Mapped to environment variables of the Fabric CLI container.
     * @type {string}
     * @memberof DeploymentTargetOrgFabric2x
     */
    ORDERER_TLS_ROOTCERT_FILE: string;
}
/**
 * 
 * @export
 * @interface DeploymentTargetOrganization
 */
export interface DeploymentTargetOrganization {
    /**
     * Mapped to environment variables of the Fabric CLI container.
     * @type {string}
     * @memberof DeploymentTargetOrganization
     */
    CORE_PEER_LOCALMSPID: string;
    /**
     * Mapped to environment variables of the Fabric CLI container.
     * @type {string}
     * @memberof DeploymentTargetOrganization
     */
    CORE_PEER_ADDRESS: string;
    /**
     * Mapped to environment variables of the Fabric CLI container.
     * @type {string}
     * @memberof DeploymentTargetOrganization
     */
    CORE_PEER_MSPCONFIGPATH: string;
    /**
     * Mapped to environment variables of the Fabric CLI container.
     * @type {string}
     * @memberof DeploymentTargetOrganization
     */
    CORE_PEER_TLS_ROOTCERT_FILE: string;
    /**
     * Mapped to environment variables of the Fabric CLI container.
     * @type {string}
     * @memberof DeploymentTargetOrganization
     */
    ORDERER_TLS_ROOTCERT_FILE: string;
}
/**
 * 
 * @export
 * @enum {string}
 */

export enum FabricContractInvocationType {
    Send = 'FabricContractInvocationType.SEND',
    Call = 'FabricContractInvocationType.CALL',
    Sendprivate = 'FabricContractInvocationType.SENDPRIVATE'
}

/**
 * 
 * @export
 * @interface FabricSigningCredential
 */
export interface FabricSigningCredential {
    /**
     * 
     * @type {string}
     * @memberof FabricSigningCredential
     */
    keychainId: string;
    /**
     * 
     * @type {string}
     * @memberof FabricSigningCredential
     */
    keychainRef: string;
    /**
     * 
     * @type {FabricSigningCredentialType}
     * @memberof FabricSigningCredential
     */
    type?: FabricSigningCredentialType;
    /**
     * 
     * @type {VaultTransitKey}
     * @memberof FabricSigningCredential
     */
    vaultTransitKey?: VaultTransitKey;
}
/**
 * different type of identity provider for singing fabric messages supported by this package
 * @export
 * @enum {string}
 */

export enum FabricSigningCredentialType {
    X509 = 'X.509',
    VaultX509 = 'Vault-X.509'
}

/**
 * Represents a file-system file that has a name and a body which holds the file contents as a Base64 encoded string
 * @export
 * @interface FileBase64
 */
export interface FileBase64 {
    /**
     * The file\'s contents encoded as a Base64 string.
     * @type {string}
     * @memberof FileBase64
     */
    body: string;
    /**
     * The name as referred to on a file system
     * @type {string}
     * @memberof FileBase64
     */
    filename: string;
    /**
     * The relative path of the file, if it should be placed in a sub-directory
     * @type {string}
     * @memberof FileBase64
     */
    filepath?: string;
}
/**
 * 
 * @export
 * @interface GatewayDiscoveryOptions
 */
export interface GatewayDiscoveryOptions {
    /**
     * 
     * @type {boolean}
     * @memberof GatewayDiscoveryOptions
     */
    asLocalhost?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof GatewayDiscoveryOptions
     */
    enabled?: boolean;
}
/**
 * 
 * @export
 * @interface GatewayEventHandlerOptions
 */
export interface GatewayEventHandlerOptions {
    /**
     * 
     * @type {number}
     * @memberof GatewayEventHandlerOptions
     */
    commitTimeout?: number;
    /**
     * 
     * @type {number}
     * @memberof GatewayEventHandlerOptions
     */
    endorseTimeout?: number;
    /**
     * 
     * @type {DefaultEventHandlerStrategy}
     * @memberof GatewayEventHandlerOptions
     */
    strategy: DefaultEventHandlerStrategy;
}
/**
 * 
 * @export
 * @interface GatewayOptions
 */
export interface GatewayOptions {
    /**
     * 
     * @type {ConnectionProfile}
     * @memberof GatewayOptions
     */
    connectionProfile?: ConnectionProfile;
    /**
     * 
     * @type {GatewayDiscoveryOptions}
     * @memberof GatewayOptions
     */
    discovery?: GatewayDiscoveryOptions;
    /**
     * 
     * @type {GatewayEventHandlerOptions}
     * @memberof GatewayOptions
     */
    eventHandlerOptions?: GatewayEventHandlerOptions;
    /**
     * 
     * @type {string}
     * @memberof GatewayOptions
     */
    identity: string;
    /**
     * 
     * @type {GatewayOptionsWallet}
     * @memberof GatewayOptions
     */
    wallet: GatewayOptionsWallet;
}
/**
 * 
 * @export
 * @interface GatewayOptionsWallet
 */
export interface GatewayOptionsWallet {
    /**
     * 
     * @type {FabricSigningCredential}
     * @memberof GatewayOptionsWallet
     */
    keychain?: FabricSigningCredential;
    /**
     * 
     * @type {string}
     * @memberof GatewayOptionsWallet
     */
    json?: string;
}
/**
 * 
 * @export
 * @interface InlineResponse501
 */
export interface InlineResponse501 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse501
     */
    message?: string;
}
/**
 * 
 * @export
 * @interface RunTransactionRequest
 */
export interface RunTransactionRequest {
    /**
     * An array of MSP IDs to set as the list of endorsing peers for the transaction.
     * @type {Array<string>}
     * @memberof RunTransactionRequest
     */
    endorsingPeers?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof RunTransactionRequest
     */
    transientData?: object | null;
    /**
     * 
     * @type {GatewayOptions}
     * @memberof RunTransactionRequest
     */
    gatewayOptions?: GatewayOptions;
    /**
     * 
     * @type {FabricSigningCredential}
     * @memberof RunTransactionRequest
     */
    signingCredential: FabricSigningCredential;
    /**
     * 
     * @type {string}
     * @memberof RunTransactionRequest
     */
    channelName: string;
    /**
     * 
     * @type {string}
     * @memberof RunTransactionRequest
     */
    contractName: string;
    /**
     * 
     * @type {FabricContractInvocationType}
     * @memberof RunTransactionRequest
     */
    invocationType: FabricContractInvocationType;
    /**
     * 
     * @type {string}
     * @memberof RunTransactionRequest
     */
    methodName: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RunTransactionRequest
     */
    params: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof RunTransactionRequest
     */
    endorsingParties?: Array<string>;
}
/**
 * 
 * @export
 * @interface RunTransactionResponse
 */
export interface RunTransactionResponse {
    /**
     * 
     * @type {string}
     * @memberof RunTransactionResponse
     */
    functionOutput: string;
    /**
     * 
     * @type {boolean}
     * @memberof RunTransactionResponse
     */
    success: boolean;
}
/**
 * 
 * @export
 * @interface SSHExecCommandResponse
 */
export interface SSHExecCommandResponse {
    /**
     * 
     * @type {string}
     * @memberof SSHExecCommandResponse
     */
    stdout: string;
    /**
     * 
     * @type {string}
     * @memberof SSHExecCommandResponse
     */
    stderr: string;
    /**
     * 
     * @type {number}
     * @memberof SSHExecCommandResponse
     */
    code: number | null;
    /**
     * 
     * @type {string}
     * @memberof SSHExecCommandResponse
     */
    signal: string | null;
}
/**
 * vault key details for signing fabric message with private key stored with transit engine.
 * @export
 * @interface VaultTransitKey
 */
export interface VaultTransitKey {
    /**
     * label of private key
     * @type {string}
     * @memberof VaultTransitKey
     */
    keyName: string;
    /**
     * token for accessing private key
     * @type {string}
     * @memberof VaultTransitKey
     */
    token: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Deploys a chaincode contract in the form of a go sources.
         * @param {DeployContractGoSourceV1Request} [deployContractGoSourceV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployContractGoSourceV1: async (deployContractGoSourceV1Request?: DeployContractGoSourceV1Request, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-fabric/deploy-contract-go-source`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deployContractGoSourceV1Request, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Deploys a chaincode contract from a set of source files. Note: This endpoint only supports Fabric 2.x. The \'v1\' suffix in the method name refers to the Cactus API version, not the supported Fabric ledger version.
         * @param {DeployContractV1Request} [deployContractV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployContractV1: async (deployContractV1Request?: DeployContractV1Request, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-fabric/deploy-contract`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deployContractV1Request, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPrometheusMetricsV1: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-fabric/get-prometheus-exporter-metrics`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Runs a transaction on a Fabric ledger.
         * @param {RunTransactionRequest} runTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        runTransactionV1: async (runTransactionRequest: RunTransactionRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'runTransactionRequest' is not null or undefined
            assertParamExists('runTransactionV1', 'runTransactionRequest', runTransactionRequest)
            const localVarPath = `/api/v1/plugins/@hyperledger/cactus-plugin-ledger-connector-fabric/run-transaction`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(runTransactionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Deploys a chaincode contract in the form of a go sources.
         * @param {DeployContractGoSourceV1Request} [deployContractGoSourceV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deployContractGoSourceV1(deployContractGoSourceV1Request?: DeployContractGoSourceV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeployContractGoSourceV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deployContractGoSourceV1(deployContractGoSourceV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Deploys a chaincode contract from a set of source files. Note: This endpoint only supports Fabric 2.x. The \'v1\' suffix in the method name refers to the Cactus API version, not the supported Fabric ledger version.
         * @param {DeployContractV1Request} [deployContractV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deployContractV1(deployContractV1Request?: DeployContractV1Request, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeployContractV1Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deployContractV1(deployContractV1Request, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getPrometheusMetricsV1(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getPrometheusMetricsV1(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Runs a transaction on a Fabric ledger.
         * @param {RunTransactionRequest} runTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async runTransactionV1(runTransactionRequest: RunTransactionRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RunTransactionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.runTransactionV1(runTransactionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @summary Deploys a chaincode contract in the form of a go sources.
         * @param {DeployContractGoSourceV1Request} [deployContractGoSourceV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployContractGoSourceV1(deployContractGoSourceV1Request?: DeployContractGoSourceV1Request, options?: any): AxiosPromise<DeployContractGoSourceV1Response> {
            return localVarFp.deployContractGoSourceV1(deployContractGoSourceV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Deploys a chaincode contract from a set of source files. Note: This endpoint only supports Fabric 2.x. The \'v1\' suffix in the method name refers to the Cactus API version, not the supported Fabric ledger version.
         * @param {DeployContractV1Request} [deployContractV1Request] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deployContractV1(deployContractV1Request?: DeployContractV1Request, options?: any): AxiosPromise<DeployContractV1Response> {
            return localVarFp.deployContractV1(deployContractV1Request, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the Prometheus Metrics
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getPrometheusMetricsV1(options?: any): AxiosPromise<string> {
            return localVarFp.getPrometheusMetricsV1(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Runs a transaction on a Fabric ledger.
         * @param {RunTransactionRequest} runTransactionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        runTransactionV1(runTransactionRequest: RunTransactionRequest, options?: any): AxiosPromise<RunTransactionResponse> {
            return localVarFp.runTransactionV1(runTransactionRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @summary Deploys a chaincode contract in the form of a go sources.
     * @param {DeployContractGoSourceV1Request} [deployContractGoSourceV1Request] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deployContractGoSourceV1(deployContractGoSourceV1Request?: DeployContractGoSourceV1Request, options?: any) {
        return DefaultApiFp(this.configuration).deployContractGoSourceV1(deployContractGoSourceV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Deploys a chaincode contract from a set of source files. Note: This endpoint only supports Fabric 2.x. The \'v1\' suffix in the method name refers to the Cactus API version, not the supported Fabric ledger version.
     * @param {DeployContractV1Request} [deployContractV1Request] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deployContractV1(deployContractV1Request?: DeployContractV1Request, options?: any) {
        return DefaultApiFp(this.configuration).deployContractV1(deployContractV1Request, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get the Prometheus Metrics
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getPrometheusMetricsV1(options?: any) {
        return DefaultApiFp(this.configuration).getPrometheusMetricsV1(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Runs a transaction on a Fabric ledger.
     * @param {RunTransactionRequest} runTransactionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public runTransactionV1(runTransactionRequest: RunTransactionRequest, options?: any) {
        return DefaultApiFp(this.configuration).runTransactionV1(runTransactionRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


