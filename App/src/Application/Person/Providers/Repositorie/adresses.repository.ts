/* eslint-disable prettier/prettier */
import { DataSource, Repository } from "typeorm";
import { Injectable } from '@nestjs/common';
import AdressesModel from "../Models/adress.model";

@Injectable()
export default class AdressesRepository extends Repository<AdressesModel> {

    constructor(private dataSource: DataSource){
        super(AdressesModel, dataSource.createEntityManager());
    }

}