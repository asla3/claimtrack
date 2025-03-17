export interface BaseRequestParams {
  [key: string]: string | undefined;
}

export interface TenantRequestParams extends BaseRequestParams {
  tenantId: string;
}

// I NEED TO TYPE
