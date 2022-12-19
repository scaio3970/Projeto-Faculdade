import {Entity,Column,PrimaryColumn} from 'typeorm'
import {v4 as uuid } from "uuid"

@Entity('cargo')
export class Cargo{

    @PrimaryColumn()
    id:string;

    @Column()
    nome:string;

    constructor(){
        if(!this.id){
            this.id =uuid();
        }
    }
}