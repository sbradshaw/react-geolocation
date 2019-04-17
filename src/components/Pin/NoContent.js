import React from "react";
import { withStyles } from "@material-ui/core/styles";

const NoContent = ({ classes }) => <div>NoContent</div>;

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
