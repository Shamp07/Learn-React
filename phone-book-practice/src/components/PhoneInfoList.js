import React, {Component} from 'react'
import PhoneInfo from "./PhoneInfo"

class PhoneInfoList extends Component {
    static defaultProps = {
        data : []
    }

    shouldComponentUpdate(prevProps,prevState){
        return prevProps.data !== this.props.data
    }

    render() {
        console.log("render PhoneInfoList");
        const {data} = this.props;
        const phoneInfoList  = data.map(
            (item) => (<PhoneInfo key={item.id} info={item} onRemove={this.props.onRemove} onUpdate={this.props.onUpdate}/>)
        )

        return (
            <div>
                {phoneInfoList}
            </div>
        )
    }
}

export default PhoneInfoList;