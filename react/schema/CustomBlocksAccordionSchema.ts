export const CustomBlocksAccordionSchema = {
  title: "Custom Blocks Accordion",
  description: "Configuracion de acordion de elementos",
  type: "object",
  properties: {
    colorTexto: {
      title: 'Color Texto',
      type: 'string',
      default: '',
      widget: {
        "ui:widget": "color"
      }
    },
    colorFondo: {
      title: 'Color Fondo',
      type: 'string',
      default: '',
      widget: {
        "ui:widget": "color"
      }
    },
    listaElementos: {
      title: "Elementos Acordion",
      type: "array",
      items: {
        properties: {
          titulo: {
            title: "Titulo Pestaña",
            type: "string",
            default: '',
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
  }
}


