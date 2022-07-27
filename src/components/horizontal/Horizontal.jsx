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

import './horizontal.scss'

const Horizontal = ({ submited, setSubmited }) => {

  const imagesArr = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ]

  const lower410 = window.matchMedia('(max-width: 410px)')

  const [popup, setPopup] = useState({
    bool: false,
    data: []
  })

  // const [popup, setPopup] = useState(null)
  const [firstPlay, setFirstPlay] = useState(null)

  useEffect(() => {
    setFirstPlay(true)
  }, [])

  const data = [
    {
      url: image1,
      duration: 15000,
      paused: false,
      popup: {
        needed: true,
        data: {
          button: {
            text: "Подробнее",
            backgroundColor: "#333333",
            iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.svg"
          },
          h1: "Заголовок",
          text: [{
            h2: "Заголовокh2",
            p: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia"
          },
          {
            h2: "Заголовокh2",
            p: "Contrary to popular belief, Lorem Ipsum is not simply random text."
          },
          {
            h2: "Заголовокh2",
            p: "from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,comes from a line in section 1.10.32."
          }],
        }
      },
      buttons: {
        needed: false,
      },
      form: {
        needed: false
      }
    },
    {
      url: image2,
      duration: 5000,
      paused: false,
      popup: {
        needed: false
      },
      buttons: {
        needed: false
      },
      form: {
        needed: false
      }
    },
    {
      url: image3,
      duration: 5000,
      paused: false,
      popup: {
        needed: false
      },
      buttons: {
        needed: true,
        buttonData: [
          {
            text: "Мы в Facebook",
            backgroundColor: "#1673ea",
            iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.svg"
          },
          {
            text: "Мы в Instagram",
            backgroundColor: "#d83364",
            iconUrl: "https://img.icons8.com/material-outlined/24/ffffff/instagram-new--v1.svg"
          },
        ]
      },
      form: {
        needed: false
      }
    },
    {
      url: image4,
      duration: 5000,
      paused: false,
      popup: {
        needed: false
      },
      buttons: {
        needed: true,
        buttonData: [
          {
            text: "наш WhatsApp",
            backgroundColor: "#48c857",
            iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.svg"
          },
          {
            text: "наш Telegram",
            backgroundColor: "#27a3e1",
            iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/telegram-app.svg"
          },
          {
            text: "наш Viber",
            backgroundColor: "#7d539f",
            iconUrl: "https://img.icons8.com/ios-glyphs/30/ffffff/viber.png"
          },
        ]
      },
      form: {
        needed: false
      }
    },
    {
      url: image5,
      duration: 5000,
      paused: false,
      popup: {
        needed: false
      },
      buttons: {
        needed: false,
      },
      form: {
        needed: false
      }
    },
    {
      url: image6,
      duration: 10000,
      paused: true,
      popup: {
        needed: false
      },
      buttons: {
        needed: false,
      },
      form: {
        needed: true,
        toggleButton: {
          backgroundColor: "#333333"
        }
      }
    }
  ]

  const readyToRend = data.map((slide, i) => {
    return {
      url: slide.url,
      duration: 5000,
      seeMore: slide.form.needed ? ({ close }) => <Form close={close} setSubmited={setSubmited} /> : slide.popup ? () => null : null,
      seeMoreCollapsed: ({ toggleMore, action }) => {
        if (popup.bool || firstPlay || slide.paused) {
          action("pause")
        } else {
          action("")
        }
        if (slide.popup.needed) {
          return (
            <div key={i} style={popup.bool ? { opacity: 0, transition: "0.3s" } : null} className="seeMore__wrapper">
              <button style={{ backgroundColor: slide.popup.data.button.backgroundColor }} className="seeMoreCollapsed popup" onClick={() => setPopup({ ...popup, bool: true, data: slide.popup.data })}>
                {slide.popup.data.button.text}
              </button>
            </div>
          )
        }
        if (slide.buttons.needed) {
          return (
            <div className="seeMore__wrapper">
              {slide.buttons.buttonData.map(({ text, backgroundColor, iconUrl }, i) => {
                return <button style={{ backgroundColor: backgroundColor }} className="seeMoreCollapsed otherButton">
                  <img src={iconUrl} alt={i} /> {text}
                </button>
              })}
            </div>
          )
        }
        if (slide.form.needed) {
          return (
            <div className="seeMore__wrapper">
              {<button style={submited ? { pointerEvents: "none", backgroundColor: "#808080" } : { backgroundColor: slide.form.toggleButton.backgroundColor }} className="seeMoreCollapsed" onClick={() => toggleMore(true)}>
                {!submited ? "Отправьте Заявку" : "Заявка Отправлена"}
              </button>}
            </div>
          )
        }
      }
    }
  })

  return (
    <div className="container" onClick={() => setFirstPlay(false)}>
      <div className="wrapper">
        <Stories
          stories={readyToRend}
          width={lower410.matches ? "100vw" : "400px"}
          height={lower410.matches ? "100%" : "700px"}
          defaultInterval={5000}
        />
        {popup.bool ? <Popup popup={popup} setPopup={setPopup} /> : null}
      </div>
      <div style={{ display: "none" }}>
        {imagesArr.map(imgSrc => <img src={imgSrc} alt="img" />)}
      </div>
    </div>
  )

  // const images = [
  //   {
  //     url: image1,
  //     seeMore: () => null,
  //     seeMoreCollapsed: ({ action }) => {
  //       if (popup.bool || firstPlay) {
  //         action("pause")
  //       } else {
  //         action("")
  //       }
  //       return (
  //         <div style={popup.bool ? { opacity: 0, transition: "0.3s" } : null} className="seeMore__wrapper">
  //           <button style={{}} className="seeMoreCollapsed" onClick={() => setPopup({ bool: true, data: "{popup ? <Popup setPopup={setPopup} /> : null}" })}>
  //             Подробнее
  //           </button>
  //         </div>
  //       )
  //     }
  //   },
  //   image2,
  //   {
  //     url: image3,
  //     seeMore: () => null,
  //     duration: 15000,
  //     seeMoreCollapsed: ({ action }) => {
  //       return (
  //         <div className="seeMore__wrapper">
  //           <button className="seeMoreCollapsed otherButton fb">
  //             <Facebook /> Мы в Facebook
  //           </button>
  //           <button className="seeMoreCollapsed otherButton inst">
  //             <Instagram /> Мы в Instagram
  //           </button>
  //         </div>
  //       )
  //     }
  //   },
  //   {
  //     url: image4,
  //     seeMore: () => null,
  //     duration: 15000,
  //     seeMoreCollapsed: () => (
  //       <div className="seeMore__wrapper">
  //         <button className="seeMoreCollapsed otherButton2 wp">
  //           <Whatsapp /> наш WhatsApp
  //         </button>
  //         <button className="seeMoreCollapsed otherButton2 tg">
  //           <Telegram /> наш Telegram
  //         </button>
  //         <button className="seeMoreCollapsed otherButton2 vb">
  //           <Viber /> наш Viber
  //         </button>
  //       </div>
  //     )
  //   },
  //   image5,
  //   {
  //     url: image6,
  //     duration: 15000,
  //     seeMore: ({ close }) => <Form close={close} setSubmited={setSubmited} />,
  //     seeMoreCollapsed: ({ toggleMore, action }) => {
  //       action("pause")
  //       return (
  //         <div className="seeMore__wrapper">
  //           {<button style={submited && { pointerEvents: "none", backgroundColor: "#909090" }} className="seeMoreCollapsed lastBtn" onClick={() => toggleMore(true)}>
  //             {!submited ? "Отправьте Заявку" : "Заявка Отправлена"}
  //           </button>}
  //         </div>
  //       )
  //     }
  //   }
  // ]

  // const images = [
  //   {
  //     url: image1,
  //     seeMore: () => null,
  //     seeMoreCollapsed: ({ action }) => {
  //       if (popup || firstPlay) {
  //         action("pause")
  //       } else {
  //         action("")
  //       }
  //       return (
  //         <div style={popup ? { opacity: 0, transition: "0.3s" } : null} className="seeMore__wrapper">
  //           <button style={{}} className="seeMoreCollapsed" onClick={() => setPopup(true)}>
  //             Подробнее
  //           </button>
  //         </div>
  //       )
  //     }
  //   },
  //   image2,
  //   {
  //     url: image3,
  //     seeMore: () => null,
  //     duration: 15000,
  //     seeMoreCollapsed: ({ action }) => {
  //       return (
  //         <div className="seeMore__wrapper">
  //           <button className="seeMoreCollapsed otherButton fb">
  //             <Facebook /> Мы в Facebook
  //           </button>
  //           <button className="seeMoreCollapsed otherButton inst">
  //             <Instagram /> Мы в Instagram
  //           </button>
  //         </div>
  //       )
  //     }
  //   },
  //   {
  //     url: image4,
  //     seeMore: () => null,
  //     duration: 15000,
  //     seeMoreCollapsed: () => (
  //       <div className="seeMore__wrapper">
  //         <button className="seeMoreCollapsed otherButton2 wp">
  //           <Whatsapp /> наш WhatsApp
  //         </button>
  //         <button className="seeMoreCollapsed otherButton2 tg">
  //           <Telegram /> наш Telegram
  //         </button>
  //         <button className="seeMoreCollapsed otherButton2 vb">
  //           <Viber /> наш Viber
  //         </button>
  //       </div>
  //     )
  //   },
  //   image5,
  //   {
  //     url: image6,
  //     duration: 15000,
  //     seeMore: ({ close }) => <Form close={close} setSubmited={setSubmited} />,
  //     seeMoreCollapsed: ({ toggleMore, action }) => {
  //       action("pause")
  //       return (
  //         <div className="seeMore__wrapper">
  //           {<button style={submited && { pointerEvents: "none", backgroundColor: "#909090" }} className="seeMoreCollapsed lastBtn" onClick={() => toggleMore(true)}>
  //             {!submited ? "Отправьте Заявку" : "Заявка Отправлена"}
  //           </button>}
  //         </div>
  //       )
  //     }
  //   }
  // ]

  // return (
  //   <div className="container" onClick={() => setFirstPlay(false)}>
  //     <div className="wrapper">
  //       <Stories
  //         stories={images}
  //         width={lower410.matches ? "100vw" : "400px"}
  //         height={lower410.matches ? "100%" : "700px"}
  //         defaultInterval={5000}
  //       />
  //       {popup ? <Popup setPopup={setPopup} /> : null}
  //     </div>
  //     <div style={{display: "none"}}>
  //       {imagesArr.map(imgSrc => <img src={imgSrc} alt="img" />)}
  //     </div>
  //   </div>
  // )
}

export default memo(Horizontal)