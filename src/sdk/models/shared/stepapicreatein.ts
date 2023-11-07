/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * Indicates which users are allowed to be assigned this step on a record (defaults to APP_USERS)
 */
export enum AssignableUserType {
    AppAndExternalUsers = "APP_AND_EXTERNAL_USERS",
    AppUsers = "APP_USERS",
    ExternalUsers = "EXTERNAL_USERS",
}

/**
 * Step (Create)
 */
export class StepApiCreateIn extends SpeakeasyBase {
    /**
     * Indicates which users are allowed to be assigned this step on a record (defaults to APP_USERS)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "assignableUserType" })
    assignableUserType?: AssignableUserType;

    /**
     * Whether comments are displayed on a step (defaults to false)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "enableComments" })
    enableComments?: boolean;

    /**
     * Whether MFA is required for external users to access this step. (defaults to false)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "externalUserMfaRequired" })
    externalUserMfaRequired?: boolean;

    /**
     * The name of the step
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name: string;

    /**
     * The unique ID of the parent workflow of the step
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflowId" })
    workflowId: string;

    /**
     * The x-coordinate of the step in the application builder (must not be less than 0, defaults to 0)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "xpos" })
    xpos?: number;

    /**
     * The y-coordinate of the step in the application builder (must not be less than 0, defaults to 0)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "ypos" })
    ypos?: number;
}
