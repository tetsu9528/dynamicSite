import React, { useEffect, useRef } from "react";

const News = () => {
  const newsRef = useRef([]);
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

    newsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    galleryRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect(); // クリーンアップ
    };
  }, []);

  return (
    <div className="main">
      <div className="divNews">
        <h2>NEWS</h2>
        <div className="newsChild">
          {[...Array(6)].map((_, index) => (
            <div
              className="news"
              key={index}
              ref={(el) => (newsRef.current[index] = el)}
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="https://dummyimage.com/600x400/fff/000" alt="News" />
                <div className="newsText">
                  <p>text text text text text text text text text text</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* ギャラリー要素も同様に追加可能 */}
    </div>
  );
};

export default News;
