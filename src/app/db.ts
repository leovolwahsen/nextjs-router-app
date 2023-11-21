import { PrismaClient } from "@prisma/client";

/*
Fix for problem of Prisma of hotloading wich is not working with next.js without this fix!
Now it will only create one single client no many hotload it throws at it.
*/

const globalForPrisma = global as unknown as {
    prisma: PrismaClient | undefined
}

export const prisma = 
    globalForPrisma.prisma ?? 
    new PrismaClient({
        log: ['query'],
    })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma