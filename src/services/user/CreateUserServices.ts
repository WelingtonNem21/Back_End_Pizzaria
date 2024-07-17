import prismaClient from "../../prisma/index"
import { hash } from 'bcryptjs'

interface UsersProps {
    name: string,
    email: string,
    password: string
}

class CreateUserServices {

    async excute({ name, email, password }: UsersProps) {


        if (!email) {
            throw new Error("Por Favor email")
        }


        const emailExiste = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (emailExiste) {
            throw new Error("Email existem no banco")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
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

export { CreateUserServices }