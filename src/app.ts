import express from "express";
import "dotenv/config";
import BookRouter from "./BookManagment/Infraestructure/Routes/BookRoutes";
import UserRoutes from "./BookManagment/Infraestructure/Routes/UserRoutes";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/books', BookRouter);
app.use('/api/v1/users', UserRoutes);

app.listen(process.env.PORT, () => {
    console.log(`SERVER RUNNING IN http://localhost:${process.env.PORT}`);
});