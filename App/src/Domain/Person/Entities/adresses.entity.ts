/* eslint-disable prettier/prettier */
export class AdressesEntity {

    constructor(
        public id: any, 
        public zipcode: string, 
        public street: string,
        public number: string,
        public district: string,
        public complement: string,
    ){}

}