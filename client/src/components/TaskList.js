import { Accordion } from "react-bootstrap";
import MsgAlert from "./MsgAlert";
import TaskBar from "./TaskBar";
import SubtaskList from "./SubtaskList";
import Add from "./Add";

import { URLS } from "../constants";

export default function TaskList({ tasks }) {
  return (
    <>
      <Accordion defaultActiveKey="0">
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => {
            return (
              <Accordion.Item eventKey={index} key={task?._id}>
                <Accordion.Header>
                  <TaskBar
                    taskId={task?._id}
                    status={task?.status}
                    title={task?.title}
                    completed={
                      task?.subtasks.filter((d) => {
                        return d.status === "completed";
                      }).length
                    }
                    total={task?.subtasks.length}
                  />
                </Accordion.Header>
                <Accordion.Body>
                  {task && task?.subtasks.length > 0 ? (
                    <>
                      <SubtaskList subtasks={task?.subtasks} />
                    </>
                  ) : (
                    <>
                      <MsgAlert msg="No Subtask found. Add to get Started" />
                    </>
                  )}
                  <Add
                    taskId={task?._id}
                    url={URLS.SUBTASKS}
                    label="Add new Subtask"
                    placeholder="Eg: Gather Clothes"
                    btnName="Add new Subtask"
                  />
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <>
            <MsgAlert msg="No task found. Add one to get Started..." />
          </>
        )}
      </Accordion>
    </>
  );
}
