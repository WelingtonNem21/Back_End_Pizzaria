import prismaClient from "../../prisma";

interface RemoverPrps {
    inde_id: string
}

class RemoverOrderServices {

    async excute({ inde_id }: RemoverPrps) {

        const remover = await prismaClient.order.delete({
            where: {
                id: inde_id
            }
        })

        return remover

    }

}

export { RemoverOrderServices }

//"19987002-4a4c-43d1-a3f2-a6c9b7deae8f"