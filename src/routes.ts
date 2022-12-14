import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { DeleteUserController } from "./controllers/User/DeleteUserController";
import { GetAllUsersController } from "./controllers/User/GetAllUsersController";
import { PermissionController } from "./controllers/PermissionController";
import { SessionController } from "./controllers/Session/SessionController";
import { UpdateUserController } from "./controllers/User/UpdateUserController";
import { JwtVerifyService } from "./services/JwtVerifyService";
import {decode} from 'jsonwebtoken'
import { CreateRoleController } from "./controllers/CreateRoleController";
const routes = Router()

const path = require('path')

//GET
routes.get("/Usuarios",new GetAllUsersController().handle);

//POST
routes.post("/cadastro",new CreateUserController().handle);
routes.post("/permissao",new PermissionController().handle);
routes.post("/sessions", new SessionController().handle)
routes.post("/cargo", new CreateRoleController().handle)


//DELETE
routes.delete("/DeletarUsuario/", new DeleteUserController().handle)

//UPDATE
routes.put("/usuario/:id", new UpdateUserController().handle)



//Front-End

routes.get("/redirecionar", (req, res) => {

    if(req.cookies.token === undefined){
        res.redirect('/login')
    }
    const n = new JwtVerifyService()
    n.decoder(req.cookies.token)
    res.render("perguntas_Gerente_Marketing")

})
routes.get("/login", (rep,res) => {

    
    res.render('index')

})

routes.get("/altdados", (rep,res) => {
    res.render('front-end/altdados')
})

routes.get("/func", (rep,res) => {
    res.render('front-end/func')
})

routes.get("/relatorio", (rep,res) => {
    res.render('front-end/relatorio')
})

routes.get("/sup", (rep,res) => {
    res.render('front-end/sup')
})
routes.get("/altdados", (rep,res) => {
    res.render('front-end/tel')
})

routes.get("/logout", (req, res) => {
    res.cookie("token","",{maxAge:0})
    res.end()
})

export {routes}