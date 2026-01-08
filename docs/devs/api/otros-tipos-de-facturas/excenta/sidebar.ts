import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/otros-tipos-de-facturas/excenta/facturas-exentas",
    },
    {
      type: "category",
      label: "Facturas Exentas",
      items: [
        {
          type: "doc",
          id: "devs/api/otros-tipos-de-facturas/excenta/enviar-factura-exenta",
          label: "Enviar Factura Exenta",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
