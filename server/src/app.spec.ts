import request from 'supertest';
import app from './app';
import { setEnvToTest } from 'tests/helpers/setEnv';
import { resetDatabase } from 'tests/helpers/resetDatabase';
import Product from 'models/Product';
import User from 'models/User';

describe('Fetching product data', () => {
    beforeAll(async () => {
        setEnvToTest();
        await resetDatabase();
    });

    it('should get a random product id and name dynamically created', async () => {
        const response = await request(app).get('/products/random').expect(200);

        const product = response.body;

        const productKeys = Object.keys(product);

        expect(productKeys).toContain('name');
        expect(productKeys).toContain('price');
    });

    it('should receive the products price with discount', async () => {
        const product = await Product.create({
            name: 'My Product',
            price: 15,
        });
        const user = await User.create({
            username: 'Marcos',
            discount: 0.2,
        });

        const response = await request(app)
            .post('/user/discount')
            .send({
                user: user._id,
                product: product._id,
            })
            .expect(200);

        const priceWithDiscount = product.price - product.price * user.discount;

        const data = response.body as { price: number };

        expect(data.price).toBe<number>(priceWithDiscount);
    });

    it('should return a random already created product after three products are created', async () => {
        await resetDatabase();

        const responses = await Promise.all([
            request(app).get('/products/random').expect(200),
            request(app).get('/products/random').expect(200),
            request(app).get('/products/random').expect(200),
        ]);

        const createdProducts = responses.map(response => response.body);

        const fourthResponse = await request(app)
            .get('/products/random')
            .expect(200);
        const alreadyCreatedProduct = fourthResponse.body;

        expect(createdProducts).toContainEqual(alreadyCreatedProduct);
    });

    it('should create both the user and product an return a response', async () => {
        const response = await request(app).post('/user/discount').send();

        expect(response.status).toBe(200);
    });
});
