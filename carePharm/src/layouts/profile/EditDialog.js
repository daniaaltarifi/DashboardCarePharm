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

function EditDialog({ open, setOpen }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [profile] = useProfileMutation();

  useEffect(() => {
    if (userInfo) {
      setUsername(userInfo.username);
      setEmail(userInfo.email);
    }
  }, [userInfo]);

  const handleClose = () => {
    setOpen(false);
  };

  // const handleEditClick = () => {
  //   setOpen(true);
  // };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password Don't Match");
    } else {
      try {
        const res = await profile({
          _id: userInfo._id,
          username,
          email,
          password,
        }).unwrap();
        dispatch(setCredentials(res));
        toast.success("Profile Updated Successfully");
        handleClose(); // Close the dialog after successful update
      } catch (err) {
        toast.error(err?.data?.message || err.error);
        console.log("unauth");
      }
    }
  };

  // Rest of your component code...

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="edit-apartment" fullWidth>
        <div className="btn_edit">
          <h1 id="edit-apartment" className="title_newTask">
            Edit Profile
          </h1>
          <InputWrapper>
            <InputField type="submit" value="Edit" />
          </InputWrapper>
        </div>
        <DialogContent>
          <DialogContentText>Username </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            type="text"
            name="title"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <DialogContentText>Email </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="description"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
          <DialogContentText>Password </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="password"
            name="subTasks"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
          <DialogContentText>Confirm Password </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="password"
            name="subTasks"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <Button
          variant="contained"
          type="submit"
          className="btn_create_task"
          onClick={handleUpdateProfile}
        >
          Update
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
EditDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
export default EditDialog;
