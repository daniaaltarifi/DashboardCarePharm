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

function CreateAdvancedDialog({ open, setOpen, onSave }) {
  const [RECORD_STATUS_DESC	, setRECORD_STATUS_DESC] = useState("");
  const [REGISTRATION_REQUEST_NUMBER, setREGISTRATION_REQUEST_NUMBER] = useState("");
  const [REGISTRATION_REQUEST_DATE, setREGISTRATION_REQUEST_DATE] = useState("");
  const [DRG_SERIAL_NO, setDRG_SERIAL_NO] = useState("");
  const [DRG_BARCODE, setDRG_BARCODE] = useState("");
  const [NAME, setNAME] = useState("");
  const [DRG_FILLING, setDRG_FILLING] = useState("");
  const [DOSAGE, setDOSAGE] = useState("");
  const [DRG_CONCENTRATE, setDRG_CONCENTRATE] = useState("");
  const [STORES_DESC_L, setSTORES_DESC_L] = useState("");
  const [INGREDIENT, setINGREDIENT] = useState("");
  const [ATCCODE, setATCCODE] = useState("");
  const [DRG_REG_NO, setDRG_REG_NO] = useState("");
  const [RE_REGISTRATION_DATE, setRE_REGISTRATION_DATE] = useState("");
  const [DRG_INDUST_CMP, setDRG_INDUST_CMP] = useState("");
  const [DRG_INDUST_CMP_COUNTRY, setDRG_INDUST_CMP_COUNTRY] = useState("");
  const [DRG_SALES_CMP, setDRG_SALES_CMP] = useState("");
  const [DRG_SALES_COUNTRY, setDRG_SALES_COUNTRY] = useState("");
  const [DRG_PRIMARY_CMP, setDRG_PRIMARY_CMP] = useState("");
  const [DRG_PRIMARY_CMP_COUNTRY, setDRG_PRIMARY_CMP_COUNTRY] = useState("");
  const [DRG_SECONDARY_CMP, setDRG_SECONDARY_CMP] = useState("");
  const [DRG_SECONDARY_CMP_COUNTRY, setDRG_SECONDARY_CMP_COUNTRY] = useState("");
  const [DRG_B_R_CMP, setDRG_B_R_CMP] = useState("");
  const [DRG_B_R_CMP_COUNTRY, setDRG_B_R_CMP_COUNTRY] = useState("");
  const [JHP, setJHP] = useState("");
  const [JHP_TAXED, setJHP_TAXED] = useState("");
  const [LIST_NAME, setLIST_NAME] = useState("");
  const [LIST_CLASSIFICATION, setLIST_CLASSIFICATION] = useState("");
  const [LIST_RECORD_TYPE, setLIST_RECORD_TYPE] = useState("");
  const [ITEM_SOURCE, setITEM_SOURCE] = useState("");
  const [DISP_CATEGORY, setDISP_CATEGORY] = useState("");
  const [DRUG_TYPE, setDRUG_TYPE] = useState("");
  const [img, setImg] = useState("");


 //for upload img
 const handleFileChange = (event) => {
  // Assuming you have an input element with the type="file"
  const file = event.target.files[0]; // Get the first selected file

  if (file) {
    // Store the file object in state or a variable if needed
    setImg(file);
  }
};

  const handleClose = () => {
    setOpen(false);
  };

  const handlePost = async () => {
    try {
      const formData = new FormData();
      formData.append('RECORD_STATUS_DESC', RECORD_STATUS_DESC); // 'image' should match the field name on the server
      formData.append('REGISTRATION_REQUEST_NUMBER', REGISTRATION_REQUEST_NUMBER); // Append 'title' with its value
      formData.append('REGISTRATION_REQUEST_DATE', REGISTRATION_REQUEST_DATE); // Append 'summary' with its value
      formData.append('DRG_SERIAL_NO', DRG_SERIAL_NO); // Append 'description' with its value
      formData.append('DRG_BARCODE', DRG_BARCODE); // Append 'description' with its value
      formData.append('NAME', NAME); // Append 'description' with its value
      formData.append('DRG_FILLING', DRG_FILLING); // Append 'description' with its value
      formData.append('DOSAGE', DOSAGE); // Append 'description' with its value
      formData.append('DRG_CONCENTRATE', DRG_CONCENTRATE); // Append 'description' with its value
      formData.append('STORES_DESC_L', STORES_DESC_L); // Append 'description' with its value
      formData.append('INGREDIENT', INGREDIENT); // Append 'description' with its value
      formData.append('ATCCODE', ATCCODE); // Append 'description' with its value
      formData.append('DRG_REG_NO', DRG_REG_NO); // Append 'description' with its value
      formData.append('RE_REGISTRATION_DATE', RE_REGISTRATION_DATE); // Append 'description' with its value
      formData.append('DRG_INDUST_CMP', DRG_INDUST_CMP); // Append 'description' with its value
      formData.append('DRG_INDUST_CMP_COUNTRY', DRG_INDUST_CMP_COUNTRY); // Append 'description' with its value
      formData.append('DRG_SALES_CMP', DRG_SALES_CMP); // Append 'description' with its value
      formData.append('DRG_SALES_COUNTRY', DRG_SALES_COUNTRY); // Append 'description' with its value
      formData.append('DRG_PRIMARY_CMP', DRG_PRIMARY_CMP); // Append 'description' with its value
      formData.append('DRG_PRIMARY_CMP_COUNTRY', DRG_PRIMARY_CMP_COUNTRY); // Append 'description' with its value
      formData.append('DRG_SECONDARY_CMP', DRG_SECONDARY_CMP); // Append 'description' with its value
      formData.append('DRG_SECONDARY_CMP_COUNTRY', DRG_SECONDARY_CMP_COUNTRY); // Append 'description' with its value
      formData.append('DRG_B_R_CMP', DRG_B_R_CMP); // Append 'description' with its value
      formData.append('DRG_SECONDARY_CMP_COUNTRY', DRG_SECONDARY_CMP_COUNTRY); // Append 'description' with its value
      formData.append('DRG_B_R_CMP_COUNTRY', DRG_B_R_CMP_COUNTRY); // Append 'description' with its value
      formData.append('JHP', JHP); // Append 'description' with its value
      formData.append('JHP_TAXED', JHP_TAXED); // Append 'description' with its value
      formData.append('LIST_NAME', LIST_NAME); // Append 'description' with its value
      formData.append('LIST_CLASSIFICATION', LIST_CLASSIFICATION); // Append 'description' with its value
      formData.append('LIST_RECORD_TYPE', LIST_RECORD_TYPE); // Append 'description' with its value
      formData.append('ITEM_SOURCE', ITEM_SOURCE); // Append 'description' with its value
      formData.append('DISP_CATEGORY', DISP_CATEGORY); // Append 'description' with its value
      formData.append('DRUG_TYPE', DRUG_TYPE); // Append 'description' with its value
      formData.append('image', img); // 'image' should match the field name on the server

      const response = await axios.post("http://localhost:5000/advancedMedicine/create", formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type for file upload
        },
      });
      // const response = await axios.post("http://localhost:5000/advancedMedicine/create", {
      //   RECORD_STATUS_DESC	,
      //   REGISTRATION_REQUEST_NUMBER,
      //   REGISTRATION_REQUEST_DATE,
      //   DRG_SERIAL_NO,
      //   DRG_BARCODE,
      //   NAME,
      //   DRG_FILLING,
      //   DOSAGE,
      //   DRG_CONCENTRATE,
      //   STORES_DESC_L,
      //   INGREDIENT,
      //   ATCCODE,
      //   DRG_REG_NO,
      //   RE_REGISTRATION_DATE,
      //   DRG_INDUST_CMP,DRG_INDUST_CMP_COUNTRY,DRG_SALES_CMP,DRG_SALES_COUNTRY,DRG_PRIMARY_CMP,DRG_PRIMARY_CMP_COUNTRY,
      //   DRG_SECONDARY_CMP,
      //   DRG_SECONDARY_CMP_COUNTRY,DRG_B_R_CMP,DRG_B_R_CMP_COUNTRY,JHP,JHP_TAXED,LIST_NAME,LIST_CLASSIFICATION,LIST_RECORD_TYPE,
      //   ITEM_SOURCE,DISP_CATEGORY,DRUG_TYPE
      // });
      console.log(response.data);
      // Call the onSave callback with the data
      onSave(response.data);

      handleClose();
      toast.success("Advanced Information Added Successfully");
    } catch (error) {
      console.log(`Error fetching post advanced info frontend ${error}`);
    }
  };
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="edit-apartment" fullWidth>
        <div className="btn_edit">
          <h1 id="edit-apartment" className="title_newTask">
            Post Advanced Information
          </h1>
        </div>
        <DialogContent>
          <DialogContentText>NAME </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            type="text"
            name="title"
            fullWidth
            // value={title}
            onChange={(e) => setNAME(e.target.value)}
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
          <DialogContentText>REGISTRATION_REQUEST_NUMBER </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setREGISTRATION_REQUEST_NUMBER(e.target.value)}
            fullWidth
          />
           <DialogContentText>REGISTRATION_REQUEST_DATE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="date"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setREGISTRATION_REQUEST_DATE(e.target.value)}
            fullWidth
          />
           <DialogContentText>DRG_BARCODE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="number"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_BARCODE(e.target.value)}
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
             <DialogContentText>INGREDIENT </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setINGREDIENT(e.target.value)}
            fullWidth
          />
             <DialogContentText>ATCCODE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setATCCODE(e.target.value)}
            fullWidth
          />
  <DialogContentText>DRG_REG_NO </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_REG_NO(e.target.value)}
            fullWidth
          />  
          <DialogContentText>RE_REGISTRATION_DATE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="date"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setRE_REGISTRATION_DATE(e.target.value)}
            fullWidth
          />
            <DialogContentText>DRG_INDUST_CMP </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_INDUST_CMP(e.target.value)}
            fullWidth
          />
             <DialogContentText>DRG_INDUST_CMP_COUNTRY </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_INDUST_CMP_COUNTRY(e.target.value)}
            fullWidth
          />  
           <DialogContentText>DRG_SALES_CMP </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_SALES_CMP(e.target.value)}
            fullWidth
          /> 
            <DialogContentText>DRG_PRIMARY_CMP </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_PRIMARY_CMP(e.target.value)}
            fullWidth
          />
            <DialogContentText>DRG_PRIMARY_CMP_COUNTRY </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_PRIMARY_CMP_COUNTRY(e.target.value)}
            fullWidth
          />  <DialogContentText>DRG_SECONDARY_CMP </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_SECONDARY_CMP(e.target.value)}
            fullWidth
          />  <DialogContentText>DRG_SECONDARY_CMP_COUNTRY </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_SECONDARY_CMP_COUNTRY(e.target.value)}
            fullWidth
          />  <DialogContentText>DRG_B_R_CMP </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_B_R_CMP(e.target.value)}
            fullWidth
          />
           <DialogContentText>DRG_B_R_CMP_COUNTRY </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_B_R_CMP_COUNTRY(e.target.value)}
            fullWidth
          />
            <DialogContentText>JHP </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="number"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setJHP(e.target.value)}
            fullWidth
          />  <DialogContentText>JHP_TAXED </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="number"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setJHP_TAXED(e.target.value)}
            fullWidth
          />  <DialogContentText>LIST_NAME </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setLIST_NAME(e.target.value)}
            fullWidth
          />  <DialogContentText>LIST_CLASSIFICATION </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setLIST_CLASSIFICATION(e.target.value)}
            fullWidth
          />  <DialogContentText>LIST_RECORD_TYPE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setLIST_RECORD_TYPE(e.target.value)}
            fullWidth
          />  <DialogContentText>ITEM_SOURCE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setITEM_SOURCE(e.target.value)}
            fullWidth
          />  <DialogContentText>DISP_CATEGORY </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDISP_CATEGORY(e.target.value)}
            fullWidth
          />
           <DialogContentText>DRUG_TYPE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRUG_TYPE(e.target.value)}
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
          Post Advanced Information
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
CreateAdvancedDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};
export default CreateAdvancedDialog;
