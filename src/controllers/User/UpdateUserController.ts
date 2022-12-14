import { Request,Response } from "express";
import { UpdateUserService } from "../../services/User/UpdateUserService";

export class UpdateUserController{
    async handle(request:Request,response:Response){
        const {id} = request.params;
        const {usuario,senha,senha_antiga} = request.body;

        const service = new UpdateUserService();

        const result = await service.execute({id, usuario,senha,senha_antiga})

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}