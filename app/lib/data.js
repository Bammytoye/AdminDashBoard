// // fetchUsers.js
// import { User } from "./models"; 
// import { connectToDB } from "./utils"; 

// export const fetchUsers = async () => {
//     try {
//         // Ensure that connectToDB is awaited to complete before proceeding
//         await connectToDB();
        
//         // Verify User model is correctly defined and accessible
//         if (mongoose.connection.readyState !== 1) {
//             throw new Error('Database connection not established');
//         }
        
//         const users = await User.find();
//         return users;
//     } catch (err) {
//         // Enhanced error logging to display more information
//         console.error('Error occurred while fetching users:', err.message);
//         throw new Error('Failed to fetch users: ' + err.message); // Pass the actual error message
//     }
// };