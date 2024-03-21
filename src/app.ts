import express from "express";
import "dotenv/config";
import BookRouter from "./BookManagment/Infraestructure/Routes/BookRoutes";
import UserRouter from "./BookManagment/Infraestructure/Routes/UserRoutes";

const app = express();

app.use(express.json());

app.use('/api/v1/books', BookRouter);
app.use('/api/v1/perfils', UserRouter);

app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING IN http://localhost:${process.env.PORT}`);
});