import { Request, Response } from "express";
import { RemoverItemServices } from '../../services/order/RemoverItemServices'

class RemoverItemControllers {

    async handle(req: Request, res: Response) {

        const inde_id = req.query.inde_id as string

        const removerItemServices = new RemoverItemServices()

        const remover = await removerItemServices.excute({
            inde_id
        })

        return res.json(remover)

    }
}

export { RemoverItemControllers }