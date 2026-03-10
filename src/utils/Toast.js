import { toast , Bounce } from "react-toastify";

const style = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
}

export const toastError = (message) => {
    toast.error(message, style);
}

export const toastSuccess = (message) => {
    toast.success(message, style);
};

export const toastWarning = (message) => {
    toast.warning(message, style);
};

export const toastInfo = (message) => {
    toast.info(message, style);
};
