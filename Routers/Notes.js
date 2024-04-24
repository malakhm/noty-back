import NotesController from "../Controllers/Notes.js";
import { Router } from "express";

const NotesRouter = Router();

NotesRouter.get("/:id", NotesController.getSingleNote);
NotesRouter.get("/", NotesController.getNotes);
NotesRouter.post("/", NotesController.createNote);
NotesRouter.put("/edit/:id", NotesController.updateNote);
NotesRouter.put("/delete/:id", NotesController.deleteNote);

export default NotesRouter;