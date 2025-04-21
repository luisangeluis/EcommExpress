import { Optional } from "sequelize";
import { Column, Model, DataType, PrimaryKey, Table, ForeignKey, AllowNull, BelongsTo } from "sequelize-typescript";
import Role from "./role";

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

    @ForeignKey(() => Role)
    @AllowNull(false)
    @Column({ type: DataType.UUID })
    roleId!: string;

    @BelongsTo(() => Role)
    role!: Role;
}
