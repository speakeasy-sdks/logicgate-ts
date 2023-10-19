<!-- Start SDK Example Usage -->


```typescript
import { Riskcloud } from "logicgate";
import { CreateApplicationRequest } from "logicgate/dist/sdk/models/operations";
import {
    ApplicationApiCreateIn,
    ApplicationApiCreateInIcon,
    ApplicationApiCreateInType,
} from "logicgate/dist/sdk/models/shared";

(async () => {
    const sdk = new Riskcloud({
        security: {
            basic: {
                password: "",
                username: "",
            },
        },
    });
    const applicationApiCreateIn: ApplicationApiCreateIn = {
        color: "#00a3de",
        icon: ApplicationApiCreateInIcon.Cubes,
        name: "Cyber Risk Management Application",
        type: ApplicationApiCreateInType.ControlsCompliance,
    };

    const res = await sdk.application.create(applicationApiCreateIn);

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->