/* eslint-disable prettier/prettier */
import { PersonEntity } from "../Entities/person.entity";

export abstract class UpdateUseCase {

    abstract execute(entity: PersonEntity): Promise<PersonEntity>

}