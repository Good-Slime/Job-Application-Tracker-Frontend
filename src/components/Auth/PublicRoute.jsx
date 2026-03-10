import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";

export const PublicRoute = ({ children }) => {
  if (isAuthenticated()) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};