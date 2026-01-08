import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/servicios-app/facturalatam-apidianv-2-1-servicios-app",
    },
    {
      type: "category",
      label: "Auth",
      items: [
        {
          type: "doc",
          id: "devs/api/servicios-app/iniciar-sesion-app",
          label: "Iniciar Sesión (APP)",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Documentos",
      items: [
        {
          type: "doc",
          id: "devs/api/servicios-app/listar-documentos",
          label: "Listar Documentos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/servicios-app/descargar-pdf",
          label: "Descargar PDF",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Clientes",
      items: [
        {
          type: "doc",
          id: "devs/api/servicios-app/listar-clientes",
          label: "Listar Clientes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/servicios-app/actualizar-cliente",
          label: "Actualizar Cliente",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Productos",
      items: [
        {
          type: "doc",
          id: "devs/api/servicios-app/listar-productos",
          label: "Listar Productos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/servicios-app/registrar-producto",
          label: "Registrar Producto",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "devs/api/servicios-app/actualizar-producto",
          label: "Actualizar Producto",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Configuración",
      items: [
        {
          type: "doc",
          id: "devs/api/servicios-app/listar-resoluciones-general",
          label: "Listar Resoluciones (General)",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/servicios-app/listar-resoluciones-por-nit",
          label: "Listar Resoluciones por NIT",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/servicios-app/listar-resoluciones-por-nit-y-tipo",
          label: "Listar Resoluciones por NIT y Tipo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/servicios-app/listar-metodos-de-pago",
          label: "Listar Métodos de Pago",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/servicios-app/listar-formas-de-pago",
          label: "Listar Formas de Pago",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
