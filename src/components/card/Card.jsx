import "./card.scss";
import LoadingImg from "../loadingImg/LoadingImg";
import useLoading from "../../hooks/useLoading";

export default function Card(props) {
  const item = props.item;
  const url = "https://home.drago.pe/attachment/moda/";

  const [loading] = useLoading();

  return (
    <>
      {loading ? (
        <LoadingImg />
      ) : (
        <div className={props.className}>
          <img
            width={370}
            height={500}
            className="item-card"
            src={url + item.imgs[0]}
            alt=""
          />
          <div className="card-desc">-40%</div>
          <div className="card-stock">{item.stock}</div>
          {item.stock > 1 ? "" : <div className="sin-stock">Agotado</div>}
          <div className="info-card">
            <div className="info-card__marca">{item.marca}</div>
            <div className="info-card__title">{item.title}</div>
            <div className="info-card__price">
              <span className="info-card__price-unit">
                S/. {item.price_unit}{" "}
              </span>
              <span className="info-card__price-real">
                S/. {item.price_real}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
