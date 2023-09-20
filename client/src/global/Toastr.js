import { Toast, ToastContainer } from "react-bootstrap";

import { useToastContext } from "../contexts/ToastContext";

function Toastr() {
  const { show, setShow, toastMsg } = useToastContext();
  return (
    <ToastContainer className="p-2" position="bottom-end">
      <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header closeButton={false}>
          <strong className="me-auto">
            {toastMsg?.title || "Toast Header"}
          </strong>
        </Toast.Header>
        <Toast.Body>{toastMsg?.msg || "Toast Body"}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default Toastr;
