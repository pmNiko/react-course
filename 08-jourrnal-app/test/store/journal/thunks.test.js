import {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  startDeletingNote,
  startLoadingNotes,
  startNewNote,
  startSaveNote,
  startUploadingFiles,
  updateNote,
} from '@/store/journal';

import { FirebaseDeleteDocs } from '../../Firebase/utilities';
import { newNote } from '../../fixtures/journalFixtures';

describe('Pruebas en Journal App', () => {
  const dispatch = jest.fn();
  const getState = jest.fn();
  const uid = 'TEST-UID';

  beforeEach(() => jest.clearAllMocks());

  test('"startNewNote" Debe crear una nueva nota en blanco', async () => {
    const matchEmptyNote = {
      title: '',
      body: '',
      id: expect.any(String),
      date: expect.any(Number),
    };

    getState.mockReturnValue({ auth: { uid } });

    await startNewNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(savingNewNote());
    expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote(matchEmptyNote));
    expect(dispatch).toHaveBeenCalledWith(setActiveNote(matchEmptyNote));

    // Borrar de Firebase
    await FirebaseDeleteDocs(uid);
  });

  test('"startLoadingNotes" - Debe cargar las notas de un usuario', async () => {
    getState.mockReturnValue({ auth: { uid } });

    await startNewNote()(dispatch, getState);

    await startLoadingNotes()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(setNotes(expect.any(Array)));

    // Borrar de Firebase
    await FirebaseDeleteDocs(uid);
  });

  test('"startLoadingNotes" - Debe lanzar un error si el uid no existe', async () => {
    getState.mockReturnValue({ auth: false });
    // try {
    //   await startLoadingNotes()(dispatch, getState);
    // } catch (error) {
    //   expect(error.message).toEqual('User ID not available!');
    // }

    await expect(startLoadingNotes()(dispatch, getState)).rejects.toThrow();

    await expect(startLoadingNotes()(dispatch, getState)).rejects.toThrow(
      'User ID not available!'
    );
  });

  test('"startSaveNote" - Debe guardar una nota', async () => {
    getState.mockReturnValue({ auth: { uid }, journal: { active: newNote } });

    await startSaveNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(setSaving());
    expect(dispatch).toHaveBeenCalledWith(updateNote(newNote));
  });

  test('"startUploadingFiles" - Debe actualizar las imagenes de la nota activa', async () => {
    await startUploadingFiles()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(setSaving());
    expect(dispatch).toHaveBeenCalledWith(
      setPhotosToActiveNote(expect.any(Array))
    );
  });

  test('"startDeletingNote" - Debe eliminar una nota', async () => {
    getState.mockReturnValue({ auth: { uid }, journal: { active: newNote } });

    await startDeletingNote()(dispatch, getState);

    expect(dispatch).toHaveBeenCalledWith(setSaving());
    expect(dispatch).toHaveBeenCalledWith(
      deleteNoteById({ id: expect.any(String), ...newNote })
    );
  });
});
