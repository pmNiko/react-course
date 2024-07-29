import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSaving: false,
  messageSaved: '',
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    savingNewNote: (state, action) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = '';
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
      state.active = action.payload.at(0);
    },
    setSaving: (state, action) => {
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.messageSaved = `${action.payload.title}, actualizada correctamente.`;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
    },
    setPhotosToActiveNote: (state, action) => {
      const current = state.active.imageUrls ? state.active.imageUrls : [];
      state.active.imageUrls = [...current, ...action.payload];
      state.isSaving = false;
    },

    clearNotesLogout: (state, action) => {
      state.isSaving = false;
      state.messageSaved = '';
      state.notes = [];
      state.active = null;
    },

    deleteNoteById: (state, action) => {
      const stateNotesUpdated = state.notes.filter(
        (note) => note.id !== action.payload.id
      );
      state.notes = stateNotesUpdated;
      state.active = stateNotesUpdated.at(0);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  setPhotosToActiveNote,
  clearNotesLogout,
  deleteNoteById,
} = journalSlice.actions;
