import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import axios from "axios";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useProfileMutation } from "../../Slices/usersApiSlice.js";
import { setCredentials } from "../../Slices/authSlice.js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CreateNewsDialog({ open, setOpen, onSave }) {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const handleClose = () => {
    setOpen(false);
  };
 //for upload img
 const handleFileChange = (event) => {
  // Assuming you have an input element with the type="file"
  const file = event.target.files[0]; // Get the first selected file

  if (file) {
    // Store the file object in state or a variable if needed
    setImg(file);
  }
};
const handlePost = async () => {
  try {
    const formData = new FormData();
    formData.append('image', img); // 'image' should match the field name on the server
    formData.append('title', title); // Append 'title' with its value
    formData.append('summary', summary); // Append 'summary' with its value
    formData.append('description', description); // Append 'description' with its value

    const response = await axios.post("http://localhost:5000/news/create", formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the content type for file upload
      },
    });
    console.log(response.data);
    // Call the onSave callback with the data
    onSave(response.data);

    handleClose();
    toast.success("News Added Successfully");
  } catch (error) {
    console.log(`Error fetching post data  ${error}`);
  }
};

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="edit-apartment" fullWidth>
        <div className="btn_edit">
          <h1 id="edit-apartment" className="title_newTask">
            Post News
          </h1>
          <InputWrapper>
            <InputField type="submit" value="Edit" />
          </InputWrapper>
        </div>
        <DialogContent>
          <DialogContentText>Title </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            type="text"
            name="title"
            fullWidth
            // value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <DialogContentText>Summary </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="description"
            // value={summary}
            onChange={(e) => setSummary(e.target.value)}
            fullWidth
          />
          <DialogContentText>Description </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="descreption"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
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
        <Button variant="contained" type="submit" className="btn_create_task" onClick={handlePost}>
          Post News
        </Button>
      </Dialog>
    </div>
  );
}
const SelectField = styled.select`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
`;
const InputWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  justify-content: end;
`;
const InputField = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-bottom: 10px;
`;
CreateNewsDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
export default CreateNewsDialog;
