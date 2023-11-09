# WorkflowMapApiCreateIn

Workflow Map (Create)


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `from`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | The unique ID of the source workflow of the workflow map relationship      | a1b2c3d4                                                                   |
| `relationship`                                                             | [shared.Relationship](../../../sdk/models/shared/relationship.md)          | :heavy_check_mark:                                                         | The type of the relationship between workflows                             | ONE_TO_MANY                                                                |
| `to`                                                                       | *string*                                                                   | :heavy_check_mark:                                                         | The unique ID of the destination workflow of the workflow map relationship | a1b2c3d4                                                                   |