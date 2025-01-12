import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient() //{log: ["query"]}
// use `prisma` in your application to read and write data in your DB

async function main() {


    const user = await prisma.user.findMany()

    // const user = await prisma.user.findFirst({
    //     where:{
    //         email: 'marufahmed@gmail.com'
    //     },
    //     include: {userPreference:true}
    // })

    // const users = await prisma.user.findMany({
    //     where:{
    //         name:"maruf", //return all with maruf
    //         // name:{ not:"maruf"},//return all without maruf
    //         // name:{ in:["maruf","maruf Ahmed"]}, //return all with maruf & maruf ahmed
    //         // name:{ notIn:["maruf","maruf Ahmed"]}, //return all without maruf & maruf ahmed

    //         // age: {lt: 25}, //less then 25[below] 
    //         // age: {lte: 25}, //less then and equal 25[below] 
    //         // age: {gt: 25}, //greter then 25[up] 
    //         // age: {gte: 28}, //greter then and equal 25[up]

    //         // email: { contains: "@gmail1.com"} // exist anyware
    //         // email: { endsWith: "@gmail1.com"} // exist end
    //         // email: { startsWith: "maruff"} //exist start

    //         // AND:[{email:{startsWith:"maruff"}},{name: "maruf"}] //verify with 2 requirment
    //         // AND:[
    //         //     {email:{startsWith:"maruff"}},
    //         //     {email:{endsWith:"@gmail1.com"}}
    //         // ] //verify with 2 requirment and return

    //         // OR:[
    //         //     {email:{startsWith:"maruff"}},
    //         //     {age:{gte:25}}
    //         // ] //verify with 2 requirment and return

    //         // NOT:[
    //         //     {email:{startsWith:"maruff"}},
    //         //     // {age:{gte:25}}
    //         // ] //verify where not and return

    //         // userPreference: {
    //         //     emailUpdates:true
    //         // }

    //     //     writtenPosts:{
    //     //         // every: {
    //     //         //     title: "test"
    //     //         // },

    //     //         // some: {
    //     //         //     title: "test"
    //     //         // },

    //     //         none: {
    //     //             title: "test"
    //     //         }
    //     //     }
    //     },
    //     orderBy:{
    //         age:"asc" // ascending or descending order
    //     },
    //     // take:1,  //take only one value for pagination
    //     // skip:2  // skip first 2 value for pagination
    //     // distinct:["name", "age"] // its return all unique name and age
    // })
    // console.log(users.length)

    // const userPost = await prisma.post.findMany({
    //     where: {
    //         author: {
    //             is:{
    //                 age:28
    //             }
    //         }
    //     }
    // })


    // const user = await prisma.user.findUnique({
    //     // where:{
    //     //     email: "maruff@gmail.com"
    //     // }
    //     where: {
    //         age_name: {
    //             age: 28,
    //             name: 'maruf'
    //         },
    //     }
    // })

    // const user = await prisma.user.findFirst({
    //     where: {
    //         name: "maruf"
    //     }
    // })

    // const user = await prisma.user.create({
    //     data: {
    //         name:"maruf",
    //         email:"maruff@gmail.com",
    //         age: 28,
    //         userPreference: {
    //             create: {
    //                 emailUpdates: true,
    //             }
    //         }
    //     },

    // const user = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "maruf",
    //             email: "maruf@gmail1.com",
    //             age: 23,
    //         },
    //         {
    //             name: "maruf Ahmed",
    //             email: "marufahmed@gmail2.com",
    //             age: 25,
    //         },
    //     ]
    // })

    // const user = await prisma.user.update({ //email is a unique fields
    //     // where: {
    //     //     email: 'marufahmed@gmail.com'
    //     // },
    //     // data: {
    //     //     email: 'marufahmed@gmail101.com',
    //     // }

    //     // where: {
    //     //     email: 'marufahmed@gmail.com'
    //     // },
    //     // data: {
    //     // // age:{ increment:1}
    //     // // age:{ decrement:1}
    //     // // age:{ multiply:5}
    //     // age:{ divide:5}
    //     // }

    //     where: {
    //         email: 'marufahmed@gmail.com'
    //     },
    //     // data: {
    //     //     userPreference:{
    //     //         create:{
    //     //             emailUpdates:true
    //     //         }
    //     //     }
    //     // }
    //     data: {
    //         userPreference:{
    //             connect:{
    //                 id:"8e542752-79b3-4ba2-af99-cbe5cd236236"
    //             }
    //         }
    //     }
    //     // data: {
    //     //     userPreference:{
    //     //         disconnect: true
    //     //     }
    //     // }
    // })

    // const user = await prisma.user.updateMany({  //age is not uniue fields
    //     where: {
    //         age: 27
    //     },
    //     data: {
    //         age: 28
    //     }
    // })


    // await prisma.user.deleteMany()

    // await prisma.user.deleteMany({
    //     where:{
    //         name:"maruf"
    //     }
    // })


    console.log(user)
    // console.log(users)
    // console.log(userPost)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })