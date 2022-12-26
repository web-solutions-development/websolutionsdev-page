import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import ProductCard from '../pure/ProductCard';

import img1 from '../../../assets/images/image11.jpg';
import img2 from '../../../assets/images/image12.jpg';
import img3 from '../../../assets/images/image13.jpg';
import img4 from '../../../assets/images/image14.jpg';
import img5 from '../../../assets/images/image15.jpg';
import img6 from '../../../assets/images/image16.jpg';

import '../../landing/styles/news.css'

const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint, consequuntur quidem voluptates, ipsum maxime repellendus natus quas"
const fecha = "29 de octubre de 2003"
export const News = () => {
    return (
        <div className='bg-primary'>
            <h1 className='titulo font-bold text-white' >ULTIMAS NOTICIAS</h1>
            <div className="container-screen ">
                <Swiper
                    freeMode={true}
                    grabCursor={true}
                    modules={[FreeMode, Autoplay]}
                    className="z-50"
                    autoplay={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },

                        480: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },

                        768: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                        2000: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        }
                    }}
                >
                    <SwiperSlide >
                        <ProductCard data={{ imgSrc: img1, detalles: texto, fecha: fecha }} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductCard data={{ imgSrc: img2, detalles: texto, fecha: fecha }} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductCard data={{ imgSrc: img3, detalles: texto, fecha: fecha }} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductCard data={{ imgSrc: img4, detalles: texto, fecha: fecha }} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductCard data={{ imgSrc: img5, detalles: texto, fecha: fecha }} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ProductCard data={{ imgSrc: img6, detalles: texto, fecha: fecha }} />
                    </SwiperSlide>

                </Swiper>
            </div>

        </div>
    )

}
