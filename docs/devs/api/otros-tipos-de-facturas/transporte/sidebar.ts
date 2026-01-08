import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/otros-tipos-de-facturas/transporte/facturas-de-transporte",
    },
    {
      type: "category",
      label: "Facturas de Transporte",
      items: [
        {
          type: "doc",
          id: "devs/api/otros-tipos-de-facturas/transporte/enviar-factura-de-transporte",
          label: "Enviar Factura de Transporte",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
