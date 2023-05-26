import { useEffect, useState } from "react";
import { useDevice } from 'vtex.device-detector';

export default function useSliderState({
  banners,
  configuracionSlider,
  slideCurrentWidth
}:useSlideStateProps) {

  //DEVICE DETECTION
  const { device } = useDevice()

  //STATES
  const [estadoActualBanners, setEstadoActualBanners] = useState<Banner[]>([]);
  const [sliderTranslation, setSliderTranslation] = useState<number>(0);
  const [isSliderInTransition, setIsSliderInTransition] = useState<boolean>(false);
  const [activeSlide, setActiveSlide] = useState<number[]>([]);

  //EFFECTS
  useEffect(() => {
    let estadoInicial = [...banners];
    let currentActiveSlide = [];
    estadoInicial.unshift(banners[banners.length - 1]);
    if(device === 'desktop') {
      if(banners.length <= configuracionSlider.itemsPerPage.desktop) {
        estadoInicial.push(banners[0]);

        if(estadoInicial.length % 2 === 0) {
          let activeIndex = estadoInicial.length / 2;
          currentActiveSlide.push(activeIndex - 1);
          currentActiveSlide.push(activeIndex);
        } else {
          let activeIndex = Math.floor(estadoInicial.length / 2);
          currentActiveSlide.push(activeIndex);
        }
      } else {
        if(configuracionSlider.itemsPerPage.desktop % 2 === 0) {
          let activeIndex = configuracionSlider.itemsPerPage.desktop / 2;
          currentActiveSlide.push(activeIndex);
          currentActiveSlide.push(activeIndex + 1);
        } else {
          let activeIndex = Math.floor(configuracionSlider.itemsPerPage.desktop / 2);
          currentActiveSlide.push(activeIndex + 1);
        }
      }

    } else if (device === 'tablet') {
      if(banners.length <= configuracionSlider.itemsPerPage.tablet) {
        estadoInicial.push(banners[0]);

        if(estadoInicial.length % 2 === 0) {
          let activeIndex = estadoInicial.length / 2;
          currentActiveSlide.push(activeIndex - 1);
          currentActiveSlide.push(activeIndex);
        } else {
          let activeIndex = Math.floor(estadoInicial.length / 2);
          currentActiveSlide.push(activeIndex);
        }
      } else {
        if(configuracionSlider.itemsPerPage.tablet % 2 === 0) {
          let activeIndex = configuracionSlider.itemsPerPage.tablet / 2;
          currentActiveSlide.push(activeIndex);
          currentActiveSlide.push(activeIndex + 1);
        } else {
          let activeIndex = Math.floor(configuracionSlider.itemsPerPage.tablet / 2);
          currentActiveSlide.push(activeIndex + 1);
        }
      }

    } else {
      if(banners.length <= configuracionSlider.itemsPerPage.phone) {
        estadoInicial.push(banners[0]);

        if(estadoInicial.length % 2 === 0) {
          let activeIndex = estadoInicial.length / 2;
          currentActiveSlide.push(activeIndex - 1);
          currentActiveSlide.push(activeIndex);
        } else {
          let activeIndex = Math.floor(estadoInicial.length / 2);
          currentActiveSlide.push(activeIndex);
        }
      } else {
        if(configuracionSlider.itemsPerPage.phone % 2 === 0) {
          let activeIndex = configuracionSlider.itemsPerPage.phone / 2;
          currentActiveSlide.push(activeIndex);
          currentActiveSlide.push(activeIndex + 1);
        } else {
          let activeIndex = Math.floor(configuracionSlider.itemsPerPage.phone / 2);
          currentActiveSlide.push(activeIndex + 1);
        }
      }
    }

    setEstadoActualBanners(estadoInicial);
    setActiveSlide(currentActiveSlide);
    if(device === 'phone') {
      let sliderWithOnPhone = slideCurrentWidth - 80;
      setSliderTranslation(40 - sliderWithOnPhone);
    } else {
      setSliderTranslation(-slideCurrentWidth);
    }
  },[slideCurrentWidth])



  //METHODS
  const handlePreviousMinus = () => {
    setSliderTranslation((sliderTranslation) => sliderTranslation - slideCurrentWidth);
    setIsSliderInTransition(true);
    let newEstadoBanners = [...estadoActualBanners];
    newEstadoBanners.pop();
    newEstadoBanners.unshift(estadoActualBanners[newEstadoBanners.length - 2]);
    setEstadoActualBanners(newEstadoBanners);
    setSliderTranslation((sliderTranslation) => sliderTranslation + slideCurrentWidth);
    setIsSliderInTransition(false);
  }

  const handlePreviousPlus = () => {
    setSliderTranslation((sliderTranslation) => sliderTranslation - slideCurrentWidth);
    setIsSliderInTransition(true);
    let newEstadoBanners = [...estadoActualBanners];
    newEstadoBanners.pop();
    let newEstadoBannersFirst = newEstadoBanners.slice(-1);
    newEstadoBanners.unshift(newEstadoBannersFirst[0]);
    setEstadoActualBanners(newEstadoBanners);
    setSliderTranslation((sliderTranslation) => sliderTranslation + slideCurrentWidth);
    setIsSliderInTransition(false);
  }

  const handleNextMinus = () => {
    setSliderTranslation((sliderTranslation) => sliderTranslation + slideCurrentWidth);
    setIsSliderInTransition(true);
    let newEstadoBanners = [...estadoActualBanners];
    newEstadoBanners.shift();
    newEstadoBanners.push(estadoActualBanners[2]);
    setEstadoActualBanners(newEstadoBanners);
    setSliderTranslation((sliderTranslation) => sliderTranslation - slideCurrentWidth);
    setIsSliderInTransition(false);
  }

  const handleNextPlus = () => {
    setSliderTranslation((sliderTranslation) => sliderTranslation - slideCurrentWidth);
    setIsSliderInTransition(true);
    let newEstadoBanners = [...estadoActualBanners];
    newEstadoBanners.shift();
    newEstadoBanners.push(estadoActualBanners[1]);
    setEstadoActualBanners(newEstadoBanners);
    setSliderTranslation((sliderTranslation) => sliderTranslation + slideCurrentWidth);
    setIsSliderInTransition(false);
  }

  const handlePrevious = () => {
    if(device === 'desktop') {
      if(banners.length <= configuracionSlider.itemsPerPage.desktop) {
        handlePreviousMinus();
      } else {
        handlePreviousPlus();
      }

    } else if (device === 'tablet') {
      if(banners.length <= configuracionSlider.itemsPerPage.tablet) {
        handlePreviousMinus();
      } else {
        handlePreviousPlus();
      }

    } else {
      if(banners.length <= configuracionSlider.itemsPerPage.phone) {
        handlePreviousMinus();
      } else {
        handlePreviousPlus();
      }
    }
  }

  const handleNext = () => {
    if(device === 'desktop') {
      if(banners.length <= configuracionSlider.itemsPerPage.desktop) {
        handleNextMinus();
      } else {
        handleNextPlus();
      }

    } else if (device === 'tablet') {
      if(banners.length <= configuracionSlider.itemsPerPage.tablet) {
        handleNextMinus();
      } else {
        handleNextPlus();
      }

    } else {
      if(banners.length <= configuracionSlider.itemsPerPage.phone) {
        handleNextMinus();
      } else {
        handleNextPlus();
      }
    }
  }

  //RETURN
  return {
    estadoActualBanners,
    sliderTranslation,
    isSliderInTransition,
    activeSlide,
    handlePrevious,
    handleNext
  }
}


