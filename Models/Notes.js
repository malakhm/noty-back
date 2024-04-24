import mongoose from "mongoose";

const { Schema } = mongoose;

const NoteSchema = new Schema({
    title: {
        type: String,
        required: true 
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Notes", NoteSchema);
