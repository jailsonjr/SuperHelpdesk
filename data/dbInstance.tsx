import {PrismaClient} from "@prisma/client";

const dbOrm = new PrismaClient();

export default dbOrm;