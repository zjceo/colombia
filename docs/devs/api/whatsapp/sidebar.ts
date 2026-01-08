import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/whatsapp/16-whatsapp",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "devs/api/whatsapp/configurar-whats-app",
          label: "Configurar WhatsApp",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "devs/api/whatsapp/consultar-url-whats-app",
          label: "Consultar URL-WhatsApp",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/whatsapp/enviar-mensaje",
          label: "Enviar Mensaje",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
