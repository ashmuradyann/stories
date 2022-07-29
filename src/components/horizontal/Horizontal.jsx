import { useState, memo } from 'react'

import { DATA } from '../../data'

import Stories, { WithSeeMore } from 'react-insta-stories'

import Form from './form/Form'
import Popup from './popup/Popup'

import './horizontal.scss'

const Horizontal = ({ submited, setSubmited }) => {

  const lower410 = window.matchMedia('(max-width: 410px)')

  const [currentIndex, setCurrentIndex] = useState(0)
  const [allEnded, setAllEnded] = useState(null)
  const [hold, setHold] = useState(null)

  const readyToRend = DATA.map((slide, i) => {
    return {
      content: ({ action, story }) => {
        return (
          <WithSeeMore story={story} action={action} >
            <div className="story__wrapper">
              {/* <div className="story__wrapper" style={{ backgroundImage: `url(${slide.url})` }}> */}
              <img src={slide.url} alt={slide.id} />
            </div>
          </WithSeeMore>
        )
      },
      duration: slide.duration,
      seeMore: ({ close }) => {
        if (slide.form.needed) {
          return <Form close={close} setSubmited={setSubmited} />
        }
        if (slide.popup.needed) {
          return <Popup data={slide.popup.data} close={close} />
        }
        return <div>a</div>
      },
      seeMoreCollapsed: ({ toggleMore, action, isPaused }) => {
        setCurrentIndex(null)
        if (slide.paused || allEnded || hold) {
          action("pause")
        } else {
          action("")
        }
        if (slide.popup.needed) {
          return (
            <div key={i} className="seeMore__wrapper">
              <button style={{ backgroundColor: slide.popup.data.button.backgroundColor }} className="seeMoreCollapsed popup" onClick={() => {
                toggleMore(true)
              }}>
                {slide.popup.data.button.text}
              </button>
            </div>
          )
        }
        if (slide.buttons.needed) {
          return (
            <div className="seeMore__wrapper">
              {slide.buttons.buttonData.map(({ text, backgroundColor, link, iconUrl }, i) => {
                return <button key={i} style={{ backgroundColor: backgroundColor }} className="seeMoreCollapsed otherButton">
                  <a href={link}><img src={iconUrl} alt={i} />{text}</a>
                </button>
              })}
            </div>
          )
        }
        if (slide.form.needed) {
          return (
            <div className="seeMore__wrapper" onClick={(e) => {
              if (e.pageY < 607 && !isPaused) {
                setAllEnded(false)
                setCurrentIndex(3)
              }
            }}>
              {<button style={submited ? { pointerEvents: "none", backgroundColor: "#808080" } : { backgroundColor: slide.form.toggleButton.backgroundColor, marginTop: "600px" }} className="seeMoreCollapsed" onClick={() => {
                toggleMore(true)
              }}>
                {!submited ? "Отправьте Заявку" : "Заявка Отправлена"}
              </button>}
            </div>
          )
        }
        // if (slide.playAfterPause) {
        //   return <div style={{ width: "100%", height: "700px" }} onClick={(e) => {
        //     setPause(false)
        //     setCurrentIndex(1)
        //     setWaiter(false)
        //   }}></div>
        // }
      }
    }
  })

  // const hold = (e, f, t, g) => {
  //   let holder;
  //   e.addEventListener("mousedown", function (r) {
  //     holder = setTimeout(function () {
  //       f.call(e, r);
  //       holder = true;
  //     }, t || 2000)
  //   });
  //   document.addEventListener("mouseup", function (r) {
  //     holder === true ? g && g.call(e, r)
  //       : clearTimeout(holder);
  //   });
  // }

  var holder

  return (
    <div className="container">
      <div className="wrapper" onMouseDown={(e) => {
        holder = setTimeout(() => {
          if (e.pageY < 577) {
            setHold(true)
            holder = true
          }
        }, 100)
      }} onMouseUp={(e) => {
        holder ? setHold(false) && console.log("mouseUp") : clearTimeout(holder)
        setHold(false)
      }}>
        <Stories
          currentIndex={currentIndex}
          stories={readyToRend}
          width={lower410.matches ? "100vw" : "400px"}
          height={lower410.matches ? "690px" : "700px"}
          onAllStoriesEnd={() => setAllEnded(true)}
          defaultInterval={5000}
        />
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
  //   <div className="container" onClick={() => setPause(false)}>
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