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

export default function EditAdvancedDialog({
  initialImg,
  initialRECORD_STATUS_DESC,
  initialREGISTRATION_REQUEST_NUMBER,
  initialREGISTRATION_REQUEST_DATE,
  initialDRG_SERIAL_NO,
  initialDRG_BARCODE,
  initialNAME,
  initialDRG_FILLING,
  initialDOSAGE,
  initialDRG_CONCENTRATE,
  initialSTORES_DESC_L,
  initialINGREDIENT,
  initialATCCODE,
  initialDRG_REG_NO,
  initialRE_REGISTRATION_DATE,
  initialDRG_INDUST_CMP,
  initialDRG_INDUST_CMP_COUNTRY,
  initialDRG_SALES_CMP,
  initialDRG_SALES_COUNTRY,
  initialDRG_PRIMARY_CMP,
  initialDRG_PRIMARY_CMP_COUNTRY,
  initialDRG_SECONDARY_CMP,
  initialDRG_SECONDARY_CMP_COUNTRY,
  initialDRG_B_R_CMP,
  initialDRG_B_R_CMP_COUNTRY,
  initialJHP,
  initialJHP_TAXED,
  initialLIST_NAME,
  initialLIST_CLASSIFICATION,
  initialLIST_RECORD_TYPE,
  initialITEM_SOURCE,
  initialDISP_CATEGORY,
  initialDRUG_TYPE,
  onSave,
}) {
  const [open, setOpen] = React.useState(false);
  const [RECORD_STATUS_DESC, setRECORD_STATUS_DESC] = useState(initialRECORD_STATUS_DESC);
  const [REGISTRATION_REQUEST_NUMBER, setREGISTRATION_REQUEST_NUMBER] = useState(
    initialREGISTRATION_REQUEST_NUMBER
  );
  const [REGISTRATION_REQUEST_DATE, setREGISTRATION_REQUEST_DATE] = useState(
    initialREGISTRATION_REQUEST_DATE
  );
  const [DRG_SERIAL_NO, setDRG_SERIAL_NO] = useState(initialDRG_SERIAL_NO);
  const [DRG_BARCODE, setDRG_BARCODE] = useState(initialDRG_BARCODE);
  const [NAME, setNAME] = useState(initialNAME);
  const [DRG_FILLING, setDRG_FILLING] = useState(initialDRG_FILLING);
  const [DOSAGE, setDOSAGE] = useState(initialDOSAGE);
  const [DRG_CONCENTRATE, setDRG_CONCENTRATE] = useState(initialDRG_CONCENTRATE);
  const [STORES_DESC_L, setSTORES_DESC_L] = useState(initialSTORES_DESC_L);
  const [INGREDIENT, setINGREDIENT] = useState(initialINGREDIENT);
  const [ATCCODE, setATCCODE] = useState(initialATCCODE);
  const [DRG_REG_NO, setDRG_REG_NO] = useState(initialDRG_REG_NO);
  const [RE_REGISTRATION_DATE, setRE_REGISTRATION_DATE] = useState(initialRE_REGISTRATION_DATE);
  const [DRG_INDUST_CMP, setDRG_INDUST_CMP] = useState(initialDRG_INDUST_CMP);
  const [DRG_INDUST_CMP_COUNTRY, setDRG_INDUST_CMP_COUNTRY] = useState(
    initialDRG_INDUST_CMP_COUNTRY
  );
  const [DRG_SALES_CMP, setDRG_SALES_CMP] = useState(initialDRG_SALES_CMP);
  const [DRG_SALES_COUNTRY, setDRG_SALES_COUNTRY] = useState(initialDRG_SALES_COUNTRY);
  const [DRG_PRIMARY_CMP, setDRG_PRIMARY_CMP] = useState(initialDRG_PRIMARY_CMP);
  const [DRG_PRIMARY_CMP_COUNTRY, setDRG_PRIMARY_CMP_COUNTRY] = useState(
    initialDRG_PRIMARY_CMP_COUNTRY
  );
  const [DRG_SECONDARY_CMP, setDRG_SECONDARY_CMP] = useState(initialDRG_SECONDARY_CMP);
  const [DRG_SECONDARY_CMP_COUNTRY, setDRG_SECONDARY_CMP_COUNTRY] = useState(
    initialDRG_SECONDARY_CMP_COUNTRY
  );
  const [DRG_B_R_CMP, setDRG_B_R_CMP] = useState(initialDRG_B_R_CMP);
  const [DRG_B_R_CMP_COUNTRY, setDRG_B_R_CMP_COUNTRY] = useState(initialDRG_B_R_CMP_COUNTRY);
  const [JHP, setJHP] = useState(initialJHP);
  const [JHP_TAXED, setJHP_TAXED] = useState(initialJHP_TAXED);
  const [LIST_NAME, setLIST_NAME] = useState(initialLIST_NAME);
  const [LIST_CLASSIFICATION, setLIST_CLASSIFICATION] = useState(initialLIST_CLASSIFICATION);
  const [LIST_RECORD_TYPE, setLIST_RECORD_TYPE] = useState(initialLIST_RECORD_TYPE);
  const [ITEM_SOURCE, setITEM_SOURCE] = useState(initialITEM_SOURCE);
  const [DISP_CATEGORY, setDISP_CATEGORY] = useState(initialDISP_CATEGORY);
  const [DRUG_TYPE, setDRUG_TYPE] = useState(initialDRUG_TYPE);
  const [img, setImg] = useState(initialImg);
  const handleFileChange = (event) => {
    // Assuming you have an input element with the type="file"
    const file = event.target.files[0]; // Get the first selected file

    if (file) {
      // Store the file object in state or a variable if needed
      setImg(file);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveUpdate = () => {
    // Call the onSave function with updated values
    onSave(
      img,
      RECORD_STATUS_DESC,
      REGISTRATION_REQUEST_NUMBER,
      REGISTRATION_REQUEST_DATE,
      DRG_SERIAL_NO,
      DRG_BARCODE,
      NAME,
      DRG_FILLING,
      DOSAGE,
      DRG_CONCENTRATE,
      STORES_DESC_L,
      INGREDIENT,
      DRG_REG_NO,
      RE_REGISTRATION_DATE,
      ATCCODE,
      DRG_INDUST_CMP,
      DRG_INDUST_CMP_COUNTRY,
      DRG_SALES_CMP,
      DRG_SALES_COUNTRY,
      DRG_PRIMARY_CMP,
      DRG_PRIMARY_CMP_COUNTRY,
      DRG_SECONDARY_CMP,
      DRG_SECONDARY_CMP_COUNTRY,
      DRG_B_R_CMP,
      DRG_B_R_CMP_COUNTRY,
      JHP,
      JHP_TAXED,
      LIST_NAME,
      LIST_CLASSIFICATION,
      LIST_RECORD_TYPE,
      ITEM_SOURCE,
      DISP_CATEGORY,
      DRUG_TYPE
    );
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
        <DialogTitle id="edit-news">Edit Advanced Information</DialogTitle>
        <DialogContent>
        <DialogContentText>RECORD_STATUS_DESC </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            type="text"
            name="title"
            fullWidth
            // value={title}
            onChange={(e) => setRECORD_STATUS_DESC(e.target.value)}
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
          <DialogContentText>DRG_SALES_COUNTRY </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            type="text"
            name="title"
            fullWidth
            // value={title}
            onChange={(e) => setDRG_SALES_COUNTRY(e.target.value)}
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
          />{" "}
          <DialogContentText>DRG_SECONDARY_CMP </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_SECONDARY_CMP(e.target.value)}
            fullWidth
          />{" "}
          <DialogContentText>DRG_SECONDARY_CMP_COUNTRY </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setDRG_SECONDARY_CMP_COUNTRY(e.target.value)}
            fullWidth
          />{" "}
          <DialogContentText>DRG_B_R_CMP </DialogContentText>
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
          />{" "}
          <DialogContentText>JHP_TAXED </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="number"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setJHP_TAXED(e.target.value)}
            fullWidth
          />{" "}
          <DialogContentText>LIST_NAME </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setLIST_NAME(e.target.value)}
            fullWidth
          />{" "}
          <DialogContentText>LIST_CLASSIFICATION </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setLIST_CLASSIFICATION(e.target.value)}
            fullWidth
          />{" "}
          <DialogContentText>LIST_RECORD_TYPE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setLIST_RECORD_TYPE(e.target.value)}
            fullWidth
          />{" "}
          <DialogContentText>ITEM_SOURCE </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            type="text"
            name="subTasks"
            // value={descreption}
            onChange={(e) => setITEM_SOURCE(e.target.value)}
            fullWidth
          />{" "}
          <DialogContentText>DISP_CATEGORY </DialogContentText>
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

EditAdvancedDialog.propTypes = {
  initialRECORD_STATUS_DESC: PropTypes.string.isRequired,
  initialREGISTRATION_REQUEST_NUMBER: PropTypes.string.isRequired,
  initialREGISTRATION_REQUEST_DATE: PropTypes.string.isRequired,
  initialDRG_SERIAL_NO: PropTypes.string.isRequired,
  initialDRG_BARCODE: PropTypes.string.isRequired,
  initialNAME: PropTypes.string.isRequired,
  initialDRG_FILLING: PropTypes.string.isRequired,
  initialDOSAGE: PropTypes.string.isRequired,
  initialDRG_CONCENTRATE: PropTypes.string.isRequired,
  initialSTORES_DESC_L: PropTypes.string.isRequired,
  initialINGREDIENT: PropTypes.string.isRequired,
  initialATCCODE: PropTypes.string.isRequired,
  initialDRG_REG_NO: PropTypes.string.isRequired,
  initialRE_REGISTRATION_DATE: PropTypes.string.isRequired,
  initialDRG_INDUST_CMP: PropTypes.string.isRequired,
  initialDRG_INDUST_CMP_COUNTRY: PropTypes.string.isRequired,
  initialDRG_SALES_CMP: PropTypes.string.isRequired,
  initialDRG_SALES_COUNTRY: PropTypes.string.isRequired,
  initialDRG_PRIMARY_CMP: PropTypes.string.isRequired,
  initialDRG_PRIMARY_CMP_COUNTRY: PropTypes.string.isRequired,
  initialDRG_SECONDARY_CMP: PropTypes.string.isRequired,
  initialDRG_SECONDARY_CMP_COUNTRY: PropTypes.string.isRequired,
  initialDRG_B_R_CMP: PropTypes.string.isRequired,
  initialDRG_B_R_CMP_COUNTRY: PropTypes.string.isRequired,
  initialJHP: PropTypes.string.isRequired,
  initialJHP_TAXED: PropTypes.string.isRequired,
  initialLIST_NAME: PropTypes.string.isRequired,
  initialLIST_CLASSIFICATION: PropTypes.string.isRequired,
  initialLIST_RECORD_TYPE: PropTypes.string.isRequired,
  initialITEM_SOURCE: PropTypes.string.isRequired,
  initialDISP_CATEGORY: PropTypes.string.isRequired,
  initialDRUG_TYPE: PropTypes.string.isRequired,
  initialImg: PropTypes.string.isRequired,

  onSave: PropTypes.func.isRequired,
  // onCancel: PropTypes.func.isRequired,
};
