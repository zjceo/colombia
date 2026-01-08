import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/13-regenerar-pdfs/regenerar-pdfs-y-plantillas",
    },
    {
      type: "category",
      label: "Regenerar PDF",
      items: [
        {
          type: "doc",
          id: "devs/api/13-regenerar-pdfs/regenerar-documento-con-json",
          label: "Regenerar Documento Con JSON",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/13-regenerar-pdfs/regenerar-documento-con-url",
          label: "Regenerar Documento Con URL",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Plantillas",
      items: [
        {
          type: "doc",
          id: "devs/api/13-regenerar-pdfs/listar-plantillas-pdf",
          label: "Listar Plantillas PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/13-regenerar-pdfs/actualizar-plantilla-de-compania",
          label: "Actualizar Plantilla de Compañía",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
