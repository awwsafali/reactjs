// import { useState } from 'react'
import './App.css'
// import FuncComp from './FuncComp'
// import ClassComp from './classComp/ClassComp'
// import ClickComp from './classComp/ClickComp'

// import State from './functionComp/State'
// import StateComp from './classComp/StateComp'

// import Prop from './functionComp/Prop'
// import PropComp from './classComp/PropComp'
// import InputField from './functionComp/InputField'
import ShowHide from './functionComp/ShowHide'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>

      {/* functional component */}
      {/* <FuncComp e={22} /> */}
      {/* Class Compo */}
      {/* <ClassComp /> */}
      {/* <ClickComp />  */}

      {/* <State />
      <StateComp /> */}

      {/* <Prop text={"Eh??"} email={"example@example.com"} />
      <PropComp text={"Eh??"} email={"test@test.lol"} /> */}

      {/* <InputField /> */}
      <ShowHide />

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
