import express from 'express';
import Product from '../models/Product';

const routes = express.Router();

routes.get('/products/random', async (req, res) => {
    console.log('ue 2');
    const products = await Product.find();

    console.log(products);

    return res.json({ message: 'okay' });
});

routes.get('/', (_, res) => {
    console.log('ue');
    return res.json({ deu: 'sm' });
});

export default routes;
