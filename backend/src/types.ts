import type BaseError from "./errors/BaseError";
import type InternalServerError from "./errors/InternalServerError";

export interface BaseRequestParams {
  [key: string]: string | undefined;
}

export interface TenantRequestParams extends BaseRequestParams {
  tenantId: string;
}

export interface BaseResponse {
  status: "success" | "fail" | "error";
}

export interface SuccessResponse<T = unknown> extends BaseResponse {
  status: "success";
  data: T;
}

export interface BaseErrorResponse<T extends BaseError = BaseError>
  extends BaseResponse {
  status: "fail" | "error";
  error: T;
}

export interface FailResponse<T extends BaseError = BaseError>
  extends BaseErrorResponse<T> {
  status: "fail";
}

export interface InternalServerErrorResponse
  extends BaseErrorResponse<InternalServerError> {
  status: "error";
}
