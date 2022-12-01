/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PersonDataProvider } from '../Dataprovider/person.dataprovider';
import { PersonEntity } from '../Entities/person.entity';
import { CustomerError } from '../Exceptions/customer.error';
import { CreateUseCase } from '../Usecases/create.usecase';

@Injectable()
export class CreateService implements CreateUseCase {

    constructor(
        private readonly provider: PersonDataProvider
    ){}
    
    async execute(entity: PersonEntity): Promise<PersonEntity> {
        try{
            const response = await this.provider.create(entity);
            return response;
        }catch(e){
            throw new CustomerError;
        }
    }

  
}