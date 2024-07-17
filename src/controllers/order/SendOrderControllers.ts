import { Request, Response } from "express";
import { SendOrderServices } from "../../services/order/SendOrderServices";


class SendOrderControllers {

    async handle(req: Request, res: Response) {

        const { orde_id } = req.body

        const sendOrderServices = new SendOrderServices()

        const up = await sendOrderServices.excute({
            orde_id
        })

        return res.json(up)

    }
}

export { SendOrderControllers }