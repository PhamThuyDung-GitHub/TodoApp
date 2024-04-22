import { RequestHandler } from 'express';
import Note, { NoteDocument } from '../models/node'

export interface IncomingBody {
    title: string;
    description?: string;
  }


export const create: RequestHandler= async (req, res) => {
    // const newNote = new Note<NoteDocument>({
    //   title: (req.body as IncomingBody).title,
    //   description: (req.body as IncomingBody).description,
    // });
  
    // await newNote.save();
  
    await Note.create<NoteDocument>({
      title: (req.body as IncomingBody).title,
      description: (req.body as IncomingBody).description,
    });
}

export const updateSingleNote : RequestHandler = async (req, res) => {
    const { noteId } = req.params;
    // const note = await Note.findById(noteId);
    // if (!note) return res.json({ error: "Note not found!" });
  
    const { title, description } = req.body as IncomingBody;
    // if (title) note.title = title;
    // if (description) note.description = description;
  
    const note = await Note.findByIdAndUpdate(
      noteId,
      { title, description },
      { new: true }
    );
    if (!note) return res.json({ error: "Note not found!" });
  
    await note.save();
  
    res.json({ note });
  };

export const removeSingleNote : RequestHandler = async (req, res) => {
    const { noteId } = req.params;
  
    const removeNote = await Note.findByIdAndDelete(noteId)
    
    if(removeNote) return res.json({error: 'Could not remove note!'})
  
      res.json({message: "Note removed successfully."})
    
  };

export const getAllNotes : RequestHandler = async (req, res) => {
    const note = await Note.find()
    res.json({note})
  };
  
export const getSingleNotes : RequestHandler = async (req, res) => {
    const note = await Note.find()
    res.json({note})
  };