import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/17-extractor-v2/17-extractor-v-2",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "devs/api/17-extractor-v2/modo-1-extraccion-con-url-de-acceso",
          label: "MODO 1 | Extracción con URL de acceso",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/17-extractor-v2/modo-2-extraccion-con-certificado",
          label: "MODO 2 | Extracción con certificado",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
