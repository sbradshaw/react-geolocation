import React, { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import { withStyles } from "@material-ui/core/styles";

const INITIAL_VIEWPORT = {
  latitude: 53.479444,
  longitude: -2.245278,
  zoom: 13
};

const Map = ({ classes }) => {
  const [viewport, setViewport] = useState(INITIAL_VIEWPORT);

  return (
    <div className={classes.root}>
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        width="100vw"
        height="calc(100vw - 64px)" // 64px is the header height
        onViewportChange={changedViewport => setViewport(changedViewport)}
        {...viewport}
      >
        <div className={classes.navigationControl}>
          <NavigationControl
            onViewportChange={changedViewport => setViewport(changedViewport)}
          />
        </div>
      </ReactMapGL>
    </div>
  );
};

const styles = {
  root: {
    display: "flex"
  },
  rootMobile: {
    display: "flex",
    flexDirection: "column-reverse"
  },
  navigationControl: {
    position: "absolute",
    margin: "1em",
    top: 0,
    left: 0
  },
  deleteIcon: {
    color: "red"
  },
  popupImage: {
    padding: "0.4em",
    height: 200,
    width: 200,
    objectFit: "cover"
  },
  popupTab: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  }
};

export default withStyles(styles)(Map);
