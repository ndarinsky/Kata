import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Portal = ({ children, nodeId = "root" }) => {
  return ReactDOM.createPortal(children, document.getElementById(nodeId));
};

Portal.propTypes = {
  children: PropTypes.element.isRequired,
  nodeId: PropTypes.string
};

export default Portal;
