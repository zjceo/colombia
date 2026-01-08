import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/paso-a-produccion/08-paso-a-produccion",
    },
    {
      type: "category",
      label: "Producción",
      items: [
        {
          type: "doc",
          id: "devs/api/paso-a-produccion/put-config-environment",
          label: "Cambiar Ambiente de Operación",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "devs/api/paso-a-produccion/post-numbering-range",
          label: "Consultar Rangos de Numeración",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
