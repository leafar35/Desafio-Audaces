/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { AdressesEntity } from 'src/Domain/Person/Entities/adresses.entity';
import { AdressesRestModel } from '../Restmodels/adresses.restmodel';

@Injectable()
export class AdressesRestModelConverter {

    mapToEntity(restmodel: AdressesRestModel) : AdressesEntity {
        return new AdressesEntity(
            restmodel.id,
            restmodel.zipcode,
            restmodel.street,
            restmodel.number,
            restmodel.district,
            restmodel.complement
        );
    }

    mapToRestModel(entity: AdressesEntity) : AdressesRestModel {
        return new AdressesRestModel(
            entity.id,
            entity.zipcode,
            entity.street,
            entity.number,
            entity.district,
            entity.complement
        );
    }
      
}