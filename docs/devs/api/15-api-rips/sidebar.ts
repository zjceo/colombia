import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/15-api-rips/api-rips",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "devs/api/15-api-rips/version-del-api",
          label: "Versión del API",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/15-api-rips/login-sispro",
          label: "Login SISPRO",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/15-api-rips/cargar-rips-sin-factura",
          label: "Cargar RIPS sin Factura",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/15-api-rips/cargar-rips-con-factura",
          label: "Cargar RIPS con Factura",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/15-api-rips/recuperar-cuv",
          label: "Recuperar CUV",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
