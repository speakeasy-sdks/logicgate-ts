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
import { WorkflowMapApiCreateIn, WorkflowMapApiCreateInRelationship } from "logicgate/dist/sdk/models/shared";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const workflowMapApiCreateIn: WorkflowMapApiCreateIn = {
  from: "a1b2c3d4",
  relationship: WorkflowMapApiCreateInRelationship.OneToMany,
  to: "a1b2c3d4",
};

  const res = await sdk.workflowMap.create(workflowMapApiCreateIn);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `workflowMapApiCreateIn`                                                       | [shared.WorkflowMapApiCreateIn](../../models/shared/workflowmapapicreatein.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateWorkflowMapResponse](../../models/operations/createworkflowmapresponse.md)>**


## delete

**Permissions:** [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Delete a workflow map specified by the ID in the URL path.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { DeleteWorkflowMapRequest } from "logicgate/dist/sdk/models/operations";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const id: string = "program";

  const res = await sdk.workflowMap.delete(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The unique ID of the workflow map                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteWorkflowMapResponse](../../models/operations/deleteworkflowmapresponse.md)>**


## read

**Permissions:** [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a workflow map specified by the ID in the URL path.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { ReadWorkflowMapRequest } from "logicgate/dist/sdk/models/operations";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const id: string = "gadzooks";

  const res = await sdk.workflowMap.read(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The unique ID of the workflow map                            |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ReadWorkflowMapResponse](../../models/operations/readworkflowmapresponse.md)>**


## readAll

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a page of all workflow maps that the current user has [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications) to.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { ReadAllWorkflowMapsRequest } from "logicgate/dist/sdk/models/operations";

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
const workflowId: string = "Reggae";

  const res = await sdk.workflowMap.readAll(page, size, workflowId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                 | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `page`                                                                                                                    | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The zero-indexed page number (must not be less than 0, defaults to 0)                                                     |
| `size`                                                                                                                    | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The size of the page and maximum number of items to be returned (must not be less than 1, defaults to 20)                 |
| `workflowId`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | The unique ID of a workflow where, if provided, the response will only contain workflow maps from the identified workflow |
| `config`                                                                                                                  | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                              | :heavy_minus_sign:                                                                                                        | Available config options for making requests.                                                                             |


### Response

**Promise<[operations.ReadAllWorkflowMapsResponse](../../models/operations/readallworkflowmapsresponse.md)>**


## update

**Permissions:** [Build Access to a parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Update a workflow map specified by the ID in the URL path from a JSON request body. Only present properties with non-empty values are updated.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { UpdateWorkflowMapRequest } from "logicgate/dist/sdk/models/operations";
import { WorkflowMapApiUpdateIn, WorkflowMapApiUpdateInRelationship } from "logicgate/dist/sdk/models/shared";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const workflowMapApiUpdateIn: WorkflowMapApiUpdateIn = {
  relationship: WorkflowMapApiUpdateInRelationship.ManyToMany,
};
const id: string = "New";

  const res = await sdk.workflowMap.update(workflowMapApiUpdateIn, id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `workflowMapApiUpdateIn`                                                       | [shared.WorkflowMapApiUpdateIn](../../models/shared/workflowmapapiupdatein.md) | :heavy_check_mark:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | The unique ID of the workflow map                                              |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.UpdateWorkflowMapResponse](../../models/operations/updateworkflowmapresponse.md)>**

