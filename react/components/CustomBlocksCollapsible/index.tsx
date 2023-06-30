import React, { useEffect, useState } from 'react';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import { Link } from "vtex.render-runtime";
import { defaultValueCol1, defaultValueCol2, defaultValueCol3 } from '../../typings/defaultValues';
import './styles.css';
import { CustomBlocksCollapsibleSchema } from '../../schema/CustomBlocksCollapsibleSchema';

const CSS_HANDLES = [
  'collapsible__generalContainer',
  'collapsible__columnContainer',
  'collapsible__itemContainer',
  'collapsible__imageContainer',
  'collapsible__image',
  'collapsible__infoContainer',
  'collapsible__descubreMasButtonContainer',
  'collapsible__descubreMasButton',
  'collapsible__subitemsListContainer',
  'collapsible__subitemsListContainerActive',
  'collapsible__subitemsListContainerInactive',
  'collapsible__subitemContainer',
  'collapsible__subitemContainerLast',
  'collapsible__subitemLink',
]

export default function CustomBlocksCollapsible({
  listaElementosCol1 = defaultValueCol1,
  listaElementosCol2 = defaultValueCol2,
  listaElementosCol3 = defaultValueCol3
}:CustomBlocksCollapsibleProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATES
  const [listaElementosCol1Convert, setListaElementosCol1Convert] = useState<CollapsibleItem[]>([]);
  const [listaElementosCol2Convert, setListaElementosCol2Convert] = useState<CollapsibleItem[]>([]);
  const [listaElementosCol3Convert, setListaElementosCol3Convert] = useState<CollapsibleItem[]>([]);

  //EFFECTS
  useEffect(() => {
    setListaElementosCol1Convert(listaElementosCol1.reverse());
    setListaElementosCol2Convert(listaElementosCol2.reverse());
    setListaElementosCol3Convert(listaElementosCol3.reverse());
  },[])

  //JSX
  return(
    <ul className={handles.collapsible__generalContainer}>
      <li className={handles.collapsible__columnContainer}>
        {
          listaElementosCol1Convert.map((elemento, index) => {
            return (
              <CollapsibleSingleItem
                key={index}
                item={elemento}
              />
            )
          })
        }
      </li>
      <li className={handles.collapsible__columnContainer}>
        {
          listaElementosCol2Convert.map((elemento, index) => {
            return (
              <CollapsibleSingleItem
                key={index}
                item={elemento}
              />
            )
          })
        }
      </li>
      <li className={handles.collapsible__columnContainer}>
        {
          listaElementosCol3Convert.map((elemento, index) => {
            return (
              <CollapsibleSingleItem
                key={index}
                item={elemento}
              />
            )
          })
        }
      </li>
    </ul>
  )
}

CustomBlocksCollapsible.schema = CustomBlocksCollapsibleSchema;


function CollapsibleSingleItem({item}:CollapsibleSingleItemProps) {

  //DEVICE DETECTION
  const { isMobile } = useDevice();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATES
  const [isItemActive, setIsItemActive] = useState<boolean>(false);

  //JSX
  return (
    <div className={handles.collapsible__itemContainer}>
      <CollapsibleSingleItemCover
        isMobile={isMobile}
        slug={item.slug}
        setIsItemActive={setIsItemActive}
      >
        <img
          src={isMobile ? item.imagenMobile : item.imagenDesktop}
          alt='Imagen Renueva tus espacios'
          className={handles.collapsible__image}
        />
      </CollapsibleSingleItemCover>

      <CollapsibleInfoItem
        isMobile={isMobile}
        marginBottom={item.marginBottom}
        setIsItemActive={setIsItemActive}
      >
        <picture
          className={handles.collapsible__descubreMasButtonContainer}
        >
          <img
            alt='Descubre Más'
            src='https://panamericana.vtexassets.com/arquivos/boton-mobiliario-junio-2023.png'
            className={handles.collapsible__descubreMasButton}
          />
        </picture>
        <ul
          className={`${handles.collapsible__subitemsListContainer} ${isItemActive ? handles.collapsible__subitemsListContainerActive : handles.collapsible__subitemsListContainerInactive}`}
        >
          {
            item.listaSubelementos.map((subItem, index) => {
              return (
                <li
                  key={index}
                  className={`${handles.collapsible__subitemContainer}`}
                  style={{
                    backgroundColor: item.listaSubelementosColorFondo
                  }}
                >
                  <Link
                    to={subItem.slug}
                    className={handles.collapsible__subitemLink}
                  >
                    {subItem.texto}
                  </Link>
                </li>
              )
            })
          }
          <li
            className={`${handles.collapsible__subitemContainer} ${handles.collapsible__subitemContainerLast}`}
            style={{
              backgroundColor: item.listaSubelementosColorFondo
            }}
          >
            <Link
              to={item.slug}
              className={handles.collapsible__subitemLink}
            >
              Ver todo {item.tituloCategoria}
            </Link>
          </li>
        </ul>
      </CollapsibleInfoItem>
    </div>
  )
}

function CollapsibleSingleItemCover({
  isMobile,
  slug,
  setIsItemActive,
  children
}:CollapsibleSingleItemCoverProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //METHODS
  const handleCollapsibleState = () => {
    setIsItemActive((currentState) => !currentState)
  }

  //JSX
  if(isMobile) {
    return (
      <picture
        onClick={handleCollapsibleState}
        className={handles.collapsible__imageContainer}
      >
        {children}
      </picture>
    )
  }

  return (
      <Link
        to={slug}
        onMouseEnter={() => setIsItemActive(true)}
        onMouseLeave={() => setIsItemActive(false)}
        className={handles.collapsible__imageContainer}
      >
        {children}
      </Link>
  )

}

function CollapsibleInfoItem({
  isMobile,
  marginBottom,
  setIsItemActive,
  children
}:CollapsibleInfoItemProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  if(isMobile) {
    return (
      <div
        className={handles.collapsible__infoContainer}
        style={{
          top: `${90 - marginBottom}%`
        }}
        onClick={() => setIsItemActive((state) => !state)}
      >
        {children}
      </div>
    )
  }

  return (
    <div
      className={handles.collapsible__infoContainer}
      style={{
        top: `${90 - marginBottom}%`
      }}
      onMouseEnter={() => setIsItemActive(true)}
      onMouseLeave={() => setIsItemActive(false)}
    >
      {children}
    </div>
  )
}

