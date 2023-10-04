import React, { useState } from "react";
import Tables from "../tables/index.js";
import DataTable from "layouts/tables/data/DataTable.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect } from "react";
import SoftButton from "components/SoftButton";
import Icon from "@mui/material/Icon";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import AlertDelete from "../../components/AlertDelete/AlertDelete.js";
import CreatePharmacyDialog from "./CreatePharmacyDialog.js";
import EditPharmacyDialog from "./EditPharmacyDialog.js";
function Pharmacy() {
  const [pharmacy, setPharmacy] = useState([]);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [pharmacyToDelete, setPharmacyToDelete] = useState([]); // for extract the id from handledelete btn
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Use an async function inside useEffect to fetch the data
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/pharmacy");
        console.log(response.data);
        setPharmacy(response.data); // Store the fetched data in the state
        console.log(pharmacy);
      } catch (error) {
        console.log(` error get pharmacy from frontend ${error}`);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id, index) => {
    try {
      const response = await axios.delete(`http://localhost:5000/pharmacy/delete/${id}`);
      console.log(id);
      console.log(response);

      setPharmacy((prevPharmacy) => prevPharmacy.filter((pharmacy) => pharmacy._id !== id));
      setDeleteSuccess(true);

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "The Pharmacy Has Been Deleted Successfully.",
      });

      setPharmacyToDelete((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error(error);
      setDeleteSuccess(false);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while deleting the news item.",
      });
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSavePharmacy = (newPharmacy) => {
    // Update the news state with the new data
    setPharmacy((prevPharmacy) => [...prevPharmacy, newPharmacy]);
  };

  const handleUpdate = async (
    _id,
    img,
    name,
    city,
    street,
    state,
    postal_code,
    phone,
    email,
    website,
    services,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday,
    sunday
  ) => {
    try {
      const formData = new FormData();
      formData.append("image", img); // 'image' should match the field name on the server
      formData.append("name", name);
      formData.append("address[city]", city);
      formData.append("address[street]", street);
      formData.append("address[state]", state);
      formData.append("address[postal_code]", postal_code);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("website", website);
      formData.append("hours_of_operation[monday]", monday);
      formData.append("hours_of_operation[tuesday]", tuesday);
      formData.append("hours_of_operation[wednesday]", wednesday);
      formData.append("hours_of_operation[thursday]", thursday);
      formData.append("hours_of_operation[friday]", friday);
      formData.append("hours_of_operation[saturday]", saturday);
      formData.append("hours_of_operation[sunday]", sunday);
      // Append services as needed

      const response = await axios.patch(`http://localhost:5000/pharmacy/update/${_id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Set the content type for file upload
        },
      });
      console.log("hello");
      setPharmacy(response.data);
      window.location.reload();

      console.log(response.data);
      // setNews(response.data);
    } catch (error) {
      console.log(`Error in fetch edit data: ${error}`);
    }
  };
  // Define a state to hold the currently edited news item
  const [editPharmacy, setEditPharmacy] = useState("");

  // Function to handle the edit button click and set the currently edited news item
  const handleEdit = (pharmacy) => {
    setEditPharmacy(pharmacy);
  };

  // Function to handle the save action
  const handleSaveUpdate = (
    editedImg,
    editedName,
    editedCity,
    editedStreet,
    editedState,
    editedpostal_code,
    editedphone,
    editedemail,
    editedwebsite,
    editedservices,
    editedmonday,
    editedtuesday,
    editedwednesday,
    editedthursday,
    editedfriday,
    editedsaturday,
    editedsunday
  ) => {
    // Check if an item is being edited
    if (editPharmacy) {
      // Make the update here using the editedTitle, editedSummary, and editedDescription
      // You can use the handleUpdate function to make the API call
      handleUpdate(
        editPharmacy._id,
        editedImg,
        editedName,
        editedCity,
        editedStreet,
        editedState,
        editedpostal_code,
        editedphone,
        editedemail,
        editedwebsite,
        editedservices,
        editedmonday,
        editedtuesday,
        editedwednesday,
        editedthursday,
        editedfriday,
        editedsaturday,
        editedsunday
      );

      // Clear the edit state
      setEditPharmacy(null);
    }
  };
  return (
    <div>
      <Tables tabletitle="pharmacy Table" addPost="add Pharmacy" onClick={handleOpen}>
        <CreatePharmacyDialog open={open} setOpen={setOpen} onSave={handleSavePharmacy} />

        {/* Use "tabletitle" prop */}
        <div className="table-responsive">
          {/* MDB Table */}
          <MDBTable align="middle">
            <MDBTableHead>
              <tr className="table-secondary">
                <th scope="col">name</th>
                <th scope="col">city</th>
                <th scope="col">street</th>
                <th scope="col">state</th>
                <th scope="col">postal_code</th>
                <th scope="col">phone</th>
                <th scope="col">email</th>
                <th scope="col">website</th>
                <th scope="col">hours_of_operation</th>
                <th scope="col"></th>
                <th scope="col">Actions</th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              {Array.isArray(pharmacy) &&
                pharmacy.map((pharmacy, idx) => (
                  <tr key={pharmacy._id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={pharmacy.avatar}
                          alt=""
                          style={{ width: "45px", height: "45px" }}
                          className="rounded-circle"
                        />
                        <div className="ms-3">
                          <p className="fw-bold mb-1">{pharmacy.name}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="ms-3">
                        <p className="fw-bold mb-1">
                          {pharmacy.address && pharmacy.address.city
                            ? pharmacy.address.city
                            : "N/A"}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="ms-3">
                        <p className="fw-bold mb-1">
                          {pharmacy.address && pharmacy.address.street
                            ? pharmacy.address.street
                            : "N/A"}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="ms-3">
                        <p className="fw-bold mb-1">
                          {pharmacy.address && pharmacy.address.state
                            ? pharmacy.address.state
                            : "N/A "}
                        </p>
                      </div>
                    </td>
                    <td>
                      <div className="ms-3">
                        <p className="fw-bold mb-1">
                          {pharmacy.address && pharmacy.address.postal_code
                            ? pharmacy.address.postal_code
                            : "N/A "}
                        </p>
                      </div>
                    </td>
                    <td>
                      <p className="text-muted mb-0">{pharmacy.phone}</p>
                    </td>
                    <td>
                      <p className="text-muted mb-0">{pharmacy.email}</p>
                    </td>
                    <td>
                      <p className="text-muted mb-0">{pharmacy.website}</p>
                    </td>
                    <td>
                      <div className="ms-3">
                        <p className="text-muted mb-0">
                          Monday:
                          {pharmacy.hours_of_operation && pharmacy.hours_of_operation.monday
                            ? pharmacy.hours_of_operation.monday
                            : "N/A"}
                        </p>
                        <p className="text-muted mb-0">
                          Tuesday:
                          {pharmacy.hours_of_operation && pharmacy.hours_of_operation.tuesday
                            ? pharmacy.hours_of_operation.tuesday
                            : "N/A"}
                        </p>
                        <p className="text-muted mb-0">
                          Wednesday:
                          {pharmacy.hours_of_operation && pharmacy.hours_of_operation.wednesday
                            ? pharmacy.hours_of_operation.wednesday
                            : "N/A"}
                        </p>

                        <p className="text-muted mb-0">
                          Thursday:
                          {pharmacy.hours_of_operation && pharmacy.hours_of_operation.thursday
                            ? pharmacy.hours_of_operation.thursday
                            : "N/A"}
                        </p>
                        <p className="text-muted mb-0">
                          Friday
                          {pharmacy.hours_of_operation && pharmacy.hours_of_operation.friday
                            ? pharmacy.hours_of_operation.friday
                            : "N/A"}
                        </p>
                        <p className="text-muted mb-0">
                          Saturday:
                          {pharmacy.hours_of_operation && pharmacy.hours_of_operation.saturday
                            ? pharmacy.hours_of_operation.saturday
                            : "N/A"}
                        </p>
                        <p className="text-muted mb-0">
                          Sunday:
                          {pharmacy.hours_of_operation && pharmacy.hours_of_operation.sunday
                            ? pharmacy.hours_of_operation.sunday
                            : "N/A"}
                        </p>
                      </div>
                    </td>
                    {/* <td>
                    {pharmacy.hours_of_operation && Object.entries(pharmacy.hours_of_operation).map(([day, hours]) => (
                      <div key={day}>
                        <p className="text-muted mb-0">
                          {day}: {hours}
                        </p>
                      </div>
                    ))}{" "}
                  </td> */}
                    <td>
                      <p className="text-muted mb-0">{pharmacy.services}</p>
                    </td>
                    <td>
                      <MDBBtn
                        color="link"
                        rounded
                        size="sm"
                        onClick={() => setPharmacyToDelete((prev) => [...prev, pharmacy._id])}
                      >
                        <SoftButton variant="text" color="error">
                          <Icon>delete</Icon>&nbsp;delete
                        </SoftButton>
                      </MDBBtn>

                      <MDBBtn color="link" rounded size="sm" onClick={() => handleEdit(pharmacy)}>
                        <EditPharmacyDialog
                          initialImg={pharmacy.img}
                          initialName={pharmacy.name}
                          initialStreet={pharmacy.address && pharmacy.address.street}
                          initialCity={pharmacy.address && pharmacy.address.city}
                          initialState={pharmacy.address && pharmacy.address.state}
                          initialPostalCode={pharmacy.address && pharmacy.address.postal_code}
                          initialPhone={pharmacy.phone}
                          initialEmail={pharmacy.email}
                          initialWebsite={pharmacy.website}
                          initialMonday={
                            pharmacy.hours_of_operation && pharmacy.hours_of_operation.monday
                          }
                          initialTuesday={
                            pharmacy.hours_of_operation && pharmacy.hours_of_operation.tuesday
                          }
                          initialWednesday={
                            pharmacy.hours_of_operation && pharmacy.hours_of_operation.wednesday
                          }
                          initialThursday={
                            pharmacy.hours_of_operation && pharmacy.hours_of_operation.thursday
                          }
                          initialFriday={
                            pharmacy.hours_of_operation && pharmacy.hours_of_operation.friday
                          }
                          initialSaturday={
                            pharmacy.hours_of_operation && pharmacy.hours_of_operation.saturday
                          }
                          initialSunday={
                            pharmacy.hours_of_operation && pharmacy.hours_of_operation.sunday
                          }
                          initialServices={pharmacy.services}
                          onSave={handleSaveUpdate}
                        />
                      </MDBBtn>
                    </td>
                  </tr>
                ))}
              {pharmacyToDelete.map((id, index) => (
                <AlertDelete key={id} onConfirm={() => handleDelete(id, index)} />
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </Tables>
    </div>
  );
}

export default Pharmacy;
