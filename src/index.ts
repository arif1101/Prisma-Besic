import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()
 
async function main() {
    // ------ create data------- 
    // const result = await prisma.user.create({
    //     data : {
    //         name: "Faisal Mahmud",
    //         email : "faisal@gmail.com",
    //         profilePhoto : "https://programing-hero.com/level2"
    //     }
    // })
    // ---------  get all data -------
    // const userData = await prisma.user.findMany({
    // })
    // console.log(userData)
    // ------------ get single data -----------
    // const userSingleData = await prisma.user.findUnique({
    //     where: {
    //         id: 2
    //     }
    // })
    // console.log(userSingleData)
    // ------------ update Data -----------
    // more feature -> upateMany, updateManyAndReturn
    // const updateData  = await prisma.user.update({
    //     where: {id : 2},
    //     data: {name : "kuddus", email: "kuddus@gmail.com"}
    // })
    // console.log(updateData)

    //------------- sorting ----------
    // const userAsc = await prisma.user.findMany({
    //     orderBy: {
    //         id: "asc"
    //     }
    // })
    // const userDesc = await prisma.user.findMany({
    //     orderBy: {
    //         id: "desc"
    //     }
    // })
    // console.log(userDesc)

    const searchUsers = await prisma.user.findMany({
        where: {
            name: {
                contains: "us"
            }
        },
        orderBy: {
            name: 'asc'
        }
    })
    console.log(searchUsers)
}

main()