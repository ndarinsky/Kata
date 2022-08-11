import React, { useState } from "react";
import PlayerContainer from "./components/PlayerContainer.jsx";
import CachedElements from "./providers/CachedElements";
import { CachingProvider } from "./providers/CachingScope";
import Parent from "./components/Parent.jsx";

export default function App() {
  const [showFirst, setShowFirst] = useState(true);
  const handleSwitch = () => {
    setShowFirst(!showFirst)
  };

  return (
    <CachingProvider>
      <div className="App">
        <input type="button" value="Do the Magic!" onClick={handleSwitch} />
        {showFirst && 
        <Parent id="red" color="#FF0000">
          <CachedElements id={`video-test1`}> {/* Will cache\save it's children under "video-test1" */}  
            <PlayerContainer />
          </CachedElements>
        </Parent>
        }
        {!showFirst && 
        <Parent id="green" color="#00FF00" offset="600px">
          <CachedElements id={`video-test1`}> {/* Will read components under id="video-test1" and display it inside */}  
          </CachedElements>
        </Parent>
        }
      </div>
      </CachingProvider>
  )
}
