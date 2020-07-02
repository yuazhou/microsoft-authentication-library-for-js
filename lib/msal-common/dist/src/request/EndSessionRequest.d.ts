import { AccountInfo } from "../account/AccountInfo";
export declare type EndSessionRequest = {
    account?: AccountInfo;
    postLogoutRedirectUri?: string;
    authority?: string;
    correlationId?: string;
};
