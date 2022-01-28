import mongoose from 'mongoose';


const OrderSchema = new mongoose.Schema(
    {
        userId: { type: String, required: true, unique: true },
        products: [
            {
                productId: {
                    type: String
                },
                quantity: {
                    type: Number,
                    default: 1,
                }
            },
        ],
        amount: { type: Number, required: true},
        address: { type: Object,  require: true },
        status: {type: String, default: "pending"}
    },
    { timestamps: true }
);

export default mongoose.model("orders", OrderSchema)