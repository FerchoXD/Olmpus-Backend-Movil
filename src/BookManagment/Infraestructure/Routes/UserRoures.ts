
import { Router } from "express";
import { registerUserController } from "../Dependencies";

const UserRoutes = Router();

UserRoutes.post('/create', registerUserController.run.bind(registerUserController));

export default UserRoutes;