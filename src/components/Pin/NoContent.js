import React from "react";
import { withStyles } from "@material-ui/core/styles";
import ExploreIcon from "@material-ui/icons/Explore";
import Typography from "@material-ui/core/Typography";

const NoContent = ({ classes }) => (
  <div className={classes.root}>
    <ExploreIcon className={classes.icon} />
    <Typography
      align="center"
      component="h2"
      color="textPrimary"
      gutterBottom
      noWrap
      variant="h6"
    >
      Click on the map to add a pin.
    </Typography>
  </div>
);

const styles = theme => ({
  root: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  icon: {
    fontSize: "80px",
    margin: theme.spacing.unit
  }
});

export default withStyles(styles)(NoContent);
