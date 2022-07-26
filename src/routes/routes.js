import {Router} from "express";
import {loginRoutes} from "./login/login.js";
import {registerRoutes} from "./register/register.js";

const routes=Router();

routes.use("/",loginRoutes);
routes.use("/register",registerRoutes);

export {routes};