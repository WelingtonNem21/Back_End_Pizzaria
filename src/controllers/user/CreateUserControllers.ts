import { Request, Response } from "express";
import { CreateUserServices } from '../../services/user/CreateUserServices'

class CreateUserControllers {

    async hendle(req: Request, res: Response) {

        const { name, email, password } = req.body as { name: string, email: string, password: string }

        const createUserServices = new CreateUserServices()

        const user = await createUserServices.excute({
            name,
            email,
            password
        })

        return res.json(user)
    }
}

export { CreateUserControllers }