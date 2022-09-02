import "./styles.scss";
export const Container = (props) => {
  return (
    <div className={`container ${props.className || ""}`}>{props.children}</div>
  );
};

export const ItemGrid = (props) => {
  const items = props.children;

  return <div className={`item-grid ${props.className || ""}`}>{items}</div>;
};
