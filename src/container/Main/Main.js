import React, { createElement, useState } from 'react'
import glass from '../../img/glass.png'
import './Main.scss'


const Main = (props) =>  {
  let YourWater = 0
  const [waterCounter, setWaterCounter] = useState(0)
  
  const Small = () => {
    YourWater = waterCounter + 200 
    console.log(YourWater)
    setWaterCounter(YourWater)
  }

  const Medium = () => {
    YourWater = waterCounter + 300 
    console.log(YourWater)
    setWaterCounter(YourWater)

  }

  const Large = () => {
    YourWater = waterCounter + 400
    console.log(YourWater) 
    setWaterCounter(YourWater)

  }

  return(
    <div className = "App-Main">
      <h3>Check how much water you drink.</h3>
      <div className='Main1'>
        <div onClick={Small} className="Small-glass">
          <div><img src={glass} alt='Medium'></img></div>
          <p>Add small glass (200ml)</p>
        </div>
        <div onClick={Medium} className="Medium-glass">
          <div><img src={glass} alt='Medium'></img></div>
          <p>Add medium glass (300ml)</p>
        </div>
        <div onClick={Large} className="Large-glass">
          <div><img src={glass} alt='Medium'></img></div>
          <p>Add large glass (400ml)</p>
        </div>
      </div>
      <div className='Main2'>
        <h2>Podsumowanie:</h2>
        <p>{waterCounter + 'ml/3000ml'}</p>
        <div>
        </div>
      </div>
    </div>
  );
}
export default Main;