import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/otros-tipos-de-facturas/exportacion/facturas-de-exportacion",
    },
    {
      type: "category",
      label: "Facturas de Exportación",
      items: [
        {
          type: "doc",
          id: "devs/api/otros-tipos-de-facturas/exportacion/enviar-factura-de-exportacion",
          label: "Enviar Factura de Exportación",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
