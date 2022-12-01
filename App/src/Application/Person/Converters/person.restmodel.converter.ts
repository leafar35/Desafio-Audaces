/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PersonEntity } from 'src/Domain/Person/Entities/person.entity';
import { CreatePersonRestModel } from '../Restmodels/createperson.restmodel';
import { PersonRestModel } from '../Restmodels/person.restmodel';
import { AdressesRestModelConverter } from './adress.restmodel.converter';

@Injectable()
export class PersonRestModelConverter {

    constructor(
        private readonly converter: AdressesRestModelConverter
    ){}

    mapToEntity(restmodel: CreatePersonRestModel) : PersonEntity {
        return new PersonEntity(
            null,
            restmodel.name,
            restmodel.birth,
            restmodel.RG,
            restmodel.CPF,
            restmodel.CNH,
            [this.converter.mapToEntity(restmodel.Address)],
            true
        );
    }

    mapToEntityUpdate(restmodel: PersonRestModel) : PersonEntity {
        return new PersonEntity(
            restmodel.id,
            restmodel.name,
            restmodel.birth,
            restmodel.RG,
            restmodel.CPF,
            restmodel.CNH,
            restmodel.Address.map(at => this.converter.mapToEntity(at)),
            restmodel.status
        );
    }

    mapToRestModel(entity: PersonEntity) : PersonRestModel {
        return new PersonRestModel(
            entity.id,
            entity.name,
            entity.birth,
            entity.RG,
            entity.CPF,
            entity.CNH,
            entity.Address.map(at => this.converter.mapToEntity(at)),
            entity.status
        );
    }

    mapToRestModelList(entity: Array<PersonEntity>) : Array<PersonRestModel> {
        return entity.map(element => 
            new PersonRestModel(
                element.id,
                element.name,
                element.birth,
                element.RG,
                element.CPF,
                element.CNH,
                element.Address.map(at => this.converter.mapToRestModel(at)),
                element.status)
            );
    }
      
}