import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      <h1>React Component</h1>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
