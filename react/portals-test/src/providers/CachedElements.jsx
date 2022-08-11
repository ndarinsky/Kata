import React, { useRef, useEffect } from "react";

import { useCachingContext } from "./CachingScope";

//Will get div which store cached content and render it.
const CachedElements = ({ id, children }) => {
  const { getCachingNode } = useCachingContext();

  const keepAliveRef = useRef();

  const appendPortalElement = () => {
    const cachedElement = getCachingNode(id, children);
    keepAliveRef.current.appendChild(cachedElement);
  };

  useEffect(() => {
    appendPortalElement();
  });

  return <div ref={keepAliveRef} />;
};

export default CachedElements;
