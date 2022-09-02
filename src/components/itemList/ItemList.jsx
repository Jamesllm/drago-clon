import "./item-list.scss";
import SwiperCore, { Autoplay } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";
import Card from "../card/Card";
import { Link } from "react-router-dom";

export default function ItemList(props) {
  SwiperCore.use([Autoplay]);

  const items = props.data;
  const title = props.title;

  return (
    <div className="item-list">
      <h1 className="item-list__title">{title}</h1>
      <hr />
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        autoplay={{ delay: 6000 }}
        slidesPerView={"auto"}
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <Link to={`/p/${item.path}/${item.color}`}>
              <Card item={item} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
