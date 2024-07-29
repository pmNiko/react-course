import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '@/store/journal';
import { TurnedInNot } from '@mui/icons-material';
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

export const SideBarItem = ({ note, imageUrls = [] }) => {
  const dispatch = useDispatch();
  if (!note) return false;

  const { title, body } = note;

  const customTitle = useMemo(() => {
    return title.length > 17 ? title.substring(0, 17) + '...' : title;
  }, [title]);

  const onClick = () => dispatch(setActiveNote({ ...note, imageUrls }));

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={customTitle} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
