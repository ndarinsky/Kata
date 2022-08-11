const Parent = ({ children, id, color }) => {
  return (
    <div
      id={id}
      style={{
        border: "2px solid red",
        height: "400px",
        width: "650px",
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
