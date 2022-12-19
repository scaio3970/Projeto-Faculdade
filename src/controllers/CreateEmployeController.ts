import {Request,Response} from 'express'
import { CreateEmployeeService } from '../services/CreateEmployeeService'

export class CreateEmployeController{
    async handle(request:Request, response:Response){
        const {nome, email,id_cargo} = request.body

        const service = new CreateEmployeeService()

        const result = await service.execute({nome,email,id_cargo})

        if(result instanceof Error){
            return response.status(400).json(result.message)
        }

        return response.json(result)
    }
}