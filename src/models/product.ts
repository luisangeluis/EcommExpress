import { Optional } from "sequelize";
import { AllowNull, BelongsTo, Column, DataType, ForeignKey, IsUUID, Model, NotNull, PrimaryKey, Table } from "sequelize-typescript";
import Category from "./category";

interface ProductAttributes {
    id: string;
    title: string;
    description: string;
    price: number;
    categoryId:string;

}

export interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> { }

@Table
export default class Product extends Model<ProductAttributes, ProductCreationAttributes> {

    @PrimaryKey
    @Column({ type: DataType.UUID })
    id!: string;

    @AllowNull(false)
    @Column({ type: DataType.STRING(100) })
    title!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING
    })
    description!: string;

    @AllowNull(false)
    @Column({
        type: DataType.DECIMAL(10,2)
    })
    price!: number;

    @ForeignKey(() => Category)
    @AllowNull(false)
    @Column({ type: DataType.UUID })
    categoryId!: string


    @BelongsTo(() => Category)
    category!: Category;
};