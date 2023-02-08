import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Brand {
    @PrimaryGeneratedColumn()
    idBrand: number;
    @Column({type: 'varchar', length: 255})
    nameBrand: string;
    @Column()
    description: string;
}