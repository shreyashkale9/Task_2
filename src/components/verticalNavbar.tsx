import React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DraftsIcon from "@mui/icons-material/Drafts";
import MailIcon from "@mui/icons-material/Mail";
import ReplyIcon from "@mui/icons-material/Reply";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/material";

const drawerWidth = 240;

const VerticalNavbar = () => {
  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            marginTop: 8,
            width: drawerWidth,
            backgroundColor: "#FFFFFF", // White background
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Typography
          variant="h6"
          sx={{
            mt: 2,
            ml: 2,
            mb: 7,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Menu</span>
          <Button variant="text">
            <MenuIcon />
          </Button>
        </Typography>
        <List>
          <Button sx={{ color: "#000000", textTransform: "none" }} fullWidth>
            <ListItem button>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Button>
          <Button sx={{ color: "#000000", textTransform: "none" }} fullWidth>
            <ListItem>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Draft" />
            </ListItem>
          </Button>
          <Button sx={{ color: "#000000", textTransform: "none" }} fullWidth>
            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Sent Application" />
            </ListItem>
          </Button>
          <Button sx={{ color: "#000000", textTransform: "none" }} fullWidth>
            <ListItem>
              <ListItemIcon>
                <ReplyIcon />
              </ListItemIcon>
              <ListItemText primary="Revert Back" />
            </ListItem>
          </Button>
          <Button sx={{ color: "#000000", textTransform: "none" }} fullWidth>
            <ListItem>
              <ListItemIcon>
                <FolderIcon />
              </ListItemIcon>
              <ListItemText primary="Folders" />
            </ListItem>
          </Button>
          <Button sx={{ color: "#000000", textTransform: "none" }} fullWidth>
            <ListItem>
              <ListItemIcon>
                <DeleteIcon />
              </ListItemIcon>
              <ListItemText primary="Deleted Items" />
            </ListItem>
          </Button>
          <Button sx={{ color: "#000000", textTransform: "none" }} fullWidth>
            <ListItem>
              <ListItemIcon>
                <CheckCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Check Signature" />
            </ListItem>
          </Button>
        </List>
      </Drawer>
    </Box>
  );
};

export default VerticalNavbar;
