import React, { useState } from "react";
import PlayerContainer from "./components/PlayerContainer.jsx";
import KeepAlive from "./providers/keepAlive";
import { AliveScope } from "./providers/aliveScope";
import Parent from "./components/Parent.jsx";

export default function App() {
  const [showFirst, setShowFirst] = useState(true);
  const handleSwitch = () => {
    setShowFirst(!showFirst)
  };

  return (
    <AliveScope>
      <div className="App">
        <input type="button" value="Do the Magic!" onClick={handleSwitch} />
        {showFirst && 
        <Parent id="red" color="#FF0000">
          <KeepAlive id={`video-test1`}>
            <PlayerContainer />
          </KeepAlive>
        </Parent>
        }
        {!showFirst && 
        <Parent id="green" color="#00FF00" offset="600px">
          <KeepAlive id={`video-test1`}>
            <PlayerContainer  />
          </KeepAlive>
        </Parent>
        }
      </div>
    </AliveScope>
  )
}
