import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Example {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    exampleNameWithLength: string;

    @Column('text')
    exampleDescription: string;

    @Column('int')
    exampleColumnWithInteger: number;

    @Column()
    exampleBolean: boolean;
}
