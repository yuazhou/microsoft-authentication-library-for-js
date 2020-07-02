import { DecodedJwt } from "../account/DecodedJwt";
/**
 * @hidden
 */
export declare class StringUtils {
    /**
     * decode a JWT
     *
     * @param jwtToken
     */
    static decodeJwt(jwtToken: string): DecodedJwt;
    /**
     * Check if a string is empty.
     *
     * @param str
     */
    static isEmpty(str: string): boolean;
    /**
     * Parses string into an object.
     *
     * @param query
     */
    static queryStringToObject<T>(query: string): T;
    /**
     * Trims entries and converts them to lower case.
     *
     * @param arr
     */
    static trimAndConvertArrayEntriesToLowerCase(arr: Array<string>): Array<string>;
    /**
     * Removes empty strings from array
     * @param arr
     */
    static removeEmptyStringsFromArray(arr: Array<string>): Array<string>;
}
