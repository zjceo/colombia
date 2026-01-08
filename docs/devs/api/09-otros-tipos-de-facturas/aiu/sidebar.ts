import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/09-otros-tipos-de-facturas/aiu/facturas-aiu",
    },
    {
      type: "category",
      label: "Facturas AIU",
      items: [
        {
          type: "doc",
          id: "devs/api/09-otros-tipos-de-facturas/aiu/enviar-factura-aiu",
          label: "Enviar Factura AIU",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
