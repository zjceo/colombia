import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/09-otros-tipos-de-facturas/salud/09-otros-tipos-de-facturas-sector-salud",
    },
    {
      type: "category",
      label: "Sector Salud",
      items: [
        {
          type: "doc",
          id: "devs/api/09-otros-tipos-de-facturas/salud/post-invoice-health",
          label: "Envio de Factura Sector Salud",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
