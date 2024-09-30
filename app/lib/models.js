const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    img: {
        type: String,
    },
    
    isAdmin: {
        type: Boolean,
        default:false,
    }, 

    isActive: {
        type: Boolean,
        default:true,
    },

    phone: {
        type: String,
    },

    address: {
        type: String,
    },
}, {timestamps: true});

const ProductSchema = new mongoose.Schema ( {
    itemName: {
        type: String,
        required: true,
        unique: true,
    },

    description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true,
        min: 0,
    },

    stock: {
        type: Number,
        required: true,
        min: 0,
    },

    img: {
        type: String,
    },
    
    category: {
        type: String,
        required: true,
        enum: ['smartphone', 'laptop', 'headset'], 
        default: '' 
    }, 

    condition: {
        type: String,
        required: true,
        enum: ['Refurbished', 'new', 'used'], 
        default: '' 
    },
    
    }, {timestamps: true}
);

export const User = mongoose.models.User || mongoose.model('User', UserSchema )
export const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema )