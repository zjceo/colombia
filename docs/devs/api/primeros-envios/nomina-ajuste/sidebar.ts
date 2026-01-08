import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/primeros-envios/nomina-ajuste/nomina-electronica-nota-de-ajuste",
    },
    {
      type: "category",
      label: "Nomina",
      items: [
        {
          type: "doc",
          id: "devs/api/primeros-envios/nomina-ajuste/enviar-nota-de-ajuste-de-nomina",
          label: "Enviar Nota de Ajuste de Nómina",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
