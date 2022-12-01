/* eslint-disable prettier/prettier */
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
//import { BaseEntity, Entity, ObjectID, ObjectIdColumn, Column, ManyToOne } from "typeorm"
import PersonModel from "./person.model";

@Entity('adresses')
export default class AdressesModel extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    zipcode: string;

    @Column()
    street: string;

    @Column()
    number: string

    @Column()
    district: string

    @Column()
    complement: string

    @ManyToOne(() => PersonModel, (person) => person.adresses, {
        onDelete: "CASCADE",
    })
    person: PersonModel;

}