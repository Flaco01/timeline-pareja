import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const Carousel = ({ media }) => {
  return (
    <Swiper
      pagination={{ type: "fraction" }} // Muestra la paginación como fracción (1/3, 2/3, etc.)
      navigation={true} // Habilita la navegación con flechas
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {media.map((item, index) => (
        <SwiperSlide key={index}>
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={`Media ${index + 1}`}
              className="w-full h-96 object-cover rounded-lg" // Ajustamos la altura de las imágenes
            />
          ) : (
            <video controls className="w-full h-96 rounded-lg">
              <source src={item.src} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;