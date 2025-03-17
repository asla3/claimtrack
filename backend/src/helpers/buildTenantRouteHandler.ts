import type { RequestHandler } from "express";
import type { ParsedQs } from "qs";

import checkHasTenantId from "@/middleware/checkTenantId";

import type { TenantRequestParams } from "@/types";

const buildTenantRouteHandler = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ResBody = any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReqBody = any,
  ReqQuery = ParsedQs,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  LocalsObj extends Record<string, any> = Record<string, any>,
>(
  handler: RequestHandler<
    TenantRequestParams,
    ResBody,
    ReqBody,
    ReqQuery,
    LocalsObj
  >,
): RequestHandler<
  TenantRequestParams,
  ResBody,
  ReqBody,
  ReqQuery,
  LocalsObj
> => {
  return (req, res, next) => {
    checkHasTenantId(req, res, (err) => {
      if (err) {
        return next(err);
      }
      handler(req, res, next);
    });
  };
};

export default buildTenantRouteHandler;
