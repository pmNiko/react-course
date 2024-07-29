import { useDispatch, useSelector } from 'react-redux';
import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import { dateFormat } from '@/helpers';
import { ImageGallery } from '@journal/components';
import { useForm } from '@/hooks';
import { useEffect, useRef } from 'react';
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from '@/store/journal';
import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.css';

export const NoteView = () => {
  const inputUploadRef = useRef();
  const dispatch = useDispatch();
  const {
    active: note,
    isSaving,
    messageSaved,
  } = useSelector((state) => state.journal);
  const { onInputChange, title, body, date, formState } = useForm(note);

  const onSaveNote = () => dispatch(startSaveNote());

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;

    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => dispatch(startDeletingNote());

  useEffect(() => {
    const debaunce = setTimeout(() => {
      dispatch(setActiveNote(formState));
    }, 1000);

    return () => {
      clearTimeout(debaunce);
    };
  }, [formState]);

  useEffect(() => {
    !!messageSaved && Swal.fire('Buen trabajo!', messageSaved, 'success');
  }, [messageSaved]);

  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="ligth">
          {dateFormat(date)}
        </Typography>
      </Grid>

      <Grid item>
        <input
          ref={inputUploadRef}
          type="file"
          multiple
          onChange={onFileInputChange}
          style={{ display: 'none' }}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => inputUploadRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>

        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
          sx={{ p: 2 }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          label="Título"
          placeholder="Ingrese un título"
          sx={{ b: 'none', mb: 1 }}
          value={title}
          name="title"
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Que sucedio en el día de hoy?"
          minRows={5}
          sx={{ b: 'none', mt: 2, mb: 1 }}
          value={body}
          name="body"
          onChange={onInputChange}
        />
      </Grid>

      <Grid container justifyContent="end">
        <Button onClick={onDelete} sx={{ mt: 2 }} color="error">
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>

      {/* image gallery */}
      <ImageGallery />
    </Grid>
  );
};
