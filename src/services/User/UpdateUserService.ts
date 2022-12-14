import { getRepository } from "typeorm";
import { Usuario } from "../../models/Usuario";
import { compare } from "bcryptjs";

type usuarioUpdateRequest = {
    id:string
    usuario:string,
    senha:string
    senha_antiga:string
}

export class UpdateUserService{
    async execute({id,usuario,senha,senha_antiga}:usuarioUpdateRequest){
        const repo = getRepository(Usuario);

        const user = await repo.findOne({id});

        const matchPassword = await compare(senha_antiga, user.senha);

        if(!matchPassword){
            return new Error("Usuario ou senha incorretos");
        }

        if (!user){
            return new Error("Usuario não existe")
        }

        user.usuario = usuario ? usuario: user.usuario;

        user.senha = senha ? senha: user.senha;

        await repo.save(user);

        return user;
    }
}