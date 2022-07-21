import { useState } from 'react'

import Horizontal from "./components/horizontal/Horizontal"
import Vertical from "./components/vertical/Vertical"

import './app.scss'

function App() {

  const [state, setState] = useState('horizontal')

  const dark = {backgroundColor: "#a1a1a1", color: "#fff"}
  const light = {backgroundColor: "#fff", color: "#a1a1a1"}

  return (
    <main>
      <div className="buttons__wrapper">
        <div style={state === "horizontal" ? dark : light} onClick={() => setState("horizontal")}>Horizontal</div>
        <div style={state === "vertical" ? dark : light} onClick={() => setState("vertical")}>Vertical</div>
      </div>
      {state === 'horizontal' && <Horizontal />}
      {state === 'vertical' && <Vertical />}
    </main>
  )
}

export default App
