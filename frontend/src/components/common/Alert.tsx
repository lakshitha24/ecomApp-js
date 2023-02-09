import { toast } from "react-toastify";

const AlertBox = (message: string, alertType: string) => {
  return alertType === "success"
    ? toast.success(message, {position: toast.POSITION.BOTTOM_LEFT})
    : toast.error(message, {position: toast.POSITION.BOTTOM_LEFT});
};

export default AlertBox;
