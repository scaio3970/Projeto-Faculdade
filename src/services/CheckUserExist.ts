import { getRepository } from "typeorm";
import { Usuario } from "../models/Usuario";



export class CheckUserExists{
    async execute(id){
        const repo = getRepository(Usuario)

        if(await repo.findOne(id)){
            return new Error("Usuário não existe")
        }

        return true
    }

}