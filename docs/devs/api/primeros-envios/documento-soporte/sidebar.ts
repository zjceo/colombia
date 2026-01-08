import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/primeros-envios/documento-soporte/documento-soporte-electronico",
    },
    {
      type: "category",
      label: "Documento Soporte",
      items: [
        {
          type: "doc",
          id: "devs/api/primeros-envios/documento-soporte/enviar-documento-soporte",
          label: "Enviar Documento Soporte",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
