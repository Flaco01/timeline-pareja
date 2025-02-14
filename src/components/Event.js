import React from "react";
import { motion } from "framer-motion";

const Event = ({ date, onClick, image }) => {
  return (
    <motion.div
      className="w-24 h-24 rounded-full bg-brown-500 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {image ? (
        <img
          src={image}
          alt="Event"
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <p className="text-white font-bold text-center">{date}</p>
      )}
    </motion.div>
  );
};

export default Event;