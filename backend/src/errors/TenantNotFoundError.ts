import BaseError from "./BaseError";

class TenantNotFoundError extends BaseError {
  constructor({ id }: { id: number }) {
    super({
      message: "Tenant not found",
      details: `Couldn't find an entry that matched the id \`${id}\`. Please make sure the id is correct.`,
    });
    this.code = "TENANT_NOT_FOUND_ERROR";
  }
}

export default TenantNotFoundError;
