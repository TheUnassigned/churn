/** @jsx h */
import { h, Component } from 'preact'
import Channel from '../channel/channel'

class App extends Component {

  render (props, state) {
    return (
      <div>
        <Channel />
      </div>
    )
  }
}

export default App
