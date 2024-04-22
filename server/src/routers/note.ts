import { Router } from "express";
import { create, getAllNotes, getSingleNotes, removeSingleNote, updateSingleNote } from "../controllers/note";

const router = Router()



router.post("/create", create);

router.patch("/:noteId", updateSingleNote);

router.delete("/:noteId", removeSingleNote);

router.get('/', getAllNotes);

router.get('/:id', getSingleNotes);

export default router;
