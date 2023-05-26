import { useEffect, useMemo, useState } from "react";
import { useDevice } from 'vtex.device-detector';

export default function useSlideWidth({
  containerRef,
  numeroBannersActivos,
  itemsPerPage
}:useContainerWidthProps) {

  //DEVICE DETECTION
  const { device } = useDevice()

  //STATES
  const [containerCurrentWidth, setcontainerCurrentWidth] = useState<number>(10);

  //MEMO
  const slideWidth = useMemo(() => {

    if(device === 'desktop') {
      if(numeroBannersActivos < itemsPerPage.desktop) {
        return Math.floor(containerCurrentWidth / numeroBannersActivos)
      }
      return Math.floor(containerCurrentWidth / itemsPerPage.desktop)

    } else if (device === 'tablet') {
      if(numeroBannersActivos < itemsPerPage.tablet) {
        return Math.floor(containerCurrentWidth / numeroBannersActivos)
      }
      return Math.floor(containerCurrentWidth / itemsPerPage.tablet)

    } else {
      if(numeroBannersActivos < itemsPerPage.phone) {
        return Math.floor(containerCurrentWidth / numeroBannersActivos)
      }
      return Math.floor(containerCurrentWidth / itemsPerPage.phone)

    }
  }, [containerCurrentWidth, numeroBannersActivos, device])

  //EFFECTS
  useEffect(() => {
    setcontainerCurrentWidth(containerRef.current.clientWidth);

    window.addEventListener("resize", () => {
      setcontainerCurrentWidth(containerRef.current.clientWidth);
    })
  },[])

  return slideWidth;
}

