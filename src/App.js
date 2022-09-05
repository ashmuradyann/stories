import { useState } from 'react'

import Horizontal from "./components/horizontal/Horizontal"
import Information from './components/Information/Information'

import './app.scss'

function App() {
  
  const [submited, setSubmited] = useState(null)

  return (
    <main>
      <div className="stories__wrapper">
        <Horizontal submited={submited} setSubmited={setSubmited} />
      </div>
      <Information />
    </main>
  )
}

export default App
