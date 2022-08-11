import React, { useRef, useEffect } from "react";

import { useAliveScope } from "./aliveScope";

const KeepAlive = (props) => {
  const { id, children } = props;

  const { getPortalElement } = useAliveScope();

  const keepAliveRef = useRef();

  const appendPortalElement = () => {
    const portalElement = getPortalElement(id, children);
    keepAliveRef.current.appendChild(portalElement);
  };

  useEffect(() => {
    appendPortalElement();
  });

  return <div ref={keepAliveRef} />;
};

export default KeepAlive;
