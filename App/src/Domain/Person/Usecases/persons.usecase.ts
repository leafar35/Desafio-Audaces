/* eslint-disable prettier/prettier */
import { PersonEntity } from "../Entities/person.entity";

export abstract class PersonsUseCase {

    abstract execute(id?: number): Promise<PersonEntity | Array<PersonEntity>>

}