import { Request,Response } from "express";
import { CreateRoleService } from "../services/CreateRoleService";
import { GetAllRoleService } from "../services/GetAllRoleService";

export class GetAllRoleController{
    async handle(request:Request, response:Response) {
        const service = new GetAllRoleService()
        const result = service.execute()

        return response.json(result)
    }
}