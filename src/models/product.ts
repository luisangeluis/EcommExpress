import { Optional } from "sequelize";
import { Column, DataType, IsUUID, Model, PrimaryKey, Table } from "sequelize-typescript";

interface ProductAttributes {
    id: string;
    title: string;
    description: string;
    price: number;

}

interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> { }

@Table
export default class Product extends Model<ProductAttributes, ProductCreationAttributes> {

    @PrimaryKey
    @Column({ type: DataType.UUID })
    id!: string;

    @Column({
        type: DataType.STRING(100)
    })
    titlte!: string;

    @Column({
        type: DataType.STRING
    })
    description!: string;

    @Column({
        type: DataType.DECIMAL
    })
    price!: number;
};