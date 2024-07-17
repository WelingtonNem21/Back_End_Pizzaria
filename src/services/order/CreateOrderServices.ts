import prismaClient from "../../prisma";


interface OderPrps {
    table: number,
    name: string
}

class CreateOrderServices {

    async excute({ table, name }: OderPrps) {

        const Order = await prismaClient.order.create({
            data: {
                table: table,
                name: name
            }
        })

        return Order

    }
}

export { CreateOrderServices }