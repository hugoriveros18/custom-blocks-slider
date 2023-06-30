export const CustomBlocksCollapsibleSchema = {
  title: "Custom Blocks Collapsible",
  description: "Configuracion de desplegable de elementos",
  type: "object",
  properties: {

    listaElementosCol1: {
      title: "Columna 1",
      type: "array",
      items: {
        properties: {
          tituloCategoria: {
            title: "Titulo Categoria",
            type: "string",
            default: ''
          },
          imagenDesktop: {
            title: "Banner Desktop",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenMobile: {
            title: "Banner Mobile",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          slug: {
            title: "Slug Categoria",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "textarea"
            }
          },
          marginBottom: {
            title: "Margen de boton desde abajo",
            description: "Espacio del boton 'Descubre más' desde la parte de inferior. Indicar un valor en porcentaje, ex. 10",
            type: "number",
            default: 10
          },
          listaSubelementosColorFondo: {
            title: 'Color Fondo - Sublista Elementos',
            type: 'string',
            default: '',
            widget: {
              "ui:widget": "color"
            }
          },
          listaSubelementos: {
            title: "Sublista de Elementos",
            type: "array",
            items: {
              properties: {
                __editorItemTitle: {
                  title: "Nombre Identificador",
                  type: "string",
                  default: ''
                },
                texto: {
                  title: "Titulo",
                  type: "string",
                  default: ''
                },
                slug: {
                  title: "Slug",
                  type: "string",
                  default: '',
                  widget: {
                    "ui:widget": "textarea"
                  }
                }
              }
            }
          }
        },
      }
    },

    listaElementosCol2: {
      title: "Columna 2",
      type: "array",
      items: {
        properties: {
          tituloCategoria: {
            title: "Titulo Categoria",
            type: "string",
            default: ''
          },
          imagenDesktop: {
            title: "Banner Desktop",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenMobile: {
            title: "Banner Mobile",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          slug: {
            title: "Slug Categoria",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "textarea"
            }
          },
          marginBottom: {
            title: "Margen de boton desde abajo",
            description: "Espacio del boton 'Descubre más' desde la parte de inferior. Indicar un valor en porcentaje, ex. 10",
            type: "number",
            default: 10
          },
          listaSubelementosColorFondo: {
            title: 'Color Fondo - Sublista Elementos',
            type: 'string',
            default: '',
            widget: {
              "ui:widget": "color"
            }
          },
          listaSubelementos: {
            title: "Sublista de Elementos",
            type: "array",
            items: {
              properties: {
                __editorItemTitle: {
                  title: "Nombre Identificador",
                  type: "string",
                  default: ''
                },
                texto: {
                  title: "Titulo",
                  type: "string",
                  default: ''
                },
                slug: {
                  title: "Slug",
                  type: "string",
                  default: '',
                  widget: {
                    "ui:widget": "textarea"
                  }
                }
              }
            }
          }
        },
      }
    },

    listaElementosCol3: {
      title: "Columna 3",
      type: "array",
      items: {
        properties: {
          tituloCategoria: {
            title: "Titulo Categoria",
            type: "string",
            default: ''
          },
          imagenDesktop: {
            title: "Banner Desktop",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenMobile: {
            title: "Banner Mobile",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          slug: {
            title: "Slug Categoria",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "textarea"
            }
          },
          marginBottom: {
            title: "Margen de boton desde abajo",
            description: "Espacio del boton 'Descubre más' desde la parte de inferior. Indicar un valor en porcentaje, ex. 10",
            type: "number",
            default: 10
          },
          listaSubelementosColorFondo: {
            title: 'Color Fondo - Sublista Elementos',
            type: 'string',
            default: '',
            widget: {
              "ui:widget": "color"
            }
          },
          listaSubelementos: {
            title: "Sublista de Elementos",
            type: "array",
            items: {
              properties: {
                __editorItemTitle: {
                  title: "Nombre Identificador",
                  type: "string",
                  default: ''
                },
                texto: {
                  title: "Titulo",
                  type: "string",
                  default: ''
                },
                slug: {
                  title: "Slug",
                  type: "string",
                  default: '',
                  widget: {
                    "ui:widget": "textarea"
                  }
                }
              }
            }
          }
        },
      }
    }
  }
}





