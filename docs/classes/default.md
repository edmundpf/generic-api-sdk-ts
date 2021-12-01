[generic-api-sdk-ts](../README.md) / [Exports](../modules.md) / default

# Class: default

SDK Class

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [authToken](default.md#authtoken)
- [authTokenIsBearer](default.md#authtokenisbearer)
- [baseUrl](default.md#baseurl)
- [defaultHeaders](default.md#defaultheaders)
- [instance](default.md#instance)

### Methods

- [dataRequest](default.md#datarequest)
- [delete](default.md#delete)
- [formatQueryParams](default.md#formatqueryparams)
- [formatReplaceArgs](default.md#formatreplaceargs)
- [formatUrl](default.md#formaturl)
- [get](default.md#get)
- [init](default.md#init)
- [patch](default.md#patch)
- [post](default.md#post)
- [put](default.md#put)
- [queryRequest](default.md#queryrequest)
- [setAuthToken](default.md#setauthtoken)

## Constructors

### constructor

• **new default**(`args?`)

Constructor

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Args` |

#### Defined in

[utils/SDK.ts:22](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L22)

## Properties

### authToken

• **authToken**: `string` = `''`

#### Defined in

[utils/SDK.ts:13](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L13)

___

### authTokenIsBearer

• **authTokenIsBearer**: `boolean` = `true`

#### Defined in

[utils/SDK.ts:14](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L14)

___

### baseUrl

• **baseUrl**: `string` = `''`

#### Defined in

[utils/SDK.ts:12](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L12)

___

### defaultHeaders

• **defaultHeaders**: `undefined` \| `AxiosRequestHeaders` = `{}`

#### Defined in

[utils/SDK.ts:15](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L15)

___

### instance

• **instance**: `AxiosInstance`

#### Defined in

[utils/SDK.ts:16](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L16)

## Methods

### dataRequest

▸ `Private` **dataRequest**(`reqType`, `url`, `replaceArgs?`, `data?`, `headers?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

Data Request

#### Parameters

| Name | Type |
| :------ | :------ |
| `reqType` | ``"post"`` \| ``"put"`` \| ``"patch"`` |
| `url` | `string` |
| `replaceArgs?` | `any` |
| `data?` | `any` |
| `headers?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[utils/SDK.ts:136](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L136)

___

### delete

▸ **delete**(`url`, `replaceArgs?`, `queryArgs?`, `headers?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

Delete Request

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `replaceArgs?` | `any` |
| `queryArgs?` | `any` |
| `headers?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[utils/SDK.ts:78](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L78)

___

### formatQueryParams

▸ `Private` **formatQueryParams**(`args?`): `string`

Format Query Params

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `any` |

#### Returns

`string`

#### Defined in

[utils/SDK.ts:169](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L169)

___

### formatReplaceArgs

▸ `Private` **formatReplaceArgs**(`url`, `args?`): `string`

Format Replace Args

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `args?` | `any` |

#### Returns

`string`

#### Defined in

[utils/SDK.ts:157](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L157)

___

### formatUrl

▸ `Private` **formatUrl**(`url`, `replaceArgs?`, `queryArgs?`): `string`

Format URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `replaceArgs?` | `any` |
| `queryArgs?` | `any` |

#### Returns

`string`

#### Defined in

[utils/SDK.ts:181](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L181)

___

### get

▸ **get**(`url`, `replaceArgs?`, `queryArgs?`, `headers?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

Get Request

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `replaceArgs?` | `any` |
| `queryArgs?` | `any` |
| `headers?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[utils/SDK.ts:70](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L70)

___

### init

▸ **init**(`args?`): `AxiosInstance`

Init

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `Args` |

#### Returns

`AxiosInstance`

#### Defined in

[utils/SDK.ts:30](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L30)

___

### patch

▸ **patch**(`url`, `replaceArgs?`, `data?`, `headers?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

Patch Request

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `replaceArgs?` | `any` |
| `data?` | `any` |
| `headers?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[utils/SDK.ts:108](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L108)

___

### post

▸ **post**(`url`, `replaceArgs?`, `data?`, `headers?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

Post Request

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `replaceArgs?` | `any` |
| `data?` | `any` |
| `headers?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[utils/SDK.ts:92](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L92)

___

### put

▸ **put**(`url`, `replaceArgs?`, `data?`, `headers?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

Put Request

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `replaceArgs?` | `any` |
| `data?` | `any` |
| `headers?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[utils/SDK.ts:100](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L100)

___

### queryRequest

▸ `Private` **queryRequest**(`reqType`, `url`, `replaceArgs?`, `queryArgs?`, `headers?`): `Promise`<`AxiosResponse`<`any`, `any`\>\>

Query Request

#### Parameters

| Name | Type |
| :------ | :------ |
| `reqType` | ``"get"`` \| ``"delete"`` |
| `url` | `string` |
| `replaceArgs?` | `any` |
| `queryArgs?` | `any` |
| `headers?` | `any` |

#### Returns

`Promise`<`AxiosResponse`<`any`, `any`\>\>

#### Defined in

[utils/SDK.ts:116](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L116)

___

### setAuthToken

▸ **setAuthToken**(`token?`, `tokenIsBearer?`): `void`

Set Auth Token

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `token?` | `string` | `undefined` |
| `tokenIsBearer` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[utils/SDK.ts:50](https://github.com/edmundpf/generic-api-sdk-ts/blob/1b3c800/src/utils/SDK.ts#L50)
