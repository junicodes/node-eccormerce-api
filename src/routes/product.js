
import express from 'express';
const router = express.Router();
import upload from "../packages/mutler";
//Controllers
import { create, getOne, getAll, update, destroy } from "../controllers/productController";

//Authentication and Authorization
import { authenticate } from "../middleware/authenticate";
import { isOnlyAdmin } from "../middleware/authorization";

//Validation Middleware
import yupValidate from "../middleware/yupValidate";
import { getAllUser_v } from "../middleware/custom_validation"; //_v signifies _validate middleware

//Import validator
import {createProductSchema, validateUniqueTitle, validateUpdateUniqueTitle} from '../validators/product/createProduct';

/* -----------------------------All User----------------------------------- */

//Get All
router.get("/", authenticate, getAll);

//Get One Product
router.get("/one/:id", authenticate, getOne);


/* -----------------------------Only Admin----------------------------------- */


//Products
router.post("/create", [authenticate, isOnlyAdmin, upload.single('image'), yupValidate(createProductSchema), validateUniqueTitle], create);

//Update Password
router.put("/update/:id", [authenticate, isOnlyAdmin, upload.single('image'), yupValidate(createProductSchema), validateUpdateUniqueTitle], update);

// //Delete User
router.delete("/delete/:id", authenticate, destroy);

export default router;
