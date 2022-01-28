
import express from 'express';
const router = express.Router();

//Controllers
import { getCurrent, getOne, getAll, update, updatePassword, deleteUser, deleteOneUser, getUserStat } from "../controllers/userController";

//Authentication and Authorization
import { authenticate } from "../middleware/authenticate";
import { isOnlyAdmin } from "../middleware/authorization";

//Validation Middleware
import yupValidate from "../middleware/yupValidate";
import { getAllUser_v } from "../middleware/custom_validation"; //_v signifies _validate middleware

//Import validator
import updateUserSchema from '../validators/user/updateProfile';


/* All User */

//Get Current User
router.get("/", authenticate, getCurrent);

//Get One User
router.get("/one/:id", authenticate, getOne);

//Update User 
router.put("/update", [authenticate, yupValidate(updateUserSchema)], update);

//Update Password
router.put("/update/password", authenticate, updatePassword);

//Delete User
router.delete("/delete", authenticate, deleteUser);


/* ----------------------------------------------------------------

/* Only Admin */

//Get All User 
router.get("/all", [authenticate, isOnlyAdmin, getAllUser_v], getAll);

//Get All User 
router.get("/stats", [authenticate, isOnlyAdmin], getUserStat);

//Delete One User 
router.delete("/delete/:id", [authenticate, isOnlyAdmin], deleteOneUser)



export default router;
