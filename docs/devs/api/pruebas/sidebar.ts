import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/pruebas/07-pruebas-y-casos-especiales",
    },
    {
      type: "category",
      label: "Casos Especiales",
      items: [
        {
          type: "doc",
          id: "devs/api/pruebas/post-invoice-aiu",
          label: "Envio de Factura con AIU",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Consultas",
      items: [
        {
          type: "doc",
          id: "devs/api/pruebas/post-status-zip",
          label: "Consulta de Estado por ZIP Key",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Notas",
      items: [
        {
          type: "doc",
          id: "devs/api/pruebas/post-credit-note-icl",
          label: "Nota Crédito ICL",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
