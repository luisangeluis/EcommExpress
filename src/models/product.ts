import { Optional } from "sequelize";
import { AllowNull, Column, DataType, IsUUID, Model, NotNull, PrimaryKey, Table } from "sequelize-typescript";

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

    @AllowNull(false)
    @Column({type: DataType.STRING(100)})
    titlte!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING
    })
    description!: string;
    
    @AllowNull(false)
    @Column({
        type: DataType.DECIMAL
    })
    price!: number;
};