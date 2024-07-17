import { Request, Response } from 'express'
import { CreateCategoryServices } from '../../services/category/CreateCategoryServices';

class CreateCategoryControllers {

    async handle(req: Request, res: Response) {

        const { name } = req.body

        const createCategoryServices = new CreateCategoryServices();


        const usre = await createCategoryServices.excute({ name })


        return res.json(usre)
    }
}

export { CreateCategoryControllers }