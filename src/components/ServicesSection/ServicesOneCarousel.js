import { servicesOne, partners } from "@/data/servicesSection";
import React from "react";
import { Container } from "react-bootstrap";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleServiceOne from "./SingleServiceOne";
import { useRouter } from 'next/router'

SwiperCore.use([Autoplay, Pagination]);

const options = {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: "#service-carousel-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  },
};

const { services } = servicesOne;
const { partnersList } = partners;

const ServicesOneCarousel = () => {
  const router = useRouter()
  return (
    <section className="services-one">
      <Container>
        <Swiper {...options} className="thm-swiper__slider service-carousel">
          <div className="swiper-wrapper">
            { router.route !== "/partners" ? services.map((service) => (
              <SwiperSlide key={service.id}>
                <SingleServiceOne service={service} />
              </SwiperSlide>
            )) : 
            partnersList.map((service) => (
              <SwiperSlide key={service.id}>
                <SingleServiceOne service={service} />
              </SwiperSlide>
            ))
          }
          </div>
          <div
            className="swiper-pagination swiper-pagination-styled"
            id="service-carousel-pagination"
          ></div>
        </Swiper>
      </Container>
    </section>
  );
};

export default ServicesOneCarousel;
