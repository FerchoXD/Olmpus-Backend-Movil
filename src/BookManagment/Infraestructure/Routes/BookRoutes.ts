import { Router } from "express";
import { getBookPreviewController, getBooksByNameController, getBooksController, recommendBookController } from "../Dependencies";

const BookRouter = Router();

// Recomendar libros a traves del uuid de un usuario
BookRouter.get('/recomend/:userUUID', recommendBookController.run.bind(recommendBookController));

// Obtener una preview de un libro en especifico
BookRouter.get('/:bookUUID/preview', getBookPreviewController.run.bind(getBookPreviewController));

// Obtener un o unos libros a traves de su nombre
BookRouter.get('/search/:name', getBooksByNameController.run.bind(getBooksByNameController));

// Obtener libros
BookRouter.get('/books', getBooksController.run.bind(getBooksController));

export default BookRouter;