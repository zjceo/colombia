import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/02-primeros-envios/nota-credito/factura-electronica-nota-credito",
    },
    {
      type: "category",
      label: "Nota Credito",
      items: [
        {
          type: "doc",
          id: "api/02-primeros-envios/nota-credito/enviar-nota-credito",
          label: "Enviar Nota Crédito",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
