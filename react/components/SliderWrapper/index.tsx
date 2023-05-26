import React, { useRef } from "react";
import { useCssHandles } from 'vtex.css-handles';
import useSlideWidth from "../../hooks/useSlideWidth";
import useSliderState from "../../hooks/useSliderState";
import Slide from "../Slide";
import { LeftArrow, RightArrow } from "../SliderArrows";
import './styles.css';

const CSS_HANDLES = [
  'sliderWrapper__globalContainer',
  'sliderWrapper__internalContainer',
  'sliderInTransition'
]

export default function SliderWrapper({banners, configuracionSlider}:CustomBlocksSliderProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //REFERENCES
  const wrapperConatinerRef = useRef<any>(null);

  //CONTAINER WIDTH VALIDATION
  const slideCurrentWidth = useSlideWidth({
    containerRef:wrapperConatinerRef,
    numeroBannersActivos: banners.length,
    itemsPerPage:configuracionSlider.itemsPerPage
  });

  //BANNER LIST STATE
  const {
    estadoActualBanners,
    sliderTranslation,
    isSliderInTransition,
    activeSlide,
    handlePrevious,
    handleNext
  } = useSliderState({
    banners,
    configuracionSlider,
    slideCurrentWidth
  })

  //JSX
  return(
    <div style={{position: 'relative'}}>
      <div ref={wrapperConatinerRef} className={handles.sliderWrapper__globalContainer}>
        <div
          className={`${handles.sliderWrapper__internalContainer} ${isSliderInTransition ? handles.sliderInTransition : undefined}`}
          style={{
            transform: `translateX(${sliderTranslation}px)`,
            width: `${estadoActualBanners.length * slideCurrentWidth}px`
          }}
        >
          {
            estadoActualBanners.map((banner, index) => {
              return (
                <Slide
                  banner={banner}
                  slideCurrentWidth={slideCurrentWidth}
                  activeSlide={activeSlide}
                  index={index}
                  key={index}
                />
              )
            })
          }
        </div>
      </div>
        {
          configuracionSlider.showNavigationArrows &&
          <>
            <LeftArrow handleTrigger={handlePrevious}/>
            <RightArrow handleTrigger={handleNext}/>
          </>
        }
    </div>
  )
}

