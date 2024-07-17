import { Request, Response } from "express";
import { CreateProductServices } from "../../services/product/CreateProductServices";

class CreateProductControllers {

    async handle(req: Request, res: Response) {

        const { name, price, description, category_id } = req.body

        const createProductServices = new CreateProductServices()

        if (!req.file) {
            throw new Error("Erro na file")
        } else {

            const { originalname, filename } = req.file

            const banner: string = filename

            const product = await createProductServices.excute({
                name,
                price,
                description,
                banner,
                category_id
            })
            return res.json(product)
        }

        //8c8c91f7-3e32-47b6-aa72-c104b55e0c11



    }
}

export { CreateProductControllers }