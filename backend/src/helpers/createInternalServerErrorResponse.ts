import InternalServerError from "@/errors/InternalServerError";
import type { InternalServerErrorResponse } from "@/types";

const createServerErrorResponse = (): InternalServerErrorResponse => {
  return {
    status: "error",
    error: new InternalServerError(),
  };
};

export default createServerErrorResponse;
