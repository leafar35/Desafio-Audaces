/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
//import { BaseEntity, Entity, ObjectID, ObjectIdColumn, Column, OneToMany } from "typeorm"
import AdressesModel from "./adress.model";

@Entity('person')
export default class PersonModel extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    birth: string;

    @Column()
    RG: string

    @Column()
    CPF: string

    @Column()
    CNH: string

    @Column()
    status: boolean;

    @OneToMany(() => AdressesModel, (adresses) => adresses.person, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        cascade: true
    })
    adresses: AdressesModel[];

}