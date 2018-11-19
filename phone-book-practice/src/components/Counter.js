import React , {Component} from 'react'

class Counter extends Component {
    state = {
        number : 0
    }
    
    numPlus = () => {
        const {number} = this.state;
        this.setState({
            number : number + 1
        })
    }

    numMinus = () => {
        const {number} = this.state;
        this.setState({
            number : number - 1
        })
    }


    render(){
        return(
            <div>
                <button className="btn btn-sm btn-primary" onClick={this.numPlus} >+</button>
                <button className="btn btn-sm btn-warning" onClick={this.numMinus}>-</button>
                <div>{this.state.number}</div>
            </div>
        )
    }
}

export default Counter;