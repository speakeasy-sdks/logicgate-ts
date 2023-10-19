# Workflow
(*workflow*)

## Overview

A [Workflow](https://help.logicgate.com/hc/en-us/articles/4402683108756-Create-a-new-Workflow) is a combination of Steps, Paths, Fields, and routing logic that combine to form a system in an Application

### Available Operations

* [create](#create) - Create a workflow
* [delete](#delete) - Delete a workflow
* [read](#read) - Retrieve a workflow
* [readAll](#readall) - Retrieve workflows
* [update](#update) - Update a workflow

## create

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Create a workflow from a JSON request body. The workflow will contain a Default Origin step and a Default End step.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { CreateWorkflowRequest } from "logicgate/dist/sdk/models/operations";
import { WorkflowApiCreateIn } from "logicgate/dist/sdk/models/shared";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const workflowApiCreateIn: WorkflowApiCreateIn = {
  applicationId: "a1b2c3d4",
  name: "Risk Assessments",
  recordPrefix: "Assessment",
  xpos: 20,
  ypos: 20,
};

  const res = await sdk.workflow.create(workflowApiCreateIn);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `workflowApiCreateIn`                                                    | [shared.WorkflowApiCreateIn](../../models/shared/workflowapicreatein.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.CreateWorkflowResponse](../../models/operations/createworkflowresponse.md)>**


## delete

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Delete a workflow specified by the ID in the URL path.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { DeleteWorkflowRequest } from "logicgate/dist/sdk/models/operations";

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

  const res = await sdk.workflow.delete(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The unique ID of the workflow                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteWorkflowResponse](../../models/operations/deleteworkflowresponse.md)>**


## read

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a workflow specified by the ID in the URL path.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { ReadWorkflowRequest } from "logicgate/dist/sdk/models/operations";

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

  const res = await sdk.workflow.read(id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The unique ID of the workflow                                |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ReadWorkflowResponse](../../models/operations/readworkflowresponse.md)>**


## readAll

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a page of all workflows that the current user has [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications) to.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { ReadAllWorkflowsRequest } from "logicgate/dist/sdk/models/operations";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const applicationId: string = "Van";
const includeJiraWorkflows: boolean = false;
const page: number = 775284;
const size: number = 45601;

  const res = await sdk.workflow.readAll(applicationId, includeJiraWorkflows, page, size);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                            | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `applicationId`                                                                                                                                      | *string*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | The unique ID of a parent application where, if provided, the response will only contain workflows from the identified application                   |
| `includeJiraWorkflows`                                                                                                                               | *boolean*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                   | Whether [Jira workflows](https://help.logicgate.com/hc/en-us) are to be included in the response in addition to regular workflows (defaults to true) |
| `page`                                                                                                                                               | *number*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | The zero-indexed page number (must not be less than 0, defaults to 0)                                                                                |
| `size`                                                                                                                                               | *number*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | The size of the page and maximum number of items to be returned (must not be less than 1, defaults to 20)                                            |
| `config`                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                         | :heavy_minus_sign:                                                                                                                                   | Available config options for making requests.                                                                                                        |


### Response

**Promise<[operations.ReadAllWorkflowsResponse](../../models/operations/readallworkflowsresponse.md)>**


## update

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Update a workflow specified by the ID in the URL path from a JSON request body. Only present properties with non-empty values are updated.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { UpdateWorkflowRequest } from "logicgate/dist/sdk/models/operations";
import { WorkflowApiUpdateIn } from "logicgate/dist/sdk/models/shared";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const workflowApiUpdateIn: WorkflowApiUpdateIn = {
  name: "Risk Assessments",
  recordPrefix: "Assessment",
  xpos: 20,
  ypos: 20,
};
const id: string = "Van";

  const res = await sdk.workflow.update(workflowApiUpdateIn, id);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `workflowApiUpdateIn`                                                    | [shared.WorkflowApiUpdateIn](../../models/shared/workflowapiupdatein.md) | :heavy_check_mark:                                                       | N/A                                                                      |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | The unique ID of the workflow                                            |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.UpdateWorkflowResponse](../../models/operations/updateworkflowresponse.md)>**

