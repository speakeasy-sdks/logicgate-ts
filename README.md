# logicgate

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/logicgate-ts.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/logicgate-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/logicgate-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/logicgate-ts
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
### Example

```typescript
import { Riskcloud } from "logicgate";
import { CreateWorkflowRequest } from "logicgate/dist/sdk/models/operations";
import { WorkflowApiCreateIn } from "logicgate/dist/sdk/models/shared";

(async () => {
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [authentication](docs/sdks/authentication/README.md)

* [getApiToken](docs/sdks/authentication/README.md#getapitoken) - Create an API Access Token

### [application](docs/sdks/application/README.md)

* [create](docs/sdks/application/README.md#create) - Create an application
* [delete](docs/sdks/application/README.md#delete) - Delete an application
* [read](docs/sdks/application/README.md#read) - Retrieve an application
* [readAll](docs/sdks/application/README.md#readall) - Retrieve applications
* [update](docs/sdks/application/README.md#update) - Update an application

### [field](docs/sdks/field/README.md)

* [readAll](docs/sdks/field/README.md#readall) - Retrieve fields

### [record](docs/sdks/record/README.md)

* [readAll](docs/sdks/record/README.md#readall) - Retrieve records

### [step](docs/sdks/step/README.md)

* [create](docs/sdks/step/README.md#create) - Create a step
* [delete](docs/sdks/step/README.md#delete) - Delete a step
* [read](docs/sdks/step/README.md#read) - Retrieve a step
* [readAll](docs/sdks/step/README.md#readall) - Retrieve steps
* [update](docs/sdks/step/README.md#update) - Update a step

### [workflowMap](docs/sdks/workflowmap/README.md)

* [create](docs/sdks/workflowmap/README.md#create) - Create a workflow map
* [delete](docs/sdks/workflowmap/README.md#delete) - Delete a workflow map
* [read](docs/sdks/workflowmap/README.md#read) - Retrieve a workflow map
* [readAll](docs/sdks/workflowmap/README.md#readall) - Retrieve workflow maps
* [update](docs/sdks/workflowmap/README.md#update) - Update a workflow map

### [workflow](docs/sdks/workflow/README.md)

* [create](docs/sdks/workflow/README.md#create) - Create a workflow
* [delete](docs/sdks/workflow/README.md#delete) - Delete a workflow
* [read](docs/sdks/workflow/README.md#read) - Retrieve a workflow
* [readAll](docs/sdks/workflow/README.md#readall) - Retrieve workflows
* [update](docs/sdks/workflow/README.md#update) - Update a workflow
<!-- End SDK Available Operations -->

<!-- Start Dev Containers -->

<!-- End Dev Containers -->



<!-- Start Error Handling -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

Example

```typescript
import { Riskcloud } from "logicgate";
import { GetApiTokenRequest, GetApiTokenSecurity } from "logicgate/dist/sdk/models/operations";

(async () => {
    const sdk = new Riskcloud();
    const operationSecurity: GetApiTokenSecurity = {
        password: "",
        username: "",
    };

    let res;
    try {
        res = await sdk.authentication.getApiToken(operationSecurity);
    } catch (e) {}

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End Error Handling -->



<!-- Start Server Selection -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://localhost` | None |

#### Example

```typescript
import { Riskcloud } from "logicgate";
import { GetApiTokenRequest, GetApiTokenSecurity } from "logicgate/dist/sdk/models/operations";

(async () => {
    const sdk = new Riskcloud({
        serverIdx: 0,
    });
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


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Riskcloud } from "logicgate";
import { GetApiTokenRequest, GetApiTokenSecurity } from "logicgate/dist/sdk/models/operations";

(async () => {
    const sdk = new Riskcloud({
        serverURL: "http://localhost",
    });
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
<!-- End Server Selection -->



<!-- Start Custom HTTP Client -->
## Custom HTTP Client

The Typescript SDK makes API calls using the (axios)[https://axios-http.com/docs/intro] HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
from logicgate import Riskcloud;
import axios;

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Riskcloud({defaultClient: httpClient});
```
<!-- End Custom HTTP Client -->



<!-- Start Authentication -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name        | Type        | Scheme      |
| ----------- | ----------- | ----------- |
| `basic`     | http        | HTTP Basic  |
| `bearer`    | http        | HTTP Bearer |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { Riskcloud } from "logicgate";
import { GetApiTokenRequest, GetApiTokenSecurity } from "logicgate/dist/sdk/models/operations";

(async () => {
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

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
```typescript
import { Riskcloud } from "logicgate";
import { GetApiTokenRequest, GetApiTokenSecurity } from "logicgate/dist/sdk/models/operations";

(async () => {
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
<!-- End Authentication -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
