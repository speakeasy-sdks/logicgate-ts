<!-- Start SDK Example Usage -->
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