import { NavBar, Sidebar } from "@journal/components";
import { Box, Toolbar } from "@mui/material";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar drawerWidth*/}
      <NavBar drawerWidth={drawerWidth} />

      {/* Sidebar drawerWidth*/}
      <Sidebar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
