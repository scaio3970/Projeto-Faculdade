import {Entity,Column,PrimaryColumn, JoinColumn, JoinTable} from 'typeorm'
import {v4 as uuid } from "uuid"
import { Funciorario } from './Funcionario';

@Entity('usuario')
export class Usuario{

    @PrimaryColumn()
    id:string;

    @Column()
    usuario:string;

    @Column()
    senha:string;

    @Column()
    id_funcionario:String

    @Column()
    admin:boolean
        
    constructor(){
        if(!this.id){
            this.id =uuid();
        }
    }
}