import { Request, Response } from "express";
import { RemoverOrderServices } from '../../services/order/RemoverOrderServices'



class RemoverOrderControlers {

    async handle(req: Request, res: Response) {

        const inde_id = req.query.inde_id as string

        const removerOrderServices = new RemoverOrderServices()

        const remover = await removerOrderServices.excute({ inde_id })

        return res.json(remover)
    }

}

export { RemoverOrderControlers }