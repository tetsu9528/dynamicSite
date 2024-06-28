import React, { useEffect, useRef } from "react";


const Gallery = () => {
  const galleryRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // 一度表示された要素を監視対象から外す
        }
      });
    }, options);

    galleryRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect(); // クリーンアップ
    };
  }, []);

  return (
    <div className="divGallery">
      <h2>Gallery</h2>
      <div className="galleryChild">
        {[...Array(3)].map((_, index) => (
          <div
            className="gallery"
            key={index}
            ref={(el) => (galleryRef.current[index] = el)}
          >
           
              <img src="https://dummyimage.com/600x400/fff/000" alt="Gallery" />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
