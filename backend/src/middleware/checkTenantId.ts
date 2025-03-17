import { Request, Response, NextFunction } from "express";
import { ParsedQs } from "qs";
import type { TenantRequestParams } from "@/types";

const checkHasTenantId = <ReqQuery = ParsedQs>(
  req: Request<
    Partial<Pick<TenantRequestParams, "tenantId">>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    ReqQuery
  >,
  res: Response,
  next: NextFunction,
) => {
  if (req.params.tenantId != undefined) {
    return next();
  }

  next(
    new Error(
      `Missing tenantId in request params. tenantId is \`${req.params.tenantId}\``,
    ),
  );
};

export default checkHasTenantId;
