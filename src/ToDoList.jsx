import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ToDoList = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    setNum(num + 1);
  };
  const dicNum = () => {
    setNum(num - 1);
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>{num}</h1>
          <div className="btn_div">
            <button onClick={incNum}>
              <AddIcon />
            </button>
            <button onClick={dicNum}>
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default ToDoList;
