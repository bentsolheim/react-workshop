import React from "react"

const Increment = () => (<div>Hello world</div>)

class IncrementClass extends React.PureComponent {

    state = {
        count: 0
    }

    onIncrementClick = () => {
        this.setState({ count: this.state.count+1 })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <p>{ this.state.count % 2 == 0 ? "even" : "odd" }</p>
                <button onClick={ this.onIncrementClick }>Increment</button>
            </div>
        )
    }

}

export default IncrementClass