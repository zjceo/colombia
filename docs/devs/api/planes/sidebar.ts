import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/planes/gestion-de-planes",
    },
    {
      type: "category",
      label: "Planes",
      items: [
        {
          type: "doc",
          id: "devs/api/planes/crear-o-modificar-plan",
          label: "Crear o Modificar Plan",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "devs/api/planes/consultar-todos-los-planes",
          label: "Consultar Todos los Planes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/planes/consultar-plan-por-id",
          label: "Consultar Plan por ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/planes/informacion-del-plan-del-usuario",
          label: "Información del Plan del Usuario",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/planes/consultar-usuarios-por-plan",
          label: "Consultar Usuarios por Plan",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Configuración Compañía",
      items: [
        {
          type: "doc",
          id: "devs/api/planes/asignar-modificar-renovar-plan-a-compania",
          label: "Asignar/Modificar/Renovar Plan a Compañía",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
