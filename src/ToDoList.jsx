import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListComp from "./ListComp";

const ToDOList = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listofitems = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem(" ");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add an Items"
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={listofitems}>
            <AddBoxIcon />
          </Button>
          <br />
          <ol>
          
            {newitem.map((val,index) => {
              return <ListComp key={index} text={val}/>;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default ToDOList;
