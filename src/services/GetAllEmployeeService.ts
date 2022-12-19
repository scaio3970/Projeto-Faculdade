import { getRepository } from "typeorm";
import { Funciorario } from "../models/Funcionario";



export class GetAllEmployeeService{
    async execute(){
        const repo = getRepository(Funciorario);

        const employee = await repo.find();

        return employee;
    }
}