import { LoggerOptions, INetworkModule } from '@azure/msal-common';
import { ICachePlugin } from "../cache/ICachePlugin";
/**
 * - clientId               - Client id of the application.
 * - authority              - Url of the authority. If no value is set, defaults to https://login.microsoftonline.com/common.
 * - knownAuthorities       - Needed for Azure B2C. All authorities that will be used in the client application.
 */
export declare type NodeAuthOptions = {
    clientId: string;
    authority?: string;
    knownAuthorities?: Array<string>;
    cloudDiscoveryMetadata?: string;
};
/**
 * Use this to configure the below cache configuration options:
 *
 * - cachePlugin   - Plugin for reading and writing token cache to disk.
 */
export declare type CacheOptions = {
    cachePlugin?: ICachePlugin;
};
/**
 * Type for configuring logger and http client options
 *
 * - logger                       - Used to initialize the Logger object; TODO: Expand on logger details or link to the documentation on logger
 * - networkClient                - Http client used for all http get and post calls. Defaults to using MSAL's default http client.
 */
export declare type NodeSystemOptions = {
    loggerOptions?: LoggerOptions;
    networkClient?: INetworkModule;
};
/**
 * Use the configuration object to configure MSAL and initialize the client application object
 *
 * - auth: this is where you configure auth elements like clientID, authority used for authenticating against the Microsoft Identity Platform
 * - cache: this is where you configure cache location
 * - system: this is where you can configure the network client, logger
 */
export declare type Configuration = {
    auth: NodeAuthOptions;
    cache?: CacheOptions;
    system?: NodeSystemOptions;
};
/**
 * Sets the default options when not explicitly configured from app developer
 *
 * @param auth
 * @param cache
 * @param system
 *
 * @returns Configuration
 */
export declare function buildAppConfiguration({ auth, cache, system, }: Configuration): Configuration;
