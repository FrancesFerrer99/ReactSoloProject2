import React from "react"
import Navbar from "./Components/Navbar.js"
import Card from "./Components/Card.js"
import Data from "./Data.js"

function App() {
  const cardData = Data.map((item) =>{
    return(
      <Card
        key = {item.title}
        title = {item.title}
        imageUrl = {item.imageUrl}
        description = {item.description}
        startDate = {item.startDate}
        endDate = {item.endDate}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <div className="cardContainer">
        {cardData}
      </div>
    </div>
  );
}

export default App;
