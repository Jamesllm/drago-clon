import "./categorie.scss";
import { Link } from "react-router-dom";

export default function Categories(props) {
  const item = props.item;
  return (
    <Link to={`moda/${item.genero}/${item.categoria}`}>
      <div
        className="categories"
        style={{
          backgroundImage: `url(${item.img})`,
        }}
      >
        <div className="categories__title">{item.title}</div>
        <div className="categories__collection">Ir a la coleccion</div>
      </div>
    </Link>
  );
}
