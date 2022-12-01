/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import AdressesRepository from './Repositorie/adresses.repository';
import { AdressesEntityConverter } from './Converters/adresses.entity.converter';
import PersonRepository from './Repositorie/person.repository';
import { PersonDataProvider } from 'src/Domain/Person/Dataprovider/person.dataprovider';
import { PersonEntity } from 'src/Domain/Person/Entities/person.entity';
import { PersonEntityConverter } from './Converters/person.entity.converter';

@Injectable()
export class PersonProvider implements PersonDataProvider {

    constructor(
        private readonly repository: PersonRepository,
        private readonly adressesrepository: AdressesRepository,
        private readonly converter: PersonEntityConverter,
        private readonly converteradresses: AdressesEntityConverter
    ){}    

    async findAll(): Promise<PersonEntity[]> {
        const data = await this.repository.find({
            relations: ['adresses'],
        });
        return this.converter.mapToListEntity(data);
    }

    async find(id: any): Promise<PersonEntity> {
        const data = await this.repository.findOne({
            where: { id: id},
            relations: ['adresses']
        });
        return this.converter.mapToEntity(data);
    }

    async create(entity: PersonEntity): Promise<PersonEntity> {
        entity.id = null;
        const model = this.converter.mapToModel(entity);
        const data = await this.repository.save(model);
        this.adressesrepository.save(model.adresses);
        return this.converter.mapToEntity(data);
    }

    async Update(entity: PersonEntity): Promise<PersonEntity> {
        const model = this.converter.mapToModel(entity);
        const data = await this.repository.save(model);
        this.adressesrepository.save(model.adresses);
        return this.converter.mapToEntity(data);
    }

    async delete(id: number): Promise<boolean> {
        const result = await this.repository.delete(id);
        return (result.affected !== 0);
    }
  
}