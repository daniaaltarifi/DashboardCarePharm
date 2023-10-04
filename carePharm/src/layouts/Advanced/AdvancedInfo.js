import React, { useState } from "react";
import Tables from "../tables/index.js";
import DataTable from "layouts/tables/data/DataTable.js";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect } from "react";
import SoftButton from "components/SoftButton";
import Icon from "@mui/material/Icon";
import AlertDelete from "../../components/AlertDelete/AlertDelete.js";
import Swal from "sweetalert2";
import CreateAdvancedDialog from "./CreateAdvancedDialog.js";
import EditAdvancedDialog from "./EditAdvancedDialog.js";
function AdvancedInfo() {
  const [advanced, setAdvanced] = useState([]);
  const [advancedToDelete, setAdvancedToDelete] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Use an async function inside useEffect to fetch the data
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/advancedMedicine/getAllMedicine");
        console.log(response.data);
        setAdvanced(response.data); // Store the fetched data in the state
        console.log(advanced);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const handleDelete = async (id, index) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/advancedMedicine/deleteAdvancedInfo/${id}`
      );
      console.log(id);
      console.log(response);

      setAdvanced((prevAdvanced) => prevAdvanced.filter((advanced) => advanced._id !== id));

      Swal.fire({
        icon: "success",
        title: "Deleted!",
        text: "The Advanced Has Been Deleted Successfully.",
      });

      setAdvancedToDelete((prev) => prev.filter((_, i) => i !== index));
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while deleting the advanced item.",
      });
    }
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleSaveAdvanced = (newAdvanced) => {
    // Update the news state with the new data
    setAdvanced((prevAdvanced) => [...prevAdvanced, newAdvanced]);
  };
  const handleUpdate = async (
    _id,
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
  ) => {
    try {
      const formData = new FormData();
      formData.append("RECORD_STATUS_DESC", RECORD_STATUS_DESC); // 'image' should match the field name on the server
      formData.append("REGISTRATION_REQUEST_NUMBER", REGISTRATION_REQUEST_NUMBER); // Append 'title' with its value
      formData.append("REGISTRATION_REQUEST_DATE", REGISTRATION_REQUEST_DATE); // Append 'summary' with its value
      formData.append("DRG_SERIAL_NO", DRG_SERIAL_NO); // Append 'description' with its value
      formData.append("DRG_BARCODE", DRG_BARCODE); // Append 'description' with its value
      formData.append("NAME", NAME); // Append 'description' with its value
      formData.append("DRG_FILLING", DRG_FILLING); // Append 'description' with its value
      formData.append("DOSAGE", DOSAGE); // Append 'description' with its value
      formData.append("DRG_CONCENTRATE", DRG_CONCENTRATE); // Append 'description' with its value
      formData.append("STORES_DESC_L", STORES_DESC_L); // Append 'description' with its value
      formData.append("INGREDIENT", INGREDIENT); // Append 'description' with its value
      formData.append("ATCCODE", ATCCODE); // Append 'description' with its value
      formData.append("DRG_REG_NO", DRG_REG_NO); // Append 'description' with its value
      formData.append("RE_REGISTRATION_DATE", RE_REGISTRATION_DATE); // Append 'description' with its value
      formData.append("DRG_INDUST_CMP", DRG_INDUST_CMP); // Append 'description' with its value
      formData.append("DRG_INDUST_CMP_COUNTRY", DRG_INDUST_CMP_COUNTRY); // Append 'description' with its value
      formData.append("DRG_SALES_CMP", DRG_SALES_CMP); // Append 'description' with its value
      formData.append("DRG_SALES_COUNTRY", DRG_SALES_COUNTRY); // Append 'description' with its value
      formData.append("DRG_PRIMARY_CMP", DRG_PRIMARY_CMP); // Append 'description' with its value
      formData.append("DRG_PRIMARY_CMP_COUNTRY", DRG_PRIMARY_CMP_COUNTRY); // Append 'description' with its value
      formData.append("DRG_SECONDARY_CMP", DRG_SECONDARY_CMP); // Append 'description' with its value
      formData.append("DRG_SECONDARY_CMP_COUNTRY", DRG_SECONDARY_CMP_COUNTRY); // Append 'description' with its value
      formData.append("DRG_B_R_CMP", DRG_B_R_CMP); // Append 'description' with its value
      formData.append("DRG_SECONDARY_CMP_COUNTRY", DRG_SECONDARY_CMP_COUNTRY); // Append 'description' with its value
      formData.append("DRG_B_R_CMP_COUNTRY", DRG_B_R_CMP_COUNTRY); // Append 'description' with its value
      formData.append("JHP", JHP); // Append 'description' with its value
      formData.append("JHP_TAXED", JHP_TAXED); // Append 'description' with its value
      formData.append("LIST_NAME", LIST_NAME); // Append 'description' with its value
      formData.append("LIST_CLASSIFICATION", LIST_CLASSIFICATION); // Append 'description' with its value
      formData.append("LIST_RECORD_TYPE", LIST_RECORD_TYPE); // Append 'description' with its value
      formData.append("ITEM_SOURCE", ITEM_SOURCE); // Append 'description' with its value
      formData.append("DISP_CATEGORY", DISP_CATEGORY); // Append 'description' with its value
      formData.append("DRUG_TYPE", DRUG_TYPE); // Append 'description' with its value
      formData.append("image", img); // 'image' should match the field name on the server

      const response = await axios.patch(
        `http://localhost:5000/advancedMedicine/UpdateAdvancedInfo/${_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type for file upload
          },
        }
      );

      console.log("hello");
      setAdvanced(response.data);
      // window.location.reload();

      console.log(response.data);
      // setNews(response.data);
    } catch (error) {
      console.log(`Error in fetch edit data: ${error}`);
    }
  };
  const [editAdvanced, setEditAdvanced] = useState("");

  // Function to handle the edit button click and set the currently edited news item
  const handleEdit = (advanced) => {
    setEditAdvanced(advanced);
  };
  const handleSaveUpdate = (
    editedImg,
    editedRECORD_STATUS_DESC,
    editedREGISTRATION_REQUEST_NUMBER,
    editedREGISTRATION_REQUEST_DATE,
    editedDRG_SERIAL_NO,
    editedDRG_BARCODE,
    editedNAME,
    editedDRG_FILLING,
    editedDOSAGE,
    editedDRG_CONCENTRATE,
    editedSTORES_DESC_L,
    editedINGREDIENT,
    editedDRG_REG_NO,
    editedRE_REGISTRATION_DATE,
    editedATCCODE,
    editedDRG_INDUST_CMP,
    editedDRG_INDUST_CMP_COUNTRY,
    editedDRG_SALES_CMP,
    editedDRG_SALES_COUNTRY,
    editedDRG_PRIMARY_CMP,
    editedDRG_PRIMARY_CMP_COUNTRY,
    editedDRG_SECONDARY_CMP,
    editedDRG_SECONDARY_CMP_COUNTRY,
    editedDRG_B_R_CMP,
    editedDRG_B_R_CMP_COUNTRY,
    editedJHP,
    editedJHP_TAXED,
    editedLIST_NAME,
    editedLIST_CLASSIFICATION,
    editedLIST_RECORD_TYPE,
    editedITEM_SOURCE,
    editedDISP_CATEGORY,
    editedDRUG_TYPE
  ) => {
    // Check if an item is being edited
    if (editAdvanced) {
      // Make the update here using the editedTitle, editedSummary, and editedDescription
      // You can use the handleUpdate function to make the API call
      handleUpdate(
        editAdvanced._id,
        editedImg,
        editedRECORD_STATUS_DESC,
        editedREGISTRATION_REQUEST_NUMBER,
        editedREGISTRATION_REQUEST_DATE,
        editedDRG_SERIAL_NO,
        editedDRG_BARCODE,
        editedNAME,
        editedDRG_FILLING,
        editedDOSAGE,
        editedDRG_CONCENTRATE,
        editedSTORES_DESC_L,
        editedINGREDIENT,
        editedDRG_REG_NO,
        editedRE_REGISTRATION_DATE,
        editedATCCODE,
        editedDRG_INDUST_CMP,
        editedDRG_INDUST_CMP_COUNTRY,
        editedDRG_SALES_CMP,
        editedDRG_SALES_COUNTRY,
        editedDRG_PRIMARY_CMP,
        editedDRG_PRIMARY_CMP_COUNTRY,
        editedDRG_SECONDARY_CMP,
        editedDRG_SECONDARY_CMP_COUNTRY,
        editedDRG_B_R_CMP,
        editedDRG_B_R_CMP_COUNTRY,
        editedJHP,
        editedJHP_TAXED,
        editedLIST_NAME,
        editedLIST_CLASSIFICATION,
        editedLIST_RECORD_TYPE,
        editedITEM_SOURCE,
        editedDISP_CATEGORY,
        editedDRUG_TYPE
      );

      // Clear the edit state
      setEditAdvanced(null);
    }
  };
  return (
    <div>
      <Tables tabletitle="Advanced Information Table" >
        <CreateAdvancedDialog open={open} setOpen={setOpen} onSave={handleSaveAdvanced} />
        {/* Use "tabletitle" prop */}
        <div className="table-responsive">
          {/* MDB Table */}
          <MDBTable align="middle">
            <MDBTableHead>
              <tr className="table-secondary">
                <th scope="col">RECORD_STATUS_DESC</th>
                <th scope="col">REGISTRATION_REQUEST_NUMBER</th>
                <th scope="col">REGISTRATION_REQUEST_DATE</th>
                <th scope="col">DRG_SERIAL_NO</th>
                <th scope="col">DRG_BARCODE</th>
                <th scope="col">NAME</th>
                <th scope="col">DRG_FILLING</th>
                <th scope="col">DOSAGE</th>
                <th scope="col">DRG_CONCENTRATE</th>
                <th scope="col">STORES_DESC_L</th>
                <th scope="col">INGREDIENT</th>
                <th scope="col">ATCCODE</th>
                <th scope="col">DRG_REG_NO</th>
                <th scope="col">RE_REGISTRATION_DATE</th>
                <th scope="col">DRG_INDUST_CMP</th>
                <th scope="col">DRG_INDUST_CMP_COUNTRY</th>
                <th scope="col">DRG_SALES_CMP</th>
                <th scope="col">DRG_SALES_COUNTRY</th>
                <th scope="col">DRG_PRIMARY_CMP</th>
                <th scope="col">DRG_PRIMARY_CMP_COUNTRY</th>
                <th scope="col">DRG_SECONDARY_CMP</th>
                <th scope="col">DRG_SECONDARY_CMP_COUNTRY</th>
                <th scope="col">DRG_B_R_CMP</th>
                <th scope="col">DRG_B_R_CMP_COUNTRY</th>
                <th scope="col">JHP</th>
                <th scope="col">JHP_TAXED</th>
                <th scope="col">LIST_NAME</th>
                <th scope="col">LIST_CLASSIFICATION</th>
                <th scope="col">LIST_RECORD_TYPE</th>
                <th scope="col">ITEM_SOURCE</th>
                <th scope="col">DISP_CATEGORY</th>
                <th scope="col">DRUG_TYPE</th>
                <th scope="col">Actions</th>
              </tr>
            </MDBTableHead>

            <MDBTableBody>
              {advanced.map((advanced, idx) => (
                <tr key={advanced._id}>
                  <td>
                    <div className="d-flex align-items-center">
                      {/* <img
                        src={advanced.avatar}
                        alt=""
                        style={{ width: "45px", height: "45px" }}
                        className="rounded-circle"
                      /> */}
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{advanced.RECORD_STATUS_DESC}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.REGISTRATION_REQUEST_NUMBER}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.REGISTRATION_REQUEST_DATE}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_SERIAL_NO}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_BARCODE}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.NAME}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_FILLING}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DOSAGE}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_CONCENTRATE}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.STORES_DESC_L}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.INGREDIENT}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.ATCCODE}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_REG_NO}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.RE_REGISTRATION_DATE}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_INDUST_CMP}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_INDUST_CMP_COUNTRY}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_SALES_CMP}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_SALES_COUNTRY}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_PRIMARY_CMP}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_PRIMARY_CMP_COUNTRY}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_SECONDARY_CMP}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_SECONDARY_CMP_COUNTRY}</p>
                  </td>{" "}
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_B_R_CMP}</p>
                  </td>{" "}
                  <td>
                    <p className="text-muted mb-0">{advanced.DRG_B_R_CMP_COUNTRY}</p>
                  </td>{" "}
                  <td>
                    <p className="text-muted mb-0">{advanced.JHP}</p>
                  </td>{" "}
                  <td>
                    <p className="text-muted mb-0">{advanced.JHP_TAXED}</p>
                  </td>{" "}
                  <td>
                    <p className="text-muted mb-0">{advanced.LIST_NAME}</p>
                  </td>{" "}
                  <td>
                    <p className="text-muted mb-0">{advanced.LIST_CLASSIFICATION}</p>
                  </td>
                  <td>
                    <p className="text-muted mb-0">{advanced.LIST_RECORD_TYPE}</p>
                  </td>{" "}
                  <td>
                    <p className="text-muted mb-0">{advanced.ITEM_SOURCE}</p>
                  </td>{" "}
                  <td>
                    <p className="text-muted mb-0">{advanced.DISP_CATEGORY}</p>
                  </td>{" "}
                  <td>
                    <p className="text-muted mb-0">{advanced.DRUG_TYPE}</p>
                  </td>
                  <td>
                    <MDBBtn
                      color="link"
                      rounded
                      size="sm"
                      onClick={() => setAdvancedToDelete((prev) => [...prev, advanced._id])}
                    >
                      <SoftButton variant="text" color="error">
                        <Icon>delete</Icon>&nbsp;delete
                      </SoftButton>
                    </MDBBtn>
                    {/* <MDBBtn color="link" rounded size="sm" onClick={() => handleEdit(advanced)}>
                      <EditAdvancedDialog
                        initialRECORD_STATUS_DESC={advanced.RECORD_STATUS_DESC}
                        initialREGISTRATION_REQUEST_NUMBER={advanced.REGISTRATION_REQUEST_NUMBER}
                        initialREGISTRATION_REQUEST_DATE={advanced.REGISTRATION_REQUEST_DATE}
                        initialDRG_SERIAL_NO={advanced.DRG_SERIAL_NO}
                        initialDRG_BARCODE={advanced.DRG_BARCODE}
                        initialNAME={advanced.NAME}
                        initialDRG_FILLING={advanced.DRG_FILLING}
                        initialDOSAGE={advanced.DOSAGE}
                        initialDRG_CONCENTRATE={advanced.DRG_CONCENTRATE}
                        initialSTORES_DESC_L={advanced.STORES_DESC_L}
                        initialINGREDIENT={advanced.INGREDIENT}
                        initialATCCODE={advanced.ATCCODE}
                        initialDRG_REG_NO={advanced.DRG_REG_NO}
                        initialRE_REGISTRATION_DATE={advanced.RE_REGISTRATION_DATE}
                        initialDRG_INDUST_CMP={advanced.DRG_INDUST_CMP}
                        initialDRG_INDUST_CMP_COUNTRY={advanced.DRG_INDUST_CMP_COUNTRY}
                        initialDRG_SALES_CMP={advanced.DRG_SALES_CMP}
                        initialDRG_SALES_COUNTRY={advanced.DRG_SALES_COUNTRY}
                        initialDRG_PRIMARY_CMP={advanced.DRG_PRIMARY_CMP}
                        initialDRG_PRIMARY_CMP_COUNTRY={advanced.DRG_PRIMARY_CMP_COUNTRY}
                        initialDRG_SECONDARY_CMP={advanced.DRG_SECONDARY_CMP}
                        initialDRG_SECONDARY_CMP_COUNTRY={advanced.DRG_SECONDARY_CMP_COUNTRY}
                        initialDRG_B_R_CMP={advanced.DRG_B_R_CMP}
                        initialDRG_B_R_CMP_COUNTRY={advanced.DRG_B_R_CMP_COUNTRY}
                        initialJHP={advanced.JHP}
                        initialJHP_TAXED={advanced.JHP_TAXED}
                        initialLIST_NAME={advanced.NAME}
                        initialLIST_CLASSIFICATION={advanced.LIST_CLASSIFICATION}
                        initialLIST_RECORD_TYPE={advanced.LIST_RECORD_TYPE}
                        initialITEM_SOURCE={advanced.ITEM_SOURCE}
                        initialDISP_CATEGORY={advanced.DISP_CATEGORY}
                        initialDRUG_TYPE={advanced.DRUG_TYPE}
                        initialImg={advanced.img}
                        onSave={handleSaveUpdate}
                      />
                    </MDBBtn> */}
                  </td>
                  {/* <td>
                     <MDBBtn color="link" rounded size="sm">
                       Edit
                     </MDBBtn>
                   </td> */}
                </tr>
              ))}
              {advancedToDelete.map((id, index) => (
                <AlertDelete key={id} onConfirm={() => handleDelete(id, index)} />
              ))}
            </MDBTableBody>
          </MDBTable>
        </div>
      </Tables>
    </div>
  );
}
export default AdvancedInfo;
