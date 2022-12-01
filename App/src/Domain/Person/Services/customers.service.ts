/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PersonEntity } from '../Entities/person.entity';
import { CustomerError } from '../Exceptions/customer.error';
import { PersonsUseCase } from '../Usecases/persons.usecase';
import { PersonDataProvider } from '../Dataprovider/person.dataprovider';

@Injectable()
export class PersonsService implements PersonsUseCase {

    constructor(
        private readonly provider: PersonDataProvider
    ){}
    
    async execute(id?: number): Promise<PersonEntity | Array<PersonEntity>> {
        try{
            if(id)
                return await this.provider.find(id);
            return await this.provider.findAll();
        }catch(e){
            throw new CustomerError;
        }
    }

  
}