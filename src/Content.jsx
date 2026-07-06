import React from "react";
import { MdDelete } from "react-icons/md";

import { useState } from "react";
const Content = () => {
  const [taskVal, setTaskVal] = useState("");
  const [allTasks, setAllTasks] = useState([
    {
      task: "learn React.js",
      checked: false,
    },
  ]);
  const [currentState, setCurrentState] = useState("All");
  function handleAddTask() {
    setAllTasks([...allTasks, { task: taskVal, checked: false }]);
  }
  function handleDelete(t) {
    setAllTasks(
      allTasks.filter((task) => {
        return task.task !== t.task;
      }),
    );
  }
  function handleTickChange(t) {
    setAllTasks(
      allTasks.map((task) => {
        if (t.task === task.task) {
          return {
            task: task.task,
            checked: !task.checked,
          };
        } else {
          return task;
        }
      }),
    );
  }
  return (
    <div className="content">
      <label className="searchbar">
        <input
          type="text"
          placeholder="what do you want to do?"
          onChange={(e) => setTaskVal(e.target.value)}
        />
        <button onClick={handleAddTask} className="active">
          Add task
        </button>
      </label>
      <div>
        <div className="left">
          <button
            onClick={() => setCurrentState("All")}
            className={currentState == "All" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => setCurrentState("pending")}
            className={currentState == "pending" ? "active" : ""}
          >
            Pending
          </button>
          <button
            onClick={() => setCurrentState("completed")}
            className={currentState == "completed" ? "active" : ""}
          >
            Completed
          </button>
        </div>
        <div className="right">{}</div>
      </div>
      <div className="taskList">
        {currentState === "All"
          ? allTasks.map((t) => {
              return (
                <div className="task">
                  <label>
                    <input
                      type="checkbox"
                      checked={t.checked}
                      onChange={() => handleTickChange(t)}
                    />
                    <span className={t.checked ? "underline" : ""}>
                      {" "}
                      {t.task}
                    </span>
                  </label>
                  <button onClick={() => handleDelete(t)}>
                    <MdDelete color="red" />
                  </button>
                </div>
              );
            })
          : currentState === "pending"
            ? allTasks
                .filter((t) => {
                  return t.checked === false;
                })
                .map((t) => {
                  return (
                    <div className="task">
                      <label>
                        <input
                          type="checkbox"
                          checked={t.checked}
                          onChange={() => handleTickChange(t)}
                        />
                        <span className={t.checked ? "underline" : ""}>
                          {" "}
                          {t.task}
                        </span>
                      </label>

                      <button onClick={() => handleDelete(t)}>
                        <MdDelete color="red" />
                      </button>
                    </div>
                  );
                })
            : allTasks
                .filter((t) => {
                  return t.checked === true;
                })
                .map((t) => {
                  return (
                    <div className="task">
                      <label>
                        <input
                          type="checkbox"
                          checked={t.checked}
                          onChange={() => handleTickChange(t)}
                        />
                        <span className={t.checked ? "underline" : ""}>
                          {" "}
                          {t.task}
                        </span>
                      </label>

                      <button onClick={() => handleDelete(t)}>
                        <MdDelete color="red" />
                      </button>
                    </div>
                  );
                })}
      </div>
    </div>
  );
};

export default Content;
