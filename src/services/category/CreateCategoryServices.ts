import prismaClient from "../../prisma";

interface categoryProps {
    name: string
}


class CreateCategoryServices {

    async excute({ name }: categoryProps) {


        const nameExiste = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })

        if (nameExiste) {
            throw new Error("Ja existemte no banco")
        }

        const category = await prismaClient.category.create({
            data: {
                name: name
            }, select: {
                id: true,
                name: true
            }
        })

        return category
    }
}

export { CreateCategoryServices }