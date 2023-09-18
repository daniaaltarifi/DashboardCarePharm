import React from "react";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
// import { useGetUsersQuery } from "../../../Slices/usersApiSlice.js";
import { Link } from "react-router-dom";
function DataTable() {
  // const { data: users, refetch } = useGetUsersQuery();
  // console.log(users)
  return (
    <div>
      {/* MDB Table */}
      <MDBTable align="middle">
        <MDBTableHead>
          <tr className="table-secondary">
            <th scope="col">UserName</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          <div>
          {/* {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1"></p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-muted mb-0"></p>
              </td>
              <td>
                <MDBBadge color="success" pill>
                  Active
                </MDBBadge>
              </td>
              <td></td>
              <td>
                <Link to={`/user/${user._id}/edit`}>
                  <MDBBtn color="link" rounded size="sm">
                    Edit
                  </MDBBtn>
                </Link>
                <MDBBtn color="link" rounded size="sm" onClick={() => deleteHandler(user._id)}>
                  Del{" "}
                </MDBBtn>
              </td>
            </tr>
          ))} */}
          </div>
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}
// DataTable.propTypes = {
//     col: PropTypes.string.isRequired, // Validate the tabletitle prop
//     children: PropTypes.node.isRequired, // Allow children to be passed and rendered

//   };
export default DataTable;
