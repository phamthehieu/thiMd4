import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Laptop {
    @PrimaryGeneratedColumn()
    idLaptop: number;
    @Column()
    nameLaptop: string;
    @Column()
    price: number;
    @Column()
    quantity: number;
    @Column()
    brand: number
}