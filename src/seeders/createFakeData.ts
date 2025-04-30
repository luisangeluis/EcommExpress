import Category from "../models/category";
import Product from "../models/product";
import Role from "../models/role";
import User from "../models/user";
import { getUUID } from "../plugins/uuid";
import { sequelize } from "../db/sequelizeConnect";

export const createFakeData = async () => {
    try {
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
        await Product.destroy({ truncate: true, cascade: true });
        await Category.destroy({ truncate: true, cascade: true });
        await User.destroy({ truncate: true, cascade: true });
        await Role.destroy({ truncate: true, cascade:true });

        await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');


        const categories = await Category.bulkCreate([
            {
                id: getUUID(),
                name: "toys"
            },
            {
                id: getUUID(),
                name: "electronic"
            },
            {
                id: getUUID(),
                name: "school"
            },
            {
                id: getUUID(),
                name: "home"
            }
        ])
        await Product.bulkCreate([
            {
                id: getUUID(),
                title: "ball",
                description: "a ball",
                price: 50,
                categoryId: categories[0].id
            },
            {
                id: getUUID(),
                title: "xbox",
                description: "a xbox",
                price: 400,
                categoryId: categories[1].id
            },
            {
                id: getUUID(),
                title: "smartphone",
                description: "a smartphone",
                price: 300,
                categoryId: categories[1].id
            },
            {
                id: getUUID(),
                title: "laptop",
                description: "a laptop",
                price: 600,
                categoryId: categories[1].id
            },
            {
                id: getUUID(),
                title: "backpack",
                description: "a backpack",
                price: 150.50,
                categoryId: categories[2].id

            },
            {
                id: getUUID(),
                title: "ball",
                description: "a ball",
                price: 500,
                categoryId: categories[0].id
            },
            {
                id: getUUID(),
                title: "jeans",
                description: "jeans",
                price: 250,
                categoryId: categories[3].id
            },
            {
                id: getUUID(),
                title: "power outlet",
                description: "a power outlet",
                price: 100.25,
                categoryId: categories[3].id
            },
            {
                id: getUUID(),
                title: "toy cart",
                description: "a toy cart",
                price: 80.90,
                categoryId: categories[0].id
            },
            {
                id: getUUID(),
                title: "microwave",
                description: "a microwave",
                price: 225.50,
                categoryId: categories[3].id
            }
        ], {
            validate: true
        });

        const roles = await Role.bulkCreate([
            { id: getUUID(), name: "admin" },
            { id: getUUID(), name: "seller" },
            { id: getUUID(), name: "client" }
        ],
            { validate: true })

        await User.bulkCreate([
            { id: getUUID(), firstName: "luis", lastName: "gonzalez", email: "luis@email.com", password: "luis123abc", roleId: roles[0].id },
            { id: getUUID(), firstName: "angel", lastName: "ramirez", email: "angel@email.com", password: "angel123abc", roleId: roles[1].id },
            { id: getUUID(), firstName: "pedro", lastName: "lopez", email: "pedro@email.com", password: "pedro123abc", roleId: roles[2].id },

        ], { validate: true })


    } catch (error: any) {
        console.log(error);
    }
}