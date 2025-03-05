import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "/images/HomeBanner.png",
    thumbnail: "/images/HomeBanner2.jpg",
  },

  {
    original: "/images/HomeBanner3.jpg",
    thumbnail: "/images/ServicesBanner.png",
  },
];

const ImageSlider = () => {
  return (
    <div className="bannerContainer">
      <h2 className="text-xl font-bold mb-4 text-center">Галерея изображений</h2>
      <ImageGallery
        items={images}
        showPlayButton={false}        // Скрыть кнопку воспроизведения
        showFullscreenButton={false}  // Скрыть кнопку полноэкранного режима
        showThumbnails={false}        // Скрыть миниатюры изображений снизу
        transitionDuration={500}
        additionalClass="custom-gallery"
      />
    </div>
  );
};

export default ImageSlider;