import "./details.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useParams } from "react-router-dom";
import { getItems, getProduct } from "../../data";
import { Container } from "../../components/styles";
import ItemList from "../../components/itemList/ItemList";
import LoadingImg from "../../components/loadingImg/LoadingImg";
import useLoading from "../../hooks/useLoading";

const ButtonCart = (props) => {
  const icon = props.icon;
  const className = props.className;
  return (
    <button className={className}>
      <FontAwesomeIcon icon={icon} /> Añadir al carrito
    </button>
  );
};

export default function Details() {
  const params = useParams();
  const data = getItems();
  const [loading] = useLoading();

  const url = "https://home.drago.pe/attachment/moda/";

  const product = getProduct(params.Path, params.Color);

  const similar = data.filter(
    (a) => a.title.split(" ")[0] === product.title.split(" ")[0]
  );

  return (
    <Container className="mt-8">
      <div className="productDetails mb-3">
        <div className="bigImg">
          {loading ? (
            <LoadingImg />
          ) : (
            <img src={url + product.imgs[0]} alt={product.title} />
          )}
          {product.stock > 1 ? "" : <div className="sin-stock">Agotado</div>}
        </div>
        <div className="productDetails__info">
          <div>
            <h2>{product.title}</h2>

            {product.stock > 1 ? (
              <div className="productDetails__info__stock">
                {product.stock} Disponibles
              </div>
            ) : (
              <div className="productDetails__info__soldOut">Agotado</div>
            )}
            <p className="productDetails__info__lastPrice">
              Precio Real <span>S/. {product.price_real}</span>
            </p>
            <p className="productDetails__info__newPrice">
              Precio con descuento <span>S/. {product.price_unit}</span>
            </p>
            <p>Color: {product.color}</p>
            <p>Marca: {product.marca}</p>
            <p className="mt-1">
              ¡Viste a la moda con lo mejor en {product.title}!
            </p>
          </div>
          <div className="productDetails__info__thumbs">
            {product.imgs.map((img, index) => (
              <>
                {loading ? (
                  <LoadingImg />
                ) : (
                  <img
                    className="link"
                    key={index}
                    src={url + img}
                    alt={product.title}
                  />
                )}
              </>
            ))}
          </div>
          <div className="productDetails__info__actions">
            <input type="number" value="1" />
            {product.stock > 1 ? (
              <ButtonCart className="buttonCart" icon={faCartShopping} />
            ) : (
              <ButtonCart
                className="buttonCartDisabled"
                icon={faCartShopping}
              />
            )}
          </div>
        </div>
      </div>
      <ItemList data={similar} title="PRODUCTOS RELACIONADOS" />
    </Container>
  );
}
