import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onCreate(this.state);

    this.setState({
      name: "",
      phone: ""
    });
  };

  enterSubmit = e => {
    if (e.keyCode === 13) {
      this.handleSubmit(e);
    }
  };

  render() {
    const style = {
      margin: "10px"
    };
    const inputStyle = {
      ...style,
      width: "250px",
      display: "inline"
    };
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            style={inputStyle}
            value={this.state.name}
            onChange={this.handleChange}
            name="name"
            placeholder="이름을 입력해주세요."
            onKeyPress={this.enterSubmit}
          />
          <input
            className="form-control"
            style={inputStyle}
            onChange={this.handleChange}
            value={this.state.phone}
            name="phone"
            placeholder="전화번호를 입력해주세요."
            onKeyPress={this.enterSubmit}
          />
          <button
            style={style}
            className="btn btn-sm btn-primary"
            onClick={this.handleAdd}
          >
            등록
          </button>
        </form>
      </div>
    );
  }
}

export default PhoneForm;
