import prismaClient from "../../prisma";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthProps {
    email: string,
    password: string
}

class AuthUserServices {

    async excute({ password, email }: AuthProps) {

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error("email && senha não ecotrando")
        }


        const passwordMah = await compare(password, user.password)

        if (!passwordMah) {
            throw new Error("email && senha não ecotrando")
        }


        const token = sign(
            {
                name: user.name,
                email: user.email,
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn: '10d'
            }

        )


        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }

    }
}

export { AuthUserServices }