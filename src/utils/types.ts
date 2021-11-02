import { AxiosRequestHeaders } from 'axios'

// Args

export type Args = {
	baseUrl: string
	authToken?: string
	authTokenIsBearer?: boolean
	defaultHeaders?: AxiosRequestHeaders
}
