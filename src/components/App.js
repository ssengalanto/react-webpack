import React from 'react'
import logo from '../assets/images/ssen-logo.png'
import '../sass/main.scss'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="ssen galanto" />
        <p className="text">
          Visit my website @{' '}
          <a
            className="link"
            href="www.ssengalanto.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            www.ssengalanto.com
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
