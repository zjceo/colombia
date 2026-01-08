import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/otros-tipos-de-facturas/mandato/facturas-mandato",
    },
    {
      type: "category",
      label: "Facturas Mandato",
      items: [
        {
          type: "doc",
          id: "devs/api/otros-tipos-de-facturas/mandato/enviar-factura-mandato",
          label: "Enviar Factura Mandato",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
