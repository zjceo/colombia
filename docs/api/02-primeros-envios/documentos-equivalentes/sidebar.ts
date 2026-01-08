import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/02-primeros-envios/documentos-equivalentes/documento-equivalente-pos",
    },
    {
      type: "category",
      label: "Documento Equivalente",
      items: [
        {
          type: "doc",
          id: "api/02-primeros-envios/documentos-equivalentes/enviar-documento-equivalente-pos",
          label: "Enviar Documento Equivalente (POS)",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
