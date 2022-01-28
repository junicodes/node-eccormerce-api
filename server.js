import express, { json, urlencoded } from "express";
import { config } from "dotenv";
//Import db connection 
import { connectDB } from "./database/mongodb";

//Connect Express
const app = express();
//Connect Env
config();
//Connect Mongo
connectDB();

//Import routes
import generalRoute from "./src/routes";
import authRoute from "./src/routes/auth";
import userRoute from "./src/routes/user";
import productRoute from "./src/routes/product";

//Allow Express par
// app.use(urlencoded());
app.use(json());
app.use(urlencoded({ extended: false }));

//Server Test route
app.get("/", (req, res) => {
    return res.send("ready for building");
});

app.get("/api/v1/test", () => {
    console.log("test is successful")
});

//Use routes

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/general", generalRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/products", productRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("backend server is running");
});