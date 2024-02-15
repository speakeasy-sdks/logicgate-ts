# WorkflowMap
(*workflowMap*)

## Overview

A [Workflow Map](https://help.logicgate.com/hc/en-us/articles/4402683117588) represents a relationship between two Workflows

### Available Operations

* [create](#create) - Create a workflow map
* [delete](#delete) - Delete a workflow map
* [read](#read) - Retrieve a workflow map
* [readAll](#readall) - Retrieve workflow maps
* [update](#update) - Update a workflow map

## create

**Permissions:** [Build Access to parent applications](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Create a workflow map from a JSON request body.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { CreateWorkflowMapRequest } from "logicgate/dist/sdk/models/operations";
import { Relationship, WorkflowMapApiCreateIn } from "logicgate/dist/sdk/models/shared";

async function run() {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
      },
    },
  });
const workflowMapApiCreateIn: WorkflowMapApiCreateIn = {
  from: "a1b2c3d4",
  relationship: Relationship.OneToMany,
  to: "a1b2c3d4",
};

  const res = await sdk.workflowMap.create(workflowMapApiCreateIn);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workflowMapApiCreateIn`                                                           | [shared.WorkflowMapApiCreateIn](../../sdk/models/shared/workflowmapapicreatein.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CreateWorkflowMapResponse](../../sdk/models/operations/createworkflowmapresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## delete

**Permissions:** [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Delete a workflow map specified by the ID in the URL path.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { DeleteWorkflowMapRequest } from "logicgate/dist/sdk/models/operations";

async function run() {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
      },
    },
  });
const id: string = "<value>";

  const res = await sdk.workflowMap.delete(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The unique ID of the workflow map                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteWorkflowMapResponse](../../sdk/models/operations/deleteworkflowmapresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## read

**Permissions:** [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a workflow map specified by the ID in the URL path.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { ReadWorkflowMapRequest } from "logicgate/dist/sdk/models/operations";

async function run() {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
      },
    },
  });
const id: string = "<value>";

  const res = await sdk.workflowMap.read(id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The unique ID of the workflow map                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ReadWorkflowMapResponse](../../sdk/models/operations/readworkflowmapresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## readAll

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a page of all workflow maps that the current user has [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications) to.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { ReadAllWorkflowMapsRequest } from "logicgate/dist/sdk/models/operations";

async function run() {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
      },
    },
  });
const page: number = 853380;
const size: number = 87498;
const workflowId: string = "<value>";

  const res = await sdk.workflowMap.readAll(page, size, workflowId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                 | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `page`                                                                                                                    | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The zero-indexed page number (must not be less than 0, defaults to 0)                                                     |
| `size`                                                                                                                    | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The size of the page and maximum number of items to be returned (must not be less than 1, defaults to 20)                 |
| `workflowId`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The unique ID of a workflow where, if provided, the response will only contain workflow maps from the identified workflow |
| `config`                                                                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                              | :heavy_minus_sign:                                                                                                        | Available config options for making requests.                                                                             |


### Response

**Promise<[operations.ReadAllWorkflowMapsResponse](../../sdk/models/operations/readallworkflowmapsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## update

**Permissions:** [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Update a workflow map specified by the ID in the URL path from a JSON request body. Only present properties with non-empty values are updated.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { UpdateWorkflowMapRequest } from "logicgate/dist/sdk/models/operations";
import { WorkflowMapApiUpdateIn, WorkflowMapApiUpdateInRelationship } from "logicgate/dist/sdk/models/shared";

async function run() {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "<YOUR_PASSWORD_HERE>",
        username: "<YOUR_USERNAME_HERE>",
      },
    },
  });
const workflowMapApiUpdateIn: WorkflowMapApiUpdateIn = {
  relationship: WorkflowMapApiUpdateInRelationship.ManyToMany,
};
const id: string = "<value>";

  const res = await sdk.workflowMap.update(workflowMapApiUpdateIn, id);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `workflowMapApiUpdateIn`                                                           | [shared.WorkflowMapApiUpdateIn](../../sdk/models/shared/workflowmapapiupdatein.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `id`                                                                               | *string*                                                                           | :heavy_check_mark:                                                                 | The unique ID of the workflow map                                                  |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.UpdateWorkflowMapResponse](../../sdk/models/operations/updateworkflowmapresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
