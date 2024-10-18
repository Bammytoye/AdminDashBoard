import { User } from './models';
import { connectToDB } from './utils';

export const fetchUsers = async (q, page) => {
    console.log(q)
    const regex = new RegExp(q, 'i');

    const Item_Per_Page = 3

    try {
        connectToDB()
        const count = await User.find({username: {$regex : regex} }).count();
        const users = await User.find({ 
            username: {$regex : regex} }).limit(Item_Per_Page).skip(Item_Per_Page * (page-1));
        return (count, users);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch Users");
        
    }
}