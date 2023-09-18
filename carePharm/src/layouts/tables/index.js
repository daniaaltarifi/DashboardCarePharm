/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import Author from "./data/authorsTableData";
import PropTypes from "prop-types";
import SoftButton from "components/SoftButton";
import DefaultProjectCard from "../../examples/Cards/ProjectCards/DefaultProjectCard/index.js";
import Button from "@mui/material/Button";

function Tables({ tabletitle, children, addPost, onClick }) {
  // const { columns, rows } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;
  // const { columns, rows } = AvailableMedicineTable;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Card>
            <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SoftTypography variant="h6">{tabletitle}</SoftTypography>
              <Button
                variant="outlined"
                size="medium"
                style={{ color: "#6082AB", borderColor: "#6082AB" }}
                onClick={onClick}
              >
                {addPost}
              </Button>
            </SoftBox>
            <SoftBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              {children}

              {/* <Table columns={columns} rows={rows} /> */}
            </SoftBox>
          </Card>
        </SoftBox>
        <Card>
          <SoftBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <SoftTypography variant="h6">Projects table</SoftTypography>
          </SoftBox>
          <SoftBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            {/* <Table columns={prCols} rows={prRows} /> */}
          </SoftBox>
        </Card>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}
// Define PropTypes for the component
Tables.propTypes = {
  tabletitle: PropTypes.string.isRequired, // Validate the tabletitle prop
  children: PropTypes.node.isRequired, // Allow children to be passed and rendered
  addPost: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default Tables;
