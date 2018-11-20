import React, { Component } from "react";

class PhoneInfo extends Component {
  state = {
    name: "",
    phone: "",
    editYN: false
  };

  handleRemove = () => {
    const { info, onRemove } = this.props;

    onRemove(info.id);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleEditToggle = () => {
    const { editYN } = this.state;
    this.setState({
      editYN: !editYN
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { editYN, name, phone } = this.state;
    const { info, onUpdate } = this.props;

    if (!prevState.editYN && this.state.editYN) {
      this.setState({
        name: info.name,
        phone: info.phone
      });
    }

    if (prevState.editYN && !this.state.editYN) {
      onUpdate(info.id, name, phone);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 수정 상태가 아니고, info 값이 같다면 리렌더링 안함
    if (
      !this.state.editYN && //
      !nextState.editYN &&
      nextProps.info === this.props.info
    ) {
      // return false;
    }

    if(this.props.info !== nextProps.info){
      console.log("다르다!");
    }
    
    return true;
  }

  render() {
    console.log("render PhoneInfo " + this.props.info.id);
    const style = {
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "15px",
      margin: "10px",
      padding: "10px",
      backgroundColor: "#efefef",
      boxShadow: "6px 6px 5px 0px rgba(0,0,0,0.75)"
    };

    const inputStyle = {
      margin: "5px"
    };

    const { editYN } = this.state;
    if (editYN) {
      return (
        <div style={style}>
          <div>
            이름{" "}
            <b>
              <input
                className="form-control"
                onChange={this.handleChange}
                value={this.state.name}
                name="name"
                placeholder="수정 할 이름을 입력해주세요."
              />
            </b>
          </div>
          <div>
            전화번호{" "}
            <input
              className="form-control"
              onChange={this.handleChange}
              value={this.state.phone}
              name="phone"
              placeholder="수정 할 전화번호를 입력해주세요."
            />
          </div>
          <button
            style={inputStyle}
            className="btn btn-sm btn-danger"
            onClick={this.handleRemove}
          >
            삭제
          </button>
          <button
            style={inputStyle}
            className="btn btn-sm btn-warning"
            onClick={this.handleEditToggle}
          >
            적용
          </button>
        </div>
      );
    }
    const { name, phone } = this.props.info;
    return (
      <div style={style}>
        <div>
          이름 : <b>{name}</b>
        </div>
        <div>
          전화번호 : {phone}
        </div>
        <button
          style={inputStyle}
          className="btn btn-sm btn-danger"
          onClick={this.handleRemove}
        >
          삭제
        </button>
        <button
          style={inputStyle}
          className="btn btn-sm btn-warning"
          onClick={this.handleEditToggle}
        >
          수정
        </button>
      </div>
    );
  }
}

export default PhoneInfo;
