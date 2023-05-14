import express  from "express";
import booksRouter from "./routes/books.routes.js";
const app = express();

app.get("/",(req, res)=>{
res.status(200).send("backend is working");
});


app.use("/books", booksRouter);


app.listen(8000, ()=>
console.log("server has started")
)