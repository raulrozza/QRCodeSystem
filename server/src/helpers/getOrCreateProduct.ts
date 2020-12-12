import faker from 'faker';
import Product, { IProduct } from 'models/Product';

export default async function getOrCreateProduct(
    _id: string,
): Promise<IProduct> {
    const existingProduct = await Product.findOne({ _id });
    if (existingProduct) return existingProduct;

    const newProduct = await Product.create({
        name: faker.commerce.product(),
        price: faker.commerce.price(0, 100),
    });

    return newProduct;
}
