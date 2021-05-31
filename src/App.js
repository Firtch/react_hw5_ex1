import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";

class App extends React.Component {
  render() {
    return (
      <>
        {/* <Test1 arg={77} /> */}
        <Test2 arg={77} />
      </>
    );
  }
}

export default App;
