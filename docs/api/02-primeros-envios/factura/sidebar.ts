import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/02-primeros-envios/factura/factura-electronica",
    },
    {
      type: "category",
      label: "Factura",
      items: [
        {
          type: "doc",
          id: "api/02-primeros-envios/factura/enviar-factura-sincrono",
          label: "Enviar Factura (Síncrono)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/02-primeros-envios/factura/enviar-factura-set-de-pruebas-asincrono",
          label: "Enviar Factura (Set de Pruebas / Asíncrono)",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
