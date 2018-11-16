// file: src/components/PhoneInfo.js
import React, { Component } from "react";

class PhoneInfo extends Component {
  static defaultProps = {
    info: {
      name: "이름",
      phone: "010-0000-0000",
      id: 0
    }
  };

  state = {
      editing : false,
      name : '',
      phone : '',
  }

  handleRemove = () => {
      const {info, onRemove} = this.props;
      onRemove(info.id);
  }

  handleToggleEdit = () => {
      const {editing} = this.state;
      this.setState({editing: !editing});
  }

  handleChange = e => {
      const { name, value } = e.target;
      this.setState({
          [name] : value
      })
  }

 shouldComponentUpdate(nextProps, nextState) {
     if(!this.state.editing && !nextState.editing && nextProps.info === this.props.info){
         return false;
     }

     return true;
 }

  componentDidUpdate(prevProps, prevState) {
      const {info, onUpdate} = this.props;
      if(!prevState.editing && this.state.editing) {
          this.setState({
              name : info.name,
              phone : info.phone
          })
      }

      if(prevState.editing && !this.state.editing) {
          onUpdate(info.id, {
              name : this.state.name,
              phone : this.state.phone
          })
      }
  }

  render() {
    console.log('render PhoneInfo ' + this.props.info.id);
    const style = {
      border: "1px solid #bbb",
      borderRadius : "5px",
      padding: "8px",
      margin: "8px"
    };
    const buttonStyle = {
        margin: "5px"
    };
    const inputStyle = {
        width : '20%'
    };

    const {editing} = this.state;

    if(editing){
        return (
            <div style={style}>
                <div>
                    <input
                        value={this.state.name}
                        style={inputStyle}
                        className='form-control'
                        name="name"
                        placeholder="이름"
                        onChange={this.handleChange}
                        >
                    </input>
                </div>
                <div>
                    <input
                        value={this.state.phone}
                        style={inputStyle}
                        className='form-control'
                        name="phone"
                        placeholder="전화번호"
                        onChange={this.handleChange}>
                    </input>
                </div>
                <button style={buttonStyle} className="btn btn-warning" onClick={this.handleToggleEdit}>적용</button>
                <button style={buttonStyle} className="btn btn-danger" onClick={this.handleRemove}>삭제</button>
            </div>
        )
    };

    const {
        name, phone
    } = this.props.info;

    return (
      <div style={style}>
        <div>
          <b>
            {name}
          </b>
        </div>
        <div>
          {phone}
        </div>
        <hr></hr>
        <button style={buttonStyle} className="btn btn-warning" onClick={this.handleToggleEdit}>수정</button>
        <button style={buttonStyle} className="btn btn-danger" onClick={this.handleRemove}>삭제</button>
      </div>
    );
  }
}

export default PhoneInfo;
