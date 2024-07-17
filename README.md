
## Rotas Usuario

##### routes.post("/users", new CreateUserControllers().hendle)
##### routes.post("/session", new AuthUserControllers().hendle)
##### routes.get("/me", isAutenticacao, new DetaiUserControllers().handle)

##  Rotas Category

##### routes.post("/category", isAutenticacao, new CreateCategoryControllers().handle)
##### routes.get("/category", isAutenticacao, new ListeUserControllers().handle)


## Rotas Product


##### routes.post("/product", isAutenticacao, upload.single('file'), new CreateProductControllers().handle)
##### routes.get("/product", isAutenticacao, new ListByProductControllers().handle)


## Rotas Order

##### routes.post("/order", isAutenticacao, new CreateOrderCotrollers().handle)
##### routes.delete("/order", isAutenticacao, new RemoverOrderControlers().handle)


##  Rotas Item

##### routes.post("/order/item", isAutenticacao, new AddItemControlllers().handle)
##### routes.delete("/order/item", isAutenticacao, new RemoverItemControllers().handle)
##### routes.put("/order/send", isAutenticacao, new SendOrderControllers().handle)