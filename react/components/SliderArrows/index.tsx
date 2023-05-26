import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  'leftArrow__globalContainer',
  'leftArrow__icon',
  'rightArrow__globalContainer',
  'rightArrow__icon',
]

export function LeftArrow({handleTrigger}:SliderArrowsProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div className={handles.leftArrow__globalContainer}>
      <img
        src="https://panamericana.vteximg.com.br/arquivos/arrow-1-asi-quiero-new-version-mayo-2023-40.svg"
        className={handles.leftArrow__icon}
        onClick={handleTrigger}
        />
    </div>
  )
}

export function RightArrow({handleTrigger}:SliderArrowsProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div className={handles.rightArrow__globalContainer}>
      <img
        src="https://panamericana.vteximg.com.br/arquivos/arrow-2-asi-quiero-new-version-mayo-2023-40-41.svg"
        className={handles.rightArrow__icon}
        onClick={handleTrigger}
      />
    </div>
  )
}

