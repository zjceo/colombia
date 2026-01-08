import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/03-consultas-estado/consultas-de-estado",
    },
    {
      type: "category",
      label: "Consultas de Estado",
      items: [
        {
          type: "doc",
          id: "devs/api/03-consultas-estado/consultar-estado-por-zip-key-asincrono",
          label: "Consultar Estado por ZIP Key (Asíncrono)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/03-consultas-estado/consultar-estado-por-uuid-sincrono-individual",
          label: "Consultar Estado por UUID (Síncrono/Individual)",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/03-consultas-estado/consultar-eventos-de-un-documento",
          label: "Consultar Eventos de un Documento",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
