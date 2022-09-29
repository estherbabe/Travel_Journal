import React from "react"
import Navbar from "./Navbar"
import Travel from "./Travel"
import data from "./data"


const travelMap = data.map( item => {
    return (
          <Travel
        key={item.id}
        item={item}
        />
    )
})


function App() {
    return (  
      <div>
        <Navbar/>
      {travelMap}
      </div>
    )
}












export default App