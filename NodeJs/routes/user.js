import express from "express";
import { signUp, logIn } from "../controllers/user.js";

const userRouter = express.userRouter();
userRouter.post("/signup", signUp());
userRouter.post("/login", logIn());
export default userRouter;
