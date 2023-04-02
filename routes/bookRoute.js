import { Router } from "express";
import { borrowBook, checkBorrowed, findAllBooks, insertBook, returnBook } from "../controllers/bookController.js";

const bookRoute = Router();

bookRoute.post("/", insertBook);
bookRoute.get("/", findAllBooks);
bookRoute.put("/", borrowBook);
bookRoute.get("/", checkBorrowed);
bookRoute.put("/", returnBook);

export default bookRoute;
