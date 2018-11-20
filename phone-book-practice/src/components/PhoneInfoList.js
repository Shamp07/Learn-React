import React, {Component} from 'react'
import PhoneInfo from "./PhoneInfo"

class PhoneInfoList extends Component {
    static defaultProps = {
        data : []
    }

     shouldComponentUpdate(nextProps,nextState){
    //     console.log("now");
    //     console.log(this.props.data)
    //     console.log("next");
    //     console.log(nextProps.data)

    //     console.log(nextProps.data !== this.props.data)
    //     // return prevProps.data !== this.props.data
        return true;
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