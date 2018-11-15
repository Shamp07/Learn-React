import React, { Component } from "react";

const Problematic = () => {
    throw (new Error("새로운 버그"));
    return (
        <div>

        </div>
    )
}


class Counter extends Component {
  state = {
    number: 0,
    error : false
  };

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  componentWillMount() {
    console.log("component (deprecated)");
  }

  componentDidMount() {
    console.log("componenetDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.number % 5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate");
  }

  componentDidUpdate(prevProps, prevState) {
      console.log("componetDidUpdate");
  }

  componentDidCatch(error, info) {
    this.setState({
        error:true
    })    
  }

  handleIncrease = () => {
    const { number } = this.state;
    this.setState({
      number: number + 1
    });
  };

  handleDecrease = () => {
    const { number } = this.state;
    this.setState({
      number: number - 1
    });
  };

  render() {
      if(this.state.error) return (<h1>에러발생!</h1>);
    const style = {
      margin: "10px"
    };
    return (
      <div>
        <h1>카운터</h1>
        <div>
          값 : {this.state.number}
        </div>
        {this.state.number === 4 && <Problematic/>}
        <button
          style={style}
          className="btn btn-primary"
          onClick={this.handleIncrease}
        >
          +
        </button>
        <button
          style={style}
          className="btn btn-warning"
          onClick={this.handleDecrease}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
