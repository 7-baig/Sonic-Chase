import React, { useRef } from 'react'
import './App.css'
import bird from './images/birdie.gif'
import goku from './images/goku.gif'
import tree from './images/tree.gif'
import sonic from './images/sonic.gif'
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {


  const ref = useRef()

  const { ref:birdRef } = useWebAnimations({
    keyframes: [
      { transform: 'translate(0, 0)' },
      { transform: 'translate(1100px, 0)' },
    ],
    timing: {
      duration: 1800, 
      iterations: Infinity, 
      direction: "reverse", 
    },
  });

  const { ref:gokuRef } = useWebAnimations({
    keyframes: [
      { transform: 'translate(0, 0)' },
      { transform: 'translate(1100px, 0)' },
    ],
    timing: {
      duration: 100000, 
      iterations: Infinity, 
      direction: "normal", 
    },
  });

  const { ref:sonicRef } = useWebAnimations({
    keyframes: [
      { transform: 'translate(0, 0)' },
      { transform: 'translate(1100px, 0)' },
    ],
    timing: {
      duration: 100000, 
      iterations: Infinity, 
      direction: "normal", 
    },
  });

  const { ref:tree1Ref } = useWebAnimations({
    keyframes: [
      { transform: 'translate(0, 0)' },
      { transform: 'translate(1100px, 0)' },
    ],
    timing: {
      duration: 2000, 
      iterations: Infinity, 
      direction: "reverse", 
    },
  });

  const { ref:tree2Ref } = useWebAnimations({
    keyframes: [
      { transform: 'translate(0, 0)' },
      { transform: 'translate(1100px, 0)' },
    ],
    timing: {
      duration: 2000, 
      iterations: Infinity, 
      direction: "reverse", 
    },
  });




  return (
    <div className="container">

      <div className="bird" ref={birdRef}>
        <img src={bird} alt="bird" />
      </div>
      <div className="tree1" ref={tree1Ref}>
        <img src={tree} alt="tree" />
      </div>
      <div className="tree2" ref={tree2Ref}>
        <img src={tree} alt="tree" />
      </div>
      <div className="goku" ref={gokuRef}>
        <img src={goku} alt="goku" />
      </div>
      <div className="sonic" ref={sonicRef}>
        <img src={sonic} alt="goku" />
      </div>

    </div>
  )
}

export default App
