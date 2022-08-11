import React, { useContext, createContext, useState } from "react";
import ReactDOM from "react-dom";

const CachingContext = createContext();

//Caching Scope creates div for each KeepAlive element and 
//puts children in the portal which points to this fresh div
//We kind of "cache" or save children in a new div
export const CachingProvider = ({ children }) => {
  const [nodes, setNodes] = useState({});

  const getCachingNode = (id, children) => {
    if (!nodes[id]) {
      const element = document.createElement("div");
      setNodes((prevNodes) => ({
        ...prevNodes,
        [id]: { children, element }
      }));
      return element;
    }
    return nodes[id].element;
  };

  return (
    <CachingContext.Provider value={{ getCachingNode }}
    >
      {children}
      {Object.entries(nodes).map(([id, { children, element }]) => (
          (ReactDOM.createPortal(children, element))
      ))}
    </CachingContext.Provider>
  );
};

export const useCachingContext = () => useContext(CachingContext);
