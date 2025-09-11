import { PrismaClient } from "@prisma/client";
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