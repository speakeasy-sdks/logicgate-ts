<!-- Start SDK Example Usage [usage] -->
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