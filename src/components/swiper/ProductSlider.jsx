import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/free-mode";
import ProductCard from '../landing/pure/ProductCard';
// import 'bootstrap/dist/css/bootstrap.min.css';

// imagenes
import img1 from '../../assets/images/image11.jpg';
import img2 from '../../assets/images/image12.jpg';
import img3 from '../../assets/images/image13.jpg';
import img4 from '../../assets/images/image14.jpg';
import img5 from '../../assets/images/image15.jpg';
import img6 from '../../assets/images/image16.jpg';
import '../landing/styles/news.css'

const texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sint, consequuntur quidem voluptates, ipsum maxime repellendus natus quas"
const fecha = "29 de octubre de 2003"
const ProductSlider = () => {
    return (
        <div className='conten py-5 px-4 justify-content-center'>
            <h1 className='titulo text-center  pb-5 display-5' >ULTIMAS NOTICIAS</h1>
            <Swiper
                freeMode={true}
                grabCursor={true}
                modules={[FreeMode, Autoplay]}
                className="mySwiper"
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
                    }
                }}
            >

                <SwiperSlide >
                    <ProductCard data={{ imgSrc: img1, price: texto, fecha: fecha }} />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img2, price: texto, fecha: fecha }} />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img3, price: texto, fecha: fecha }} />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img4, price: texto, fecha: fecha }} />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img5, price: texto, fecha: fecha }} />
                </SwiperSlide>

                <SwiperSlide>
                    <ProductCard data={{ imgSrc: img6, price: texto, fecha: fecha }} />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ProductSlider;