import { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react"

import Popup from '../horizontal/popup/Popup'
import Form from '../horizontal/form/Form'

import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'
import image5 from '../../assets/images/image5.jpg'
import image6 from '../../assets/images/image6.jpg'

import "swiper/css/bundle"
import "swiper/css"
import './vertical.scss'

const Vertical = () => {

    const [popup, setPopup] = useState(null)
    const [submited, setSubmited] = useState(null)
    const [showForm, setShowForm] = useState(null)

    return (
        <>
            <div className="container">
                <div className="wrapper">
                    <Swiper
                        style={{ height: "fit-content", maxHeight: "700px" }}
                        direction={"vertical"}
                        className="mySwiper">
                        <SwiperSlide>
                            <div className="slide__wrapper">
                                <img src={image1} alt="img" />
                                <button className="seeMoreCollapsed" onClick={() => setPopup(true)}>
                                    Подробнее
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={image2} alt="img" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide__wrapper">
                                <img src={image3} alt="img" />
                                <button className="seeMoreCollapsed first">
                                    Кнопка
                                </button>
                                <button className="seeMoreCollapsed second">
                                    Кнопка
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slide__wrapper">
                                <img src={image4} alt="img" />
                                <button className="seeMoreCollapsed third">
                                    Кнопка
                                </button>
                                <button className="seeMoreCollapsed fourth">
                                    Кнопка
                                </button>
                                <button className="seeMoreCollapsed fifth">
                                    Кнопка
                                </button>
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
                                </div> : null}
                                {<button style={submited && { pointerEvents: "none", animationName: "opacity" }} className="seeMoreCollapsed" onClick={() => setShowForm(true)}>
                                    {!submited ? "Отправьте Заявку" : "Заявка Отправлено"}
                                </button>}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            {popup ? <Popup setPopup={setPopup} /> : null}
        </>
    )
}

export default Vertical