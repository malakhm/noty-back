import NotesController from "../Controllers/Notes.js";
import { Router } from "express";

const NotesRouter = Router();

NotesRouter.get("/notes/:id", NotesController.getSingleNote);
NotesRouter.get("/notes", NotesController.getNotes);
NotesRouter.post("/notes", NotesController.createNote);
NotesRouter.put("/notes/:id", NotesController.updateNote);
NotesRouter.delete("/notes/:id", NotesController.deleteNote);

export default NotesRouter;