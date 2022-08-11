const Parent = ({ children, id, color, offset }) => {
  return (
    <div
      id={id}
      style={{
        border: "2px solid red",
        height: "400px",
        width: "650px",
        marginLeft: offset,
        overflow: "hidden",
        position: "relative",
        backgroundColor: color
      }}
    >
      {id} parent
      {children}
    </div>
  );
};

export default Parent;
