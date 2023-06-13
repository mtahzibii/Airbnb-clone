import { PrismaClient } from "@prisma/client";

// Declare the global variable 'prisma' with type 'PrismaClient | undefined'
global.prisma = undefined;

const client = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = client;
}

export default client;
