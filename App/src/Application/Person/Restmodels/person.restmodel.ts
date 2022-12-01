/* eslint-disable prettier/prettier */
import { AdressesRestModel } from "./adresses.restmodel";

export class PersonRestModel {

    constructor(
        public id: number,
        public name: string, 
        public birth: string,
        public RG: string,
        public CPF: string,
        public CNH: string,
        public Address: AdressesRestModel[],
        public status: boolean
    ){}

}