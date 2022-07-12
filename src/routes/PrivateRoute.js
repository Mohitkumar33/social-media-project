import { Outlet, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const PrivateRoute = () => {
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
