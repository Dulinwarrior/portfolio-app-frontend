import React from "react";
import { Drawer, List, ListItem, ListItemText, Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const CustomSideBar = ({ open, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <List style={{ width: 250 }}>
        <ListItem button>
          <Avatar style={{ marginRight: "10px" }} />
          <ListItemText>
            <Link to="/" style={{ textDecoration: "none", color: "#000" }}>
              Current Topic
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link to="/about-me" style={{ textDecoration: "none", color: "#000" }}>
              About Me
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link to="/my-work" style={{ textDecoration: "none", color: "#000" }}>
              My Work
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link to="/my-school" style={{ textDecoration: "none", color: "#000" }}>
              My School
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link to="/my-hometown" style={{ textDecoration: "none", color: "#000" }}>
              My Hometown
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link to="/my-hobbies" style={{ textDecoration: "none", color: "#000" }}>
              My Hobbies
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>
            <Link to="/contact-me" style={{ textDecoration: "none", color: "#000" }}>
              Contact Me
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default CustomSideBar;
