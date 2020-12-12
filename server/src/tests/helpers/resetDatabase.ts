import Product from 'models/Product';
import User from 'models/User';

export const resetDatabase = async () => {
    await Promise.all([Product.deleteMany(), User.deleteMany()]);
};
