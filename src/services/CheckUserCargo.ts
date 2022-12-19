import { getRepository } from "typeorm";
import { Usuario } from "../models/Usuario";
import { Funciorario } from "../models/Funcionario";
import { Cargo } from "../models/Cargo";

type cargoCheck = {
    id:string
}

export class CheckUserCargo{
    
    async execute(id){
        const repo = getRepository(Usuario);
        const repo2 = getRepository(Funciorario)
        const role = getRepository(Cargo)

        // console.log(id)
        const user = await repo.findOne(id);
        const idF = user.id_funcionario
        console.log(typeof user.id_funcionario)
        const func = await repo2.findOne(idF)

        // console.log(func.id)
        const id_cargo = func.id_cargo
        //SELECT * FROM usuarios WHERE usuario = "usuario"
        if(!user){
            return new Error("Usuario não existe");   
        }

        const cargo = await role.findOne(id_cargo)

        return cargo.nome

    }

}