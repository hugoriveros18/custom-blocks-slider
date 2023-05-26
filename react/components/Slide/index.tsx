import React from "react";
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  'picture__globalContainer',
  'slide__linkRight',
  'slide__linkLeft',
  'slide__image',
  'slide__imagePhone',
  'slide__imageActive'
]

export default function Slide({
  slideCurrentWidth,
  banner,
  activeSlide,
  index
}:SlideProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE DETECTION
  const { isMobile, device } = useDevice()

  //METHODS
  const calcFinalSlideWidth = () => {
    if(device === 'phone') {
      return slideCurrentWidth - 80
    }

    return slideCurrentWidth;
  }

  const linkPhoneValidation = () => {
    if(device === 'phone') {
      if(!activeSlide.includes(index)) {
        if(index < activeSlide[0]) {
          return handles.slide__linkLeft
        }
        return handles.slide__linkRight
      }
    }

    return undefined
  }

  const imagePhoneValidation = () => {
    if(device === 'phone') {
      if(!activeSlide.includes(index)) {
        return handles.slide__imagePhone
      }
    }

    return handles.slide__image
  }

  //JSX
  if(banner) {
    return (
      <picture
        style={{width: `${calcFinalSlideWidth()}px`}}
        key={index}
        className={handles.picture__globalContainer}
      >
        <a
          href={banner.slug}
          className={`${linkPhoneValidation()}`}
        >
          <img
            src={isMobile ? banner.imagenMobile : banner.imagenDesktop}
            className={`
            ${imagePhoneValidation()}
            ${activeSlide.includes(index) ? handles.slide__imageActive : undefined}
            `}
          />
        </a>
      </picture>
    )
  }

  return null
}

