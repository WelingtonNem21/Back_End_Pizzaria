import { Router } from "express";
import uploadConfig from './conf/multer'
import multer from "multer";

import { CreateUserControllers } from "./controllers/user/CreateUserControllers";
import { AuthUserControllers } from './controllers/user/AuthUserControllers'
import { DetaiUserControllers } from "./controllers/user/DetaiUserControllers";
import { isAutenticacao } from "./middlewares/isAutenticacao";
import { CreateCategoryControllers } from './controllers/category/CreateCategoryControllers'
import { ListeUserControllers } from "./controllers/category/ListeUserControllers";
import { CreateProductControllers } from "./controllers/product/CreateProductControllers";
import { ListByProductControllers } from './controllers/product/ListByProductControllers';
import { CreateOrderCotrollers } from './controllers/order/CreateOrderControllers'
import { RemoverOrderControlers } from "./controllers/order/RemoverOrderControllers";
import { AddItemControlllers } from "./controllers/order/AddItemControlllers";
import { RemoverItemControllers } from "./controllers/order/RemoverItemControllers";
import { SendOrderControllers } from "./controllers/order/SendOrderControllers";

const routes = Router()

const upload = multer(uploadConfig.upload("./tmp"))

// Rotas Usuario

routes.post("/users", new CreateUserControllers().hendle)
routes.post("/session", new AuthUserControllers().hendle)
routes.get("/me", isAutenticacao, new DetaiUserControllers().handle)

// Rotas Category

routes.post("/category", isAutenticacao, new CreateCategoryControllers().handle)
routes.get("/category", isAutenticacao, new ListeUserControllers().handle)


// Rotas Product


routes.post("/product", isAutenticacao, upload.single('file'), new CreateProductControllers().handle)
routes.get("/product", isAutenticacao, new ListByProductControllers().handle)


// Rotas Order

routes.post("/order", isAutenticacao, new CreateOrderCotrollers().handle)
routes.delete("/order", isAutenticacao, new RemoverOrderControlers().handle)


// Rotas Item

routes.post("/order/item", isAutenticacao, new AddItemControlllers().handle)
routes.delete("/order/item", isAutenticacao, new RemoverItemControllers().handle)
routes.put("/order/send", isAutenticacao, new SendOrderControllers().handle)

export { routes }