import { useEffect, useState } from "react";
import CreateNoteButton from "./CreateNoteButton";
import { useDispatch, useSelector } from "react-redux";
import { BorderColor, Delete } from "@mui/icons-material";
import { setSelectedId } from "../redux/NotesSlice";

export default function Sidebar({ handleCreateNote }) {
  const [notes, setNotes] = useState([]);
  const allNotes = useSelector((state) => state.notes.allNotes);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedData = localStorage.getItem("notes");
    if (allNotes && allNotes.length !== 0) {
      setNotes(allNotes);
    } else if (savedData) {
      setNotes(JSON.parse(savedData));
    }
  }, [allNotes]);

  function handleDeleteNote() {}

  function handleEditNote(id) {
    setSelected(id)
    handleCreateNote(true);
    dispatch(setSelectedId(id));
  }

  return (
    <aside>
      <div className="flex items-center justify-between pl-2">
        <h4 className="font-medium">All Notes</h4>
        <CreateNoteButton />
      </div>
      <ul className="pt-7 flex flex-col gap-2 text-[14px]">
        {notes &&
          notes.map((note, index) => (
            <li
              onClick={() => handleEditNote(note.id)}
              key={index}
              className={
                selected === note.id
                  ? "rounded px-2.5 py-1 border border-blue-100 bg-blue-50 text-blue-600 font-medium cursor-pointer note-item hover:flex hover:justify-between"
                  : "rounded px-2.5 py-1 border border-white bg-white hover:bg-gray-100 hover:border-gray-200 cursor-pointer note-item hover:flex hover:justify-between"
              }
            >
              <span>{note.title}</span>
              <div className="flex gap-2 items-center">
                <button
                  onClick={() => handleEditNote(note.id)}
                  type="button"
                  className="note-icons text-inherit"
                >
                  <BorderColor sx={{ fontSize: "18.5px" }} />
                </button>
                <button
                  onClick={handleDeleteNote}
                  type="button"
                  className="note-icons text-inherit"
                >
                  <Delete fontSize="small" />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </aside>
  );
}
