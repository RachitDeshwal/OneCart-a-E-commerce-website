import express from "express"
import { getCurrentUser } from "../controller/userController.js";
import { isAuth } from "../middleware/isAuth.js";
import wrapAsync from "../utils/wrapAsync.js";
import adminAuth from "../middleware/adminAuth.js";
import { getAdmin } from "../controller/userController.js";
const userRoute=express.Router()
userRoute.post("/getcurrentuser",isAuth,getCurrentUser)
userRoute.post("/getadmin",adminAuth,getAdmin)
export  default userRoute;