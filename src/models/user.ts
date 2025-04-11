import { Optional } from "sequelize";
import { Column, Model, DataType, PrimaryKey, Table } from "sequelize-typescript";

interface UserAttributes {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    roleId: string;
}

export interface UserCreationAttributes extends Optional<UserAttributes, 'id'> { }

@Table
export default class User extends Model<UserAttributes, UserCreationAttributes> {
    @PrimaryKey
    @Column({ type: DataType.UUID })
    id!: string;

    @Column({ type: DataType.STRING(150) })
    firstName!: string;

    @Column({ type: DataType.STRING(150) })
    lastName!: string;

    @Column({ type: DataType.STRING })
    email!: string;

    @Column({ type: DataType.TEXT })
    password!: string;

    @Column({ type: DataType.STRING })
    roleId!: string;
}
