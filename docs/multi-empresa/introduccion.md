---
title: "Panel Administrador Multiempresa"
description: "Guía completa para configurar y administrar empresas en el sistema de facturación electrónica para Colombia"
icon: "building"
---

## Introducción

Bienvenido al sistema de facturación electrónica para Colombia. En esta guía aprenderás cómo crear tu empresa, configurarla y explorar los módulos principales del panel administrador.

## Dashboard

El módulo Dashboard es el centro de control donde puedes:

- Crear nuevas empresas
- Ver el listado de todas tus compañías
- Acceder rápidamente a cada empresa con un solo clic

<Card title="Vista General" icon="gauge">
  Desde el Dashboard tendrás una vista consolidada de todas las empresas
  administradas en el sistema.
</Card>

## Módulo de Planes

Permite crear y gestionar diferentes planes de suscripción para tus clientes.

### Crear un Nuevo Plan

<Steps>
  <Step title="Acceder al módulo">
    Navega al módulo **Planes** desde el menú principal
  </Step>
  <Step title="Crear plan">Haz clic en el botón **Nuevo**</Step>
  <Step title="Configurar detalles">
    - **Nombre**: Identifica tu plan - **Precio**: Ejemplo: $18,000 COP -
    **Límite de usuarios**: Ilimitado o número específico - **Límite de
    documentos**: Ilimitado o cantidad definida - **Periodo**: Mensual o Anual
  </Step>
  <Step title="Guardar">Haz clic en **Guardar** para crear el plan</Step>
</Steps>

<Info>
  Los planes te permiten monetizar tu servicio y controlar el acceso de cada
  cliente según el nivel contratado.
</Info>

## Configuración del Sistema

### Soporte al Cliente

Configura los canales de soporte que recibirán tus clientes para garantizar una atención eficiente.

### Módulo de Logs

El módulo **Locks** (Logs) te permite consultar:

- Detalle de alertas del sistema
- Notificaciones enviadas
- Actividades registradas por usuario

<Warning>
  Esta herramienta es esencial para mantener mayor control y seguridad del
  sistema.
</Warning>

## Crear una Nueva Compañía

### Requisitos Previos

<Tip>
  Antes de comenzar, asegúrate de tener a la mano tu **archivo RUT** (Registro
  Único Tributario). Toda la información requerida se encuentra en este
  documento.
</Tip>

### Datos de la Empresa

<AccordionGroup>
  <Accordion title="Información Tributaria">
    - **Número de Identificación (NIT)**: Localizable en el RUT
    - **DV (Dígito de Verificación)**: Se encuentra junto al NIT en el RUT
    - **Razón Social**: Nombre legal de la empresa según el RUT
    - **Tipo de Responsabilidad**: Ejemplo: Agente de retención IVA
  </Accordion>

{" "}
<Accordion title="Configuración de Acceso">

- **Subdominio** (opcional): Define la URL de acceso al sistema - **Correo de
  Acceso**: Email del administrador principal - **Contraseña**: Debe ser segura
- **Confirmar Contraseña**: Verifica la contraseña creada
  </Accordion>

{" "}
<Accordion title="Información Comercial">

- **Plan**: Selecciona uno de los planes creados previamente - **Actividad
  Económica**: Consulta el RUT - **Tasa IVA**: Según actividad económica -
  **Tipo de Documento**: Definido en el RUT
  </Accordion>

{" "}
<Accordion title="Ubicación y Registro">

- **Departamento**: Selecciona de la lista - **Municipio**: Según el
  departamento - **Tipo de Organización**: Información disponible en el RUT -
  **Régimen Tributario**: Común o Simplificado - **Registro Mercantil**:
  Localizable en el RUT - **Dirección**: Dirección fiscal de la empresa -
  **Teléfono** (opcional): Número de contacto
  </Accordion>

  <Accordion title="Módulos de Acceso">
    Selecciona los módulos a los que tendrá acceso este cliente:
    - Facturación
    - Inventario
    - Reportes
    - Configuración
    - Otros según disponibilidad
  </Accordion>
</AccordionGroup>

### Finalizar Creación

Una vez completados todos los campos, haz clic en **Crear Empresa**. La nueva compañía aparecerá en tu listado de empresas.

## Gestión de Empresas Creadas

### Acceso al Sistema del Cliente

Puedes ingresar directamente al sistema de cualquier empresa con un solo clic desde el Dashboard. Se te solicitará:

- Correo electrónico configurado
- Contraseña asignada

### Administración de Planes

<CardGroup cols={2}>
  <Card title="Limitar Recursos" icon="circle-exclamation">
    Controla documentos y usuarios según el plan seleccionado
  </Card>
  <Card title="Autorenovación" icon="rotate">
    Activa la renovación automática del plan
  </Card>
</CardGroup>

### Bloqueo de Cuentas

<Warning>
  Si necesitas bloquear una cuenta por falta de pago u otros motivos, puedes
  hacerlo desde las opciones de administración. El cliente no podrá ingresar a
  su sistema hasta que se desbloquee.
</Warning>

## Acciones Adicionales

Desde el menú de opciones de cada empresa puedes:

<Steps>
  <Step title="Editar Compañía">
    Modifica la información de la empresa en cualquier momento
  </Step>
  <Step title="Cambiar Contraseña">
    - Ingresa nueva contraseña - Confirma la nueva contraseña
  </Step>
  <Step title="Eliminar Cliente">
    Elimina permanentemente una empresa del sistema
  </Step>
</Steps>

## Beneficios del Sistema

<CardGroup cols={3}>
  <Card title="Rápido" icon="bolt">
    Configura empresas en minutos
  </Card>
  <Card title="Seguro" icon="shield-check">
    Control total con logs y permisos
  </Card>
  <Card title="Adaptable" icon="sliders">
    100% personalizable a tus necesidades
  </Card>
</CardGroup>

---

<Note>
  Con nuestro sistema de facturación electrónica, podrás configurar tu empresa,
  administrar planes y supervisar todo desde un solo lugar. **Empieza a facturar
  hoy mismo.**
</Note>
