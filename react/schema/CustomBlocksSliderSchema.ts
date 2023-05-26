export const CustomBlocksSliderSchema = {
  title: "Custom Blocks Slider",
  description: "Configuracion de slider custom",
  type: "object",
  properties: {
    banners: {
      title: "Slider Banners",
      type: "array",
      items: {
        properties: {
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
          },
          isActive: {
            title: "¿Esta activo?",
            type: "boolean",
            default: true
          },
        }
      }
    },
    configuracionSlider: {
      title: "Configuracion Slider",
      type: "object",
      properties: {
        showNavigationArrows: {
          title: "¿Mostrar Flechas de Navegacion?",
          type: "boolean",
          default: true
        },
        itemsPerPage: {
          title: "Elementos por pantalla",
          type: "object",
          properties: {
            desktop: {
              title: "Desktop",
              type: "number",
              default: 5
            },
            tablet: {
              title: "Tablet",
              type: "number",
              default: 3
            },
            phone: {
              title: "Phone",
              type: "number",
              default: 1
            }
          }
        }
      }
    }
  }
}


