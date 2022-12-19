import { getRepository } from "typeorm";
import { Cargo } from "../models/Cargo";
import { Funciorario } from "../models/Funcionario";


type Employee = {
    nome:string,
    email:string,
    id_cargo:string
}

export class CreateEmployeeService{
    async execute({nome,email,id_cargo}:Employee){
        const repo = getRepository(Funciorario)
        const cargo = getRepository(Cargo)

        const funcionario = repo.create({nome,email,id_cargo})
        
        if(!await cargo.findOne(id_cargo)){
            return new Error("Cargo não existe")
        }
        
        if(await repo.findOne(email)){
            return new Error("Email já cadastrado")
        }

        await repo.save(funcionario)

        return funcionario
    }
}