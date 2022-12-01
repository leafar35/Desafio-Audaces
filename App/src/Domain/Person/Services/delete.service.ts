/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { CustomerError } from '../Exceptions/customer.error';
import { PersonDataProvider } from '../Dataprovider/person.dataprovider';
import { DeleteUseCase } from '../Usecases/delete.usecase';

@Injectable()
export class DeleteService implements DeleteUseCase {

    constructor(
        private readonly provider: PersonDataProvider
    ){}
    
    async execute(id: number): Promise<boolean> {
        try{
            const response = await this.provider.delete(id);
            return response;
        }catch(e){
            console.log(e);
            throw new CustomerError;
        }
    }

  
}