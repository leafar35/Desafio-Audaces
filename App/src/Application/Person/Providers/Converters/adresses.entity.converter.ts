/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { AdressesEntity } from 'src/Domain/Person/Entities/adresses.entity';
import AdressesModel from '../Models/adress.model';
import PersonModel from '../Models/person.model';

@Injectable()
export class AdressesEntityConverter {

    mapToListModel(models: Array<AdressesEntity>, person: PersonModel) : Array<AdressesModel> {
        return models.map((at) => {
            return AdressesModel.create({
                id: null, 
                zipcode: at.zipcode,
                street: at.street,
                number: at.number,
                district: at.district,
                complement: at.complement,
                person: person
            })
        });
    }

}