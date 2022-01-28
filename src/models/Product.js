import mongoose from 'mongoose';


const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true },
        categories: { type: Array, required: true },
        sizes: { type: String },
        colors: { type: String },
        image: { type: String, required: true },
        price: { type: String, required: true },
        currency: { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("products", ProductSchema)