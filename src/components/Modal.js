import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "./Carousel";

const Modal = ({ event, onClose }) => {
  if (!event) return null;

  // Si el evento tiene un array de media, usamos el carrusel
  const media = event.media || [{ type: event.type, src: event.src }];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg p-6 max-w-md w-full mx-4" // Cambiamos el ancho a 90% del viewport y un máximo de 4xl
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-700 hover:text-brown-500"
            onClick={onClose}
          >
            &times;
          </button>
          {/* Usar el carrusel si hay más de un elemento en media */}
          {media.length > 1 ? (
            <Carousel media={media} />
          ) : media[0].type === "image" ? (
            <img
              src={media[0].src}
              alt={event.title}
              className="w-full h-96 object-cover rounded-lg mb-4" // Ajustamos la altura de la imagen
            />
          ) : (
            <video controls className="w-full h-96 rounded-lg mb-4">
              <source src={media[0].src} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          )}
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p>{event.description}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;