import React from 'react';
import Tables from '../tables/index.js';
import DataTable from 'layouts/tables/data/DataTable.js';
import Author from 'layouts/tables/data/authorsTableData.js';

function UsersTable() {
    const customTableHead = (
        <tr className="table-secondary">
          <th scope='col'>UserName</th>
          <th scope='col'>Email</th>
          <th scope='col'>Status</th>
          <th scope='col'>CreatedAt</th>
          <th scope='col'>Actions</th>

          {/* Add more custom headers as needed */}
        </tr>
      );
  return (
    <div>
      <Tables tabletitle="Users Table" addPost="add user" >
<DataTable customTableHead={customTableHead}/>
<Author/>
      </Tables>
    </div>
  );
}

export default UsersTable;
