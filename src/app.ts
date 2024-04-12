import express from "express";
import "dotenv/config";
import BookRouter from "./BookManagment/Infraestructure/Routes/BookRoutes";
import UserRoutes from "./BookManagment/Infraestructure/Routes/UserRoutes";
import { jwtMiddleware } from "./BookManagment/Infraestructure/middlewares/JWTMiddleware";

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    if (req.path === '/api/v1/users/register' || req.path === '/api/v1/users/login') {
      return next();
    }
    jwtMiddleware(req, res, next);
  });
  

app.use('/api/v1/books', BookRouter);
app.use('/api/v1/users', UserRoutes);

app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING IN http://localhost:${process.env.PORT}`);
});
