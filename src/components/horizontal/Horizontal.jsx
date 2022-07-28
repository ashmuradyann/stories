import { useState, useEffect, memo } from 'react'

import { DATA } from '../../data'

import Stories from 'react-insta-stories'

import Form from './form/Form'
import Popup from './popup/Popup'

import './horizontal.scss'

const Horizontal = ({ submited, setSubmited }) => {

  const lower410 = window.matchMedia('(max-width: 410px)')

  const [popup, setPopup] = useState({
    bool: false,
    data: []
  })

  const [firstPlay, setFirstPlay] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [allEnded, setAllEnded] = useState(null)

  console.log(currentIndex)

  useEffect(() => {
    setFirstPlay(true)
  }, [])

  const readyToRend = DATA.map((slide, i) => {
    return {
      url: slide.url,
      duration: slide.duration,
      seeMore: slide.form.needed ? ({ close }) => <Form close={close} setSubmited={setSubmited} /> : slide.popup ? () => null : null,
      seeMoreCollapsed: ({ toggleMore, action }) => {
        setCurrentIndex(null)
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
                return <button key={i} style={{ backgroundColor: backgroundColor }} className="seeMoreCollapsed otherButton">
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
    <div className="container" onClick={() => {
        if(firstPlay) {
          setFirstPlay(false)
          setCurrentIndex(1)
        }
        if(allEnded) {
          setCurrentIndex(4)
        }
      }}>
      <div className="wrapper">
        <Stories
          currentIndex={currentIndex}
          stories={readyToRend}
          width={lower410.matches ? "100vw" : "400px"}
          height={lower410.matches ? "100%" : "700px"}
          onAllStoriesEnd={() => setAllEnded(true)}
          defaultInterval={5000}
        />
        {popup.bool ? <Popup popup={popup} setPopup={setPopup} /> : null}
      </div>
      <div style={{ display: "none" }}>
        {DATA.map(slide => <img src={slide.url} alt="img" />)}
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