import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/01-configuraciones-basicas/software-fe/01-b-configurar-factura-electronica",
    },
    {
      type: "category",
      label: "Configuración Factura Electrónica",
      items: [
        {
          type: "doc",
          id: "devs/api/01-configuraciones-basicas/software-fe/configurar-software",
          label: "Configurar Software",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
