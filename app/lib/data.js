import { User } from "./models"; 
import { connectToDB } from "./utils"; 

export const fetchUsers = async (q) => {
    const regex = new RegExp(q, 'i')
    console.log(q)
    try {
        // Ensure that connectToDB is awaited to complete before proceeding
        await connectToDB();
        
        // Verify User model is correctly defined and accessible
        const users = await User.find({ username: {$regex: regex} });
        return users;
    } catch (err) {
        // Enhanced error logging to display more information
        console.error('Error occurred while fetching users:', err.message);
        throw new Error('Failed to fetch users: ' + err.message); // Pass the actual error message
    }
};
