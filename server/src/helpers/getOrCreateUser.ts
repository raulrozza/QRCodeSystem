import { discounts } from 'constants/discouts';
import faker from 'faker';
import User, { IUser } from 'models/User';

const getRandomDiscount = () => {
    const discountIndex = Math.floor(Math.random() * discounts.length);

    return discounts[discountIndex];
};

export default async function getOrCreateUser(
    _id: string,
): Promise<IUser | null> {
    try {
        const existingUser = await User.findOne({ _id });
        if (existingUser) return existingUser;

        const newUser = await User.create({
            username: faker.name.findName(),
            discount: getRandomDiscount(),
        });

        return newUser;
    } catch (error) {
        console.error(error);
        return null;
    }
}
