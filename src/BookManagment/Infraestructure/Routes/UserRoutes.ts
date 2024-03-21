import { Router } from "express";
import { gestionPerfilController } from "../Dependencies";

const UserRouter = Router();

UserRouter.get('/info/:userUUID', gestionPerfilController.run.bind(gestionPerfilController));

export default UserRouter;