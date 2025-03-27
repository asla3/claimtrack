import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export type * from "@prisma/client";

export default prismaClient;
