import prismaClient from "../../prisma";

interface productProps {
    name: string,
    price: string,
    description: string,
    banner: string,
    category_id: string
}

class CreateProductServices {

    async excute({ name, price, description, banner, category_id }: productProps) {

        const products = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            }
        })

        return products

    }

}

export { CreateProductServices }