# SSL 

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener:

-   ✅ **Acceso SSH** al VPS del Facturador PRO2
-   ✅ **Acceso al panel del dominio** (para crear registros DNS)
-   ✅ **Script** `actualizarSSL.sh` (opcional, para renovaciones)
-   ✅ **Permisos de root** en el servidor

### 🛠️ Herramientas Necesarias

-   [DNSChecker.org](https://dnschecker.org) - Para verificar propagación de DNS
-   Cliente SSH (PuTTY para Windows, Terminal para Linux/Mac)

---

## 🔐 Proceso de Instalación de Certificado SSL

### 1. Acceder como Root

```bash
sudo su
```

### 2. Generar Certificado SSL con Let's Encrypt

```bash
certbot certonly --manual \
  -d *.midominio.com \
  -d midominio.com \
  --agree-tos \
  --no-bootstrap \
  --manual-public-ip-logging-ok \
  --preferred-challenges dns-01 \
  --server https://acme-v02.api.letsencrypt.org/directory
```

> ⚠️ **Importante:** Reemplaza `midominio.com` con tu dominio real
>
> **Ejemplo:** `-d *.facturador.com -d facturador.com`

### 3. Configurar Registros DNS TXT

Durante el proceso, Certbot te pedirá que crees **dos registros TXT** en tu panel de dominio:

#### 📝 Pasos para agregar registros TXT:

1. **Accede al panel de tu proveedor de dominio** (GoDaddy, Namecheap, etc.)
2. **Ve a la sección de DNS o gestión de dominios**
3. **Crea dos registros TXT** con los valores que Certbot te proporcione:

```
Tipo: TXT
Nombre: _acme-challenge
Valor: [valor proporcionado por Certbot]
TTL: 600 (10 minutos)
```

4. **Verifica la propagación** en [DNSChecker.org](https://dnschecker.org)

    - Busca: `_acme-challenge.midominio.com`
    - Tipo: TXT
    - Espera hasta que se propague globalmente (puede tomar 5-30 minutos)

5. **Presiona ENTER en Certbot** solo cuando la propagación esté completa

---

### 4. Copiar Certificados a la Ubicación Correcta

Una vez que Certbot complete exitosamente:

```bash
cp /etc/letsencrypt/live/midominio.com/privkey.pem /root/certs/midominio.com.key
cp /etc/letsencrypt/live/midominio.com/cert.pem /root/certs/midominio.com.crt
```

> 📌 **Nota:** Asegúrate de que el directorio `/root/certs/` exista. Si no existe, créalo:
>
> ```bash
> mkdir -p /root/certs
> ```

### 5. Reiniciar el Proxy de Docker

```bash
docker restart proxy_proxy_1
```

> 💡 **Tip:** Si el nombre del contenedor es diferente, verifica con:
>
> ```bash
> docker ps | grep proxy
> ```

### 6. Verificar Contenedores Activos

```bash
docker ps
```

---

## 🔧 Configurar la Aplicación para HTTPS

### 1. Acceder al Contenedor PHP

```bash
docker exec -ti numerodelcontenedorphp bash
```

> 💡 **Tip:** Obtén el número/nombre del contenedor con `docker ps`

### 2. Editar Variables de Entorno

```bash
nano .env
```

### 3. Modificar Parámetros de HTTPS

Realiza los siguientes cambios:

#### Cambiar HTTP por HTTPS en APP_URL

```env
# Antes:
APP_URL=http://midominio.com

# Después:
APP_URL=https://midominio.com
```

#### Activar Forzado de HTTPS

```env
# Antes:
FORCE_HTTPS=false

# Después:
FORCE_HTTPS=true
```

**Guardar y salir:**

-   Presiona `CTRL + O` para guardar
-   Presiona `ENTER` para confirmar
-   Presiona `CTRL + X` para salir

### 4. Limpiar Caché de Laravel

```bash
php artisan config:cache && php artisan config:clear && php artisan cache:clear
```

### 5. Salir del Contenedor

```bash
exit
```

---

## ✅ Verificación del Certificado SSL

### 1. Probar Acceso HTTPS

Accede a tu dominio desde el navegador:

```
https://midominio.com
```

Deberías ver:

-   🔒 Candado verde en la barra de direcciones
-   Certificado válido emitido por Let's Encrypt
-   No advertencias de seguridad

### 2. Verificar Detalles del Certificado

```bash
openssl x509 -in /root/certs/midominio.com.crt -text -noout
```

### 3. Probar con Herramientas Online

-   [SSL Labs](https://www.ssllabs.com/ssltest/) - Test completo de SSL
-   [Why No Padlock](https://www.whynopadlock.com/) - Detecta contenido mixto

---

## 🔄 Renovación del Certificado SSL

Los certificados de Let's Encrypt vencen cada **90 días**.

### Renovación Manual

```bash
sudo su
certbot renew
cp /etc/letsencrypt/live/midominio.com/privkey.pem /root/certs/midominio.com.key
cp /etc/letsencrypt/live/midominio.com/cert.pem /root/certs/midominio.com.crt
docker restart proxy_proxy_1
```

### Renovación Automática con Cron

```bash
crontab -e
```

Agrega esta línea para renovar automáticamente cada mes:

```bash
0 3 1 * * /usr/bin/certbot renew --quiet && cp /etc/letsencrypt/live/midominio.com/privkey.pem /root/certs/midominio.com.key && cp /etc/letsencrypt/live/midominio.com/cert.pem /root/certs/midominio.com.crt && docker restart proxy_proxy_1
```

### Usando el Script actualizarSSL.sh

Si tienes el script de renovación:

```bash
chmod 700 actualizarSSL.sh
./actualizarSSL.sh
```

---

## 🆘 Solución de Problemas

### Error: El dominio no carga con HTTPS

**Verificar:**

```bash
# Ver logs del proxy
docker logs proxy_proxy_1

# Verificar que los certificados existan
ls -la /root/certs/

# Reiniciar el proxy
docker restart proxy_proxy_1
```

### Error: Certificado no válido o expirado

```bash
# Ver fecha de expiración
openssl x509 -in /root/certs/midominio.com.crt -noout -dates

# Renovar certificado
certbot renew --force-renewal
```

### Error: Contenido mixto (Mixed Content)

**Solución:**

1. Verifica que `FORCE_HTTPS=true` esté en el `.env`
2. Limpia la caché: `php artisan config:cache`
3. Revisa que todas las URLs en la base de datos usen HTTPS

### Error: DNS no propaga

**Verificar:**

-   Espera 15-30 minutos para propagación completa
-   Usa [DNSChecker.org](https://dnschecker.org)
-   Verifica con: `nslookup _acme-challenge.midominio.com`

### Error: Certbot falla en la verificación

```bash
# Limpiar certificados anteriores
certbot delete --cert-name midominio.com

# Intentar de nuevo
certbot certonly --manual -d *.midominio.com -d midominio.com ...
```

---

## 📝 Ejemplo Completo del Proceso

```bash
# 1. Acceder como root
sudo su

# 2. Generar certificado
certbot certonly --manual -d *.miempresa.com -d miempresa.com --agree-tos --no-bootstrap --manual-public-ip-logging-ok --preferred-challenges dns-01 --server https://acme-v02.api.letsencrypt.org/directory

# 3. [Crear registros TXT en el panel del dominio]
# 4. [Esperar propagación DNS]
# 5. [Presionar ENTER en Certbot]

# 6. Copiar certificados
cp /etc/letsencrypt/live/miempresa.com/privkey.pem /root/certs/miempresa.com.key
cp /etc/letsencrypt/live/miempresa.com/cert.pem /root/certs/miempresa.com.crt

# 7. Reiniciar proxy
docker restart proxy_proxy_1

# 8. Configurar aplicación
docker ps
docker exec -ti 123abc bash
nano .env
# Cambiar APP_URL a https://
# Cambiar FORCE_HTTPS a true
php artisan config:cache && php artisan config:clear && php artisan cache:clear
exit

# 9. Verificar en navegador
# https://miempresa.com
```

---

## 📞 Soporte

Si encuentras problemas:

-   📋 Revisa los logs de Docker: `docker logs proxy_proxy_1`
-   🔍 Verifica los logs de Certbot: `/var/log/letsencrypt/letsencrypt.log`
-   ✅ Confirma la propagación DNS con DNSChecker
-   🌐 Verifica los registros TXT en el panel del dominio
-   💬 Asegúrate de tener permisos de root
