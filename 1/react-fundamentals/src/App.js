import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Button from "./Components/Button/Button"

function App() {
  return (
    <div>
      <Navbar/>
      <div style={
        {
          margin: '100px 0 0 100px'
        }
      }>
        <Button/>
      </div>
      
    </div>      
  );
}

export default App;
