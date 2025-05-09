import React, { useEffect, useState } from "react";
import useTaskInfo from "../hooks/useTaskInfo";
import { useDispatch } from "react-redux";
import { editStatus } from "../features/tasks/taskSlice";
import { toast } from "react-hot-toast";

function TaskFunction({ taskId }) {
  const [btnTxt, setBtnTxt] = useState("Start");
  const [isComplete, setIsComplete] = useState(false);
  const taskData = useTaskInfo(taskId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (taskData.status !== "completed") setIsComplete(false);

    if (taskData.status === "pending") setBtnTxt("Start");
    else if (taskData.status === "ongoing") setBtnTxt("Pause");
    else if (taskData.status === "paused") setBtnTxt("Resume");
    else if (taskData.status === "completed") {
      setBtnTxt(null);
      setIsComplete(true);
    }
  }, [taskData.status]);

  const handleComplete = () => {
    setIsComplete((prev) => !prev);
    if (!isComplete) {
      setBtnTxt(null);
      dispatch(editStatus({ taskId, status: "completed" }));
    } else {
      setBtnTxt("Resume");
      dispatch(editStatus({ taskId, status: "paused" }));
    }
  };

  const handleStatusChange = () => {
    if (isComplete) return;
    if (btnTxt === "Start") {
      setBtnTxt("Pause");
      toast.success(`${taskData.taskName} task was started!`);
      dispatch(editStatus({ taskId, status: "ongoing" }));
    } else if (btnTxt === "Pause") {
      setBtnTxt("Resume");
      toast.success(`${taskData.taskName} task was paused!`);
      dispatch(editStatus({ taskId, status: "paused" }));
    } else if (btnTxt === "Resume") {
      setBtnTxt("Pause");
      dispatch(editStatus({ taskId, status: "ongoing" }));
    }
  };

  const getBtnColor = () => {
    if (btnTxt === "Start") return "bg-violet-600 hover:bg-violet-700";
    if (btnTxt === "Pause")
      return "bg-yellow-400 hover:bg-yellow-500 text-gray-900";
    if (btnTxt === "Resume") return "bg-green-500 hover:bg-green-600";
    return "";
  };

  return (
    <div className="flex items-center gap-3 text-sm">
      {btnTxt && (
        <button
          onClick={handleStatusChange}
          className={`px-4 py-1.5 text-white rounded-lg font-medium transition-all duration-200 ${getBtnColor()}`}
        >
          {btnTxt}
        </button>
      )}

      <div className="flex items-center gap-2">
        <input
          id={taskId}
          type="checkbox"
          checked={isComplete}
          onChange={handleComplete}
          className="accent-violet-500 w-4 h-4 transition-all duration-200"
        />
        <label
          htmlFor={taskId}
          className="text-gray-600 dark:text-gray-300 text-xs select-none"
        >
          {isComplete ? "Completed" : "Complete"}
        </label>
      </div>
    </div>
  );
}

export default TaskFunction;
