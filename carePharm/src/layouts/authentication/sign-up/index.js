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

import { useState,useEffect } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import { useNavigate,useLocation } from "react-router-dom";
import logoMedicine from '../../../assets/images/logos/logoMedicine.png'
import '../Style/Login.css'
import axios from 'axios'
import Header from '../../profile/components/Header/index.js'
import { useCookies } from 'react-cookie';
import { useRegisterMutation } from "../../../Slices/usersApiSlice.js";
import { setCredentials } from "../../../Slices/authSlice.js";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

function SignUp() {
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [isValidEmail, setIsValidEmail] = useState(true);
  const dispatch = useDispatch();
  const [register] = useRegisterMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const {search}=useLocation();
const sp=new URLSearchParams(search);
const redirect=sp.get('redirect') || '/';
  const navigate = useNavigate();
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  //   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   setIsValidEmail(emailPattern.test(email));
  // };    
  const [cookies, setCookie] = useCookies(['userInfo']); // Import useCookies and set up a cookie
  useEffect(()=>{
    if(userInfo){
      navigate(redirect)
    }
    },[userInfo,redirect,navigate])
  const handleSubmit = async (e) => {

    e.preventDefault();
    if(password != confirmPassword){
      toast.error('Password Don`t Match')
      return;
    }
      else{
        try {
          const res=await register({username,email,password}).unwrap();
          dispatch(setCredentials({...res}))
          setCookie('userInfo', JSON.stringify(res), { path: '/' });
    
    navigate(redirect)
        } catch (err) {
          toast.error(err?.data?.message || err.error)
        }
      }
    }
 
    // axios
    //   .post("http://localhost:5000/register", { username, email, password })
    //   .then((result) => {
    //     console.log(result);
    //     if (isValidEmail) {
    //       navigate("/authentication/sign-in");
    //       setCookies('username', username, { path: '/' });

    //     } else console.error("error");
    //   })
    //   .catch((error) => console.log(error));
  
  return (
    <div className="background">
      <div className="box_login">
        <div className="logo">
          <img src={logoMedicine} alt="" className="logo_img" />
        </div>
        <h3 className="signUp" >Sign Up</h3>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-6 col-sm-12 ">
                <div className="d-flex col_input">
                  <i className="fa-solid fa-user mt-2  " style={{ color: "#ffffff" }}></i>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input_field"
                    name="name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            required
                  />{" "}
              </div></div>
              <div className="col-lg-6 col-sm-12 ">
                <div className="d-flex col_input">
                  <i className="fa-solid fa-user mt-2" style={{ color: "#ffffff" }}></i>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input_field"
                    name="email"
            onChange={(e)=>{setEmail(e.target.value)}}
                  />
                  {/* {!isValidEmail && (
            <p style={{ color: "red" }}>Invalid email format</p>
          )} */}
                </div>
              </div>
              <div className="col-lg-6 col-sm-12  ">
                <div className="d-flex col_input">
                  <i className="fa-solid fa-lock mt-2" style={{ color: "#ffffff" }}></i>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input_field"
                    name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
                  />{" "}
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 ">
                <div className="d-flex col_input">
                  <i className="fa-solid fa-lock mt-2" style={{ color: "#ffffff" }}></i>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="input_field"
                    onChange={(e)=>{setConfirmPassword(e.target.value)}}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn_signup ">
            Register
          </button>
          <p className="have_acc"><Link to={redirect ? `/authentication/sign-in?redirect=${redirect}`:'/authentication/sign-in'}style={{color:"#fff"}}>Already have an account ?</Link></p>
        </form>
      </div>

    </div>

  );
  // const [agreement, setAgremment] = useState(true);

  // const handleSetAgremment = () => setAgremment(!agreement);

  // return (
  //   <BasicLayout
  //     title="Welcome!"
  //     description="Use these awesome forms to login or create new account in your project for free."
  //     image={curved6}
  //   >
  //     <Card>
  //       <SoftBox p={3} mb={1} textAlign="center">
  //         <SoftTypography variant="h5" fontWeight="medium">
  //           Register with
  //         </SoftTypography>
  //       </SoftBox>
  //       <SoftBox mb={2}>
  //         <Socials />
  //       </SoftBox>
  //       <Separator />
  //       <SoftBox pt={2} pb={3} px={3}>
  //         <SoftBox component="form" role="form">
  //           <SoftBox mb={2}>
  //             <SoftInput placeholder="Name" />
  //           </SoftBox>
  //           <SoftBox mb={2}>
  //             <SoftInput type="email" placeholder="Email" />
  //           </SoftBox>
  //           <SoftBox mb={2}>
  //             <SoftInput type="password" placeholder="Password" />
  //           </SoftBox>
  //           <SoftBox display="flex" alignItems="center">
  //             <Checkbox checked={agreement} onChange={handleSetAgremment} />
  //             <SoftTypography
  //               variant="button"
  //               fontWeight="regular"
  //               onClick={handleSetAgremment}
  //               sx={{ cursor: "poiner", userSelect: "none" }}
  //             >
  //               &nbsp;&nbsp;I agree the&nbsp;
  //             </SoftTypography>
  //             <SoftTypography
  //               component="a"
  //               href="#"
  //               variant="button"
  //               fontWeight="bold"
  //               textGradient
  //             >
  //               Terms and Conditions
  //             </SoftTypography>
  //           </SoftBox>
  //           <SoftBox mt={4} mb={1}>
  //             <SoftButton variant="gradient" color="dark" fullWidth>
  //               sign up
  //             </SoftButton>
  //           </SoftBox>
  //           <SoftBox mt={3} textAlign="center">
  //             <SoftTypography variant="button" color="text" fontWeight="regular">
  //               Already have an account?&nbsp;
  //               <SoftTypography
  //                 component={Link}
  //                 to="/authentication/sign-in"
  //                 variant="button"
  //                 color="dark"
  //                 fontWeight="bold"
  //                 textGradient
  //               >
  //                 Sign in
  //               </SoftTypography>
  //             </SoftTypography>
  //           </SoftBox>
  //         </SoftBox>
  //       </SoftBox>
  //     </Card>
  //   </BasicLayout>
  //);
}

export default SignUp;
