# Authentication
(*authentication*)

## Overview

Getting Started: How to create an [API Access Token](https://www.logicgate.com/developer/risk-cloud-api-authentication/) to begin integrating with the Risk Cloud API

### Available Operations

* [getApiToken](#getapitoken) - Create an API Access Token

## getApiToken

**Permissions:** Authenticated User

Generates a new, expiring access token from the provided Client and Secret keys.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { GetApiTokenRequest, GetApiTokenSecurity } from "logicgate/dist/sdk/models/operations";

(async() => {
  const sdk = new Riskcloud();
const operationSecurity: GetApiTokenSecurity = {
  password: "",
  username: "",
};

  const res = await sdk.authentication.getApiToken(operationSecurity);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `security`                                                                       | [operations.GetApiTokenSecurity](../../models/operations/getapitokensecurity.md) | :heavy_check_mark:                                                               | The security requirements to use for the request.                                |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.GetApiTokenResponse](../../models/operations/getapitokenresponse.md)>**

