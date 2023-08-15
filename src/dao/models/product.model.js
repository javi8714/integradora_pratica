import mongoose from "mongoose";
import { productCollection } from "../../constants/index.js";
import mongoosePaginate from "mongoose-paginate-v2";

//const productCollection="products"
const productSchema= new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default:0
    },
    thumbnail: {
        type: String,
        required: false 
    },
    code: {
        type: String,
        unique: true, 
        required: true
    },
    category: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
})
productSchema.plugin(mongoosePaginate);

export const productsModel = mongoose.model(productCollection,productSchema);