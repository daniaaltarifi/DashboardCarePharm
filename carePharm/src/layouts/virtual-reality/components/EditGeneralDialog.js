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

export default function EditGeneralDialog({ initialDRG_SERIAL_NO, initialBARCODE, initialNAME,initialDRG_FILLING,initialDOSAGE,initialDRG_CONCENTRATE,initialSTORES_DESC_L,initialATCCODE,initialDRG_PRIMARY_CMP_COUNTRY,initialJPP,initialPHARM_P, onSave }) {
  const [open, setOpen] = React.useState(false);
  const [DRG_SERIAL_NO, setDRG_SERIAL_NO] = useState(initialDRG_SERIAL_NO);
  const [BARCODE, setBARCODE] = useState(initialBARCODE);
  const [NAME, setNAME] = useState(initialNAME);
  const [DRG_FILLING, setDRG_FILLING] = useState(initialDRG_FILLING);
  const [DOSAGE, setDOSAGE] = useState(initialDOSAGE);
  const [DRG_CONCENTRATE, setDRG_CONCENTRATE] = useState(initialDRG_CONCENTRATE);
  const [STORES_DESC_L, setSTORES_DESC_L] = useState(initialSTORES_DESC_L);
  const [ATCCODE, setATCCODE] = useState(initialATCCODE);
  const [DRG_PRIMARY_CMP_COUNTRY, setDRG_PRIMARY_CMP_COUNTRY] = useState(initialDRG_PRIMARY_CMP_COUNTRY);
  const [JPP, setJPP] = useState(initialJPP);
  const [PHARM_P, setPHARM_P] = useState(initialPHARM_P);



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveUpdate = () => {
    // Call the onSave function with updated values
    onSave(DRG_SERIAL_NO,BARCODE,NAME, DRG_FILLING, DOSAGE,DRG_CONCENTRATE,STORES_DESC_L,ATCCODE,DRG_PRIMARY_CMP_COUNTRY,JPP,PHARM_P);
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
        <DialogTitle id="edit-news">Edit General Information</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the General Information:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="DRG SERIAL NO"
            type="text"
            fullWidth
            value={DRG_SERIAL_NO}
            onChange={(e) => setDRG_SERIAL_NO(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="title"
            label="BARCODE"
            type="Number"
            fullWidth
            value={BARCODE}
            onChange={(e) => setBARCODE(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="NAME"
            type="text"
            fullWidth
            value={NAME}
            onChange={(e) => setNAME(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="summary"
            label="DRG FILLING"
            type="text"
            fullWidth
            value={DRG_FILLING}
            onChange={(e) => setDRG_FILLING(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="DOSAGE"
            type="text"
            fullWidth
            value={DOSAGE}
            onChange={(e) => setDOSAGE(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="DRG CONCENTRATE"
            type="text"
            fullWidth
            value={DRG_CONCENTRATE}
            onChange={(e) => setDRG_CONCENTRATE(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="STORES DESC L"
            type="text"
            fullWidth
            value={STORES_DESC_L}
            onChange={(e) => setSTORES_DESC_L(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="ATCCODE"
            type="text"
            fullWidth
            value={ATCCODE}
            onChange={(e) => setATCCODE(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="DRG PRIMARY CMP COUNTRY"
            type="text"
            fullWidth
            value={DRG_PRIMARY_CMP_COUNTRY}
            onChange={(e) => setDRG_PRIMARY_CMP_COUNTRY(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="JPP"
            type="text"
            fullWidth
            value={JPP}
            onChange={(e) => setJPP(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="PHARM P"
            type="text"
            fullWidth
            value={PHARM_P}
            onChange={(e) => setPHARM_P(e.target.value)}
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

EditGeneralDialog.propTypes = {
    initialDRG_SERIAL_NO: PropTypes.string.isRequired,
    initialBARCODE: PropTypes.string.isRequired,
    initialNAME: PropTypes.string.isRequired,
    initialDRG_FILLING: PropTypes.string.isRequired,
    initialDOSAGE: PropTypes.string.isRequired,
    initialDRG_CONCENTRATE: PropTypes.string.isRequired,
    initialSTORES_DESC_L: PropTypes.string.isRequired,
    initialATCCODE: PropTypes.string.isRequired,
    initialDRG_PRIMARY_CMP_COUNTRY: PropTypes.string.isRequired,
    initialJPP: PropTypes.string.isRequired,
    initialPHARM_P: PropTypes.string.isRequired,
   
  onSave: PropTypes.func.isRequired,
  // onCancel: PropTypes.func.isRequired,
};  
