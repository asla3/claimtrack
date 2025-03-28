import BaseError from "./BaseError";

class InternalServerError extends BaseError {
  constructor() {
    super({
      message: "Internal server error",
      details: `An unexpected error occurred. Please try again later.`,
    });
    this.code = "INTERNAL_SERVER_ERROR";
  }
}

export default InternalServerError;
