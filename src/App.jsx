import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import EditApplication from "./pages/Dashboard/EditApplication";
import { ToastContainer } from "react-toastify";
import { PublicRoute } from "./components/Auth/PublicRoute";
import { ProtectedRoute } from "./components/Auth/ProtectedRoute";



export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={ <PublicRoute>
          <Login /> 
        </PublicRoute>} />
        <Route path="/signup" element={
          <PublicRoute>
            <Signup />
        </PublicRoute>} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
          } />
        <Route path="/applications/:id/edit" element={
          <ProtectedRoute>
            <EditApplication />
          </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}