import { useState, useRef, memo } from 'react'

import { Swiper, SwiperSlide } from "swiper/react"

import Form from '../horizontal/form/Form'
import Popup from '../horizontal/popup/Popup'

import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'
import image5 from '../../assets/images/image5.jpg'
import image6 from '../../assets/images/image6.jpg'

import "swiper/css/bundle"
import "swiper/css"
import './vertical.scss'

const Vertical = ({ submited, setSubmited }) => {

    const [popup, setPopup] = useState(null)
    const [showForm, setShowForm] = useState(null)
    const [count, setCount] = useState(0)
    const swiperRef = useRef()

    return (
        <div className="container">
            <div className="wrapper">
                <Swiper
                    style={{ height: "fit-content", maxHeight: "700px" }}
                    direction={"vertical"}
                    className="mySwiper"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    onSlideChange={() => setCount(swiperRef.current.activeIndex)}>
                    <SwiperSlide>
                        <div className="slide__wrapper">
                            <img src={image1} alt="img" />
                            {count === 0 && <button className="seeMoreCollapsed" onClick={() => setPopup(true)}>
                                Подробнее
                            </button>}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image2} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide__wrapper">
                            <img src={image3} alt="img" />
                            {count === 2 && <><button className="seeMoreCollapsed first">
                                Кнопка
                            </button>
                                <button className="seeMoreCollapsed second">
                                    Кнопка
                                </button></>}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide__wrapper">
                            <img src={image4} alt="img" />
                            {count === 3 && <><button className="seeMoreCollapsed third">
                                Кнопка
                            </button>
                            <button className="seeMoreCollapsed fourth">
                                Кнопка
                            </button>
                            <button className="seeMoreCollapsed fifth">
                                Кнопка
                            </button></>}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={image5} alt="img" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide__wrapper">
                            <img src={image6} alt="img" />
                            {showForm ? <div className="slide__form">
                                <Form setSubmited={setSubmited} setShowForm={setShowForm} />
                            </div> : count === 5 && <button style={submited && { pointerEvents: "none", animationName: "opacity" }} className="seeMoreCollapsed" onClick={() => setShowForm(true)}>
                                {!submited ? "Отправьте Заявку" : "Заявка Отправлена"}
                            </button>}
                        </div>
                    </SwiperSlide>
                </Swiper>
                {popup ? <Popup setPopup={setPopup} /> : null}
            </div>
        </div>
    )
}

export default memo(Vertical)