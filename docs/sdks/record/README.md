# RecordT
(*record*)

## Overview

A [Record](https://help.logicgate.com/hc/en-us/articles/4402683104020-Complete-a-Record) is a form that can capture information, store cataloged data, and link to other Records as it moves through each Step of a Workflow

### Available Operations

* [readAll](#readall) - Retrieve records

## readAll

**Permissions:** Authenticated User

Retrieve a page of all records that the current user has [Read or Write access](https://help.logicgate.com/hc/en-us/articles/4402683227156-Permission-Sets-) to.

### Example Usage

```typescript
import { Riskcloud } from "logicgate";

(async() => {
  const sdk = new Riskcloud({
    security: {
      basic: {
        password: "",
        username: "",
      },
    },
  });

  const res = await sdk.record.readAll({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ReadAllRecordsRequest](../../models/operations/readallrecordsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ReadAllRecordsResponse](../../models/operations/readallrecordsresponse.md)>**

