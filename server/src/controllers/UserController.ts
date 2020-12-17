import { Request, Response } from 'express';
import getOrCreateProduct from 'helpers/getOrCreateProduct';
import getOrCreateUser from 'helpers/getOrCreateUser';

export default {
    async discount(req: Request, res: Response) {
        const { user, product } = req.body;

        const storedUser = await getOrCreateUser(user);
        const storedProduct = await getOrCreateProduct(product);

        if (!storedUser || !storedProduct)
            return res.status(401).json({ error: 'Unknown product or user' });

        const priceWithDiscount =
            storedProduct.price - storedProduct.price * storedUser.discount;

        return res.json({ price: priceWithDiscount });
    },
};
