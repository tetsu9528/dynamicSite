import React, { useEffect, useRef } from "react";
import {  Link } from "react-router-dom";
import NewsPage  from "../page/newsPage";
const News = () => {
  //useRef・・・DOMを参照して要素にアクセスする
  const newsRef = useRef([]);
  const galleryRef = useRef([]);

  useEffect(() => {
    //分割代入
    const options = {
      //root・・・指定した要素と交差しているかを監視する要素。
      //rootMargin・・・root周りのmargin
      //threshold・・・指定した要素と、監視する要素がそれくらいの割合で交差すればコールバックを実行するかを指定することができる。
      root: null,
      rootMargin: "0px",
      threshold: 0.1
    };
    // IntersectionObserver・・・指定した要素と基準要素が交差するのを非同期で監視してくれる機能
    //entries・・・callback関数。名前は何でもいいのでentriesとしている。
    //callback関数・・・関数に引数として渡される関数。
    //isIntersecting・・・交差しているかどうか判定するboolean
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // 一度表示された要素を監視対象から外す(runtimeエラーの防止)
        }
      });
    }, options);
   //ニュース記事を探索
    newsRef.current.forEach((el) => {
      if (el) observer.observe(el);//ニュース記事があったら監視対象とする。
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
          {/* .map・・・配列の回数分実行する。indexも自然と増えていく。 */}
          {[...Array(6)].map((_, index) => (
            <div
              className="news"
              key={index}
              ref={(el) => (newsRef.current[index] = el)}
            >
             <Link to="/NewsPage">
                <img src="https://dummyimage.com/600x400/fff/000" alt="News" />
                <div className="newsText">
                  <p>text text text text text text text text text text</p>
                </div>
                </Link>
             
            </div>
          ))}
        </div>
      </div>
      {/* ギャラリー要素も同様に追加可能 */}
    </div>
  );
};

export default News;
