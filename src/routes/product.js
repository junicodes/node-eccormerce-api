
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
import createProductSchema from '../validators/product/createProduct';


/* All User */

//Get Current User
// router.get("/", authenticate, getCurrent);

//Get One User
// router.get("/one/:id", authenticate, getOne);

router.post("/create", [authenticate, upload.single('image'), yupValidate(createProductSchema)], create);

// //Update User 
// router.put("/update", [authenticate, yupValidate(productSchema)], update);

// //Update Password
// router.put("/update/password", authenticate, updatePassword);

// //Delete User
// router.delete("/delete", authenticate, deleteUser);


/* ----------------------------------------------------------------

/* Only Admin */

//Get All User 
// router.get("/all", [authenticate, isOnlyAdmin, getAllUser_v], getAll);

// //Get All User 
// router.get("/stats", [authenticate, isOnlyAdmin], getUserStat);

// //Delete One User 
// router.delete("/delete/:id", [authenticate, isOnlyAdmin], deleteOneUser)



export default router;
