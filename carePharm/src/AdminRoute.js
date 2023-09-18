import { Navigate, Outlet,Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UsersTable from 'layouts/Users/UsersTable';
const AdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.isAdmin ? (
    <Outlet/>
  
  ) : (
    <Navigate to='/authentication/sign-in' replace />
  );
};
export default AdminRoute;
