import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(previous => ({count: previous.count + 1}))
    console.log('clicked')
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg_container">
        <h1>
          The Button has been clicked <span>{count}</span> times
        </h1>
        <p>click the button to increase the count!</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Click Me!
        </button>
      </div>
    )
  }
}

export default ClickCounter
