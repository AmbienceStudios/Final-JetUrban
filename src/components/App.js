import React from 'react'
import './App.css'
// import ReactCanvas from './babylontest'
import ReactCanvasSceneComponent from './3D/GoldenBoyShowRoom'


const App = () => {
  return (
    <div className='App'>
        <header className='App-header'>
            {/* <ReactCanvas/> */}
            <ReactCanvasSceneComponent/>
        </header>

    </div>
  )
}

export default App