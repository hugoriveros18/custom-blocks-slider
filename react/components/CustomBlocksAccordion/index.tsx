import React, { useEffect, useRef, useState } from 'react';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import { Link } from "vtex.render-runtime";
import { CustomBlocksAccordionSchema } from '../../schema/CustomBlocksAccordionSchema';
import './styles.css';

const CSS_HANDLES = [
  'accordion__generalContainer',
  'accordion__listContainer',
  'accordion__listItem',
  'listItem__title',
  'listItem__link',
  'listItem__image',
  'aplicarAnimacion',
  'accordionVertical__generalContainer',
  'accordionVertical__listContainer',
  'accordionVertical__listItem',
  'listItemVertical__title',
  'listItemVertical__link',
  'listItemVertical__image',
  'aplicarAnimacionVertical'
]

const defaultInputValue:AccordionItem[] = [
  {
    titulo: 'Sillas Fijas',
    imagenDesktop: 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a61147c9-49d1-48f5-9b7d-712b41649a1f___73edaf95633227e31e03e1c365beb7c3.png',
    imagenMobile: 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a61147c9-49d1-48f5-9b7d-712b41649a1f___73edaf95633227e31e03e1c365beb7c3.png',
    slug: '/'
  },
  {
    titulo: 'Sillas Giratorias',
    imagenDesktop: 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a61147c9-49d1-48f5-9b7d-712b41649a1f___73edaf95633227e31e03e1c365beb7c3.png',
    imagenMobile: 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a61147c9-49d1-48f5-9b7d-712b41649a1f___73edaf95633227e31e03e1c365beb7c3.png',
    slug: '/'
  },
  {
    titulo: 'Sofás y Reclinables',
    imagenDesktop: 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a61147c9-49d1-48f5-9b7d-712b41649a1f___73edaf95633227e31e03e1c365beb7c3.png',
    imagenMobile: 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a61147c9-49d1-48f5-9b7d-712b41649a1f___73edaf95633227e31e03e1c365beb7c3.png',
    slug: '/'
  },
  {
    titulo: 'Sillas para Bar',
    imagenDesktop: 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a61147c9-49d1-48f5-9b7d-712b41649a1f___73edaf95633227e31e03e1c365beb7c3.png',
    imagenMobile: 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a61147c9-49d1-48f5-9b7d-712b41649a1f___73edaf95633227e31e03e1c365beb7c3.png',
    slug: '/'
  },
  {
    titulo: 'Ofertas Sillas',
    imagenDesktop: 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a61147c9-49d1-48f5-9b7d-712b41649a1f___73edaf95633227e31e03e1c365beb7c3.png',
    imagenMobile: 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/a61147c9-49d1-48f5-9b7d-712b41649a1f___73edaf95633227e31e03e1c365beb7c3.png',
    slug: '/'
  }
]

export default function CustomBlocksAccordion({
  colorTexto = '#1d1d1b',
  colorFondo = '#bfcad9',
  widthActivoDesktop = 60,
  widthActivoMobile = 68,
  mobileVertical = false,
  listaElementos = defaultInputValue
}:CustomBlocksAccordionProps) {

  //DEVICE DETECTION
  const { device } = useDevice();

  //JSX
  if(device === 'phone') {
    if(mobileVertical) {
      return (
        <AccordionMobileVertical
          listaElementos={listaElementos}
          colorFondo={colorFondo}
          colorTexto={colorTexto}
        />
      )
    }

    return (
      <AccordionMobile
        listaElementos={listaElementos}
        colorTexto={colorTexto}
        colorFondo={colorFondo}
        widthActivoMobile={widthActivoMobile}
      />
    )
  }

  return (
    <AccordionDesktop
      listaElementos={listaElementos}
      colorTexto={colorTexto}
      colorFondo={colorFondo}
      widthActivoDesktop={widthActivoDesktop}
    />
  )
}

CustomBlocksAccordion.schema = CustomBlocksAccordionSchema;


function AccordionDesktop({
  colorTexto,
  colorFondo,
  widthActivoDesktop,
  listaElementos
}:AccordionDesktopProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE DETECTION
  const { device } = useDevice();

  //REFERENCES
  const listContainerRef = useRef<any>(null);

  //STATES
  const [elementoActivo, setElementoActivo] = useState<number>(Math.floor(listaElementos.length / 2));
  const [originalHeight, setOriginalHeight] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  windowWidth

  //EFFECTS
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  },[])

  //VARIABLES
  const widthElemento = (index:number) => {
    return index === elementoActivo ? widthActivoDesktop : Math.floor((100 - widthActivoDesktop) / (listaElementos.length - 1))
  }

  const heightElemento = (index:number) => {

    if(originalHeight) {
      return 'auto';
    }

    if(index === elementoActivo) {
      return 'auto';
    }

    if(listContainerRef.current) {
      return `${listContainerRef.current.clientHeight}px`
    }

    return 'auto'
  }

  const handleMouseEnter = (index: number) => {
    if(device === 'desktop') {
      setElementoActivo(index)
      if(originalHeight) {
        setOriginalHeight(false);
      }
    }
  }

  const handleClick = (index:number) => {
    if(device === 'tablet') {
      setElementoActivo(index)
      if(originalHeight) {
        setOriginalHeight(false);
      }
    }
  }

  //JSX
  return(
    <div className={handles.accordion__generalContainer}>
      <ul
        className={handles.accordion__listContainer}
        ref={listContainerRef}
      >
        {
          listaElementos.map((item, index) => {
            return (
              <li
                key={index}
                className={handles.accordion__listItem}
                onMouseEnter={() => handleMouseEnter(index)}
                onClick={() => handleClick(index)}
                style={{
                  width: `${widthElemento(index)}%`,
                  height: `${heightElemento(index)}`
                }}
              >
                <div
                  className={`${handles.listItem__title} ${index === elementoActivo ? handles.aplicarAnimacion : undefined}`}
                  style={{
                    backgroundColor: colorFondo
                  }}
                >
                  <h4
                    style={{
                      color: colorTexto
                    }}
                  >
                    {item.titulo}
                  </h4>
                </div>
                <Link
                  to={item.slug}
                  className={handles.listItem__link}
                  style={{
                    transform: index === elementoActivo ? 'scale(1, 1)' : 'scale(0, 0)'
                  }}
                >
                  <img
                    alt={item.titulo}
                    src={item.imagenDesktop}
                    className={handles.listItem__image}
                    style={{
                      transform: index === elementoActivo ? 'scale(1, 1)' : 'scale(0, 0)'
                    }}
                  />
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

function AccordionMobile({
  colorTexto,
  colorFondo,
  widthActivoMobile,
  listaElementos
}:AccordionMobileProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //REFERENCES
  const listContainerRef = useRef<any>(null);

  //STATES
  const [elementoActivo, setElementoActivo] = useState<number>(Math.floor(listaElementos.length / 2));
  const [windowWidth, setWindowWidth] = useState<number>(0);
  windowWidth

  //EFFECTS
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  },[])

  //VARIABLES
  const widthElemento = (index:number) => {
    return index === elementoActivo ? widthActivoMobile : Math.floor((100 - widthActivoMobile) / (listaElementos.length - 1))
  }

  const heightElemento = (index:number) => {
    if(index === elementoActivo) {
      return 'auto'
    }

    if(listContainerRef.current) {
      return `${listContainerRef.current.clientHeight}px`
    }

    return 'auto'
  }

  //JSX
  return(
    <div className={handles.accordion__generalContainer}>
      <ul
        className={handles.accordion__listContainer}
        ref={listContainerRef}
      >
        {
          listaElementos.map((item, index) => {
            return (
              <li
                key={index}
                className={handles.accordion__listItem}
                onClick={() => setElementoActivo(index)}
                style={{
                  width: `${widthElemento(index)}%`,
                  height: `${heightElemento(index)}`
                }}
              >
                <div
                  className={`${handles.listItem__title} ${index === elementoActivo ? handles.aplicarAnimacion : undefined}`}
                  style={{
                    backgroundColor: colorFondo
                  }}
                >
                  <h4
                    style={{
                      color: colorTexto
                    }}
                  >
                    {item.titulo}
                  </h4>
                </div>
                <Link
                  to={item.slug}
                  className={handles.listItem__link}
                  style={{
                    transform: index === elementoActivo ? 'scale(1, 1)' : 'scale(0, 0)'
                  }}
                >
                  <img
                    alt={item.titulo}
                    src={item.imagenMobile}
                    className={handles.listItem__image}
                    style={{
                      transform: index === elementoActivo ? 'scale(1, 1)' : 'scale(0, 0)'
                    }}
                  />
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}


function AccordionMobileVertical({
  listaElementos,
  colorFondo,
  colorTexto
}:AccordionMobileVerticalProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATES
  const [elementoActivo, setElementoActivo] = useState<number>(Math.floor(listaElementos.length / 2));

  //METHODS
  const heightElemento = (index:number) => {
    if(index === elementoActivo) {
      return 'none'
    }

    return '30px'
  }

  //JSX
  return (
    <div className={handles.accordionVertical__generalContainer}>
      <ul className={handles.accordionVertical__listContainer}>
        {
          listaElementos.map((item, index) => {
            return (
              <li
                key={index}
                className={handles.accordionVertical__listItem}
                onClick={() => setElementoActivo(index)}
                style={{
                  maxHeight: heightElemento(index)
                }}
              >
                <div
                  className={`${handles.listItemVertical__title} ${index === elementoActivo ? handles.aplicarAnimacionVertical : undefined}`}
                  style={{
                    backgroundColor: colorFondo
                  }}
                >
                  <h4
                    style={{
                      color: colorTexto
                    }}
                  >
                    {item.titulo}
                  </h4>
                </div>
                <Link
                  to={item.slug}
                  className={handles.listItemVertical__link}
                  style={{
                    transform: index === elementoActivo ? 'scale(1, 1)' : 'scale(0, 0)'
                  }}
                >
                  <img
                    alt={item.titulo}
                    src={item.imagenMobile}
                    className={handles.listItemVertical__image}
                    style={{
                      transform: index === elementoActivo ? 'scale(1, 1)' : 'scale(0, 0)'
                    }}
                  />
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )

}


