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
  return (
    <div>
      <Tables tabletitle="Advanced Information Table" addPost="Add Advanced"onClick={handleOpen}>
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
                     src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                     alt=''
                     style={{ width: '45px', height: '45px' }}
                     className='rounded-circle'
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
                    <MDBBtn color="link" rounded size="sm">
                      <SoftButton variant="text" color="error">
                        <SoftButton variant="text" color="dark">
                          <Icon>edit</Icon>&nbsp;edit
                        </SoftButton>{" "}
                      </SoftButton>
                    </MDBBtn>
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
