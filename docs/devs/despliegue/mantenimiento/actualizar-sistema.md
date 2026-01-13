# Actualizar

### Consideraciones
* El facturador se encontrará desplegado mediante al menos 5 contenedores de Docker
* Para actualizar se requiere ingresar solo a uno de ellos

### Pasos

1. Ejecutar `docker ps`

2. Aparecerá un listado con los contenedores activos. Identificar el contenedor mediante la columna **COMMAND** con valor `php-fpm7.2` o similar

3. Copiar el primer valor de la línea equivalente a **CONTAINER ID**

4. Ejecutar 

```bash
docker exec -it [nombre_contenedor_fpm] /bin/bash
```

5. Una vez ingresado al contenedor, ejecutar `git pull origin master`

6. Ingresar las credenciales solicitadas (Usuario y token)

7. Ejecutar `php artisan migrate && php artisan tenancy:migrate`

8. Ejecutar `php artisan config:cache && php artisan cache:clear && php artisan optimize:clear`