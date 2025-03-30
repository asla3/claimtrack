import type { ClientError } from "@/types";

const sanitizeClientError = ({
  code,
  message,
  details,
}: ClientError): ClientError => ({
  code,
  message,
  details,
});

export default sanitizeClientError;
