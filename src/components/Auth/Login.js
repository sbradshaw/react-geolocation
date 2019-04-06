import React from "react";
import { GoogleLogin } from "react-google-login";
import { GraphQLClient } from "graphql-request";
import { withStyles } from "@material-ui/core/styles";

const USER_QUERY = `
  {
    user {
      _id,
      name,
      email
      picture
    }
  }
`;

const Login = ({ classes }) => {
  const onSuccess = async googleUser => {
    const idToken = googleUser.getAuthResponse().id_token;
    const client = new GraphQLClient("http://localhost:4000/graphql", {
      headers: {
        authorization: idToken
      }
    });
    const data = await client.request(USER_QUERY);

    console.log({ data });
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
