
import React from 'react'
import './App.css'

class SomeClass {

}

function App(props: {name: string}) {

  return (
      <div onClick={() => {
        console.log("You just clicked");
      }} className = "App">
        <h1>Hello world {props.name}</h1>
      </div>
  )
}

//   return React.createElement("div", 
//   {className: "App"},
// React.createElement
// ('h1', null, "Hello World"))
// }

export default App
 