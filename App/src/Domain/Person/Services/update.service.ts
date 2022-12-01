/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PersonEntity } from '../Entities/person.entity';
import { CustomerError } from '../Exceptions/customer.error';
import { UpdateUseCase } from '../Usecases/update.usecase';
import { PersonDataProvider } from '../Dataprovider/person.dataprovider';

@Injectable()
export class UpdateService implements UpdateUseCase {

    constructor(
        private readonly provider: PersonDataProvider
    ){}
    
    async execute(entity: PersonEntity): Promise<PersonEntity> {
        try{
            const response = await this.provider.Update(entity);
            return response;
        }catch(e){
            throw new CustomerError;
        }
    }

  
}