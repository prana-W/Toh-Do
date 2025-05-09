import { useSelector } from "react-redux";

//it takes the taskId (a string) as an argument
export default function useTaskInfo(taskId) {
  const tasksList = useSelector((state) => state.task.tasks); //this is an array containing objects of tasks data

  if (!taskId) return false;

  //this gives us an array with single element (where the first element is the required task object)
  const requiredTaskData = tasksList.filter((task) => task.taskId == taskId);

  return requiredTaskData[0];
}
