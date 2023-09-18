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

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CreateGeneralDialog({ open, setOpen, onSave }) {
  const [name, setName] = useState("");
  const [DRG_SERIAL_NO, setDRG_SERIAL_NO] = useState("");
  const [BARCODE, setBARCODE] = useState("");
  const [DRG_FILLING, setDRG_FILLING] = useState("");
  const [DOSAGE, setDOSAGE] = useState("");
  const [DRG_CONCENTRATE, setDRG_CONCENTRATE] = useState("");
  const [STORES_DESC_L, setSTORES_DESC_L] = useState("");
  const [ATCCODE, setATCCODE] = useState("");
  const [DRG_PRIMARY_CMP_COUNTRY, setDRG_PRIMARY_CMP_COUNTRY] = useState("");
  const [JPP, setJPP] = useState("");
  const [PHARM_P, setPHARM_P] = useState("");
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
  
      // Append other form data fields
      formData.append('name', name);
      formData.append('DRG_SERIAL_NO', DRG_SERIAL_NO);
      formData.append('BARCODE', BARCODE);
      formData.append('DRG_FILLING', DRG_FILLING);
      formData.append('DOSAGE', DOSAGE);
      formData.append('DRG_CONCENTRATE', DRG_CONCENTRATE);
      formData.append('STORES_DESC_L', STORES_DESC_L);
      formData.append('ATCCODE', ATCCODE);
      formData.append('DRG_PRIMARY_CMP_COUNTRY', DRG_PRIMARY_CMP_COUNTRY);
      formData.append('JPP', JPP);
      formData.append('PHARM_P', PHARM_P);
  
      const response = await axios.post("http://localhost:5000/medicineAvailable/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file upload
        },
      });
      console.log(response.data);
      // Call the onSave callback with the data
      onSave(response.data);

      handleClose();
      toast.success("General Information Added Successfully");
    } catch (error) {
      console.log(`Error fetching post data frontend ${error}`);
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="edit-apartment" fullWidth>
        <div className="btn_edit">
          <h1 id="edit-apartment" className="title_newTask">
            Post General Information
          </h1>
        </div>
        <DialogContent>
        <DialogContentText>img </DialogContentText>
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
          <DialogContentText>NAME </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            type="text"
            name="title"
            fullWidth
            // value={title}
            onChange={(e) => setName(e.target.value)}
          />
          <DialogContentText>DRG_SERIAL_NO </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="number"
            name="description"
            // value={summary}
            onChange={(e) => setDRG_SERIAL_NO(e.target.value)}
            fullWidth
          />
          <DialogContentText>BARCODE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="Number"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setBARCODE(e.target.value)}
            fullWidth
          />
           <DialogContentText>DRG_FILLING </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="descreption"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_FILLING(e.target.value)}
            fullWidth
          />
           <DialogContentText>DOSAGE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="descreption"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDOSAGE(e.target.value)}
            fullWidth
          />
           <DialogContentText>DRG_CONCENTRATE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="descreption"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_CONCENTRATE(e.target.value)}
            fullWidth
          />
           <DialogContentText>STORES_DESC_L </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="descreption"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setSTORES_DESC_L(e.target.value)}
            fullWidth
          />
           <DialogContentText>ATCCODE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="descreption"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setATCCODE(e.target.value)}
            fullWidth
          />
   <DialogContentText>DRG_PRIMARY_CMP_COUNTRY </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="descreption"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_PRIMARY_CMP_COUNTRY(e.target.value)}
            fullWidth
          />
             <DialogContentText>JPP </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="number"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setJPP(e.target.value)}
            fullWidth
          />
             <DialogContentText>PHARM_P </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="number"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setPHARM_P(e.target.value)}
            fullWidth
          />

        </DialogContent>
        <Button variant="contained" type="submit" className="btn_create_task" onClick={handlePost}>
          Post General Information
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
CreateGeneralDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
export default CreateGeneralDialog;
