import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "devs/api/12-planes/gestion-de-planes",
    },
    {
      type: "category",
      label: "Planes",
      items: [
        {
          type: "doc",
          id: "devs/api/12-planes/crear-o-modificar-plan",
          label: "Crear o Modificar Plan",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "devs/api/12-planes/consultar-todos-los-planes",
          label: "Consultar Todos los Planes",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/12-planes/consultar-plan-por-id",
          label: "Consultar Plan por ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/12-planes/informacion-del-plan-del-usuario",
          label: "Información del Plan del Usuario",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "devs/api/12-planes/consultar-usuarios-por-plan",
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
          id: "devs/api/12-planes/asignar-modificar-renovar-plan-a-compania",
          label: "Asignar/Modificar/Renovar Plan a Compañía",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
