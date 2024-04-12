import { Router } from "express";
import { deleteUserByUUIDController, getBooksFavoritesController, getBooksInHistoryController, getUserController, loginController, readBookController, registerUserController, saveBookInHistoryController, updateUserController } from "../Dependencies";

const UserRoutes = Router();

// Login
UserRoutes.post('/login', loginController.run.bind(loginController));

// Register
UserRoutes.post('/register', registerUserController.run.bind(registerUserController));

// Obtener los datos del user
UserRoutes.get('/:userUUID', getUserController.run.bind(getUserController));

// Actualizar algunos datos o todos los datos de algun usuario
UserRoutes.patch('/:userUUID', updateUserController.run.bind(updateUserController));

// Obtener un libro y crear un registro para el historial del usuario
UserRoutes.post('/:userUUID/books/:bookUUID', readBookController.run.bind(readBookController));

// Obtener los libros favoritos de un usuario
UserRoutes.get('/:userUUID/favorites/books', getBooksFavoritesController.run.bind(getBooksFavoritesController));

// Guardar como favorito un libro especifico de un usuario especifico
UserRoutes.post('/:userUUID/favorites/books/:bookUUID', saveBookInHistoryController.run.bind(saveBookInHistoryController));

// Obtener el historial de libros de un usuario especifico
UserRoutes.get('/:userUUID/history/books', getBooksInHistoryController.run.bind(getBooksInHistoryController));

// Eliminar un usuario por uuid
UserRoutes.delete('/delete/:userUUID', deleteUserByUUIDController.run.bind(deleteUserByUUIDController));

export default UserRoutes;
