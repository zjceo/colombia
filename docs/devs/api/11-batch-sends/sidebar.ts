import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/11-batch-sends/batch-sends",
    },
    {
      type: "category",
      label: "Batch Sends",
      items: [
        {
          type: "doc",
          id: "devs/api/11-batch-sends/agregar-factura-al-lote",
          label: "Agregar Factura al Lote",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/11-batch-sends/agregar-nota-credito-al-lote",
          label: "Agregar Nota Crédito al Lote",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/11-batch-sends/agregar-nota-debito-al-lote",
          label: "Agregar Nota Débito al Lote",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/11-batch-sends/agregar-factura-de-contingencia-al-lote",
          label: "Agregar Factura de Contingencia al Lote",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/11-batch-sends/agregar-factura-aiu-al-lote",
          label: "Agregar Factura AIU al Lote",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/11-batch-sends/agregar-factura-mandato-al-lote",
          label: "Agregar Factura Mandato al Lote",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/11-batch-sends/agregar-factura-de-exportacion-al-lote",
          label: "Agregar Factura de Exportación al Lote",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/11-batch-sends/enviar-lote",
          label: "Enviar Lote",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
