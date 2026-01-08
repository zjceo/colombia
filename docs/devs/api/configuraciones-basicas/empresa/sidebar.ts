import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/configuraciones-basicas/empresa/01-a-configuracion-de-empresa",
    },
    {
      type: "category",
      label: "Configuración Empresa",
      items: [
        {
          type: "doc",
          id: "devs/api/configuraciones-basicas/empresa/configurar-compania",
          label: "Configurar Compañía",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/configuraciones-basicas/empresa/configurar-certificado",
          label: "Configurar Certificado",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
