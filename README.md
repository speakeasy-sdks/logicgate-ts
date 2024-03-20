# logicgate

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://github.com/speakeasy-sdks/logicgate-ts.git/actions"><img src="https://img.shields.io/github/actions/workflow/status/speakeasy-sdks/logicgate-ts/speakeasy_sdk_generation.yml?style=for-the-badge" /></a>
    
</div>

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add https://github.com/speakeasy-sdks/logicgate-ts
```

### Yarn

```bash
yarn add https://github.com/speakeasy-sdks/logicgate-ts
```
<!-- End SDK Installation [installation] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Riskcloud } from "logicgate";
import { CreateWorkflowRequest } from "logicgate/dist/sdk/models/operations";
import { WorkflowApiCreateIn } from "logicgate/dist/sdk/models/shared";

async function run() {
    const sdk = new Riskcloud({
        security: {
            basic: {
                password: "<YOUR_PASSWORD_HERE>",
                username: "<YOUR_USERNAME_HERE>",
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
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
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
<!-- End Available Resources and Operations [operations] -->



<!-- Start Error Handling [errors] -->
## Error Handling

Handling errors in this SDK should largely match your expectations.  All operations return a response object or throw an error.  If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Example

```typescript
import { Riskcloud } from "logicgate";
import { GetApiTokenRequest } from "logicgate/dist/sdk/models/operations";

async function run() {
    const sdk = new Riskcloud({
        security: {
            basic: {
                password: "<YOUR_PASSWORD_HERE>",
                username: "<YOUR_USERNAME_HERE>",
            },
        },
    });

    let res;
    try {
        res = await sdk.authentication.getApiToken();
    } catch (err) {
        if (err instanceof errors.SDKError) {
            console.error(err); // handle exception
            throw err;
        }
    }

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Error Handling [errors] -->



<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `http://localhost` | None |

#### Example

```typescript
import { Riskcloud } from "logicgate";
import { GetApiTokenRequest } from "logicgate/dist/sdk/models/operations";

async function run() {
    const sdk = new Riskcloud({
        serverIdx: 0,
        security: {
            basic: {
                password: "<YOUR_PASSWORD_HERE>",
                username: "<YOUR_USERNAME_HERE>",
            },
        },
    });

    const res = await sdk.authentication.getApiToken();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: str` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Riskcloud } from "logicgate";
import { GetApiTokenRequest } from "logicgate/dist/sdk/models/operations";

async function run() {
    const sdk = new Riskcloud({
        serverURL: "http://localhost",
        security: {
            basic: {
                password: "<YOUR_PASSWORD_HERE>",
                username: "<YOUR_USERNAME_HERE>",
            },
        },
    });

    const res = await sdk.authentication.getApiToken();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Server Selection [server] -->



<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The Typescript SDK makes API calls using the [axios](https://axios-http.com/docs/intro) HTTP library.  In order to provide a convenient way to configure timeouts, cookies, proxies, custom headers, and other low-level configuration, you can initialize the SDK client with a custom `AxiosInstance` object.

For example, you could specify a header for every request that your sdk makes as follows:

```typescript
import { logicgate } from "Riskcloud";
import axios from "axios";

const httpClient = axios.create({
    headers: {'x-custom-header': 'someValue'}
})

const sdk = new Riskcloud({defaultClient: httpClient});
```
<!-- End Custom HTTP Client [http-client] -->



<!-- Start Authentication [security] -->
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
import { GetApiTokenRequest } from "logicgate/dist/sdk/models/operations";

async function run() {
    const sdk = new Riskcloud({
        security: {
            basic: {
                password: "<YOUR_PASSWORD_HERE>",
                username: "<YOUR_USERNAME_HERE>",
            },
        },
    });

    const res = await sdk.authentication.getApiToken();

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End Authentication [security] -->

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
