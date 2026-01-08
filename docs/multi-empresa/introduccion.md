---
title: Sistema de Facturación Electrónica Colombia
description: "Sistema de Facturación Electrónica para Colombia: Solución completa multiempresa que cumple con los requisitos de la DIAN."
sidebar_position: 0
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Sistema de Facturación Electrónica Colombia 🇨🇴

<head>
  <title>Sistema de Facturación Electrónica Colombia - DIAN</title>
  <meta
    name="description"
    content="Sistema de Facturación Electrónica para Colombia: Solución completa multiempresa que cumple con los requisitos de la DIAN."
  />
</head>

## Introducción

El Sistema de Facturación Electrónica para Colombia es una plataforma completa diseñada específicamente para cumplir con los requerimientos fiscales de la DIAN. Nuestra solución multiempresa permite administrar múltiples compañías, gestionar planes de suscripción y configurar cada empresa de manera independiente desde un panel centralizado.

Comienza ahora explorando las secciones principales del sistema o siguiendo nuestra guía de configuración inicial.

<DocsCards>
  <DocsCard 
    header="Panel Administrador"
    href="panel-administrador"
    icon="/img/icons/dashboard-icon.svg"
  >
    <p>Gestiona múltiples compañías desde un único panel centralizado. Crea empresas, visualiza el estado de todas tus cuentas y accede directamente a cada sistema.</p>
  </DocsCard>

<DocsCard
header="Gestión de Planes"
href="gestion-planes"
icon="/img/icons/plans-icon.svg"

>

    <p>Crea y administra planes de suscripción personalizados con límites de usuarios y documentos. Configura planes mensuales o anuales según las necesidades de tus clientes.</p>

  </DocsCard>

<DocsCard
header="Configuración de Empresa"
href="configuracion-empresa"
icon="/img/icons/company-icon.svg"

>

    <p>Guía completa para crear y configurar empresas usando los datos del RUT. Aprende a configurar todos los parámetros fiscales y de acceso.</p>

  </DocsCard>

<DocsCard
header="Control y Seguridad"
href="control-seguridad"
icon="/img/icons/security-icon.svg"

>

    <p>Monitorea actividades, consulta registros de auditoría y gestiona el acceso de tus clientes. Bloquea cuentas y mantén el control total del sistema.</p>

  </DocsCard>
</DocsCards>

## Descripción General

Este sistema se enfoca en proporcionar una solución integral de facturación electrónica multiempresa, permitiendo a los administradores gestionar múltiples clientes desde un único panel de control. La plataforma está diseñada para ser flexible, segura y 100% adaptable a las necesidades de cada negocio.

## Funcionalidades Principales

### Panel Administrador Multiempresa

- **Dashboard:** Visualiza y gestiona el listado completo de todas las compañías registradas en el sistema.
- **Creación de Empresas:** Configura nuevas empresas con un solo proceso, ingresando todos los datos fiscales y de configuración necesarios.
- **Gestión de Planes:** Crea y administra diferentes planes de suscripción con límites personalizables.
- **Control de Acceso:** Ingresa directamente al sistema de cualquier cliente con un solo clic.
- **Configuración Global:** Administra el soporte para clientes y consulta registros de actividad.

### Módulo de Planes

Crea planes de suscripción personalizados con las siguientes opciones:

- **Nombre del Plan:** Identifica cada plan de forma única.
- **Precio:** Define el costo del plan (en pesos colombianos).
- **Límite de Usuarios:** Configura si el plan permite usuarios limitados o ilimitados.
- **Límite de Documentos:** Establece cuántos documentos pueden emitirse por periodo.
- **Periodo de Facturación:** Selecciona entre planes mensuales o anuales.
- **Autorenovación:** Opción para renovar automáticamente las suscripciones.

### Módulo de Configuración

- **Soporte al Cliente:** Configura los canales y opciones de soporte que recibirán tus clientes.
- **Módulo Locks (Registros):** Consulta el detalle de alertas, notificaciones y actividades registradas en el sistema para mayor control y seguridad.

## Proceso de Creación de Empresa

### Requisitos Previos

Antes de crear una nueva compañía, es importante tener a la mano el **archivo RUT** de la empresa, ya que contiene toda la información fiscal necesaria.

### Datos Requeridos

#### Información Fiscal (extraída del RUT)

- **Número de Identificación (NIT)**
- **DV (Dígito de Verificación)**
- **Razón Social:** Nombre legal de la empresa
- **Tipo de Responsabilidad:** Por ejemplo, Agente de Retención IVA
- **Actividad Económica**
- **Tipo de Organización**
- **Régimen Tributario**
- **Registro Mercantil**

#### Ubicación

- **Departamento**
- **Municipio**
- **Dirección**
- **Teléfono** (opcional)

#### Configuración del Sistema

- **Subdominio:** Define el subdominio personalizado para acceder al sistema (opcional)
- **Correo de Acceso:** Email del administrador de la empresa
- **Contraseña:** Contraseña segura para el acceso al sistema
- **Plan Seleccionado:** Elige uno de los planes creados previamente
- **Tasa ICA**
- **Tipo de Documento**
- **Módulos Activos:** Selecciona qué módulos tendrá disponibles el cliente

### Pasos para Crear una Empresa

1. Accede al módulo **Dashboard**
2. Haz clic en **Nueva Compañía**
3. Completa todos los campos con la información del archivo RUT
4. Configura los datos de usuario (correo y contraseña de administrador)
5. Selecciona el plan de suscripción
6. Define los módulos disponibles para el cliente
7. Haz clic en **Crear Empresa**

Una vez creada, la empresa aparecerá en el listado de compañías del Dashboard.

## Gestión de Empresas

### Acceso al Sistema del Cliente

Con un solo clic desde el listado de compañías, puedes ingresar directamente al sistema de facturación del cliente utilizando las credenciales configuradas.

### Administración de Planes

- **Límite de Documentos:** Controla cuántos documentos puede emitir la empresa según el plan.
- **Límite de Usuarios:** Restringe el número de usuarios que pueden acceder al sistema.
- **Autorenovación:** Activa esta opción para que el plan se renueve automáticamente.

### Control de Acceso

- **Bloqueo de Cuenta:** Bloquea el acceso de un cliente por falta de pago u otros motivos. Una vez bloqueado, el cliente no podrá ingresar a su sistema.

### Acciones Adicionales

Desde el menú de acciones de cada compañía, puedes:

- **Editar Compañía:** Modifica los datos de la empresa.
- **Cambiar Contraseña:** Actualiza las credenciales de acceso del administrador.
- **Eliminar Cliente:** Elimina permanentemente la empresa del sistema.

## Características del Sistema

### Multiempresa

- Gestiona múltiples compañías desde un único panel administrador
- Configuración independiente para cada empresa
- Acceso directo a cualquier sistema de cliente

### Planes Flexibles

- Crea planes personalizados según las necesidades de tus clientes
- Límites configurables de usuarios y documentos
- Opciones de facturación mensual o anual

### Seguridad y Control

- Sistema de registros (Locks) para auditoría
- Control de acceso por empresa
- Bloqueo de cuentas por falta de cumplimiento

### Cumplimiento DIAN

- Configuración completa de datos fiscales según el RUT
- Soporte para diferentes tipos de responsabilidad tributaria
- Gestión de actividades económicas y régimen tributario

## Beneficios

- **Rápido:** Crea y configura empresas en minutos
- **Seguro:** Control total sobre accesos y actividades
- **100% Adaptable:** Planes personalizables según necesidades
- **Centralizado:** Administra todas tus empresas desde un solo lugar
- **Escalable:** Crece sin límites con tu cartera de clientes

## Empieza a Facturar Hoy Mismo

Con nuestro Sistema de Facturación Electrónica para Colombia, podrás configurar empresas, administrar planes y supervisar todo desde un solo lugar. La solución perfecta para proveedores de servicios de facturación electrónica que gestionan múltiples clientes.

---

**Nota:** Este sistema está diseñado específicamente para cumplir con la normativa colombiana de facturación electrónica establecida por la DIAN.
