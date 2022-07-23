import { useState, memo } from 'react'

import Stories from 'react-insta-stories'

import Form from './form/Form'
import Popup from './popup/Popup'

import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'
import image5 from '../../assets/images/image5.jpg'
import image6 from '../../assets/images/image6.jpg'

import './horizontal.scss'


const Horizontal = ({ submited, setSubmited }) => {

  const mediaMatch = window.matchMedia('(max-width: 410px)')

  const [popup, setPopup] = useState(null)

  const images = [
    {
      url: image1,
      seeMore: () => null,
      seeMoreCollapsed: ({ action }) => {
        action(popup ? "pause" : "")
        return (
          <div style={popup ? { opacity: 0, transition: "0.3s" } : null} className="seeMore__wrapper">
            <button className="seeMoreCollapsed" onClick={() => setPopup(true)}>
              Подробнее
            </button>
          </div>
        )
      }
    },
    image2,
    {
      url: image3,
      seeMore: () => null,
      seeMoreCollapsed: () => (
        <div style={{ flexDirection: 'column' }} className="seeMore__wrapper">
          <button className="seeMoreCollapsed otherButton">
            Кнопка
          </button>
          <button className="seeMoreCollapsed otherButton">
            Кнопка
          </button>
        </div>
      )
    },
    {
      url: image4,
      seeMore: () => null,
      seeMoreCollapsed: () => (
        <div style={{ flexDirection: "column", paddingBottom: "20px" }} className="seeMore__wrapper">
          <button className="seeMoreCollapsed otherButton2">
            Кнопка
          </button>
          <button className="seeMoreCollapsed otherButton2">
            Кнопка
          </button>
          <button className="seeMoreCollapsed otherButton2">
            Кнопка
          </button>
        </div>
      )
    },
    image5,
    {
      url: image6,
      duration: 10000,
      seeMore: ({ close }) => <Form close={close} setSubmited={setSubmited} />,
      seeMoreCollapsed: ({ toggleMore, action }) => (
        <div className="seeMore__wrapper">
          {<button style={submited && { pointerEvents: "none", animationName: "opacity" }} className="seeMoreCollapsed" onClick={() => toggleMore(true)}>
            {!submited ? "Отправьте Заявку" : "Заявка Отправлена"}
          </button>}
        </div>
      )
    }
  ]

  return (
    <div className="container">
      <div className="wrapper">
        <Stories
          loop
          stories={images}
          width={mediaMatch.matches ? "100vw" : "400px"}
          height={mediaMatch.matches ? "100%" : "700px"}
          defaultInterval={5000}
        />
        {popup ? <Popup setPopup={setPopup} /> : null}
      </div>
    </div>
  )
}

export default memo(Horizontal)