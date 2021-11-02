import { Args } from './types'

// Default Args

export const defaultArgs: Args = {
	baseUrl: '',
	authToken: '',
	authTokenIsBearer: true,
	defaultHeaders: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
}
