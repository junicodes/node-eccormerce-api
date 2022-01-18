
const mongoose = require("mongoose");

export const connectDB = () => {
    mongoose
        .connect(
            process.env.MONGO_URL
        )
        .then(() => console.log("DbConnection is Successful!"))
        .catch((err) => {
            console.log(err)
        });
}
