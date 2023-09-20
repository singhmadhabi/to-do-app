import { Button, Form, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { useApiContext } from "../contexts/ApiContext";

export default function Add({ url, label, placeholder, btnName, taskId }) {
  const { error, create } = useApiContext();
  const [task, setTask] = useState({ title: "" });

  const handleClick = async () => {
    const payload = { title: task?.title };
    if (taskId) {
      payload.todo = taskId;
    }
    await create({ url, payload });
    setTask({ title: "" });
  };

  if (error) <>{JSON.stringify(error)}</>;

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text className="bg-secondary text-white">
          {label || "Label"}
        </InputGroup.Text>
        <Form.Control
          placeholder={placeholder || "Placeholder"}
          value={task?.title}
          onChange={(e) => {
            setTask((task) => {
              return { ...task, title: e.target.value };
            });
          }}
        />
        <Button variant="secondary" onClick={handleClick}>
          {btnName || "Button Label"}
        </Button>
      </InputGroup>
    </>
  );
}
