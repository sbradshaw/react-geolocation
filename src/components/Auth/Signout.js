import React, { useContext } from "react";
import { GoogleLogout } from "react-google-login";
import { withStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import { unstable_useMediaQuery as mq } from "@material-ui/core/useMediaQuery";

import Context from "../../context";

const Signout = ({ classes }) => {
  const mobileSize = mq("(max-width: 650px)");
  const { dispatch } = useContext(Context);
  const onSignout = () => {
    dispatch({ type: "SIGNOUT_USER" });
  };

  return (
    <GoogleLogout
      onLogoutSuccess={onSignout}
      render={({ onClick }) => (
        <span className={classes.root} onClick={onClick}>
          <Typography
            style={{ display: mobileSize ? "none" : "block" }}
            variant="body1"
            className={classes.buttonText}
          >
            Signout
          </Typography>
          <ExitToAppIcon className={classes.buttonIcon} />
        </span>
      )}
    />
  );
};

const styles = {
  root: {
    cursor: "pointer",
    display: "flex"
  },
  buttonText: {
    color: "#f48fb1"
  },
  buttonIcon: {
    marginLeft: "5px",
    color: "#f48fb1"
  }
};

export default withStyles(styles)(Signout);
