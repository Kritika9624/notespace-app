import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNotes: [],
  selectedId: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      state.allNotes = action.payload;
    },
    setSelectedId(state, action) {
      state.selectedId = action.payload;
    }
  },
});
export const { addNote, setSelectedId } = notesSlice.actions;
export default notesSlice.reducer;
