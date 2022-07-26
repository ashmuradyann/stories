import { useState, useEffect, memo } from 'react'

import Stories from 'react-insta-stories'

import Form from './form/Form'
import Popup from './popup/Popup'

import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'
import image5 from '../../assets/images/image5.jpg'
import image6 from '../../assets/images/image6.jpg'

import { ReactComponent as Facebook } from './icons/facebook.svg'
import { ReactComponent as Instagram } from './icons/instagram.svg'
import { ReactComponent as Whatsapp } from './icons/whatsapp.svg'
import { ReactComponent as Viber } from './icons/viber.svg'
import { ReactComponent as Telegram } from './icons/telegram.svg'

import './horizontal.scss'


const Horizontal = ({ submited, setSubmited }) => {

  const lower410 = window.matchMedia('(max-width: 410px)')

  const [popup, setPopup] = useState(null)
  const [firstPlay, setFirstPlay] = useState(false)
  // const [lastStoryPlay, setLastStoryPlay] = useState(false)

  useEffect(() => {
    setFirstPlay(true)
  }, [])

  const images = [
    {
      url: image1,
      seeMore: () => null,
      seeMoreCollapsed: ({ action }) => {
        if (popup || firstPlay) {
          action("pause")
        } else {
          action("")
        }
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
      duration: 15000,
      seeMoreCollapsed: ({ action }) => {
        return (
          <div style={{ flexDirection: 'column' }} className="seeMore__wrapper">
            <button className="seeMoreCollapsed otherButton fb">
              <Facebook /> Мы в Facebook
            </button>
            <button className="seeMoreCollapsed otherButton inst">
              <Instagram /> Мы в Instagram
            </button>
          </div>
        )
      }
    },
    {
      url: image4,
      seeMore: () => null,
      duration: 15000,
      seeMoreCollapsed: () => (
        <div style={{ flexDirection: "column", paddingBottom: "20px" }} className="seeMore__wrapper">
          <button className="seeMoreCollapsed otherButton2 wp">
            <Whatsapp /> наш WhatsApp
          </button>
          <button className="seeMoreCollapsed otherButton2 tg">
            <Telegram /> наш Telegram
          </button>
          <button className="seeMoreCollapsed otherButton2 vb">
            <Viber /> наш Viber
          </button>
        </div>
      )
    },
    image5,
    {
      url: image6,
      duration: 15000,
      seeMore: ({ close }) => <Form close={close} setSubmited={setSubmited} />,
      seeMoreCollapsed: ({ toggleMore, action }) => {
        action("pause")
        return (
          <div className="seeMore__wrapper">
            {<button style={submited && { pointerEvents: "none", animationName: "opacity" }} className="seeMoreCollapsed" onClick={() => toggleMore(true)}>
              {!submited ? "Отправьте Заявку" : "Заявка Отправлена"}
            </button>}
          </div>
        )
      }
    }
  ]

  return (
    <div className="container" onClick={() => setFirstPlay(false)}>
      <div className="wrapper">
        <Stories
          stories={images}
          width={lower410.matches ? "100vw" : "400px"}
          height={lower410.matches ? "100%" : "700px"}
          defaultInterval={5000}
        />
        {popup ? <Popup setPopup={setPopup} /> : null}
      </div>
    </div>
  )
}

export default memo(Horizontal)