/* eslint-disable prettier/prettier */
import ResponseData from 'src/Utils/responsedata';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PersonResource } from './Resources/person.resource';
import { PersonRestModel } from './Restmodels/person.restmodel';
import { PersonsUseCase } from 'src/Domain/Person/Usecases/persons.usecase';
import { PersonRestModelConverter } from './Converters/person.restmodel.converter';
import { CreatePersonRestModel } from './Restmodels/createperson.restmodel';
import { CreateUseCase } from 'src/Domain/Person/Usecases/create.usecase';
import { UpdateUseCase } from 'src/Domain/Person/Usecases/update.usecase';
import { DeleteUseCase } from 'src/Domain/Person/Usecases/delete.usecase';

@Controller('api/person')
export class PersonController implements PersonResource {

    constructor(
        private readonly createcustomer: CreateUseCase,
        private readonly updatecustomer: UpdateUseCase,
        private readonly listcustomers: PersonsUseCase,
        private readonly deleteusecase: DeleteUseCase,
        private readonly convert: PersonRestModelConverter
    ){}
    
    @Get()
    async findAll(): Promise<ResponseData<Array<PersonRestModel>>> {
        try{
            const response = await this.listcustomers.execute();
            if(!Array.isArray(response))
                throw new Error('Não é um array');
            const data = this.convert.mapToRestModelList(response);
            return ResponseData.successful(data);
        }catch(e){
            return ResponseData.failure(e.message);
        }
    }

    @Get('/:id')
    async findOne(@Param('id') id: number): Promise<ResponseData<PersonRestModel>> {
        try{
            const response = await this.listcustomers.execute(id);
            if(Array.isArray(response))
                throw new Error('é um array');
            const data = this.convert.mapToRestModel(response);
            return ResponseData.successful(data);
        }catch(e){
            return ResponseData.failure(e.message);
        }
    }

    @Post()
    async create(@Body() restmodel: CreatePersonRestModel): Promise<ResponseData<PersonRestModel>> {
        try{
            const entity = this.convert.mapToEntity(restmodel);
            const response = await this.createcustomer.execute(entity);
            return ResponseData.successful(response);
        }catch(e){
            return ResponseData.failure(e.message);
        }
    }

    @Put('/')
    async update(@Body() restmodel: PersonRestModel): Promise<ResponseData<PersonRestModel>> {
        try{
            const entity = this.convert.mapToEntityUpdate(restmodel);
            const response = await this.updatecustomer.execute(entity);
            return ResponseData.successful(response);
        }catch(e){
            return ResponseData.failure(e.message);
        }
    }

    @Delete('/:id')
    async delete(@Param('id') id: number): Promise<ResponseData<boolean>> {
        try{
            const response = await this.deleteusecase.execute(id);
            return ResponseData.successful(response);
        }catch(e){
            return ResponseData.failure(e.message);
        }
    }
  
}