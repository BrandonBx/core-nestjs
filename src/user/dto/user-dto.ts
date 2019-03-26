import {PrimaryGeneratedColumn} from 'typeorm';

export class UserDto {
    readonly id: number;
    readonly firstname: string;
    readonly lastname: string;
}
