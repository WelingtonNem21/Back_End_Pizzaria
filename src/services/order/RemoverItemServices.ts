import prismaClient from "../../prisma";

interface RemoverPrps {
    inde_id: string
}

class RemoverItemServices {

    async excute({ inde_id }: RemoverPrps) {


        const removerItem = await prismaClient.item.delete({
            where: {
                id: inde_id
            }
        })

        return removerItem

    }
}

export { RemoverItemServices }