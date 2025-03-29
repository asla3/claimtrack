import type { FailResponse } from "@/types";

const createFailResponse = (error: FailResponse["error"]): FailResponse => {
  return {
    status: "fail",
    error,
  };
};

export default createFailResponse;
