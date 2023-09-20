import Swal from "sweetalert2";

export const swalAlert = async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });
  if (!result.isConfirmed) return false;
  const msg = "Your data has been deleted.";
  Swal.fire("Deleted!", msg, "success");
  return result.isConfirmed;
};
