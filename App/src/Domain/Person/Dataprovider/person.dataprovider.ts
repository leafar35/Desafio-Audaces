/* eslint-disable prettier/prettier */
import { PersonEntity } from '../Entities/person.entity';

export abstract class PersonDataProvider {

    abstract find(id: number): Promise<PersonEntity>

    abstract findAll(): Promise<Array<PersonEntity>>    
    
    abstract create(entity: PersonEntity): Promise<PersonEntity>

    abstract Update(entity: PersonEntity): Promise<PersonEntity>

    abstract delete(id: number): Promise<boolean>

}