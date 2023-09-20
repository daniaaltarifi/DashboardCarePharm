/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftAvatar from "components/SoftAvatar";
import SoftBadge from "components/SoftBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useState,useEffect } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tables from '../index.js'

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Author({ image, name, email }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Use an async function inside useEffect to fetch the data
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users',null,{headers:{
          Authorization:`Bearer ${localStorage.getItem('authToken')}`,
        }});
        setData(response.data);
        console.log(response.data)
        console.log(data)

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (

    <div className="table-responsive">
      <MDBTable align='middle'>
  <MDBTableHead>
    <tr className="table-secondary">
      <th scope='col'>UserName</th>
      <th scope='col'>Email</th>
      <th scope='col'>Status</th>
      <th scope='col'>CreatedAt</th>
      <th scope='col'>Actions</th>
    </tr>
  </MDBTableHead>
  <MDBTableBody>
    {data.map((user) => (
      <tr key={user._id}>
        <td>
          <div className='d-flex align-items-center'>
            <img
              src='https://mdbootstrap.com/img/new/avatars/8.jpg'
              alt=''
              style={{ width: '45px', height: '45px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='fw-bold mb-1'>{user.username}</p>
            </div>
          </div>
        </td>
        <td>
        <p className='text-muted mb-0'>{user.email}</p>
        </td>
        <td>
          <MDBBadge color='success' pill>
            Active
          </MDBBadge>
        </td>
        <td>{user.createdAt}</td>
        <td>
          <MDBBtn color='link' rounded size='sm'>
            Edit
          </MDBBtn>
        </td>
      </tr>
    ))}
  </MDBTableBody>
</MDBTable>
</div>
)}



export default Author;

