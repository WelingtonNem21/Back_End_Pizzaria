import { Request, Response } from "express";
import { ListByProductServices } from '../../services/product/ListByProductServices'



class ListByProductControllers {

    async handle(req: Request, res: Response) {


        const category_id = req.query.category_id as string

        const listByProductServices = new ListByProductServices()

        const liste = await listByProductServices.excute({
            category_id
        })


        return res.json(liste)

    }
}

export { ListByProductControllers }