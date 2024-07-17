import prismaClient from "../../prisma";

interface ItemRequest {
    amount: number,
    order_id: string,
    product_Id: string
}

class AddItemServices {

    async excute({ amount, order_id, product_Id }: ItemRequest) {


        const addItem = await prismaClient.item.create({
            data: {
                amount: amount,
                order_id: order_id,
                product_Id: product_Id
            },

        })

        return addItem
    }
}

export { AddItemServices }