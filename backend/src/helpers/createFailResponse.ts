import type BaseError from "@/errors/BaseError";
import type { FailResponse } from "@/types";

const createFailResponse = <T extends BaseError>(error: T): FailResponse<T> => {
  return {
    status: "fail",
    error,
  };
};

export default createFailResponse;
