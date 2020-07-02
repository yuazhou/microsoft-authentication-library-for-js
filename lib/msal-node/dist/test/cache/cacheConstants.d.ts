import { AccessTokenEntity, IdTokenEntity, RefreshTokenEntity, AccountEntity, AppMetadataEntity } from "@azure/msal-common";
export declare const mockAccessTokenEntity_1: {
    homeAccountId: string;
    environment: string;
    credentialType: string;
    clientId: string;
    secret: string;
    realm: string;
    target: string;
    cachedAt: string;
    expiresOn: string;
    extendedExpiresOn: string;
};
export declare const mockAccessTokenEntity_2: {
    homeAccountId: string;
    environment: string;
    credentialType: string;
    clientId: string;
    secret: string;
    realm: string;
    target: string;
    cachedAt: string;
    expiresOn: string;
    extendedExpiresOn: string;
};
export declare const mockIdTokenEntity: {
    homeAccountId: string;
    environment: string;
    credentialType: string;
    clientId: string;
    secret: string;
    realm: string;
};
export declare const mockRefreshTokenEntity: {
    homeAccountId: string;
    environment: string;
    credentialType: string;
    clientId: string;
    secret: string;
};
export declare const mockRefreshTokenEntityWithFamilyId: {
    homeAccountId: string;
    environment: string;
    credentialType: string;
    clientId: string;
    secret: string;
    familyId: string;
};
export declare const mockAccountEntity: {
    homeAccountId: string;
    environment: string;
    realm: string;
    localAccountId: string;
    username: string;
    authorityType: string;
    clientInfo: string;
};
export declare const mockAppMetaDataEntity: {
    clientId: string;
    environment: string;
    familyId: string;
};
export declare class mockCache {
    static createMockATOne(): AccessTokenEntity;
    static createMockATTwo(): AccessTokenEntity;
    static createMockIdT(): IdTokenEntity;
    static createMockRT(): RefreshTokenEntity;
    static createMockRTWithFamilyId(): RefreshTokenEntity;
    static createMockAcc(): AccountEntity;
    static createMockAmdt(): AppMetadataEntity;
}
export declare const MockCache: {
    atOne: AccessTokenEntity;
    atOneKey: string;
    atTwo: AccessTokenEntity;
    atTwoKey: string;
    idT: IdTokenEntity;
    idTKey: string;
    rt: RefreshTokenEntity;
    rtKey: string;
    rtF: RefreshTokenEntity;
    rtFKey: string;
    acc: AccountEntity;
    accKey: string;
    amdt: AppMetadataEntity;
    amdtKey: string;
};
