import React, { useState, useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AddAPhotoIcon from "@material-ui/icons/AddAPhotoTwoTone";
import LandscapeIcon from "@material-ui/icons/LandscapeOutlined";
import ClearIcon from "@material-ui/icons/Clear";
import SaveIcon from "@material-ui/icons/SaveTwoTone";

import Context from "../../context";
import { useClient } from "../../client";
import { CREATE_PIN_MUTATION } from "../../graphql/mutations";

const CreatePin = ({ classes }) => {
  const client = useClient();
  const { state, dispatch } = useContext(Context);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleImageUpload = async () => {
    const data = new FormData();
    const uploadPreset = process.env.REACT_APP_CLOUDINARY_PRESET;
    const cloudName = process.env.REACT_APP_CLOUDINARY_NAME;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    data.append("file", image);
    data.append("upload_preset", uploadPreset);
    data.append("cloud_name", cloudName);
    const res = await axios.post(url, data);
    return res.data.url;
  };

  const handleSubmit = async event => {
    try {
      event.preventDefault();
      setSubmitting(true);

      const url = await handleImageUpload();
      const { latitude, longitude } = state.draft;
      const variables = { title, image: url, content, latitude, longitude };
      await client.request(CREATE_PIN_MUTATION, variables);
      handleDeleteDraft();
    } catch (error) {
      setSubmitting(false);
      console.log("Pin creation error", error);
    }
  };

  const handleDeleteDraft = event => {
    setTitle("");
    setImage("");
    setContent("");
    dispatch({ type: "DELETE_DRAFT" });
  };

  return (
    <form className={classes.form}>
      <Typography
        className={classes.alignCenter}
        color="secondary"
        component="h2"
        variant="h4"
      >
        <LandscapeIcon className={classes.iconLarge} /> Pin a location
      </Typography>
      <div>
        <TextField
          label="Title"
          name="title"
          placeholder="Insert a pin title"
          onChange={event => setTitle(event.target.value)}
        />
        <input
          accept="image/*"
          className={classes.input}
          id="image"
          type="file"
          onChange={event => setImage(event.target.files[0])}
        />
        <label htmlFor="image">
          <Button
            style={{ color: image && "#f48fb1" }}
            className={classes.button}
            component="span"
            size="small"
          >
            <AddAPhotoIcon />
          </Button>
        </label>
      </div>
      <div className={classes.contentField}>
        <TextField
          name="content"
          label="Content"
          multiline
          rows="6"
          margin="normal"
          fullWidth
          variant="outlined"
          onChange={event => setContent(event.target.value)}
        />
      </div>
      <div>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={handleDeleteDraft}
        >
          <ClearIcon className={classes.leftIcon} />
          Discard
        </Button>
        <Button
          type="submit"
          className={classes.button}
          variant="contained"
          color="secondary"
          disabled={!title.trim() || !image || !content.trim() || submitting}
          onClick={handleSubmit}
        >
          Submit
          <SaveIcon className={classes.rightIcon} />
        </Button>
      </div>
    </form>
  );
};

const styles = theme => ({
  form: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: theme.spacing.unit
  },
  contentField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "95%"
  },
  input: {
    display: "none"
  },
  alignCenter: {
    alignItems: "center",
    display: "flex"
  },
  iconLarge: {
    fontSize: 40,
    marginRight: theme.spacing.unit
  },
  leftIcon: {
    fontSize: 20,
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    fontSize: 20,
    marginLeft: theme.spacing.unit
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit,
    marginLeft: 0
  }
});

export default withStyles(styles)(CreatePin);
