import type { SuccessResponse } from "@/types";

const createSuccessResponse = <T>(data?: T): SuccessResponse => {
  return {
    status: "success",
    data: data ?? null,
  };
};

export default createSuccessResponse;
