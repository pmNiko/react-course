import { useDispatch, useSelector } from 'react-redux';
import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { JournalLayout } from '@journal/Layout';
import { NoteView, NothingSelectedView } from '@journal/views';
import { startNewNote } from '@/store/journal';

export const JournalPage = () => {
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
        repellendus porro corporis nihil facilis debitis consequatur non illum
        sed mollitia!
      </Typography> */}

      {!!active ? <NoteView /> : <NothingSelectedView />}

      <IconButton
        size="large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'secondary.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50,
        }}
        onClick={onClickNewNote}
        disabled={isSaving}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
