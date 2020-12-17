import faker from 'faker';
import Product, { IProduct } from 'models/Product';

export default async function getOrCreateProduct(
    _id: string,
): Promise<IProduct | null> {
    try {
        const existingProduct = await Product.findOne({ _id });
        if (existingProduct) return existingProduct;

        const newProduct = await Product.create({
            name: faker.commerce.product(),
            price: faker.commerce.price(0, 100),
        });

        return newProduct;
    } catch (error) {
        console.error(error);

        return null;
    }
}
