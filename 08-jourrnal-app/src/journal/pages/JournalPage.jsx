import { JournalLayout } from "@journal/Layout";
import { NoteView, NothingSelectedView } from "@journal/views";
import { AddOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
        repellendus porro corporis nihil facilis debitis consequatur non illum
        sed mollitia!
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "secondary.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
