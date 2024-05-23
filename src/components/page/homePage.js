import React from "react";
import SlideShow from "../genre/slideShow";
import News from "../genre/news";
import Gallery from "../genre/gallery";
const homePage = () => {
  return (

    <main>

      {/* <SlideShow /> */}
      <News />
      <Gallery />
    </main>
  );
};

export default homePage;