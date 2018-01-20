import React, { Component } from 'react'
import D3ForceNet from './components/D3ForceDirect'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <D3ForceNet/>
        <div className="name">
          EVGENY
        </div>
        <div className="redSquare">
          <div className="lastName">
            KLIMENCHENKO
          </div>
        </div>
        <div className="yellowSquare">
        </div>
      </div>
    )
  }
}

export default App
