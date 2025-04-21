import { Optional } from "sequelize";
import { AllowNull, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./user";

interface RoleAttributes {
    id: string;
    name: string;
}

export interface RoleCreationAttributes extends Optional<RoleAttributes, "id"> { }

@Table
export default class Role extends Model<RoleAttributes, RoleCreationAttributes> {
    @PrimaryKey
    @Column({ type: DataType.UUID })
    id!: string;

    @AllowNull(false)
    @Column({ type: DataType.STRING(200) })
    name!: string;

    @HasMany(() => User)
    users?: User[];
}