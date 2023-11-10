# Application
(*application*)

## Overview

An [Application](https://help.logicgate.com/hc/en-us/articles/4402674055572-Create-a-new-Application) is a collection of Workflows, Steps, and logic that collectively solve a business use case

### Available Operations

* [create](#create) - Create an application
* [delete](#delete) - Delete an application
* [read](#read) - Retrieve an application
* [readAll](#readall) - Retrieve applications
* [update](#update) - Update an application

## create

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Create an application from a JSON request body.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { CreateApplicationRequest } from "logicgate/dist/sdk/models/operations";
import { ApplicationApiCreateIn, Icon, TypeT } from "logicgate/dist/sdk/models/shared";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const applicationApiCreateIn: ApplicationApiCreateIn = {
  color: "#00a3de",
  icon: Icon.Cubes,
  name: "Cyber Risk Management Application",
  type: TypeT.ControlsCompliance,
};

  const res = await sdk.application.create(applicationApiCreateIn);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                             | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `applicationApiCreateIn`                                                              | [shared.ApplicationApiCreateIn](../../../sdk/models/shared/applicationapicreatein.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `config`                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                          | :heavy_minus_sign:                                                                    | Available config options for making requests.                                         |


### Response

**Promise<[operations.CreateApplicationResponse](../../sdk/models/operations/createapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## delete

**Permissions:** [Build Access to application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Delete an application specified by the ID in the URL path.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { DeleteApplicationRequest } from "logicgate/dist/sdk/models/operations";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const id: string = "string";

  const res = await sdk.application.delete(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The unique ID of the application                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteApplicationResponse](../../sdk/models/operations/deleteapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## read

**Permissions:** [Build Access to application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve an application specified by the ID in the URL path.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { ReadApplicationRequest } from "logicgate/dist/sdk/models/operations";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const id: string = "string";

  const res = await sdk.application.read(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The unique ID of the application                             |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ReadApplicationResponse](../../sdk/models/operations/readapplicationresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## readAll

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a page of all applications that the current user has [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications) to.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { ReadAllApplicationsRequest } from "logicgate/dist/sdk/models/operations";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const page: number = 853380;
const size: number = 87498;

  const res = await sdk.application.readAll(page, size);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                 | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `page`                                                                                                    | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | The zero-indexed page number (must not be less than 0, defaults to 0)                                     |
| `size`                                                                                                    | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | The size of the page and maximum number of items to be returned (must not be less than 1, defaults to 20) |
| `config`                                                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                              | :heavy_minus_sign:                                                                                        | Available config options for making requests.                                                             |


### Response

**Promise<[operations.ReadAllApplicationsResponse](../../sdk/models/operations/readallapplicationsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## update

**Permissions:** [Build Access to application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Update an application specified by the ID in the URL path from a JSON request body. Only present properties with non-empty values are updated.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { Update1Request } from "logicgate/dist/sdk/models/operations";
import { ApplicationApiUpdateIn, ApplicationApiUpdateInIcon, ApplicationApiUpdateInType } from "logicgate/dist/sdk/models/shared";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const applicationApiUpdateIn: ApplicationApiUpdateIn = {
  color: "#00a3de",
  icon: ApplicationApiUpdateInIcon.Cubes,
  live: false,
  name: "Cyber Risk Management Application",
  restrictBuildAccess: false,
  type: ApplicationApiUpdateInType.ControlsCompliance,
};
const id: string = "string";

  const res = await sdk.application.update(applicationApiUpdateIn, id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                             | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `applicationApiUpdateIn`                                                              | [shared.ApplicationApiUpdateIn](../../../sdk/models/shared/applicationapiupdatein.md) | :heavy_check_mark:                                                                    | N/A                                                                                   |
| `id`                                                                                  | *string*                                                                              | :heavy_check_mark:                                                                    | The unique ID of the application                                                      |
| `config`                                                                              | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                          | :heavy_minus_sign:                                                                    | Available config options for making requests.                                         |


### Response

**Promise<[operations.Update1Response](../../sdk/models/operations/update1response.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
