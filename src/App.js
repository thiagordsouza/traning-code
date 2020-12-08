import React from "react";
import "./styles.css";
import Square from "./Square/index";

// let msg = "clique";

export default function App() {
  // const handleClick = useCallback((txt) => {
  //   window.alert(txt);
  // }, []);

  // return (
  //   <div className="App">
  //     <button
  //       onClick={() => {
  //         handleClick(msg);
  //       }}
  //     >
  //       Clicar
  //     </button>
  //   </div>
  return <Square />;
}
