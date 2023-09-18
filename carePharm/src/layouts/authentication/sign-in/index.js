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

import { useState, useEffect } from "react";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";
// react-router-dom components
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import logoMedicine from '../../../assets/images/logos/logoMedicine.png'
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
//redux
import { useDispatch, useSelector } from "react-redux";
import {useLoginMutation} from "../../../Slices/usersApiSlice.js";
import { setCredentials } from "../../../Slices/authSlice.js";
import Cookies from 'js-cookie';
import { useRef } from "react";
// Function to set a cookie
// function setCookie(name, value, days) {
//   const date = new Date();
//   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//   const expires = `expires=${date.toUTCString()}`;
//   document.cookie = `${name}=${value}; ${expires}; path=/`;
// }

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userRef = useRef()
  const errRef = useRef()
  const [errMsg, setErrMsg] = useState('')
  const [login] = useLoginMutation()

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    userRef.current.focus()
}, [])

useEffect(() => {
    setErrMsg('')
}, [email, password])

  const { userInfo } = useSelector((state) => state.auth);

  const { search } = useLocation();
  const sp = new URLSearchParams(search);
  const redirect = sp.get('redirect') || '/';


  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate(redirect);
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
      
}
  return (
    <div className="background">
      <div className="box_login">
        <div className="logo">
          <img src={logoMedicine} alt="" className="logo_img" />
        </div>
        <h3 className="signUp">Log In</h3>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-12 col-sm-12 ">
                <div className="d-flex col_input">
                  <i className="fa-solid fa-user mt-2" style={{ color: "#ffffff" }}></i>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input_field"
                    name="email"
                    ref={userRef}

                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-12 col-sm-12  ">
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
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn_signup ">
            Login
          </button>
          <p className="have_acc"><Link to={redirect ? `/authentication/sign-up?redirect=${redirect}`:'/authentication/sign-up'}style={{color:"#fff"}}>Don`t have an account?</Link></p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

