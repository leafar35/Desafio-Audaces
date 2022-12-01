/* eslint-disable prettier/prettier */
import { AdressesEntity } from "./adresses.entity";

export class PersonEntity {

    constructor(
        public id: any, 
        public name: string, 
        public birth: string,
        public RG: string,
        public CPF: string,
        public CNH: string,
        public Address: Array<AdressesEntity>,
        public status: boolean
    ){}

}