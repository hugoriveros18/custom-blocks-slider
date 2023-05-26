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
  itemsPerPage: ItemsPerPage
}

type ItemsPerPage = {
  desktop: number
  tablet: number
  phone: number
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
  handleTrigger: () => void
}

type SlideProps = {
  slideCurrentWidth: number
  banner: Banner,
  index: number
  activeSlide: number[]
}


