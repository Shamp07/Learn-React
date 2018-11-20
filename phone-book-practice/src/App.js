import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";

class App extends Component {
  state = {
    id: 2,
    information: [
      {
        id: 0,
        name: "배진영",
        phone: "010-0000-0000"
      },
      {
        id: 1,
        name: "김진영",
        phone: "010-0000-0001"
      }
    ],
    keyword: "",
    filterDiv: "all"
  };

  onCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.state.id++, ...data })
    });
  };

  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(item => item.id !== id)
    });
  };

  handleUpdate = (id, name, phone) => {
    const { information } = this.state;
    this.setState({
      information: information.map(item => {
        if (item.id === id) {
          item.name = name;
          item.phone = phone;
        }
        return item;
      })
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { information, keyword, filterDiv } = this.state;
    const filteredList = information.filter(item => {
      if (filterDiv === "all")
        return (
          item.name.includes(this.state.keyword) ||
          item.phone.includes(this.state.keyword)
        );

      if (filterDiv === "name") return item.name.includes(this.state.keyword);

      if (filterDiv === "phone") return item.phone.includes(this.state.keyword);
    });
    const inputGroup = {
      margin: "10px"
    };
    const inputStyle = {
      width: "250px",
      border: "1px solid #ced4da",
      borderRadius: "0 .25rem .25rem 0",
      padding: ".375rem 1.75rem .375rem .75rem"
    };

    const selectStyle = {
      borderRadius: ".25rem 0 0 .25rem"
    };
    return (
      <div>
        <PhoneForm onCreate={this.onCreate} />
        <hr />
        <div className="input-group" style={inputGroup}>
          <div className="input-group-prepend">
            <select
              className="custom-select"
              onChange={this.handleChange}
              name="filterDiv"
              style={selectStyle}
            >
              <option value="all">통합검색</option>
              <option value="name">이름</option>
              <option value="phone">전화번호</option>
            </select>
          </div>
          <input
            style={inputStyle}
            placeholder="검색 할 이름을 입력하세요.."
            onChange={this.handleChange}
            name="keyword"
            value={keyword}
          />
        </div>
        <PhoneInfoList
          data={filteredList}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
