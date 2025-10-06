import express from "express"
import { adminLogin, googleLogin, logIn, logOut, registeration } from "../controller/authController.js";
import wrapAsync from "../utils/wrapAsync.js";
const authRoutes=express.Router()
authRoutes.post("/registeration",wrapAsync(registeration))
authRoutes.post("/login",wrapAsync(logIn))
authRoutes.get("/logout",wrapAsync(logOut))
authRoutes.post("/googlelogin",wrapAsync(googleLogin))
authRoutes.post("/adminlogin",wrapAsync(adminLogin))
export default authRoutes;