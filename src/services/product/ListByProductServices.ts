import prismaClient from "../../prisma";

interface ListByProps {
    category_id: string
}

class ListByProductServices {

    async excute({ category_id }: ListByProps) {


        const ListeProduct = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        })

        return ListeProduct
    }
}

export { ListByProductServices }