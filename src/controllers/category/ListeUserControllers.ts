import { Request, Response } from "express";
import { ListeCategoryServices } from "../../services/category/ListeCategoryServices";


class ListeUserControllers {

    async handle(req: Request, res: Response) {

        const listeCategoryServices = new ListeCategoryServices()


        const user = await listeCategoryServices.excute()


        return res.json(user)

    }
}

export { ListeUserControllers }