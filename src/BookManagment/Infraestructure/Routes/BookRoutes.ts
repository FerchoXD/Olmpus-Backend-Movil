import { Router } from "express";
import { recommendBookController } from "../Dependencies";

const BookRouter = Router();

BookRouter.get('/recomend/:userUUID', recommendBookController.run.bind(recommendBookController));

export default BookRouter;