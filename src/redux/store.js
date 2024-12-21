import { configureStore } from '@reduxjs/toolkit';
import notesSlice from './NotesSlice';

export const store = configureStore({
    reducer: {
        notes: notesSlice
    }
});