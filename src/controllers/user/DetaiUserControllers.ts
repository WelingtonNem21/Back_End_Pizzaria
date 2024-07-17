import { Request, Response } from 'express'
import { DetaiUserServices } from '../../services/user/DetaiUserServices'


class DetaiUserControllers {

    async handle(req: Request, res: Response) {

        const detaiUserServices = new DetaiUserServices()

        const user_id = req.user_id

        console.log(user_id)

        const user = await detaiUserServices.excute({
            user_id
        })


        return res.json(user)

    }

}

export { DetaiUserControllers }