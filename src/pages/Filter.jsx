import "./filter.scss";
import { useParams, Link } from "react-router-dom";
import { getItems, getFilter } from "../data";
import { Container, ItemGrid } from "../components/styles";
import Card from "../components/card/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function Filter() {
  const params = useParams();

  const data = getItems();
  const product = getFilter(params.Categoria, params.Genero);

  const dataFilter = data.filter(
    (a) => (a.genero === product.genero) & (a.categoria === product.categoria)
  );

  return (
    <Container className="mt-8">
      <div className="capitalize">
        <Link to="/">
          <FontAwesomeIcon icon={faHome} /> Inicio {">"}{" "}
        </Link>
        <Link to="">moda {">"}</Link>
        <Link to="">
          {product.genero} {">"}
        </Link>
        <Link to="">{product.categoria}</Link>
      </div>
      <p className="blue">{dataFilter.length} Resultados</p>

      <ItemGrid className="mt-1">
        {dataFilter.map((item, a) => (
          <Link to={`/p/${item.path}/${item.color}`}>
            <Card key={a} className="relative h mb-4" item={item} />
          </Link>
        ))}
      </ItemGrid>
    </Container>
  );
}
