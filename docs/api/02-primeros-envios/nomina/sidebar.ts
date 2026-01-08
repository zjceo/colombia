import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/02-primeros-envios/nomina/nomina-electronica-individual",
    },
    {
      type: "category",
      label: "Nomina",
      items: [
        {
          type: "doc",
          id: "api/02-primeros-envios/nomina/enviar-nomina-individual",
          label: "Enviar Nómina Individual",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
