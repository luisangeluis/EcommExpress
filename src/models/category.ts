import { Optional } from "sequelize";
import { AllowNull, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import Product from "./product";

interface CategoryAttributes {
    id: string;
    name: string;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, keyof Pick<CategoryAttributes, "id">> { }

@Table
export default class Category extends Model<CategoryAttributes, CategoryCreationAttributes> {
    @PrimaryKey
    @Column({ type: DataType.UUID })
    id!: string;

    @AllowNull(false)
    @Column({ type: DataType.STRING(100) })
    name!: string;

    @HasMany(() => Product)
    products?: Product[];
} 