import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/09-otros-tipos-de-facturas/contingencia/facturas-de-contingencia",
    },
    {
      type: "category",
      label: "Facturas de Contingencia",
      items: [
        {
          type: "doc",
          id: "devs/api/09-otros-tipos-de-facturas/contingencia/enviar-factura-de-contingencia",
          label: "Enviar Factura de Contingencia",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
