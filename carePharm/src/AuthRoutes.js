import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
const AuthRoutes = [
    {
      type: "collapse",
      name: "Sign In",
      key: "sign-in",
      route: "/authentication/sign-in",
      component: <SignIn />,
      noCollapse: true,
      layout:Auth
    },
    {
      type: "collapse",
      name: "Sign Up",
      key: "sign-up",
      route: "/authentication/sign-up",
      component: <SignUp />,
      noCollapse: true,
    },
  ];
  export default AuthRoutes;