import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/01-configuraciones-basicas/documentos-soporte/01-d-configurar-documentos-de-soporte",
    },
    {
      type: "category",
      label: "Configuración Documentos Soporte",
      items: [
        {
          type: "doc",
          id: "devs/api/01-configuraciones-basicas/documentos-soporte/configurar-software-documento-soporte",
          label: "Configurar Software Documento Soporte",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
