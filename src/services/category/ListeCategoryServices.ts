import prismaClient from "../../prisma";



class ListeCategoryServices {

    async excute() {


        const user = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            }
        })

        return user

    }

}

export { ListeCategoryServices }