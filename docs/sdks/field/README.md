# Field
(*.field*)

## Overview

A [Field](https://help.logicgate.com/hc/en-us/articles/4402674064020-Create-Fields) is used to capture information from and display information to users in a Workflow

### Available Operations

* [readAll](#readall) - Retrieve fields

## readAll

**Permissions:** [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications)

Retrieve a page of all fields whose parent application the current user has [Build Access](https://help.logicgate.com/hc/en-us/articles/4402683190164-Control-Build-Access-for-Applications) to.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";
import { FieldTypeFilter } from "logicgate/dist/sdk/models/operations";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });

  const res = await sdk.field.readAll({});


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [operations.ReadAllFieldsRequest](../../models/operations/readallfieldsrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.ReadAllFieldsResponse](../../models/operations/readallfieldsresponse.md)>**

