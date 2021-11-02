import { AxiosInstance } from 'axios';
import { Args } from './types';
/**
 * SDK Class
 */
export default class SDK {
    baseUrl: string;
    authToken: string;
    authTokenIsBearer: boolean;
    defaultHeaders: Args['defaultHeaders'];
    instance: AxiosInstance;
    /**
     * Constructor
     */
    constructor(args?: Args);
    /**
     * Init
     */
    init(args?: Args): AxiosInstance;
    /**
     * Set Auth Token
     */
    setAuthToken(token?: string, tokenIsBearer?: boolean): void;
    /**
     * Get Request
     */
    get(url: string, replaceArgs?: any, queryArgs?: any, headers?: any): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Delete Request
     */
    delete(url: string, replaceArgs?: any, queryArgs?: any, headers?: any): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Post Request
     */
    post(url: string, replaceArgs?: any, data?: any, headers?: any): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Put Request
     */
    put(url: string, replaceArgs?: any, data?: any, headers?: any): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Patch Request
     */
    patch(url: string, replaceArgs?: any, data?: any, headers?: any): Promise<import("axios").AxiosResponse<any, any>>;
    /**
     * Query Request
     */
    private queryRequest;
    /**
     * Data Request
     */
    private dataRequest;
    /**
     * Format Replace Args
     */
    private formatReplaceArgs;
    /**
     * Format Query Params
     */
    private formatQueryParams;
    /**
     * Format URL
     */
    private formatUrl;
}
