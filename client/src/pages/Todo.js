import { useEffect } from "react";
import { useApiContext } from "../contexts/ApiContext";

import Title from "../components/Title";
import Add from "../components/Add";
import MsgAlert from "../components/MsgAlert";
import TaskList from "../components/TaskList";

import { URLS } from "../constants";

export default function Todo() {
  const { data: tasks, error, list } = useApiContext();

  useEffect(() => {
    list({ url: URLS.TODOS });
  }, [list]);

  if (error) return <>{JSON.stringify(error)}</>;

  return (
    <>
      <Title title="TODO App" />
      <Add
        url={URLS.TODOS}
        label="Add new Task"
        placeholder="Eg: Do Laundry"
        btnName="Add the task"
      />
      {tasks && tasks.length > 0 ? (
        <TaskList tasks={tasks} />
      ) : (
        <MsgAlert msg="No task found. Add one to get Started..." />
      )}
    </>
  );
}
