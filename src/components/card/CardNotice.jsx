import "./cardNotice.scss";
import useLoading from '../../hooks/useLoading'
import LoadingImg from "../loadingImg/LoadingImg";

const CardNotice = (props) => {
  const data = props.data;
  const [loading] = useLoading();

  return (
    <div className="cardNotice">
      <h2>{data.title}</h2>
      <span>Publicado: {data.fecha}</span>
      <hr />
      <div className="center">
        {loading ? (
          <LoadingImg />
        ) : (
          <img width={320} src={data.img} alt={data.title} />
        )}
      </div>
      <span>{data.info}</span>
      <div className="center mt-1">
        <button className="btn-success">Seguir Leyendo ...</button>
      </div>
    </div>
  );
};

export default CardNotice;
