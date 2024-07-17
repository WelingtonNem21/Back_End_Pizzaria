import { Request, Response } from "express";
import { AuthUserServices } from './../../services/user/AuthUserServices'


class AuthUserControllers {

    async hendle(req: Request, res: Response) {

        const { password, email } = req.body as { password: string, email: string }

        const authUserServices = new AuthUserServices()

        const user = await authUserServices.excute({
            password,
            email
        })

        return res.json(user)
    }

}

export { AuthUserControllers }