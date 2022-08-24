import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css"; //basic

const SwiperStyle = {
    height : "50px",
    width : "562px",   
}

function clickImgOne(){
    window.location.href = 'https://thecheat.co.kr/rb/?m=bbs&bid=petition&mod=view&uid=3127786';
}

function clickImgTwo(){
    window.location.href = 'https://thecheat.co.kr/rb/?mod=_mobile';
}

SwiperCore.use([Navigation, Pagination, Autoplay]);

function SlideMain() {
  return (
    
  <Swiper
  style={SwiperStyle}
        className="banner"
        loop="true"
        spaceBetween={0}
        slidesPerView={1}
        navigation 
        autoplay={{ delay: 5000 }}
  >
    <SwiperSlide>
            <img alt="사회적 사기방지 플랫폼 구축 청원"
                 src='https://thecheat.co.kr/rb/layouts/2014/images/banner/20160701_banner_petition.png' 
                 onClick={clickImgOne}>
            </img>
    </SwiperSlide>

    <SwiperSlide>
        <img alt="더차트 주식회사 어플리케이션 다운로드 링크"
             src={require("./img/bbanner_petition.png")} 
             onClick={clickImgTwo}>
        </img>
    </SwiperSlide>
  </Swiper>
  );
}


export default SlideMain;

