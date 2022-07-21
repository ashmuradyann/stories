import Stories from 'react-insta-stories'

import Form from './form/Form'

import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpg'
import image5 from '../../assets/images/image5.jpg'
import image6 from '../../assets/images/image6.jpg'

import './horizontal.scss'


const Horizontal = () => {

  const mediaMatch = window.matchMedia('(max-width: 410px)')

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    {
      url: image6,
      seeMore: () => <Form />,
      seeMoreCollapsed: ({ toggleMore, action }) => (
        <div className="seeMore__wrapper">
          <button className="seeMoreCollapsed" onClick={() => toggleMore(true)}>
            Заполните Анкету
          </button>
        </div>
      )
    }
  ]

  const imagesArr = [
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
        <Stories
          stories={images}
          width={mediaMatch.matches ? "100vw" : "400px"}
          height={mediaMatch.matches ? "100%" : "700px"}
          defaultInterval={5000}
        />
        {imagesArr.map(el => <img style={{display: "none"}} src={el} alt="img" />)}
      </div>
    </div>
  )
}

export default Horizontal