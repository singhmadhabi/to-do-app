import { Alert } from "react-bootstrap";

export default function MsgAlert({ msg }) {
  return (
    <>
      <Alert variant="danger">{msg}</Alert>
    </>
  );
}
