/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PersonEntity } from 'src/Domain/Person/Entities/person.entity';
import PersonModel from '../Models/person.model';

@Injectable()
export class PersonEntityConverter {

    mapToEntity(model: PersonModel) : PersonEntity {
        return new PersonEntity(
            model.id,
            model.name,
            model.birth,
            model.RG,
            model.CPF,
            model.CNH,
            model.adresses,
            model.status
        );
    }

    mapToModel(entity: PersonEntity) : PersonModel {
        return PersonModel.create({
            id: entity.id,
            name: entity.name,
            birth: entity.birth,
            RG: entity.RG,
            CPF: entity.CPF,
            CNH: entity.CNH,
            adresses: entity.Address,
            status: entity.status
        });
    }

    mapToListEntity(models: Array<PersonModel>) : Array<PersonEntity> {
        return models.map(at => new PersonEntity(
            at.id, 
            at.name, 
            at.birth, 
            at.RG,
            at.CPF,
            at.CNH,
            at.adresses,
            at.status,
        ));
    }

}