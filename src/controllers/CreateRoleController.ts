import { Request,Response } from "express";
import { CreateRoleService } from "../services/CreateRoleService";

export class CreateRoleController{
    async handle(request:Request, response:Response) {
        const {cargo} = request.body

        const service = new CreateRoleService()

        const result = service.execute(cargo)

        if( result instanceof Error){
            return response.status(400).json(result.message)
        }
        
        return response.json(result)
    }
}