import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
// import Divider from '@mui/material/Divider';
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import ListItemButton from "@mui/material/ListItemButton";

export default function AlignItemsList({ creatorName, creatorStatus, clickfunc, chatid }) {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      <ListItemButton onClick={() => clickfunc(chatid)}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={creatorName} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={creatorName}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {creatorStatus}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </ListItemButton>
    </List>
  );
}

AlignItemsList.propTypes = {
  creatorName: PropTypes.string.isRequired,
  creatorStatus: PropTypes.string.isRequired,
  clickfunc: PropTypes.func.isRequired,
  chatid: PropTypes.number.isRequired
};
