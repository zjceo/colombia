import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/01-configuraciones-basicas/documentos-equivalentes/01-e-documentos-equivalentes",
    },
    {
      type: "category",
      label: "Configuración Documentos Equivalentes",
      items: [
        {
          type: "doc",
          id: "api/01-configuraciones-basicas/documentos-equivalentes/configurar-software-documentos-equivalentes",
          label: "Configurar Software Documentos Equivalentes",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
