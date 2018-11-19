import React, { Component } from 'react'

class PhoneInfo extends Component{
    state = {
        name : this.props.info.name,
        phone : this.props.info.phone,
        editYN : false
    }

    handleRemove = () => {
        const {info,onRemove} = this.props;
        
        onRemove(info.id);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleEditToggle = () => {
        const {editYN} = this.state;
        this.setState({
            editYN : !editYN
        })  
    }

    componentDidUpdate(prevProps,prevState){
        const {editYN,name,phone} = this.state;
        const {info,onUpdate} = this.props;

        if(!prevState.editYN && this.state.editYN){
            this.setState({
                ...this.state,
            })
        }

        if(prevState.editYN && !this.state.editYN){
            onUpdate(info.id,name,phone);
        }
    }

    render() {
        const style = {
            border : "1px solid #ccc",
            borderRadius : "5px",
            fontSize : "15px",
            margin : "10px",
            padding : "10px",
            backgroundColor : "#efefef" ,
            boxShadow: "6px 6px 5px 0px rgba(0,0,0,0.75)"
        }

        const inputStyle = {
            margin : "5px"
        }

        const { name , phone } = this.props.info;
        const { editYN } = this.state;
        if(editYN){
            return (
                <div style={style}>
                    <div>이름 <b><input className='form-control' onChange={this.handleChange} value={this.state.name} name="name" placeholder='수정 할 이름을 입력해주세요.'></input></b></div>
                    <div>전화번호 <input className='form-control' onChange={this.handleChange} value={this.state.phone} name="phone" placeholder='수정 할 전화번호를 입력해주세요.'></input></div>
                    <button style={inputStyle} className='btn btn-sm btn-danger' onClick={this.handleRemove}>삭제</button>
                    <button style={inputStyle} className='btn btn-sm btn-warning' onClick={this.handleEditToggle}>적용</button>
                </div>
            )
        }else{
            return (
                <div style={style}>
                    <div>이름 : <b>{name}</b></div>
                    <div>전화번호 : {phone}</div>
                    <button style={inputStyle} className='btn btn-sm btn-danger' onClick={this.handleRemove}>삭제</button>
                    <button style={inputStyle} className='btn btn-sm btn-warning' onClick={this.handleEditToggle}>수정</button>
                </div>
            )
        }
        
    }
}

export default PhoneInfo;