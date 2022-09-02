import "./hero.scss";
/////
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export default function Hero({ items }) {
  SwiperCore.use([Autoplay]);

  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
      >
        {items.map((item, a) => (
          <SwiperSlide key={a}>
            {({ isActive }) => (
              <div
                className={`hero-slide__item ${isActive ? "active" : ""}`}
                style={{
                  backgroundImage: `url(${item.img})`,
                }}
              >
                <div className="hero-slide__item__content container"></div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
