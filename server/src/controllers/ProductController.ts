import { THRESHOLD } from 'constants/various';
import { Response } from 'express';
import Product from 'models/Product';
import faker from 'faker';

export default {
    async random(_: unknown, res: Response) {
        const products = await Product.find();

        if (products.length < THRESHOLD) {
            const product = await Product.create({
                name: faker.commerce.product(),
                price: faker.commerce.price(0, 100),
            });

            return res.json(product);
        }

        const randomProductIndex = Math.floor(Math.random() * products.length);

        const randomProduct = products[randomProductIndex];

        return res.json(randomProduct);
    },
};
