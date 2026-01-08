import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/primeros-envios/nota-debito/factura-electronica-nota-debito",
    },
    {
      type: "category",
      label: "Nota Debito",
      items: [
        {
          type: "doc",
          id: "devs/api/primeros-envios/nota-debito/enviar-nota-debito",
          label: "Enviar Nota Débito",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
