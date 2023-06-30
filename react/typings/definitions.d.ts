//SLIDER
type CustomBlocksSliderProps = {
  banners: Banner[]
  configuracionSlider: ConfiguracionSlider
}

type Banner = {
  imagenDesktop: string
  imagenMobile: string
  slug: string
  isActive: boolean
}

type ConfiguracionSlider = {
  showNavigationArrows: boolean
  navigationArrows?: NavigationArrows
  itemsPerPage: ItemsPerPage
}

type ItemsPerPage = {
  desktop: number
  tablet: number
  phone: number
}

type NavigationArrows = {
  leftArrow: string
  rightArrow: string
}

type useBannersValidationProps = {
  banners: Banner[]
}

type useContainerWidthProps = {
  containerRef: React.MutableRefObject<any>
  numeroBannersActivos: number
  itemsPerPage: ItemsPerPage
}

type useSlideStateProps = {
  banners: Banner[]
  configuracionSlider: ConfiguracionSlider
  slideCurrentWidth: number
}

type SliderArrowsProps = {
  arrowIcon: string | undefined
  handleTrigger: () => void
}

type SlideProps = {
  slideCurrentWidth: number
  banner: Banner,
  index: number
  activeSlide: number[]
}


//ACCORDION
type AccordionItem = {
  titulo: string
  imagenDesktop: string
  imagenMobile: string
  slug: string
}

type CustomBlocksAccordionProps = {
  colorTexto: string
  colorFondo: string
  listaElementos: AccordionItem[]
}


//COLLAPSIBLE
type CollapsibleSubitem = {
  _editorItemTitle: string
  texto: string
  slug: string
}

type CollapsibleItem = {
  tituloCategoria: string
  imagenDesktop: string
  imagenMobile: string
  slug: string
  marginBottom: number
  listaSubelementos: CollapsibleSubitem[]
  listaSubelementosColorFondo: string
}

type CustomBlocksCollapsibleProps = {
  listaElementosCol1: CollapsibleItem[]
  listaElementosCol2: CollapsibleItem[]
  listaElementosCol3: CollapsibleItem[]
}

type CollapsibleSingleItemProps = {
  item: CollapsibleItem
}

type CollapsibleSingleItemCoverProps = {
  isMobile: boolean
  slug: string
  setIsItemActive: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

type CollapsibleInfoItemProps = {
  isMobile: boolean
  marginBottom: number
  setIsItemActive: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
}

