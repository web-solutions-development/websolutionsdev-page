import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from "swiper";
import { ProductCard } from '../pure/ProductCard'
import 'swiper/css';
import "swiper/css/free-mode";


import '../../landing/styles/news.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export const News = () => {
    const API_KEY = 'd74d0a402b1f496f87714afa4864afac'
    const [newsState, setNewsState] = useState([])

    useEffect(() => {

        getApiNews()

    }, [])

    const getApiNews = async () => {
        const newsResponse = await axios(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`)
        filterNews(newsResponse.data)
    }

    const filterNews = (response) => {
        if (response.status === 'ok') {
            const tempNews = []
            for (let news of response.articles) {
                if (tempNews.length < 6) {
                    if (![news.urlToImage, news.url, news.title, news.description, news.source, news.date].includes(null)) {
                        tempNews.push(news)
                    }
                } else {
                    break
                }
            }
            setNewsState(tempNews)
        }
    }


    return (
        <div className='bg-primary pb-4'>
            <h1 className='titulo font-bold text-white' >ULTIMAS NOTICIAS</h1>
            {
                newsState.length === 0 ?
                    <div className='grid justify-items-center'>
                        <span className="news-loader"></span>
                    </div>
                    :
                    <div className="container-screen relative z-50">
                        <Swiper
                            freeMode={true}
                            grabCursor={true}
                            modules={[FreeMode, Autoplay]}
                            autoplay={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },

                                680: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },

                                1100: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                2000: {
                                    slidesPerView: 4,
                                    spaceBetween: 15,
                                }
                            }}
                        >
                            {
                                newsState.map(news => {
                                    return <SwiperSlide key={newsState.indexOf(news)} >
                                        <ProductCard newsDetail={{ image: news.urlToImage, description: news.description, date: news.publishedAt, source: news.source.name, url: news.url }} />
                                    </SwiperSlide>
                                })
                            }
                        </Swiper>
                    </div>

            }


        </div>
    )

}
