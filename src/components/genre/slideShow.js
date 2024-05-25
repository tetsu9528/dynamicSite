// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SlideShow = () => {
    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide><img src="https://dummyimage.com/600x400/ffffff/000" alt=""/></SwiperSlide>
            <SwiperSlide><img src="https://dummyimage.com/600x400/ffffff/000" alt=""/></SwiperSlide>
            <SwiperSlide><img src="https://dummyimage.com/600x400/ffffff/000" alt=""/></SwiperSlide>
        </Swiper>
    );
};


export default SlideShow;