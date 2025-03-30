import type { ErrorRequestHandler } from "express";

import TenantNotFoundError from "@/errors/TenantNotFoundError";
import createServerErrorResponse from "@/helpers/createInternalServerErrorResponse";
import createFailResponse from "@/helpers/createFailResponse";

const errorHandler: ErrorRequestHandler = (error, req, res, _next) => {
  switch (true) {
    case error instanceof TenantNotFoundError:
      res.status(404).json(createFailResponse(error));
      break;
    // if doesn't match other case then it's a generic error
    default:
      // Handle unexpected errors
      console.error(error); // Log the error for debugging
      res.status(500).json(createServerErrorResponse());
      break;
  }
};

export default errorHandler;
