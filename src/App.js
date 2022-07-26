import { useState } from 'react'

import Horizontal from "./components/horizontal/Horizontal"
import Vertical from "./components/vertical/Vertical"
import Information from './components/Information/Information'

import './app.scss'

function App() {

  const [state, setState] = useState("horizontal")
  const [submited, setSubmited] = useState(null)

  const dark = { backgroundColor: "#a1a1a1", color: "#fff" }
  const light = { backgroundColor: "#fff", color: "#a1a1a1" }

  return (
    <main>
      <div className="stories__wrapper">
        {/* <div className="buttons__wrapper">
          <div style={state === "horizontal" ? dark : light} onClick={() => setState("horizontal")}>Horizontal</div>
          <div style={state === "vertical" ? dark : light} onClick={() => setState("vertical")}>Vertical</div>
        </div> */}
        {state === 'horizontal' && <Horizontal submited={submited} setSubmited={setSubmited} />}
        {state === 'vertical' && <Vertical submited={submited} setSubmited={setSubmited} />}
      </div>
      <Information />
    </main>
  )
}

export default App
