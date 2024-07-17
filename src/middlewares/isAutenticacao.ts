import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

interface TokenProps {
    sub: string
}

export function isAutenticacao(req: Request, res: Response, next: NextFunction) {


    const autoToken = req.headers.authorization


    if (!autoToken) {
        return res.status(401).end()
    }

    const [, token] = autoToken.split(" ")


    try {

        const { sub } = verify(
            token,
            process.env.JWT_SECRET,

        ) as TokenProps;

        req.user_id = sub

        return next()

    } catch (error) {
        return res.status(401).end()
    }

}