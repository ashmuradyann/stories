import { Swiper, SwiperSlide } from "swiper/react"

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

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ]

    return (
        <div className="container">
            <div className="wrapper">
                <Swiper
                    style={{ height: "fit-content", maxHeight: "700px" }}
                    direction={"vertical"}
                    className="mySwiper">
                    {images.map((el, i) => {
                        return <SwiperSlide><img src={el} alt="img" /></SwiperSlide>
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Vertical