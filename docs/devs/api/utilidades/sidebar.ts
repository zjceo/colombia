import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/utilidades/utilidades",
    },
    {
      type: "category",
      label: "Utilidades",
      items: [
        {
          type: "doc",
          id: "devs/api/utilidades/documents-listing",
          label: "Documents Listing",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/total-documents",
          label: "Total Documents",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/informacion-de-facturas",
          label: "Información de Facturas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/lista-documentos",
          label: "Lista Documentos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/register-update-customer",
          label: "Register-Update Customer",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/search-customer-by-document",
          label: "Search Customer By document",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/certificate-end-date",
          label: "Certificate End Date",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/next-consecutive",
          label: "Next Consecutive",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/get-xml-by-uuid",
          label: "GetXMLByUUID",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/consultar-parametros-de-email",
          label: "Consultar Parametros de Email",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/search-name-by-nit",
          label: "SearchNameByNIT",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/search-company-by-nit",
          label: "SearchCompanyByNIT",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/join-pd-fs",
          label: "JoinPDFs",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/download-file",
          label: "Download File",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/download-file-attached-document",
          label: "Download File Attached Document",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/download-pdf",
          label: "Download PDF",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/download-received-file",
          label: "Download Received File",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/current-number",
          label: "Current Number",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/eliminar-company",
          label: "Eliminar Company",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/send-email-customer",
          label: "SendEmailCustomer",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/send-email",
          label: "SendEmail",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/send-email-employee",
          label: "SendEmailEmployee",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/config-logo",
          label: "Config-Logo",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/consultar-listado-de-certificados",
          label: "Consultar Listado de Certificados",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/utilidades/ajustar-consecutivo",
          label: "Ajustar Consecutivo",
          className: "api-method put",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
