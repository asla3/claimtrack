import prismaClient from "@/prismaClient";
import type { Tenant } from "@prisma/client";

import TenantNotFoundError from "@/errors/TenantNotFoundError";

/**
 * Returns a tenant by id.
 */
export const findTenantById = async (id: number): Promise<Tenant | null> => {
  const tenant = await prismaClient.tenant.findUnique({
    where: { id },
  });

  return tenant;
};

/**
 * Returns a tenant by id or throws an error if not found.
 */
export const findTenantByIdStrict = async (id: number): Promise<Tenant> => {
  const tenant = await findTenantById(id);

  if (!tenant) {
    throw new TenantNotFoundError({ id });
  }

  return tenant;
};

export type { Tenant };
