import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";
import pink from "@material-ui/core/colors/pink";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[300],
      main: grey[500],
      dark: grey[800]
    },
    secondary: {
      light: pink[200],
      main: pink[500],
      dark: pink[700]
    }
  },
  typography: {
    useNextVariants: true
  }
});

const withRoot = Component => {
  const WithRoot = props => {
    // MuiThemeProvider makes a theme available down the React tree
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  };

  return WithRoot;
};

export default withRoot;
