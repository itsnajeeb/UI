import Swal from "sweetalert2";

export const showLogoutAlert = (onConfirm, onCancel) => {
  Swal.fire({
    title: "Logout?",
    text: "Are you sure you want to logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#635BFF",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout",
    cancelButtonText: "Cancel",
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm && onConfirm();
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      onCancel && onCancel();
    }
  });
};
