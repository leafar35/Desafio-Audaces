/* eslint-disable prettier/prettier */
import { DataSource, Repository } from "typeorm";
import { Injectable } from '@nestjs/common';
import PersonModel from "../Models/person.model";

@Injectable()
export default class PersonRepository extends Repository<PersonModel> {

    constructor(private dataSource: DataSource){
        super(PersonModel, dataSource.createEntityManager());
    }

}