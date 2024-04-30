import { RequestHandler } from "express";
import Note, { NoteDocument } from "../models/node"; // Ensure the correct import path and model name

export interface IncomingBody {
  title: string;
  description?: string;
}

export const create: RequestHandler = async (req, res) => {
  try {
    const newNote = await Note.create<NoteDocument>({
      title: (req.body as IncomingBody).title,
      description: (req.body as IncomingBody).description,
    });

    res.json({ note: {id: newNote._id, title: newNote.title, description: newNote.description} });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create note', details: error });
  }
};

export const updateSingleNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params;
  try {
    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { title: req.body.title, description: req.body.description },
      { new: true, runValidators: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found!" });
    }

    res.json({ note: updatedNote });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update note', details: error });
  }
};

export const removeSingleNote: RequestHandler = async (req, res) => {
  const { noteId } = req.params;
  try {
    const removedNote = await Note.findByIdAndDelete(noteId);
    if (!removedNote) {
      return res.status(404).json({ error: "Could not find note to remove!" });
    }

    res.json({ note: {id: removedNote._id, title: removedNote.title, description: removedNote.description}});
  } catch (error) {
    res.status(500).json({ error: 'Failed to remove note', details: error });
  }
};

export const getAllNotes: RequestHandler = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json({ notes: notes.map((note) => {
      return {
        id: note._id,
        title: note.title,
        description: note.description

      }
    }) });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve notes', details: error });
  }
};

export const getSingleNote: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ error: "Note not found!" });
    }
    res.json({ note });
  } catch (error) {
    res.status(500).json({ error: 'Failed to find note', details: error });
  }
};
