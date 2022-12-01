import ResponseData from 'src/Utils/responsedata';
import { CreatePersonRestModel } from '../Restmodels/createperson.restmodel';
import { PersonRestModel } from '../Restmodels/person.restmodel';

/* eslint-disable prettier/prettier */
export interface PersonResource {

  findAll(): Promise<ResponseData<Array<PersonRestModel>>>

  findOne(id: number): Promise<ResponseData<PersonRestModel>>

  create(restmodel: CreatePersonRestModel): Promise<ResponseData<PersonRestModel>>

  update(restmodel: PersonRestModel): Promise<ResponseData<PersonRestModel>>

  delete(id: number): Promise<ResponseData<boolean>>
  
}