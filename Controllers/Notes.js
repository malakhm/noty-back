import Notes from "../Models/Notes.js";

class NotesController {
    //function to view all notes
    static async getNotes(req, res) {
        try {
            const notes = await Notes.find({ isDeleted: false });
            if (notes.length === 0) {
                return res.status(404).json({ message: "No notes found" });
            }
            res.status(200).json(notes);
        }
        catch (error) {
            res.status(500).json({ message: `server error: ${error }`});
        }
    }
    //function to view a single note
    static async getSingleNote(req, res) {
        const { id } = req.params;
        try {
            const note = await Notes.findById(id, { isDeleted: false });
            if (!note) {
                return res.status(404).json({ message: "Note not found" });
            }
            res.status(200).json(note);
        }
        catch (error) {
            res.status(500).json({ message: `server error: ${error }`});
        }
    }

    //function to create a note
    static async createNote (req, res) {
        const {title,content} = req.body;
        try {
            const newNote = await Notes.create({title, content});
            res.status(200).json(newNote);
        }
        catch (error) {
            res.status(500).json({ message: `server error: ${error }`});
        }
    }

    //function to update a note
    static async updateNote (req, res) {
        const { id } = req.params;
        try {
            const updatedNote = await Notes.findByIdAndUpdate(id, req.body, {new: true});
            if (!updatedNote) {
                return res.status(404).json({ message: "Note not found" });
            }
            res.status(200).json(updatedNote);
        }
        catch (error) {
            res.status(500).json({ message: `server error: ${error }`});
        }
    }

    //function to delete a note
    static async deleteNote (req, res) {
        const { id } = req.params;
        try {
            const deletedNote = await Notes.findByIdAndUpdate(id, { isDeleted: true }, {new: true});
            if (!deletedNote) {
                return res.status(404).json({ message: "Note not found" });
            }
            res.status(200).json({ message: "Note deleted successfully" });
        }
        catch (error) {
            res.status(500).json({ message: `server error: ${error }`});
        }
    }


}

export default NotesController;