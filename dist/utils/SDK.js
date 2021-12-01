"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const values_1 = require("./values");
/**
 * SDK Class
 */
class SDK {
    /**
     * Constructor
     */
    constructor(args) {
        // Properties
        this.baseUrl = '';
        this.authToken = '';
        this.authTokenIsBearer = true;
        this.defaultHeaders = {};
        this.instance = this.init(args);
    }
    /**
     * Init
     */
    init(args) {
        const { baseUrl, authToken, authTokenIsBearer, defaultHeaders } = Object.assign(Object.assign({}, values_1.defaultArgs), args);
        const instance = axios_1.default.create({
            baseURL: baseUrl,
            headers: defaultHeaders,
        });
        this.instance = instance;
        this.baseUrl = baseUrl;
        this.defaultHeaders = defaultHeaders;
        this.setAuthToken(authToken, authTokenIsBearer);
        return instance;
    }
    /**
     * Set Auth Token
     */
    setAuthToken(token, tokenIsBearer = true) {
        let authToken = token || '';
        if (authToken &&
            tokenIsBearer &&
            !authToken.toLowerCase().startsWith('bearer')) {
            authToken = 'Bearer ' + authToken.trim();
        }
        if (this.instance) {
            this.instance.defaults.headers.common.Authorization = authToken;
        }
        this.authToken = authToken;
        this.authTokenIsBearer = tokenIsBearer;
    }
    /**
     * Get Request
     */
    get(url, replaceArgs, queryArgs, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.queryRequest('get', url, replaceArgs, queryArgs, headers);
        });
    }
    /**
     * Delete Request
     */
    delete(url, replaceArgs, queryArgs, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.queryRequest('delete', url, replaceArgs, queryArgs, headers);
        });
    }
    /**
     * Post Request
     */
    post(url, replaceArgs, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dataRequest('post', url, replaceArgs, data, headers);
        });
    }
    /**
     * Put Request
     */
    put(url, replaceArgs, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dataRequest('put', url, replaceArgs, data, headers);
        });
    }
    /**
     * Patch Request
     */
    patch(url, replaceArgs, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.dataRequest('patch', url, replaceArgs, data, headers);
        });
    }
    /**
     * Query Request
     */
    queryRequest(reqType, url, replaceArgs, queryArgs, headers) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const methods = {
                get: (_a = this.instance) === null || _a === void 0 ? void 0 : _a.get,
                delete: (_b = this.instance) === null || _b === void 0 ? void 0 : _b.delete,
            };
            const method = methods[reqType].bind(this.instance);
            const reqUrl = this.formatUrl(url, replaceArgs, queryArgs);
            return yield method(reqUrl, headers ? { headers } : undefined);
        });
    }
    /**
     * Data Request
     */
    dataRequest(reqType, url, replaceArgs, data, headers) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const methods = {
                post: (_a = this.instance) === null || _a === void 0 ? void 0 : _a.post,
                put: (_b = this.instance) === null || _b === void 0 ? void 0 : _b.put,
                patch: (_c = this.instance) === null || _c === void 0 ? void 0 : _c.patch,
            };
            const method = methods[reqType].bind(this.instance);
            const reqUrl = this.formatUrl(url, replaceArgs);
            return yield method(reqUrl, data, headers ? { headers } : undefined);
        });
    }
    /**
     * Format Replace Args
     */
    formatReplaceArgs(url, args) {
        let urlWithParams = url;
        for (const key in args) {
            urlWithParams = urlWithParams.replace(key, String(args[key]));
        }
        return urlWithParams;
    }
    /**
     * Format Query Params
     */
    formatQueryParams(args) {
        let queryStr = '';
        if (args && Object.keys(args).length)
            queryStr = new URLSearchParams(args).toString();
        if (queryStr)
            queryStr = `?${queryStr}`;
        return queryStr;
    }
    /**
     * Format URL
     */
    formatUrl(url, replaceArgs, queryArgs) {
        let formattedUrl = url.trim();
        if (!formattedUrl.startsWith('/'))
            formattedUrl = `/${formattedUrl}`;
        if (replaceArgs)
            formattedUrl = this.formatReplaceArgs(url, replaceArgs);
        const queryStr = this.formatQueryParams(queryArgs);
        formattedUrl = `${formattedUrl}${queryStr}`;
        return formattedUrl;
    }
}
exports.default = SDK;
