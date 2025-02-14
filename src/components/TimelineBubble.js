import React, { useState, useEffect } from "react";

const Timeline = ({ index }) => {
  // Estado para la anchura de la pantalla
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Actualizar el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Cálculo dinámico de la propiedad left
  const leftValue = index % 2 === 0 
    ? "100%" 
    : screenWidth < 375
      ? "-40px" // Para pantallas pequeñas (S)
      : screenWidth < 425
        ? "-70px" // Para pantallas medianas (M)
        : screenWidth < 768
          ? "-92px" // Para pantallas grandes (L)
          : "-215px"; // Para pantallas muy grandes

  // Cálculo dinámico del tamaño de la línea
  const widthValue = screenWidth < 375
    ? "w-10" // S -> 320 x 923
    : screenWidth < 425
    ? "w-16" // M -> 375 x 923
    : screenWidth < 768
    ? "w-24" // L -> 425 x 923
    : "w-52"; // Para pantallas más grandes

  return (
    <div
      className={`absolute h-1 bg-yellow-500 transition-all ease-in-out ${widthValue}`}
      style={{
        top: "50%",
        left: leftValue, // Usamos el valor calculado dinámicamente
        transform: "translateY(-50%)",
      }}
    ></div>
  );
};

export default Timeline;
