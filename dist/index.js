import { PrismaClient } from "@prisma/client";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const prisma = new PrismaClient();
async function main() {
    const result = await prisma.user.create({
        data: {
            name: "Arifur Raman",
            email: "arifur@gmail.com"
        }
    });
    console.log(result);
}
main();
//# sourceMappingURL=index.js.map