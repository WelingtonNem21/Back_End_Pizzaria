import prismaClient from "../../prisma";

interface SendProps {
    orde_id: string
}

class SendOrderServices {

    async excute({ orde_id }: SendProps) {

        const upta = await prismaClient.order.update({
            where: {
                id: orde_id
            },
            data: {
                draft: false
            }
        })

        return upta

    }
}

export { SendOrderServices }