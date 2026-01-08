import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/01-configuraciones-basicas/nomina/01-c-configurar-nominas",
    },
    {
      type: "category",
      label: "Configuración Nóminas",
      items: [
        {
          type: "doc",
          id: "devs/api/01-configuraciones-basicas/nomina/configurar-software-nomina",
          label: "Configurar Software Nómina",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
