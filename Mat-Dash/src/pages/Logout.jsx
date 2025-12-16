import { useEffect } from "react";
import Swal from "sweetalert2";
import { showLogoutAlert } from "../components/CommonComponents/showLogoutAlert";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    showLogoutAlert(
      //  CONFIRM
      () => {
        localStorage.clear();
        sessionStorage.clear();

        Swal.fire({
          icon: "success",
          title: "Logged out",
          text: "You have been logged out successfully",
          timer: 1500,
          showConfirmButton: false,
        });

        navigate("/");
      },

      () => {
        navigate("/"); //  redirect back to dashboard if user cancel
      }
    );
  }, [navigate]);

  return null;
};

export default Logout;
