import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";

import { URLS } from "../constants";
import { useApiContext } from "../contexts/ApiContext";
import { swalAlert } from "../utils/swal";

export default function TaskBar({ taskId, title, status, completed, total }) {
  const { updateStatus, deleteById } = useApiContext();
  const handleStatus = async (e) => {
    const payload = {
      status: e.target.checked ? "completed" : "pending",
    };
    await updateStatus({ url: URLS.TODOS, id: taskId, payload });
  };

  const handleDelete = async () => {
    const d = await swalAlert();
    if (d) {
      await deleteById({ url: URLS.TODOS, id: taskId });
      return true;
    }
    return false;
  };

  return (
    <Container>
      <Row>
        <Col>
          <input
            type="checkbox"
            checked={status === "completed" ? true : false}
            onChange={(e) => {
              handleStatus(e);
            }}
          />
          &nbsp;
          <>{title || "Task Name"}</>
        </Col>
        <Col>
          {total > 0 && (
            <>
              {completed || "0"} of {total || "-"} completed
            </>
          )}
        </Col>
        <Col xs="1">
          {total < 1 && (
            <BsFillTrashFill color="#662549" onClick={handleDelete} />
          )}
        </Col>
      </Row>
    </Container>
  );
}
