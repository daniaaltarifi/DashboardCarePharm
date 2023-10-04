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

export default function EditPharmacyDialog({ initialName, initialStreet, initialCity,initialState,initialPostalCode,initialPhone,initialEmail,initialWebsite,initialMonday,initialTuesday,initialWednesday,initialThursday,initialFriday,initialSaturday,initialSunday,initialServices,initialImg, onSave }) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(initialName);
  const [city, setCity] = useState(initialCity);
  const [street, setStreet] = useState(initialStreet);
  const [state, setState] = useState(initialState);
  const [postal_code, setPostal_code] = useState(initialPostalCode);
  const [phone, setPhone] = useState(initialPhone);
  const [email, setEmail] = useState(initialEmail);
  const [website, setWebsite] = useState(initialWebsite);
  const [services, setServices] = useState(initialServices);
  const [monday, setMonday] = useState(initialMonday);
  const [tuesday, setTuesday] = useState(initialTuesday);
  const [wednesday, setWednesday] = useState(initialWednesday);
  const [thursday, setThursday] = useState(initialThursday);
  const [friday, setFriday] = useState(initialFriday);
  const [saturday, setSaturday] = useState(initialSaturday);
  const [sunday, setSunday] = useState(initialSunday);
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
    onSave(img,name, city, street,state,postal_code,phone,email,website,services,monday,tuesday,wednesday,thursday,friday,saturday,sunday);
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
        <DialogTitle id="edit-news">Edit Pharmacy</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit the pharmacy details:</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="summary"
            label="City"
            type="text"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Street"
            type="text"
            fullWidth
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="State"
            type="text"
            fullWidth
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Postal code"
            type="text"
            fullWidth
            value={postal_code}
            onChange={(e) => setPostal_code(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Phone"
            type="text"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Email"
            type="text"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Website"
            type="text"
            fullWidth
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Services"
            type="text"
            fullWidth
            value={services}
            onChange={(e) => setServices(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="monday"
            type="text"
            fullWidth
            value={monday}
            onChange={(e) => setMonday(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Tuesday"
            type="text"
            fullWidth
            value={tuesday}
            onChange={(e) => setTuesday(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Wednesday"
            type="text"
            fullWidth
            value={wednesday}
            onChange={(e) => setWednesday(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Thursday"
            type="text"
            fullWidth
            value={thursday}
            onChange={(e) => setThursday(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Friday"
            type="text"
            fullWidth
            value={friday}
            onChange={(e) => setFriday(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Saturday"
            type="text"
            fullWidth
            value={saturday}
            onChange={(e) => setSaturday(e.target.value)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Sunday"
            type="text"
            fullWidth
            value={sunday}
            onChange={(e) => setSunday(e.target.value)}
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

EditPharmacyDialog.propTypes = {
    initialName: PropTypes.string.isRequired,
    initialStreet: PropTypes.string.isRequired,
    initialCity: PropTypes.string.isRequired,
    initialState: PropTypes.string.isRequired,
    initialPostalCode: PropTypes.string.isRequired,
    initialPhone: PropTypes.string.isRequired,
    initialEmail: PropTypes.string.isRequired,
    initialWebsite: PropTypes.string.isRequired,
    initialMonday: PropTypes.string.isRequired,
    initialTuesday: PropTypes.string.isRequired,
    initialWednesday: PropTypes.string.isRequired,
    initialThursday: PropTypes.string.isRequired,
    initialFriday: PropTypes.string.isRequired,
    initialSaturday: PropTypes.string.isRequired,
    initialSunday: PropTypes.string.isRequired,
    initialServices: PropTypes.string.isRequired, // onCancel: PropTypes.func.isRequired,
    initialImg: PropTypes.string.isRequired,

  onSave: PropTypes.func.isRequired,
  // onCancel: PropTypes.func.isRequired,
};  
