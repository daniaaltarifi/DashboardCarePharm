import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

const AuthRoutes = [
    {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    // icon: <Document size="12px" />,
    component: <SignIn />,
    layout: AuthLayout, // Use AuthLayout for Sign In
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    // icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    layout: AuthLayout, // Use AuthLayout for Sign Up
    noCollapse: true,
  },
  ];
  export default AuthRoutes;