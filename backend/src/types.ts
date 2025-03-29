export interface BaseRequestParams {
  [key: string]: string | undefined;
}

export interface TenantRequestParams extends BaseRequestParams {
  tenantId: string;
}

export interface ClientError {
  code: string;
  name: string;
  details: string;
}

export interface BaseResponse {
  status: "success" | "fail" | "error";
}

export interface SuccessResponse<T = unknown> extends BaseResponse {
  status: "success";
  data: T;
}

export interface BaseErrorResponse extends BaseResponse {
  status: "fail" | "error";
  error: ClientError;
}

export interface FailResponse extends BaseErrorResponse {
  status: "fail";
}

export interface InternalServerErrorResponse extends BaseErrorResponse {
  status: "error";
}
