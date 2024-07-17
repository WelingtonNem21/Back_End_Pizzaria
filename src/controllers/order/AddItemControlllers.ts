import { Request, Response } from 'express'
import { AddItemServices } from '../../services/order/AddItemServices'

class AddItemControlllers {

    async handle(req: Request, res: Response) {

        const { amount, order_id, product_Id } = req.body

        const addItemServices = new AddItemServices()

        const AddI = await addItemServices.excute({
            amount,
            order_id,
            product_Id
        })

        return res.json(AddI)

    }
}

export { AddItemControlllers }