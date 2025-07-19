import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const ImageSwitcher = ({ images, setIsButtonVisible }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setIsButtonVisible(false); 
      }, 900); 

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length); 
      }, 1000); 

      setTimeout(() => {
        setIsButtonVisible(true);
      }, 2000); 

    }, 5000); 

    return () => clearInterval(interval);
  }, [images.length, setIsButtonVisible]);

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", zIndex: -1 }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Rotating Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1, ease: "easeInOut" }} 
        />
      </AnimatePresence>
    </div>
  );
};

ImageSwitcher.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  setIsButtonVisible: PropTypes.func.isRequired
};

export default ImageSwitcher;
