import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/05-consumidor-final/consumidor-final",
    },
    {
      type: "category",
      label: "Consumidor Final",
      items: [
        {
          type: "doc",
          id: "devs/api/05-consumidor-final/send-invoice-test-set-id-consumidor-final",
          label: "SendInvoice-TestSetId Consumidor Final",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
