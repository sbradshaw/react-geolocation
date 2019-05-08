import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import PlaceIcon from "@material-ui/icons/Place";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { unstable_useMediaQuery as mq } from "@material-ui/core/useMediaQuery";

import Context from "../context";
import Signout from "../components/Auth/Signout";

const Header = ({ classes }) => {
  const mobileSize = mq("(max-width: 650px)");
  const { state } = useContext(Context);
  const { currentUser } = state;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.grow}>
            <PlaceIcon className={classes.icon} />
            <Typography
              className={mobileSize ? classes.mobile : ""}
              component="h1"
              variant="h6"
              color="inherit"
              nowrap="true"
            >
              Geolocation
            </Typography>
          </div>
          {currentUser && (
            <div className={classes.grow}>
              <img
                className={classes.picture}
                alt={currentUser.name}
                src={currentUser.picture}
              />
              <Typography
                className={mobileSize ? classes.mobile : ""}
                variant="h5"
                color="inherit"
                nowrap="true"
              >
                {currentUser.name}
              </Typography>
            </div>
          )}
          <Signout />
        </Toolbar>
      </AppBar>
    </div>
  );
};

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center"
  },
  icon: {
    marginRight: theme.spacing.unit,
    color: "#f48fb1",
    fontSize: 45
  },
  mobile: {
    display: "none"
  },
  picture: {
    height: "50px",
    borderRadius: "90%",
    marginRight: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(Header);
