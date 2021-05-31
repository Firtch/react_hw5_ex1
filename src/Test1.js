import React from "react";

class Test1 extends React.Component {
  
  constructor(props) {
    console.clear();
    console.log("constructor");
    console.log(props);
    super(props);

    this.state = {
      s1: props.arg,
    }
  }

  buttonHandler = () => {
    let val = this.state.s1;
    val++;
    this.setState({ s1: val });
    console.log("work");
  };

  static getDerivedStateFromProps(props, state) {
    console.log("get derived state");
    return null;
    // return ({"s1": props.arg});
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render 1");
    return (
      <>
        {console.log("render 2")}
        <div>
          <button onClick={this.buttonHandler}>Push</button>
        </div>
        <div>{this.state.s1}</div>
      </>
    );
  }
}

export default Test1;
