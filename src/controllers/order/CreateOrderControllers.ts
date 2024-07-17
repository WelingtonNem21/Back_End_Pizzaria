import { Request, Response } from "express";
import { CreateOrderServices } from '../../services/order/CreateOrderServices'


class CreateOrderCotrollers {


    async handle(req: Request, res: Response) {

        const { table, name } = req.body

        const createOrderServices = new CreateOrderServices()

        const orderP = await createOrderServices.excute({
            table,
            name
        })

        return res.json(orderP)

    }
}

export { CreateOrderCotrollers }