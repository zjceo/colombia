import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/10-generador-de-eventos/generador-de-eventos",
    },
    {
      type: "category",
      label: "Eventos",
      items: [
        {
          type: "doc",
          id: "devs/api/10-generador-de-eventos/enviar-evento-documento-adjunto",
          label: "Enviar Evento (Documento Adjunto)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/10-generador-de-eventos/enviar-evento-datos-cufe",
          label: "Enviar Evento (Datos CUFE)",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
