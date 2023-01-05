import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient

declare global {
    var __prisma: PrismaClient | undefined;
}

if (!global.__prisma) {
    global.__prisma = new PrismaClient({ errorFormat: 'minimal' });
}

prisma = global.__prisma;

export { prisma }