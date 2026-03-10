import { toast, Bounce } from "react-toastify";

const getToastConfig = () => {
  const currentTheme = localStorage.getItem("theme") || "light";
  return {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: currentTheme, 
    transition: Bounce,
  };
};

export const toastSuccess = (msg) => toast.success(msg, getToastConfig());
export const toastError = (msg) => toast.error(msg, getToastConfig());
export const toastWarning = (msg) => toast.warning(msg, getToastConfig());