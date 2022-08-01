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
  const [showForm, setShowForm] = useState(null)

  const readyToRend = DATA.map((slide, i) => {
    return {
      content: ({ story, action }) => {
        return (
          <WithSeeMore story={story} action={action} >
            <div className="story__wrapper">
              <img src={slide.url} alt={slide.id} />
            </div>
          </WithSeeMore>
        )
      },
      duration: slide.duration,
      seeMore: ({ close }) => {
        if (slide.form.needed) {
          return <Form close={close} setSubmited={setSubmited} setShowForm={setShowForm} />
        }
        if (slide.popup.needed) {
          return <Popup data={slide.popup.data} close={close} />
        }
        return null
      },
      seeMoreCollapsed: ({ toggleMore, action, isPaused }) => {
        if (allEnded) {
          action("pause")
        }
        if (currentIndex === 3) {
          action("play")
        }
        setCurrentIndex(null)
        return (
          <>
            {slide.buttons.needed ? <div className="seeMore__wrapper">
              {slide.buttons.buttonData.map(({ text, backgroundColor, link, iconUrl }, i) => {
                return <button key={i} style={{ backgroundColor: backgroundColor }} className="seeMoreCollapsed link">
                  <a href={link}><img src={iconUrl} alt={i} />{text}</a>
                </button>
              })}
            </div> : null}
            {slide.form.needed ? <div className="seeMore__wrapper">
              <button
                style={submited
                  ? { pointerEvents: "none", backgroundColor: "#808080" }
                  : { backgroundColor: slide.form.toggleButton.backgroundColor }}
                className="seeMoreCollapsed default"
                onClick={() => {
                  toggleMore(true)
                }}>
                {!submited ? "Отправьте Заявку" : "Заявка Отправлена"}
              </button>
            </div> : null}
            {slide.popup.needed ? <div className="seeMore__wrapper">
              <button style={{ backgroundColor: slide.popup.data.button.backgroundColor }}
                className="seeMoreCollapsed default"
                onClick={() => {
                  toggleMore(true)
                }}>
                {slide.popup.data.button.text}
              </button>
            </div> : null}
          </>
        )
      }
    }
  })

  return (
    <div className="container" onClick={(e) => {
        e.preventDefault()
        if(allEnded && e.pageY < 632 && !showForm) {
          setCurrentIndex(3)
          setAllEnded(false)
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
      </div>
      <div style={{ display: "none" }}>
        {DATA.map((slide, i) => <img key={i} src={slide.url} alt="img" />)}
      </div>
    </div>
  )
}

export default memo(Horizontal)