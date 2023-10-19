/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class ReadAllApplicationsRequest extends SpeakeasyBase {
    /**
     * The zero-indexed page number (must not be less than 0, defaults to 0)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
    page?: number;

    /**
     * The size of the page and maximum number of items to be returned (must not be less than 1, defaults to 20)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
    size?: number;
}

export class ReadAllApplicationsResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * OK
     */
    @SpeakeasyMetadata()
    pageModelOutApplicationApiOut?: shared.PageModelOutApplicationApiOut;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}