---
sidebar_position: 2
---

# Linux 

## 📋 Requisitos Previos

### Servidor VPS

-   ✅ **Ubuntu 18.04** con APIDIAN 2023 ya instalado
-   ✅ **Dominio registrado** (GoDaddy, mi.com, etc.)
-   ✅ **Cliente SSH** (PuTTY para Windows)
-   ✅ **Script de instalación** (`installPRO2.sh` del repositorio)

### Recursos Necesarios

-   Acceso root al servidor VPS
-   DNS del dominio apuntando al servidor
-   Script `installPRO2.sh` del repositorio Facturador PRO2

---

## ⚙️ Instalación con Docker

### 1. Preparar el Script de Instalación

Conéctate a tu servidor via SSH y ejecuta:

```bash
vi installPRO2.sh
```

### 2. Copiar Contenido del Script

Dentro del editor `vi`:

1. Presiona `i` para entrar en modo INSERT
2. Copia el contenido del archivo `installPRO2.sh` del repositorio
3. Pega el contenido en el editor
4. Presiona `ESC` para salir del modo INSERT
5. Escribe `:w` y presiona `ENTER` para guardar
6. Escribe `:q` y presiona `ENTER` para salir

### 3. Dar Permisos y Ejecutar

```bash
chmod 700 installPRO2.sh
./installPRO2.sh nombredeldominio.com
```

> 📌 **Nota:** Reemplaza `nombredeldominio.com` con tu dominio real
>
> **Ejemplo:** `./installPRO2.sh facturador.miempresa.com`

---

## 🐳 Configuración del Contenedor Docker

### 1. Verificar Contenedores Activos

```bash
docker ps
```

Este comando mostrará una lista de contenedores corriendo. Busca el contenedor de PHP.

### 2. Acceder al Contenedor

```bash
docker exec -ti nombre-o-numero-del-contenedor bash
```

> 💡 **Tip:** Puedes usar el nombre o el ID del contenedor que aparece en `docker ps`

### 3. Configurar Variables de Entorno

```bash
nano .env
```

Configura los siguientes parámetros importantes:

#### 🏷️ Nombre de la Aplicación

```env
APP_NAME="Mi Facturador PRO2"
```

#### 📧 Parámetros SMTP para Envío de Correos

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=tu_correo@gmail.com
MAIL_PASSWORD=tu_contraseña_app
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=tu_correo@gmail.com
MAIL_FROM_NAME="${APP_NAME}"
```

#### 🔌 Configurar la API a Utilizar

```env
SERVICE_FACT=http://tu-dominio-api.com/public
```

> ⚠️ **Importante:** Asegúrate de que la URL de `SERVICE_FACT` apunte a tu instalación de APIDIAN 2023

**Guardar y salir:**

-   Presiona `CTRL + O` para guardar
-   Presiona `ENTER` para confirmar
-   Presiona `CTRL + X` para salir

---

## 📝 Ejemplo de Configuración Completa del .env

```env
# Aplicación
APP_NAME="Facturador PRO2"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://facturador.miempresa.com

# API APIDIAN
SERVICE_FACT=https://api.miempresa.com/public

# Correo Electrónico
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=facturacion@miempresa.com
MAIL_PASSWORD=contraseña_segura
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=facturacion@miempresa.com
MAIL_FROM_NAME="Facturador PRO2"
```

---

## ✅ Verificación Post-Instalación

### 1. Verificar que los Contenedores Estén Corriendo

```bash
docker ps
```

Deberías ver varios contenedores activos relacionados con el Facturador PRO2.

### 2. Verificar Logs del Contenedor

```bash
docker logs nombre-del-contenedor
```

### 3. Probar Acceso Web

Accede a tu dominio desde el navegador:

```
http://nombredeldominio.com
```

---

## 🔧 Comandos Útiles de Docker

### Ver todos los contenedores (incluso detenidos)

```bash
docker ps -a
```

### Reiniciar un contenedor específico

```bash
docker restart nombre-del-contenedor
```

### Ver logs en tiempo real

```bash
docker logs -f nombre-del-contenedor
```

### Detener todos los contenedores

```bash
docker stop $(docker ps -q)
```

### Iniciar todos los contenedores

```bash
docker start $(docker ps -aq)
```

---

## 🆘 Solución de Problemas

### El dominio no carga

**Verificar:**

1. DNS apunta correctamente al servidor
2. Contenedores están corriendo: `docker ps`
3. Logs del contenedor: `docker logs nombre-contenedor`

### No se conecta a la API

**Verificar:**

1. La URL en `SERVICE_FACT` es correcta
2. APIDIAN 2023 está funcionando
3. Probar acceso directo a la API desde el navegador

### Errores de correo

**Verificar:**

1. Credenciales SMTP correctas
2. Si usas Gmail, activa "Acceso a aplicaciones menos seguras" o usa contraseñas de aplicación
3. Puerto y encryption correctos

### No puedo acceder al contenedor

```bash
# Listar contenedores
docker ps

# Si el contenedor no está corriendo
docker start nombre-del-contenedor

# Acceder con el ID completo
docker exec -ti ID_COMPLETO bash
```

---

## 📞 Soporte

Si encuentras problemas:

-   📋 Revisa los logs de Docker
-   🔍 Verifica la configuración del `.env`
-   ✅ Asegúrate de que APIDIAN 2023 esté funcionando
-   🌐 Confirma que el DNS esté configurado correctamente
-   💬 Verifica los puertos abiertos en el firewall
