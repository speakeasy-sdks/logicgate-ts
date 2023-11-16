/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";

export class Update1Request extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    applicationApiUpdateIn: shared.ApplicationApiUpdateIn;

    /**
     * The unique ID of the application
     */
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
    id: string;
}

export class Update1Response extends SpeakeasyBase {
    /**
     * OK
     */
    @SpeakeasyMetadata()
    applicationApiOut?: shared.ApplicationApiOut;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
