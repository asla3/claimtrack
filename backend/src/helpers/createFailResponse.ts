import type { FailResponse } from "@/types";
import sanitizeClientError from "./sanitizeClientError";

const createFailResponse = (error: FailResponse["error"]): FailResponse => {
  return {
    status: "fail",
    error: sanitizeClientError(error),
  };
};

export default createFailResponse;
