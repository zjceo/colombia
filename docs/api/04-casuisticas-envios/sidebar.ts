import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/04-casuisticas-envios/casuisticas-de-envios",
    },
    {
      type: "category",
      label: "Casuisticas de Envios",
      items: [
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-order-reference",
          label: "SendInvoice-TestSetId Order Reference",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-varias-tarifas-y-descuentos",
          label: "SendInvoice-TestSetId Varias Tarifas y Descuentos",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-delivery",
          label: "SendInvoice-TestSetId Delivery",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-impuesto-licores",
          label: "SendInvoice - TestSetId Impuesto Licores",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-impuesto-bolsa",
          label: "SendInvoice - TestSetId Impuesto Bolsa",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-credit-note-test-set-id-varias-lineas",
          label: "SendCreditNote-TestSetId Varias Lineas",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-allowance-a-credito",
          label: "SendInvoice-TestSetId Allowance A Credito",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-allowance-dos-invoice-lines",
          label: "SendInvoice-TestSetId Allowance Dos Invoice Lines",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-prepaid-payment-test-set-id",
          label: "SendInvoicePrepaidPayment-TestSetId",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-charge",
          label: "SendInvoice-TestSetId Charge",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-charge-encabezado",
          label: "SendInvoice-TestSetId Charge Encabezado",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-articulos-con-dos-impuestos-telefonia-celular",
          label: "SendInvoice-TestSetId Articulos Con Dos Impuestos - Telefonia Celular",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-articulos-con-impuesto-saludable-alimentos-ultraprocesados",
          label: "SendInvoice-TestSetId Articulos Con impuesto Saludable Alimentos Ultraprocesados",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-articulos-con-impuesto-licores",
          label: "SendInvoice-TestSetId Articulos Con impuesto Licores",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-articulos-con-impuesto-saludable-bebidas-azucaradas",
          label: "SendInvoice-TestSetId Articulos Con impuesto Saludable Bebidas Azucaradas",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-articulos-con-impuesto-saludable-bebidas-azucaradas-varias",
          label: "SendInvoice-TestSetId Articulos Con impuesto Saludable Bebidas Azucaradas Varias",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-productos-gratis",
          label: "SendInvoice-TestSetId Productos Gratis",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-dos-tarifas-impuestos-y-retenciones",
          label: "SendInvoice-TestSetId Dos Tarifas Impuestos y Retenciones",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/04-casuisticas-envios/send-invoice-test-set-id-impuesto-inc",
          label: "SendInvoice-TestSetId Impuesto INC",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
