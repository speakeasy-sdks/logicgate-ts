/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { SchemeBasic } from "./schemebasic";

export class Security extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
    basic?: SchemeBasic;

    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    bearer?: string;
}
