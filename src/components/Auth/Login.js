import React from "react";
import { GoogleLogin } from "react-google-login";

import { withStyles } from "@material-ui/core/styles";

const Login = ({ classes }) => {
  const onSuccess = googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    console.log({ idToken });
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_OAUTH_CLIENT_ID}
      onSuccess={onSuccess}
      isSignedIn={true}
    />
  );
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
