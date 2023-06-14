import { useEffect } from 'react';
import { canUseDOM } from 'vtex.render-runtime';

export default function HTMLScroll() {

  //EFFECTS
  useEffect(() => {
    if(canUseDOM) {
      const htmlTag = document.getElementsByTagName('html');
      if(htmlTag) {
        Array.from(htmlTag)[0].style.scrollBehavior = 'smooth';
      }
    }
  },[canUseDOM])

  //JSX
  return null
}

