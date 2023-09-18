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
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import ivancik from "assets/images/ivancik.jpg";
import linearGradient from "assets/theme/functions/linearGradient";

function WorkWithTheRockets() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox position="relative" height="100%" p={2}>
        <SoftBox
          display="flex"
          flexDirection="column"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          // sx={{
          //   backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          //     `${linearGradient(
          //       rgba(gradients.dark.main, 0.8),
          //       rgba(gradients.dark.state, 0.8)
          //     )}, url(${ivancik})`,
          //   backgroundSize: "cover",
          // }}
          style={{ background: 'linear-gradient(310deg, #2152ff, #21d4fd)' }}
          >
          <SoftBox mb={3} pt={3}>
            <SoftTypography variant="h5" color="white" fontWeight="bold">
Follow Us            </SoftTypography>
          </SoftBox>
          <SoftBox mb={2}>
            <SoftTypography variant="body2" color="white">
           <img src={require('../../../../assets/images/facebook.png')}  height={"10%"} width={"10%"} alt="" style={{marginRight:"10%",marginLeft:"10%"}}/>
           <img src={require('../../../../assets/images/instagram.png')}  height={"10%"} width={"10%"} alt="" style={{marginRight:"10%"}}/>
           <img src={require('../../../../assets/images/twitter.png')}  height={"10%"} width={"10%"} alt="" style={{marginRight:"10%"}}/>
           <img src={require('../../../../assets/images/linkedin.png')}  height={"10%"} width={"10%"} alt="" />

            </SoftTypography>
          </SoftBox>
       
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default WorkWithTheRockets;
