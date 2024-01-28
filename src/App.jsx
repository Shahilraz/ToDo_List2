// import React, { useState } from "react";
// // import ToDoList from "./ToDoList";

// const App = () => {
//   const [inputList, setinputList] = useState("buy apple");
//   const [Items, setItems] = useState([]);

//   const itemEvent = (event) => {
//     setinputList(event.target.value);
//   };

//   const listOfItems = () => {
//     setItems((oldItems) => {
//       return [...oldItems, inputList];
//     });
//   };
//   const deleteItems = (id) => {
//     console.log("delete");

//     setItems((oldItems) => {
//       return oldItems.filter((arrElem, index) => {
//         return index != id;
//       });
//     });
//   };
//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br />
//           <h1>ToDo list</h1>
//           <br />
//           <input type=" text" placeholder="Add a Items" onChange={itemEvent} />
//           <button onClick={listOfItems}> + </button>

//           <ol>
//             {/* <li>{inputList}</li> */}

//             {Items.map((itemval, index) => {
//               return (
//                 <ToDoList
//                   key={index}
//                   id={index}
//                   text={itemval}
//                   onSelect={deleteItems}
//                 />
//               );
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;
