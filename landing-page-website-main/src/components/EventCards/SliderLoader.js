import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import styled from 'styled-components';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export default function SliderLoader({ loaderData }) {


  return (
    <Container>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            loaderData.map((item, index) => {
            return (
                <SwiperSlide key={index}>
                    <Skeleton className='image-load'/>
                    <Head>
                        <h3><Skeleton width={250} height={20} /></h3>
                        <p><Skeleton width={100} height={40} /></p>
                    </Head>
                    <Body>
                        <Skeleton count={3} />
                        <div>
                            <p className="location-event"><Skeleton /></p>
                            <p className="date-event"><Skeleton /></p>
                        </div>
                    </Body>
                    <Footer>
                        <Skeleton width={150} className='p-1'/>
                    </Footer>
                </SwiperSlide>
            )
          })
        }

      </Swiper>
    </Container>
  )
}

// Styles for slider card

const Container = styled.div`
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 400px;
  *{
    background-image: none;
  }
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: all 0.3s ease-out !important;

  &:hover {
    transform: translateY(-5px) scale(1.005) !important;
  }
  
}

.swiper-slide .image-load {
  display: block;
  object-fit: cover;
  width: 100%;
  height: 60%;
  border-radius: 10px 10px 0 0;
}
`;

const Head = styled.div`
margin-top: -30px;
display: flex;
justify-content: space-between;
h3{
  margin: 10px;
  flex: 1;
}
`;

const Body = styled.div`
margin-left: 10px;
margin-right: 10px;
margin-top: -10px;
p{
    span{
        color: #135ddf;
        font-weight: bold;
    }
}

div{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
}
`;

const Footer = styled.div`
margin-top: -20px;
margin-left: 10px;
a{
  color: white;
  border-radius: 5px;
  font-size: 12px;
  transition: 0.3s;
  margin-left: 10px;
  &:hover{
      color: ;
      background-color: #135ddf !important;
  }
}
`;




