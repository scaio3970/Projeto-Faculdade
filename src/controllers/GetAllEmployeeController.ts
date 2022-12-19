import { Request,Response } from "express";
import { GetAllEmployeeService } from "../services/GetAllEmployeeService";


export class GetAllEmployeeController{
    async handle(request:Request, response:Response) {
        const service = new GetAllEmployeeService()
        const result = await service.execute()

        console.log(result)

        return response.json(result)
    }
}