/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import AdressesModel from './Providers/Models/adress.model';
import AdressesRepository from './Providers/Repositorie/adresses.repository';
import { AdressesEntityConverter } from './Providers/Converters/adresses.entity.converter';
import { PersonDataProvider } from 'src/Domain/Person/Dataprovider/person.dataprovider';
import { PersonProvider } from './Providers/person.provider';
import { PersonsUseCase } from 'src/Domain/Person/Usecases/persons.usecase';
import { PersonsService } from 'src/Domain/Person/Services/customers.service';
import { CreateUseCase } from 'src/Domain/Person/Usecases/create.usecase';
import { CreateService } from 'src/Domain/Person/Services/create.service';
import { UpdateUseCase } from 'src/Domain/Person/Usecases/update.usecase';
import { UpdateService } from 'src/Domain/Person/Services/update.service';
import PersonModel from './Providers/Models/person.model';
import { PersonController } from './person.controller';
import { PersonEntityConverter } from './Providers/Converters/person.entity.converter';
import { PersonRestModelConverter } from './Converters/person.restmodel.converter';
import PersonRepository from './Providers/Repositorie/person.repository';
import { AdressesRestModelConverter } from './Converters/adress.restmodel.converter';
import { DeleteUseCase } from 'src/Domain/Person/Usecases/delete.usecase';
import { DeleteService } from 'src/Domain/Person/Services/delete.service';

const customerprovider = {
  provide: PersonDataProvider,
  useClass: PersonProvider,
};

const findcustomerExporte = {
  provide: PersonsUseCase,
  useClass: PersonsService,
};

const createcustomerExporte = {
  provide: CreateUseCase,
  useClass: CreateService,
};

const updatecustomerExporte = {
  provide: UpdateUseCase,
  useClass: UpdateService,
};

const deletecustomerExporte = {
  provide: DeleteUseCase,
  useClass: DeleteService,
};

@Module({
  imports: [
    ConfigModule,
    HttpModule,
    TypeOrmModule.forFeature([PersonModel, AdressesModel]),
  ],
  controllers: [PersonController],
  providers: [
    PersonEntityConverter,
    PersonRestModelConverter,
    AdressesEntityConverter,
    AdressesRestModelConverter,
    customerprovider,
    findcustomerExporte,
    createcustomerExporte,
    updatecustomerExporte,
    deletecustomerExporte,
    PersonRepository,
    AdressesRepository,
  ],
})
export class PersonModule {}
