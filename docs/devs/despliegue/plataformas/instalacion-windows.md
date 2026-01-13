---
sidebar_position: 1
---
# Windows

## 📋 Requisitos Previos

Antes de iniciar la instalación, asegúrate de tener las siguientes herramientas instaladas:

-   ✅ **Laragon** - Entorno de desarrollo local
-   ✅ **Visual Studio Code** - Editor de código
-   ✅ **APIDIAN** - API ya instalada y funcionando
-   ✅ **Node.js 14** - Versión específica requerida

### 🔗 Enlaces de Descarga

-   [Laragon](https://laragon.org/download/index.html)
-   [Visual Studio Code](https://code.visualstudio.com/docs/?dv=win)
-   [Node.js 14](https://nodejs.org/download/release/v14.21.3/)

---

## ⚙️ Proceso de Instalación

**Importante:** Utiliza la terminal integrada de Laragon para ejecutar todos los comandos.

### 1. Clonar el Repositorio

```bash
git clone https://git.buho.la/facturalatam/co-facturadorpro2.git facturadorpro2
cd facturadorpro2
```

### 2. Configurar Variables de Entorno

```bash
cp .env.example .env
```

> ⚠️ **Importante:** Abre el archivo `.env` y modifica los parámetros necesarios:
>
> -   Configuración de base de datos (DB\_\*)
> -   URL de la aplicación (APP_URL)
> -   Conexión con la API (SERVICE_FACT)
> -   Configuración SMTP para correos

### 3. Instalar Dependencias de PHP

```bash
rm composer.lock
composer install
```

### 4. Configurar Caché y Generar Key

```bash
php artisan config:cache && php artisan cache:clear
php artisan key:generate
```

### 5. Crear Base de Datos

> 📌 **Nota:** Crea manualmente la base de datos utilizando phpMyAdmin o la herramienta de tu preferencia, con los datos especificados en el archivo `.env`

**Parámetros del archivo `.env` a configurar:**

```env
DB_DATABASE=nombre_base_datos
DB_USERNAME=usuario
DB_PASSWORD=contraseña
```

### 6. Migrar Base de Datos

```bash
php artisan migrate --seed
```

### 7. Configurar Permisos

```bash
chmod -R 777 storage
chmod -R 777 bootstrap/cache
chmod -R 777 vendor/mpdf/mpdf
```

### 8. Crear Enlace Simbólico y Limpiar Caché

```bash
php artisan storage:link
php artisan config:cache && php artisan config:clear && php artisan cache:clear
```

---

## ✅ Verificación

Una vez completados todos los pasos:

1. **Accede a la aplicación** a través de tu navegador usando la URL configurada en `APP_URL`
2. **Verifica la conexión** con la API APIDIAN
3. **Prueba el envío de correos** (si configuraste SMTP)

---

## 🔧 Configuraciones Importantes del .env

### Aplicación

```env
APP_NAME="Facturador PRO2"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost
```

### Base de Datos

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=facturadorpro2
DB_USERNAME=root
DB_PASSWORD=
```

### API APIDIAN

```env
SERVICE_FACT=http://localhost/apidian2025/public
```

### Correo (Opcional)

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=tu_correo@gmail.com
MAIL_PASSWORD=tu_contraseña
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=tu_correo@gmail.com
MAIL_FROM_NAME="${APP_NAME}"
```

---

## 🆘 Solución de Problemas

### Error: Composer no encontrado

```bash
# Asegúrate de que Laragon esté ejecutándose
# Verifica en: Laragon > Tools > Composer
```

### Error: Node.js no es versión 14

```bash
# Descarga Node.js 14 específicamente
# Desinstala versiones anteriores si es necesario
```

### Error: No se puede conectar a la API

```bash
# Verifica que APIDIAN esté corriendo
# Comprueba la URL en SERVICE_FACT
# Prueba acceder a la API directamente desde el navegador
```

### Error: Permisos insuficientes

```bash
# En Windows, ejecuta Laragon como Administrador
chmod -R 777 storage bootstrap/cache vendor/mpdf/mpdf
```

---

## 📞 Soporte

Si encuentras problemas durante la instalación:

-   📋 Verifica que todos los requisitos previos estén instalados
-   🔍 Revisa los logs de Laravel: `storage/logs/laravel.log`
-   ✅ Confirma que la API APIDIAN esté funcionando correctamente
-   💬 Asegúrate de que el archivo `.env` esté correctamente configurado
