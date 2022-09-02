import "./cardCircle.scss";

const CardCircle = (props) => {
  const data = props.data;

  return (
    <div>
      <img className="dg-img box" src={data.img} alt="" />
    </div>
  );
};

export default CardCircle;
