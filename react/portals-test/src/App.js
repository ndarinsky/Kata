import React, { useState } from "react";
import PlayerContainer from "./components/PlayerContainer.jsx";
import KeepAlive from "./providers/keepAlive";
import { AliveScope } from "./providers/aliveScope";

export default function App() {
  const [showFirst, setShowFirst] = useState(true);
  const handleSwitch = () => {
    setShowFirst(!showFirst)
  };

  return (
    <>
    <AliveScope>
      <div className="App">
        <input type="button" value="Show Second" onClick={handleSwitch} />
        {showFirst && <div id="first" style={{
            border: "2px solid red",
            height: "400px",
            width: "650px",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#FF0000"
          }}
        >
          <KeepAlive id={`video-test1`}>
            <PlayerContainer videoId="test" />
          </KeepAlive>
        </div> 
        }
        {!showFirst && <div id="second" style={{
            border: "2px solid red",
            height: "400px",
            width: "650px",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#00FF00"
          }}
        >
          <KeepAlive id={`video-test1`}>
            <PlayerContainer videoId="test" />
          </KeepAlive>
        </div>
        }
      </div>
      </AliveScope>
    </>
  );
}
