---
title: Panel del Cliente - Sistema de Facturación Colombia
description: "Guía completa del sistema de facturación electrónica para empresas colombianas. Aprende a gestionar ventas, inventario, reportes y más."
sidebar_position: 1
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

# Panel del Cliente - Sistema de Facturación Colombia 🇨🇴

<head>
  <title>Panel del Cliente - Sistema de Facturación Colombia</title>
  <meta
    name="description"
    content="Guía completa del sistema de facturación electrónica para empresas colombianas cumpliendo con DIAN."
  />
</head>

## Introducción

Bienvenido al sistema de facturación electrónica para Colombia. Este panel te permite gestionar todas las operaciones de tu empresa: desde la emisión de comprobantes electrónicos hasta el control completo de inventario, contabilidad y finanzas. Todo cumpliendo con los requisitos de la DIAN.

Explora las funcionalidades principales del sistema y comienza a optimizar la gestión de tu negocio.

<DocsCards>
  <DocsCard 
    header="Dashboard y Ventas"
    href="dashboard-ventas"
    icon="/img/icons/sales-icon.svg"
  >
    <p>Visualiza el resumen de tus ventas, genera facturas electrónicas, boletas y notas. Gestiona comprobantes con integración directa a DIAN.</p>
  </DocsCard>

<DocsCard
header="Punto de Venta (POS)"
href="punto-venta"
icon="/img/icons/pos-icon.svg"

>

    <p>Sistema optimizado para ventas rápidas con interface visual de productos. Impresión automática de tickets y gestión de caja.</p>

  </DocsCard>

<DocsCard
header="Inventario y Productos"
href="inventario"
icon="/img/icons/inventory-icon.svg"

>

    <p>Controla el stock de tus productos en tiempo real. Gestiona almacenes, movimientos, traslados y genera reportes detallados.</p>

  </DocsCard>

<DocsCard
header="Reportes y Contabilidad"
href="reportes-contabilidad"
icon="/img/icons/reports-icon.svg"

>

    <p>Accede a reportes financieros exportables en PDF y Excel. Gestiona cuentas contables y asientos según tu régimen.</p>

  </DocsCard>

<DocsCard
header="Tienda Virtual"
href="tienda-virtual"
icon="/img/icons/store-icon.svg"

>

    <p>Tienda online básica donde tus clientes pueden ver productos y hacer pedidos. Configura banners y categorías fácilmente.</p>

  </DocsCard>

<DocsCard
header="Finanzas y Nómina"
href="finanzas-nomina"
icon="/img/icons/finance-icon.svg"

>

    <p>Gestiona pagos, ingresos, gastos y cuentas por cobrar/pagar. Procesa nóminas de empleados de forma integrada.</p>

  </DocsCard>
</DocsCards>

## Dashboard

El Dashboard es tu centro de control principal donde puedes visualizar:

- **Resumen gráfico de ventas:** Gráficos y estadísticas de tus ventas del mes
- **Datos importantes del mes:** KPIs y métricas clave de tu negocio
- **Vista general del negocio:** Estado actual de la empresa en tiempo real

## Módulo de Ventas

### Comprobantes Electrónicos

El sistema permite generar diferentes tipos de comprobantes según tu régimen tributario:

- **Factura Electrónica Simple**
- **Factura de Salud**
- **Factura AIU** (Administración, Imprevistos y Utilidad)
- **Notas Contables sin Referencias**
- **Notas de Crédito**
- **Notas de Débito**

### Proceso de Facturación

#### Crear una Factura Electrónica

1. **Seleccionar Cliente:**

   - Busca en tu base de datos de clientes existentes
   - Si es un cliente nuevo, el sistema cuenta con un **buscador automático conectado con DIAN**
   - Registra los datos del cliente directamente desde el formulario

2. **Agregar Productos:**

   - Selecciona los productos desde tu catálogo
   - Ajusta cantidades y precios según sea necesario
   - El sistema calcula automáticamente impuestos

3. **Generar Comprobante:**

   - Haz clic en **Generar**
   - El comprobante es enviado automáticamente a DIAN
   - Recibe confirmación de la emisión

4. **Opciones Post-Generación:**
   - Descargar en formato **PDF**
   - Descargar en formato **HTML**
   - Enviar por **correo electrónico** al cliente
   - Imprimir directamente

### Lista de Comprobantes

Accede a todos los comprobantes generados con las siguientes funcionalidades:

#### Acciones Disponibles

- **Agregar Pagos:** Registra los pagos relacionados al comprobante
- **Descargar:** Obtén el comprobante en PDF o HTML
- **Reenviar:** Vuelve a enviar el comprobante por correo
- **Duplicar:** Crea una copia del comprobante
- **Generar Nota de Crédito:** Crea una nota de crédito referenciada al comprobante

### Comprobantes Internos

#### Cotizaciones (Presupuestos)

- Sistema de presupuestos interno
- Mismo formato que las facturas pero sin envío a DIAN
- Útil para generar propuestas comerciales
- Se pueden convertir en facturas posteriormente

### Funcionalidades Adicionales de Ventas

#### Comisiones

- Gestiona colaboradores que reciben comisiones por ventas
- Configura porcentajes y reglas de comisión
- Genera reportes de comisiones pagadas

#### Cupones

- Crea cupones de descuento para tus clientes
- Define porcentajes o montos fijos
- Establece fechas de validez y límites de uso

## Punto de Venta (POS)

Sistema optimizado para empresas de venta rápida que requieren un proceso ágil de facturación.

### Características del POS

#### Interface Visual

- **Vista por Categorías:** Organiza tus productos en categorías visuales
- **Imágenes de Productos:** Cada producto muestra su imagen previamente configurada
- **Selección Rápida:** Toca el producto para agregarlo al carrito

#### Proceso de Venta

1. Selecciona la categoría de producto
2. Toca los productos que el cliente desea comprar
3. El sistema calcula el total automáticamente
4. Ingresa el monto con el que el cliente paga
5. El sistema calcula el cambio automáticamente
6. Confirma el pago

#### Impresión de Tickets

- **Generación automática** del ticket de venta
- Impresión directa en impresora térmica
- Formato optimizado para tickets pequeños
- Opción de reimpresión

### Módulos Relacionados con POS

- **Caja:** Control de apertura y cierre de caja
- **Conjuntos:** Agrupación de productos para venta rápida
- **Configuración POS:** Personaliza tu punto de venta

## Gestión de Clientes y Productos

### Módulo de Clientes

Base de datos centralizada de todos tus clientes:

- **Información Completa:** Datos fiscales y de contacto
- **Historial de Compras:** Todas las transacciones del cliente
- **Cuentas por Cobrar:** Saldo pendiente de cada cliente
- **Búsqueda Rápida:** Encuentra clientes por nombre, NIT o correo

### Módulo de Productos

Gestiona tu catálogo completo de productos:

- **Lista de Productos:** Visualiza todos tus productos
- **Control de Inventario:** Verifica stock disponible desde aquí
- **Precios y Costos:** Gestiona múltiples precios por producto
- **Categorización:** Organiza productos por categorías
- **Códigos de Barras:** Asigna y gestiona códigos de barras

## Tienda Virtual

### Características de la Tienda

- **Tienda Online Básica:** Muestra todos tus productos en una interfaz web
- **Pedidos de Clientes:** Tus clientes pueden hacer pedidos directamente
- **Gestión de Contenido:** Configura banners y categorías
- **Personalización:** Ajusta colores y diseño básico

### Configuración

- **Banners Promocionales:** Destaca ofertas y productos especiales
- **Categorías:** Organiza la visualización de productos
- **Políticas:** Configura términos y condiciones, políticas de envío

## Módulo de Compras

### Registro de Facturas de Proveedores

- **Facturas de Compra:** Registra las facturas que recibes de proveedores
- **Gastos Diversos:** Documenta gastos operativos
- **Control de Cuentas por Pagar:** Gestiona deudas con proveedores
- **Reportes de Compras:** Analiza tus gastos

## Gestión de Inventario

Sistema completo para controlar el stock de tu empresa.

### Funcionalidades Principales

#### Almacenes

- **Múltiples Almacenes:** Gestiona varios puntos de almacenamiento
- **Stock por Almacén:** Control independiente de inventario
- **Transferencias:** Traslada productos entre almacenes

#### Movimientos de Inventario

- **Entradas:** Registra ingresos de mercancía
- **Salidas:** Documenta ventas y consumos
- **Ajustes:** Corrige diferencias de inventario
- **Historial Completo:** Rastrea cada movimiento

#### Traslados

- **Traslados entre Almacenes:** Mueve inventario eficientemente
- **Seguimiento de Traslados:** Controla el estado de cada traslado
- **Documentación:** Genera comprobantes de traslado

#### Reportes de Inventario

- **Reporte de Kardex:** Movimientos detallados por producto
- **Inventario Valorizado:** Stock actual con valor monetario
- **Productos con Stock Bajo:** Alertas de reabastecimiento
- **Inventario por Almacén:** Stock separado por ubicación

## Módulo de Reportes

Sistema completo de reportes exportables para análisis de negocio.

### Categorías de Reportes

#### Reportes de Ventas

- **Ventas por Periodo:** Diario, semanal, mensual, anual
- **Ventas por Cliente:** Ranking de mejores clientes
- **Ventas por Producto:** Productos más vendidos
- **Ventas por Usuario:** Desempeño de vendedores
- **Utilidades:** Análisis de rentabilidad

#### Reportes de Compras

- **Compras por Periodo:** Análisis temporal de compras
- **Compras por Proveedor:** Concentración de proveedores
- **Compras por Producto:** Productos más comprados

#### Subfiltros Disponibles

Todos los reportes incluyen opciones de filtrado:

- **Rango de Fechas:** Selecciona periodo específico
- **Cliente/Proveedor:** Filtra por entidad específica
- **Producto:** Analiza productos individuales
- **Usuario:** Reportes por vendedor
- **Tipo de Documento:** Filtra por tipo de comprobante

#### Exportación

- **Formato PDF:** Para impresión y archivo
- **Formato Excel:** Para análisis adicional

## Módulo de Contabilidad

Sistema contable completo adaptable a tu régimen tributario.

### Submódulos Principales

#### 1. Cuentas Contables

- **Plan de Cuentas:** Catálogo completo de cuentas
- **Personalización:** Adapta el plan según tu negocio
- **Clasificación:** Organiza por tipo de cuenta

#### 2. Asientos Contables

- **Registro de Asientos:** Documenta operaciones contables
- **Asientos Automáticos:** Generados desde facturas y compras
- **Asientos Manuales:** Registra operaciones especiales
- **Libro Diario:** Visualiza todos los movimientos

#### 3. Reportes de Situación

- **Balance de Situación:** Estado financiero de la empresa
- **Análisis Horizontal y Vertical:** Compara periodos

#### 4. Reportes de Estado de Finanzas

- **Estado de Resultados:** Utilidad o pérdida del periodo
- **Flujo de Efectivo:** Movimientos de caja

#### 5. Reportes de Movimientos

- **Mayor General:** Movimientos por cuenta
- **Balance de Comprobación:** Saldos de todas las cuentas

### Configuración Contable

- **Adaptable a tu Régimen:** Configura según normativa aplicable
- **Periodos Contables:** Define ejercicios fiscales
- **Cierre de Periodo:** Procesos de cierre mensual y anual

## Módulo de Finanzas

Control completo del flujo de efectivo y cuentas por cobrar/pagar.

### Funcionalidades Principales

#### Resumen Financiero

- **Balance de Caja:** Estado actual de efectivo
- **Cuentas Bancarias:** Saldo de todas las cuentas
- **Flujo Proyectado:** Proyección de ingresos y egresos

#### Pagos e Ingresos

- **Registro de Pagos:** Documenta pagos realizados
- **Registro de Ingresos:** Documenta cobros recibidos
- **Métodos de Pago:** Efectivo, transferencia, tarjeta, etc.
- **Conciliación Bancaria:** Concilia movimientos con extractos

#### Gastos

- **Gastos Operativos:** Documenta gastos del negocio
- **Categorización:** Organiza gastos por tipo
- **Centros de Costo:** Asigna gastos a departamentos

#### Cuentas por Cobrar

- **Listado de Facturas Pendientes:** Todas las ventas por cobrar
- **Estado de Cuenta por Cliente:** Detalle de deuda
- **Cobranza:** Gestión de recordatorios y seguimiento
- **Anticipos:** Registra pagos parciales

#### Cuentas por Pagar

- **Facturas de Proveedores Pendientes:** Compras por pagar
- **Programación de Pagos:** Calendario de vencimientos
- **Estado de Cuenta por Proveedor:** Detalle de deuda
- **Anticipos a Proveedores:** Registra pagos adelantados

## Módulo de Nómina

Sistema orientado para empresas que gestionan empleados.

### Funcionalidades

#### Gestión de Empleados

- **Lista de Empleados:** Base de datos completa
- **Información Laboral:** Cargo, salario, beneficios
- **Datos de Contacto:** Información personal
- **Documentos:** Almacena contratos y documentos

#### Procesamiento de Nómina

- **Nueva Nómina:** Crea periodo de pago
- **Cálculos Automáticos:** Salarios, prestaciones, deducciones
- **Nómina Electrónica:** Cumple con requisitos de DIAN
- **Recibos de Pago:** Genera comprobantes para empleados

#### Listado de Nóminas

- **Histórico Completo:** Todas las nóminas procesadas
- **Reportes de Nómina:** Análisis de costos laborales
- **Exportación:** PDF y Excel para contabilidad

## Eventos Radiant (RADIAN)

Sistema de gestión de documentos electrónicos y eventos de DIAN.

### Funcionalidades

#### Procesamiento de Correos

- **Recepción Automática:** Documentos recibidos por correo
- **Procesamiento:** Extrae información de documentos

#### Recepción de Documentos

- **Facturas de Proveedores:** Recibe facturas electrónicas
- **Validación:** Verifica autenticidad con DIAN
- **Almacenamiento:** Guarda documentos recibidos

#### Gestión de Eventos

- **Acuse de Recibo:** Confirma recepción de documentos
- **Aceptación/Rechazo:** Gestiona respuestas a facturas
- **Reclamo:** Documenta inconsistencias
- **Seguimiento:** Estado de todos los eventos

## Configuración del Sistema

Panel completo de configuración para personalizar el sistema según tus necesidades.

### Configuraciones Principales

#### Ambiente de Trabajo

- **Modo Pruebas:** Para realizar pruebas con DIAN antes de producción
- **Modo Producción:** Para facturación real
- **Cambio de Ambiente:** Alterna fácilmente entre modos

#### Resoluciones de Facturación

- **Gestión de Resoluciones:** Administra autorizaciones de DIAN
- **Tipos de Documentos:** Configura cada tipo de comprobante
- **Numeración:** Control de rangos autorizados
- **Vencimiento:** Alertas de resoluciones próximas a vencer

#### Documentos Habilitados

- **Listado de Comprobantes:** Visualiza documentos activos
- **Activar/Desactivar:** Controla qué documentos puedes emitir
- **Configuración por Documento:** Parámetros específicos

#### Impuestos

- **Tipos de Impuestos:** IVA, ICA, consumo, etc.
- **Tarifas:** Define porcentajes aplicables
- **Configuración por Producto:** Asigna impuestos a productos

#### Datos de la Empresa

- **Información Fiscal:** NIT, razón social, régimen
- **Datos de Contacto:** Dirección, teléfono, correo
- **Logo:** Imagen corporativa para documentos
- **Firmas Digitales:** Certificados para facturación electrónica

#### Configuración DIAN

- **Credenciales:** Datos de conexión con DIAN
- **Certificados Digitales:** Gestión de certificados
- **Pruebas de Conexión:** Verifica conectividad

#### Gestión de Usuarios

- **Crear Usuarios:** Agrega miembros del equipo
- **Roles y Permisos:** Define qué puede hacer cada usuario
- **Acceso por Módulo:** Restringe acceso a secciones específicas
- **Historial de Actividad:** Rastrea acciones de usuarios

#### Establecimientos

- **Múltiples Sucursales:** Gestiona varios puntos de venta
- **Configuración por Establecimiento:** Parámetros independientes
- **Numeración Separada:** Rangos de facturación por sucursal

#### Catálogos

##### Cuentas Bancarias

- **Registra tus Bancos:** Información de cuentas bancarias
- **Tipos de Cuenta:** Ahorro, corriente, etc.
- **Saldos:** Control de disponible en cada cuenta

##### Métodos de Pago

- **Configura Métodos:** Efectivo, transferencia, tarjeta, etc.
- **Métodos por Defecto:** Establece preferencias

##### Tipos de Gasto

- **Categorías:** Clasifica tus gastos
- **Centros de Costo:** Asigna a departamentos

#### Configuraciones Avanzadas

Opciones adicionales para usuarios experimentados:

- **API y Webhooks:** Integraciones con otros sistemas
- **Personalización de Plantillas:** Modifica diseño de documentos
- **Backup Automático:** Configuración de respaldos
- **Notificaciones:** Alertas por correo y sistema

## Soporte Técnico

### Canales de Soporte

Para cualquier consulta o duda sobre el sistema:

- **Chat en Línea:** Soporte en tiempo real
- **Correo Electrónico:** Envía tus consultas detalladas
- **Base de Conocimiento:** Artículos y tutoriales
- **Centro de Ayuda:** Documentación completa

### Recursos Adicionales

- **Tutoriales en Video:** Aprende visualmente
- **Guías Paso a Paso:** Manuales detallados
- **Preguntas Frecuentes:** Soluciones rápidas
- **Actualizaciones:** Novedades del sistema

---

## Cumplimiento Normativo

Este sistema cumple con todos los requisitos establecidos por la DIAN para facturación electrónica en Colombia, incluyendo:

- Resolución 000042 de 2020
- Anexo técnico de factura electrónica
- Validaciones previas y posteriores
- Eventos del documento electrónico
- RADIAN (Recepción de Facturas)

---

**¿Necesitas ayuda?** No dudes en contactar a nuestro equipo de soporte. Estamos aquí para ayudarte a aprovechar al máximo tu sistema de facturación electrónica.
