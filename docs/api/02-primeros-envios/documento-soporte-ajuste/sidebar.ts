import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/02-primeros-envios/documento-soporte-ajuste/documento-soporte-nota-de-ajuste",
    },
    {
      type: "category",
      label: "Documento Soporte",
      items: [
        {
          type: "doc",
          id: "api/02-primeros-envios/documento-soporte-ajuste/enviar-nota-de-ajuste-a-documento-soporte",
          label: "Enviar Nota de Ajuste a Documento Soporte",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
