import { AxiosRequestHeaders } from 'axios';
export declare type Args = {
    baseUrl: string;
    authToken?: string;
    authTokenIsBearer?: boolean;
    defaultHeaders?: AxiosRequestHeaders;
};
