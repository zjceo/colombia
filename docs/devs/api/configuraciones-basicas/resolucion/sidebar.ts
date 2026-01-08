import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/configuraciones-basicas/resolucion/configurar-resolucion-master",
    },
    {
      type: "category",
      label: "Configuración General",
      items: [
        {
          type: "doc",
          id: "devs/api/configuraciones-basicas/resolucion/configurar-resolucion",
          label: "Configurar Resolución (Master)",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
