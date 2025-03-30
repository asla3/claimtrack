import InternalServerError from "@/errors/InternalServerError";
import type { InternalServerErrorResponse } from "@/types";
import sanitizeClientError from "./sanitizeClientError";

const createServerErrorResponse = (): InternalServerErrorResponse => {
  return {
    status: "error",
    error: sanitizeClientError(new InternalServerError()),
  };
};

export default createServerErrorResponse;
