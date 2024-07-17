import prismaClient from "../../prisma";

interface IdProps {
    user_id: string
}

class DetaiUserServices {

    async excute({ user_id }: IdProps) {


        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user
    }
}

export { DetaiUserServices }