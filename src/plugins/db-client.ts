import { Model } from "sequelize-typescript"
import { CreationAttributes, FindOptions, ModelStatic } from "sequelize";

export const buildDbClient = <T extends Model>(model: ModelStatic<T>) => {
    return {
        findAll: async (options?: FindOptions<T>) => {
            return await model.findAll(options);
        },
        findById: async (id: string, options?: FindOptions<T>) => {
            return await model.findByPk(id, options);
        },
        findOne:async(options?:FindOptions<T>)=>{
            return await model.findOne(options);
        },
        create: async (data: CreationAttributes<T>) => {
            return await model.create(data);
        },
        update: async (id: string, data: Partial<CreationAttributes<T>>,) => {
            const instance = await model.findByPk(id);
            if (!instance) return null;
            return await instance.update(data);
        },
        delete: async (id: string) => {
            const instance = await model.findByPk(id);
            if (!instance) return false;
            await instance.destroy();
            return true;
        },
    }
}