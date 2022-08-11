import { Player } from "video-react";
import "video-react/dist/video-react.css";

const PlayerContainer = ({ children }) => {
  return (
    <div>
      <Player playsInline poster="https://video-react.js.org/assets/poster.png">
        <source
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          type="video/mp4"
        />
      </Player>
    </div>
  );
};

export default PlayerContainer;
