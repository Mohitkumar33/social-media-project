import { useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const {token} = useSelector((store) => store.auth)
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
