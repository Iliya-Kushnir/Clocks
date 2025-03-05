import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInterval } from "react-use";
import PropTypes from "prop-types";

const ImageSwitcher = ({ images }) => {
  const [index, setIndex] = useState(0);

  console.log(images)

  useInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 8000);

  return (
    <div style={{
      position: "absolute", // Вместо fixed
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: -1 // Чтобы фон был позади всего
    }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Rotating Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover" // Обрезает картинку, сохраняя пропорции
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
};

ImageSwitcher.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSwitcher;
