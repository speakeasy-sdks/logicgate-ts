# Step
(*.step*)

## Overview

A [Step](https://help.logicgate.com/hc/en-us/articles/4402674059668-Create-a-Step) lives in a Workflow and is configured with a set of Sections, Subsections and Fields to create a form

### Available Operations

* [create](#create) - Create a step
* [delete](#delete) - Delete a step
* [read](#read) - Retrieve a step
* [readAll](#readall) - Retrieve steps
* [update](#update) - Update a step

## create

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Create a step from a JSON request body.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { CreateStepRequest } from "logicgate/dist/sdk/models/operations";
import { AssignableUserType, StepApiCreateIn } from "logicgate/dist/sdk/models/shared";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const stepApiCreateIn: StepApiCreateIn = {
  assignableUserType: AssignableUserType.AppUsers,
  enableComments: false,
  externalUserMfaRequired: false,
  name: "Identify Risk",
  workflowId: "a1b2c3d4",
  xpos: 20,
  ypos: 20,
};

  const res = await sdk.step.create(stepApiCreateIn);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `stepApiCreateIn`                                                | [shared.StepApiCreateIn](../../models/shared/stepapicreatein.md) | :heavy_check_mark:                                               | N/A                                                              |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.CreateStepResponse](../../models/operations/createstepresponse.md)>**


## delete

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Delete a step specified by the ID in the URL path.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { DeleteStepRequest } from "logicgate/dist/sdk/models/operations";

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

  const res = await sdk.step.delete(id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The unique ID of the step                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteStepResponse](../../models/operations/deletestepresponse.md)>**


## read

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a step specified by the ID in the URL path.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { ReadStepRequest } from "logicgate/dist/sdk/models/operations";

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

  const res = await sdk.step.read(id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The unique ID of the step                                    |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ReadStepResponse](../../models/operations/readstepresponse.md)>**


## readAll

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a page of all steps that the current user has [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications) to.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { ReadAllStepsRequest } from "logicgate/dist/sdk/models/operations";

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
const workflowId: string = "string";

  const res = await sdk.step.readAll(page, size, workflowId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                         | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `page`                                                                                                            | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | The zero-indexed page number (must not be less than 0, defaults to 0)                                             |
| `size`                                                                                                            | *number*                                                                                                          | :heavy_minus_sign:                                                                                                | The size of the page and maximum number of items to be returned (must not be less than 1, defaults to 20)         |
| `workflowId`                                                                                                      | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | The unique ID of a workflow where, if provided, the response will only contain steps from the identified workflow |
| `config`                                                                                                          | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                      | :heavy_minus_sign:                                                                                                | Available config options for making requests.                                                                     |


### Response

**Promise<[operations.ReadAllStepsResponse](../../models/operations/readallstepsresponse.md)>**


## update

**Permissions:** [Build Access to parent application](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Update a step specified by the ID in the URL path from a JSON request body. Only present properties with non-empty values are updated.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { UpdateRequest } from "logicgate/dist/sdk/models/operations";
import { StepApiUpdateIn, StepApiUpdateInAssignableUserType, StepApiUpdateInType } from "logicgate/dist/sdk/models/shared";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });
const stepApiUpdateIn: StepApiUpdateIn = {
  assignableUserType: StepApiUpdateInAssignableUserType.AppUsers,
  enableComments: false,
  externalUserMfaRequired: false,
  name: "Identify Risk",
  type: StepApiUpdateInType.Origin,
  xpos: 20,
  ypos: 20,
};
const id: string = "string";

  const res = await sdk.step.update(stepApiUpdateIn, id);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                        | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `stepApiUpdateIn`                                                | [shared.StepApiUpdateIn](../../models/shared/stepapiupdatein.md) | :heavy_check_mark:                                               | N/A                                                              |
| `id`                                                             | *string*                                                         | :heavy_check_mark:                                               | The unique ID of the step                                        |
| `config`                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)     | :heavy_minus_sign:                                               | Available config options for making requests.                    |


### Response

**Promise<[operations.UpdateResponse](../../models/operations/updateresponse.md)>**

