import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import useBannersValidation from "../../hooks/useBannersValidation";
import SliderWrapper from "../SliderWrapper";
import { CustomBlocksSliderSchema } from "../../schema/CustomBlocksSliderSchema";
import './styles.css'

const CSS_HANDLES = [
  'slider__globalContainer'
]

export default function CustomBlocksSlider({
  banners,
  configuracionSlider
}:CustomBlocksSliderProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //BANNERS VALIDATION
  const activeBanners = useBannersValidation({banners});

  //JSX
  return (
    <div className={handles.slider__globalContainer}>
      <SliderWrapper
        banners={activeBanners}
        configuracionSlider={configuracionSlider}
      />
    </div>
  )
}

CustomBlocksSlider.schema = CustomBlocksSliderSchema;

