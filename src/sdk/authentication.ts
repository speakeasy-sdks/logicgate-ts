/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "./models/errors";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Getting Started: How to create an [API Access Token](https://www.logicgate.com/developer/risk-cloud-api-authentication/) to begin integrating with the Risk Cloud API
 */

export class Authentication {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Create an API Access Token
     *
     * @remarks
     * **Permissions:** Authenticated User
     *
     * Generates a new, expiring access token from the provided Client and Secret keys.
     */
    async getApiToken(
        security: operations.GetApiTokenSecurity,
        config?: AxiosRequestConfig
    ): Promise<operations.GetApiTokenResponse> {
        const req = new operations.GetApiTokenRequest({});
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const url: string = baseURL.replace(/\/$/, "") + "/api/v1/account/token";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        if (!(security instanceof utils.SpeakeasyBase)) {
            security = new operations.GetApiTokenSecurity(security);
        }
        const properties = utils.parseSecurityProperties(security);
        const headers: RawAxiosRequestHeaders = {
            ...utils.getHeadersFromRequest(req),
            ...config?.headers,
            ...properties.headers,
        };
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: url,
            method: "post",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetApiTokenResponse = new operations.GetApiTokenResponse({
            statusCode: httpRes.status,
            contentType: contentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(contentType, `application/json`)) {
                    res.legacyApiTokenOut = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.LegacyApiTokenOut
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + contentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case (httpRes?.status >= 400 && httpRes?.status < 500) ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }
}