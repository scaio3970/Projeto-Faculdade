import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { DeleteUserController } from "./controllers/User/DeleteUserController";
import { GetAllUsersController } from "./controllers/User/GetAllUsersController";
import { PermissionController } from "./controllers/PermissionController";
import { SessionController } from "./controllers/Session/SessionController";
import { UpdateUserController } from "./controllers/User/UpdateUserController";
import { JwtVerifyService } from "./services/JwtVerifyService";
import { CreateRoleController } from "./controllers/CreateRoleController";
import { GetAllRoleController } from "./controllers/GetAllRoleController";
import { CreateEmployeController } from "./controllers/CreateEmployeController";
import { CheckUserCargo } from "./services/CheckUserCargo";
import { CheckUserExists } from "./services/CheckUserExist";
const routes = Router()

const path = require('path')

const check = new CheckUserExists()


//GET
routes.get("/Usuarios",new GetAllUsersController().handle);
routes.get("/cargos", new GetAllRoleController().handle)

//POST
routes.post("/cadastro",new CreateUserController().handle);
routes.post("/permissao",new PermissionController().handle);
routes.post("/sessions", new SessionController().handle)
routes.post("/cargo", new CreateRoleController().handle)
routes.post("/funcionario", new CreateEmployeController().handle)


//DELETE
routes.delete("/DeletarUsuario/:id", new DeleteUserController().handle)

//UPDATE
routes.put("/usuario/:id", new UpdateUserController().handle)



//Front-End
routes.get("/", async (req, res) =>{
    res.redirect("/login")
})

routes.get("/login", (rep,res) => {
    res.render('index')
})

routes.get("/cadastro/funcionario",(req,res) =>{
    res.render("front-end/RegistrarFuncionario")
})

routes.get("/redirecionar", async (req, res) =>{
    const teste = new CheckUserCargo()
    const n = new JwtVerifyService()

    if(check.execute(req.cookies.token)instanceof Error ){
        res.redirect("/login")
    }

    const id = await n.decoder(req.cookies.token)
    // console.log(id)
    const cargo = await teste.execute({id})

    if(cargo === "Gerente de Marketing"){
        res.redirect("/avaliacao/perguntas_Gerente_Marketing")
    }
    if(cargo === "Coordenador Financeiro"){
        res.redirect("/avaliacao/perguntas_Cordenador_financeiro")
    }
})

routes.get("/avaliacao/perguntas_Gerente_Marketing", (req, res) => {

    if(req.cookies.token === undefined){
        res.redirect('/login')
    }
    const n = new JwtVerifyService()
    n.decoder(req.cookies.token)
    res.render("perguntas_Gerente_Marketing")
})
    
routes.get("/avaliacao/perguntas_Cordenador_financeiro", (req, res) => {

    if(req.cookies.token === undefined){
        res.redirect('/login')
    }
  
    res.render("perguntas_Cordenador_financeiro")

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
    if(req.cookies.token ==undefined){
        res.redirect("/login")
    }
    res.cookie("token","",{maxAge:0})
    res.redirect("/login")
    
})


export {routes}