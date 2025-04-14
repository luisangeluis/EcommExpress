import { Sequelize } from "sequelize-typescript";
import { dbName, dbPassword, dbUser, host } from "../config";
import path from "path";
import { createFakeData } from "../seeders/createFakeData";

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host,
    dialect: 'mysql',
    models: [path.join(__dirname, "../models")],
})

export const connectToDB = async () => {
    try {
        await sequelize.authenticate();//
        await sequelize.sync();
    } catch (error) {
        throw new Error(`Unable to connect to the database: ${error}`);
    }
}


