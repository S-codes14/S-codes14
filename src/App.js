import React, { useState, useEffect, useRef } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
import "./App.css";
import Main from "./containers/Main";

function App() {
  // const [vantaEffect, setVantaEffect] = useState(0)
  // const myRef = useRef(null)
  // useEffect(() => {
  //   if (!vantaEffect) {
  //     setVantaEffect(BIRDS({
  //       el: myRef.current
  //     }))
  //   }
  //   return () => {
  //     if (vantaEffect) vantaEffect.destroy()
  //   }
  // }, [vantaEffect])
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
