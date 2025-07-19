import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/compressed/HomeBanner.png",
    thumbnail: "/compressed/HomeBanner2.jpg",
  },

  {
    original: "/compressed/HomeBanner3.jpg",
    thumbnail: "/compressed/ServicesBanner.png",
  },
];

const ImageSlider = () => {
  return (
    <div className="bannerContainer">
      <h2 className="text-xl font-bold mb-4 text-center">Галерея изображений</h2>
      <ImageGallery
        items={images}
        showPlayButton={false}        
        showFullscreenButton={false}  
        showThumbnails={false}        
        transitionDuration={500}
        additionalClass="custom-gallery"
      />
    </div>
  );
};

export default ImageSlider;