import {
  addNewEmptyNote,
  clearNotesLogout,
  deleteNoteById,
  journalSlice,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from '@/store/journal';
import {
  initialState,
  initialStatePhotos,
  newNote,
  newNoteTwo,
} from '../../fixtures/journalFixtures';

describe('Pruebas en el journalSlice ', () => {
  const state = journalSlice.reducer(initialState, {});

  test('Debe de regresar el estado inicial y llamarse "journal"', () => {
    expect(state).toEqual(initialState);
    expect(journalSlice.name).toEqual('journal');
  });
  test('El estado inicial debe tener "isSaving" en false', () => {
    expect(state.isSaving).toEqual(false);
  });
  test('El estado inicial debe tener "notes" en []', () => {
    expect(state.notes).toEqual([]);
    expect(state.notes).toHaveLength(0);
    expect(state.notes).toEqual(expect.any(Array));
  });
  test('El estado inicial debe tener "messageSaved" en null y "active" en false', () => {
    expect(state.messageSaved).toEqual('');
    expect(state.active).toBeFalsy();
  });

  test('"savingNewNote" debe cambiar "isSaving" a true', () => {
    const state = journalSlice.reducer(initialState, savingNewNote);

    expect(state.isSaving).toBeTruthy();
  });

  test('"addNewEmptyNote" agrega una nueva nota y cambia "isSaving" a false', () => {
    const state = journalSlice.reducer(initialState, addNewEmptyNote(newNote));

    expect(state.isSaving).toBeFalsy();
    expect(state.notes).toHaveLength(1);
    expect(state.notes).toContain(newNote);
  });

  test('"setActiveNote" coloca una nota como activa y resetea "messageSaved"', () => {
    const state = journalSlice.reducer(initialState, setActiveNote(newNote));

    expect(state.active).toBe(newNote);
    expect(state.messageSaved).toBeFalsy();
  });

  test('"setNotes" carga las notas de la nube al store y coloca la 1º como activa ', () => {
    const state = journalSlice.reducer(
      initialState,
      setNotes([newNote, newNoteTwo])
    );

    expect(state.notes).toHaveLength(2);
    expect(state.active).toBe(newNote);
  });

  test('"setSaving" coloca "isSaving" a true y resetea "messageSaved"', () => {
    const state = journalSlice.reducer(initialState, setSaving());

    expect(state.isSaving).toBeTruthy();
    expect(state.messageSaved).toBeFalsy();
  });

  test('"updateNote" coloca "isSaving" a false y setea "messageSaved" con el "${title}, actualizada correctamente."', () => {
    const state = journalSlice.reducer(initialState, updateNote(newNote));

    expect(state.isSaving).toBeFalsy();
    expect(state.messageSaved).toEqual(
      `${newNote.title}, actualizada correctamente.`
    );
  });

  test('"updateNote" actualiza los datos de una nota', () => {
    const initialStateNotes = journalSlice.reducer(
      initialState,
      setNotes([newNote])
    );

    expect(initialStateNotes.notes.at(0)).toBe(newNote);
    expect(initialStateNotes.notes[0].title).toEqual(newNote.title);

    const updatedState = journalSlice.reducer(
      initialStateNotes,
      updateNote({
        ...newNote,
        title: 'This is a other title',
      })
    );

    expect(updatedState.notes[0].title).toEqual('This is a other title');
  });

  test('"setPhotosToActiveNote" actualiza el array de imagenes y setea "isSaving" a false', () => {
    const state = journalSlice.reducer(
      initialStatePhotos,
      setPhotosToActiveNote(['https://example.jpg'])
    );

    expect(state.active.imageUrls).toHaveLength(3);
  });

  test('"clearNotesLogout" resetea el estado', () => {
    const state = journalSlice.reducer(initialStatePhotos, clearNotesLogout());

    expect(state).toEqual(initialState);
  });

  test('"clearNotesLogout" resetea el estado', () => {
    const state = journalSlice.reducer(initialStatePhotos, clearNotesLogout());

    expect(state).toEqual(initialState);
  });

  test('"deleteNoteById" elimina una nota por ID', () => {
    const state = journalSlice.reducer(initialState, setNotes([newNote]));

    expect(state.notes).toHaveLength(1);

    const deleteState = journalSlice.reducer(
      state,
      deleteNoteById({ id: newNote.id })
    );

    expect(deleteState.notes).toHaveLength(0);
  });
});
