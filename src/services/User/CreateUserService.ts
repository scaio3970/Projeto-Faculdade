import { getRepository } from "typeorm";
import { Usuario } from "../../models/Usuario";
import {hash} from 'bcryptjs';
import { Funciorario } from "../../models/Funcionario";

type registerRequest = {
    id_funcionario:string,
    usuario:string,
    senha:string
}

export class CreateUserService{
    
    async execute({id_funcionario,usuario, senha,}:registerRequest):Promise<Usuario | Error>{
        const repo = getRepository(Usuario);
        const confirm = getRepository(Funciorario)
        


        const senhaHash = await hash(senha, 8);

        const user = repo.create({id_funcionario, usuario,senha:senhaHash});

        //SELECT * FROM usuarios WHERE usuario = "usuario"
        if(await repo.findOne({usuario})){
            return new Error("Usuario já existe");   
        }

        if(await repo.findOne({id_funcionario})){
            return new Error("Funcionário já possui usuário")
        }

        if(!await confirm.findOne(id_funcionario)){
            return new Error("Funcionário não existe")
        }

        await repo.save(user);

            delete user.senha;
        return(user);
    }

}