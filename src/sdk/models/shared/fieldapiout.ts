/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ApplicationPropertyApiOut } from "./applicationpropertyapiout";
import { ValuePropertyApiOut } from "./valuepropertyapiout";
import { WorkflowPropertyApiOut } from "./workflowpropertyapiout";
import { Expose, Type } from "class-transformer";

/**
 * The type of the field
 */
export enum FieldApiOutFieldType {
    Date = "DATE",
    User = "USER",
    ExternalUser = "EXTERNAL_USER",
    Text = "TEXT",
    TextArea = "TEXT_AREA",
    Number = "NUMBER",
    ESignature = "E_SIGNATURE",
    Checkbox = "CHECKBOX",
    MultiSelect = "MULTI_SELECT",
    Radio = "RADIO",
    Select = "SELECT",
    Attachment = "ATTACHMENT",
    Calculation = "CALCULATION",
    DateCalculation = "DATE_CALCULATION",
    Other = "OTHER",
}

/**
 * The type of the field value
 */
export enum FieldApiOutValueType {
    Number = "NUMBER",
    Calculation = "CALCULATION",
    Attachment = "ATTACHMENT",
    Date = "DATE",
    Option = "OPTION",
    User = "USER",
    Text = "TEXT",
    Other = "OTHER",
}

/**
 * A array of returned items
 */
export class FieldApiOut extends SpeakeasyBase {
    /**
     * The parent application of the record
     */
    @SpeakeasyMetadata()
    @Expose({ name: "application" })
    @Type(() => ApplicationPropertyApiOut)
    application?: ApplicationPropertyApiOut;

    /**
     * The default values of the field
     */
    @SpeakeasyMetadata({ elemType: ValuePropertyApiOut })
    @Expose({ name: "defaultValues" })
    @Type(() => ValuePropertyApiOut)
    defaultValues?: ValuePropertyApiOut[];

    /**
     * Whether the field is global
     */
    @SpeakeasyMetadata()
    @Expose({ name: "global" })
    global?: boolean;

    /**
     * The help text of the field to supply necessary context for filling out the field
     */
    @SpeakeasyMetadata()
    @Expose({ name: "helpText" })
    helpText?: string;

    /**
     * The unique ID of this Risk Cloud resource
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id?: string;

    /**
     * The label of the field as shown on the record
     */
    @SpeakeasyMetadata()
    @Expose({ name: "label" })
    label?: string;

    /**
     * The name of the field
     */
    @SpeakeasyMetadata()
    @Expose({ name: "name" })
    name?: string;

    /**
     * Identifies the type of object this data represents
     */
    @SpeakeasyMetadata()
    @Expose({ name: "object" })
    object?: string;

    /**
     * The option values of the field for Select, Multi-Select, Radio, Checkbox, and E-Signature field types
     */
    @SpeakeasyMetadata({ elemType: ValuePropertyApiOut })
    @Expose({ name: "optionValues" })
    @Type(() => ValuePropertyApiOut)
    optionValues?: ValuePropertyApiOut[];

    /**
     * The tooltip information of the field
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tooltip" })
    tooltip?: string;

    /**
     * The type of the field
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type?: FieldApiOutFieldType;

    /**
     * The type of the field value
     */
    @SpeakeasyMetadata()
    @Expose({ name: "valueType" })
    valueType?: FieldApiOutValueType;

    /**
     * The parent workflow of the step
     */
    @SpeakeasyMetadata()
    @Expose({ name: "workflow" })
    @Type(() => WorkflowPropertyApiOut)
    workflow?: WorkflowPropertyApiOut;
}
