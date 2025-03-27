/**
 * BaseError is a foundation for creating client-facing errors.
 * It should never be used directly. Instead, create specific error classes
 * (e.g., `TenantNotFoundError`) that inherit from `BaseError`.
 */
class BaseError extends Error {
  code: string;
  details: string;
  constructor({ details, message }: { details: string; message: string }) {
    super(message);
    this.details = details;
    this.code = "BASE_ERROR";
  }
}

export default BaseError;
