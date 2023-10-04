import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SoftButton from "components/SoftButton";
import Icon from "@mui/material/Icon";
import PropTypes from "prop-types";

export default function EditNewsDialog({ initialTitle, initialSummary, initialDescription,initialImg, onSave }) {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [summary, setSummary] = useState(initialSummary);
  const [description, setDescription] = useState(initialDescription);
const[img,setImg]=useState(initialImg)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleFileChange = (event) => {
    // Assuming you have an input element with the type="file"
    const file = event.target.files[0]; // Get the first selected file
  
    if (file) {
      // Store the file object in state or a variable if needed
      setImg(file);
    }
  };
  const handleSaveUpdate = () => {
    // Call the onSave function with updated values
    onSave(title, summary, description,img);
    handleClose();
  };

  return (
    <div>
      <SoftButton variant="text" color="error" onClick={handleClickOpen}>
        <SoftButton variant="text" color="dark">
          <Icon>edit</Icon>&nbsp;edit
        </SoftButton>{" "}
      </SoftButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="edit-news">
        <DialogTitle id="edit-news">Edit News</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the news details:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="summary"
            label="Summary"
            type="text"
            fullWidth
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
           <DialogContentText>image </DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="title"
            type="file"
            name="title"
            fullWidth
            // Remove the value prop
            onChange={handleFileChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveUpdate} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

EditNewsDialog.propTypes = {
  initialTitle: PropTypes.string.isRequired,
  initialSummary: PropTypes.string.isRequired,
  initialDescription: PropTypes.string.isRequired,
  initialImg: PropTypes.string.isRequired,

  onSave: PropTypes.func.isRequired,
  // onCancel: PropTypes.func.isRequired,
};  
