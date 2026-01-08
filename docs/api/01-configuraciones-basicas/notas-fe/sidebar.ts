import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/01-configuraciones-basicas/notas-fe/02-b-configurar-notas",
    },
    {
      type: "category",
      label: "Configuración Factura Electrónica",
      items: [
        {
          type: "doc",
          id: "api/01-configuraciones-basicas/notas-fe/configurar-resolucion-nc-nd",
          label: "Configurar Resolución (NC/ND)",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
