import axios, { AxiosInstance } from 'axios'
import { Args } from './types'
import { defaultArgs } from './values'

/**
 * SDK Class
 */

export default class SDK {
	baseUrl = ''
	authToken = ''
	authTokenIsBearer = true
	defaultHeaders: Args['defaultHeaders'] = {}
	instance: AxiosInstance

	/**
	 * Constructor
	 */

	constructor(args?: Args) {
		this.instance = this.init(args)
	}

	/**
	 * Init
	 */

	init(args?: Args) {
		const { baseUrl, authToken, authTokenIsBearer, defaultHeaders } = {
			...defaultArgs,
			...args,
		}
		const instance = axios.create({
			baseURL: baseUrl,
			headers: defaultHeaders,
		})
		this.instance = instance
		this.baseUrl = baseUrl
		this.defaultHeaders = defaultHeaders
		this.setAuthToken(authToken, authTokenIsBearer)
		return instance
	}

	/**
	 * Set Auth Token
	 */

	setAuthToken(token?: string, tokenIsBearer = true) {
		let authToken = token || ''
		if (
			authToken &&
			tokenIsBearer &&
			!authToken.toLowerCase().startsWith('bearer')
		) {
			authToken = 'Bearer ' + authToken.trim()
		}
		if (this.instance) {
			this.instance.defaults.headers.common.Authorization = authToken
		}
		this.authToken = authToken
		this.authTokenIsBearer = tokenIsBearer
	}

	/**
	 * Get Request
	 */

	async get(url: string, replaceArgs?: any, queryArgs?: any, headers?: any) {
		return await this.queryRequest('get', url, replaceArgs, queryArgs, headers)
	}

	/**
	 * Delete Request
	 */

	async delete(url: string, replaceArgs?: any, queryArgs?: any, headers?: any) {
		return await this.queryRequest(
			'delete',
			url,
			replaceArgs,
			queryArgs,
			headers
		)
	}

	/**
	 * Post Request
	 */

	async post(url: string, replaceArgs?: any, data?: any, headers?: any) {
		return await this.dataRequest('post', url, replaceArgs, data, headers)
	}

	/**
	 * Put Request
	 */

	async put(url: string, replaceArgs?: any, data?: any, headers?: any) {
		return await this.dataRequest('put', url, replaceArgs, data, headers)
	}

	/**
	 * Patch Request
	 */

	async patch(url: string, replaceArgs?: any, data?: any, headers?: any) {
		return await this.dataRequest('patch', url, replaceArgs, data, headers)
	}

	/**
	 * Query Request
	 */

	private async queryRequest(
		reqType: 'get' | 'delete',
		url: string,
		replaceArgs?: any,
		queryArgs?: any,
		headers?: any
	) {
		const methods = {
			get: this.instance?.get,
			delete: this.instance?.delete,
		}
		const method = methods[reqType].bind(this.instance)
		const reqUrl = this.formatUrl(url, replaceArgs, queryArgs)
		return await method(reqUrl, headers ? { headers } : undefined)
	}

	/**
	 * Data Request
	 */

	private async dataRequest(
		reqType: 'post' | 'put' | 'patch',
		url: string,
		replaceArgs?: any,
		data?: any,
		headers?: any
	) {
		const methods = {
			post: this.instance?.post,
			put: this.instance?.put,
			patch: this.instance?.patch,
		}
		const method = methods[reqType].bind(this.instance)
		const reqUrl = this.formatUrl(url, replaceArgs)
		return await method(reqUrl, data, headers ? { headers } : undefined)
	}

	/**
	 * Format Replace Args
	 */

	private formatReplaceArgs(url: string, args?: any) {
		let urlWithParams = url
		for (const key in args) {
			urlWithParams = urlWithParams.replace(`/${key}`, String(args[key]))
		}
		return urlWithParams
	}

	/**
	 * Format Query Params
	 */

	private formatQueryParams(args?: any) {
		let queryStr = ''
		if (Object.keys(args).length)
			queryStr = new URLSearchParams(args).toString()
		if (queryStr) queryStr = `?${queryStr}`
		return queryStr
	}

	/**
	 * Format URL
	 */

	private formatUrl(url: string, replaceArgs?: any, queryArgs?: any) {
		let formattedUrl = url.trim()
		if (!formattedUrl.startsWith('/')) formattedUrl = `/${formattedUrl}`
		if (replaceArgs) formattedUrl = this.formatReplaceArgs(url, replaceArgs)
		const queryStr = this.formatQueryParams(queryArgs)
		formattedUrl = `${formattedUrl}${queryStr}`
		return formattedUrl
	}
}
