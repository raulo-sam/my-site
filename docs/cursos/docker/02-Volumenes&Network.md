---
title: 02 - Volúmenes & Network
keywords:
  - docker
  - Fernando Herrera
---

# ¿Qué veras en esta página?

- Terminal interactiva dentro del contenedor
- Aplicaciones con múltiples contenedores
- Redes
- Volúmenes
- Mapeo de directorios y relaciones
- Montar un servidor Apache con PHPMyAdmin junto a MariaDB
- Revisar el file system de alpine y node


## Volúmenes
- Sirven para hacer persistir la data una vez que se destruyen los contenedores
- Hay 3 tipos de volumenes
### 1.Named volume, el mas usado
```bash title="- Crear volume"
docker volume create todo-db
```
```bash title="- Listar volumenes creados"
docker volume ls
```

```bash title="- Inspeccionar volumen especifico"
docker volume inspect todo-db
```
```bash title="- Usar un volumen"
docker volume -v todo-db:/etc/todos getting-started
```
Donde todo-db es el nombre del volumen en el host y :/ el path donde apunta en el contenedor

--- 
### 2.Bind volume - trabaja con paths absolutos
```bash title="Terminal"
docker run -dp 3000:3000 \
-w /app -v "$(pwd):/app" \
node:18-alpine \
sh -c "yarn install && yarn run dev"
```
```bash title="Powershell"
docker run -dp 3000:3000 `
-w /app -v "$(pwd):/app" `
node:18-alpine `
sh -c "yarn install && yarn run dev"
```
:::tip
- -w /app: **Working directory**: donde el comando
empezará a correr.
- *-v “$(pwd):/app”:* **Volumen vinculado**: vinculamos el
directorio del host con el directorio /app del contenedor
- *node:18-alpine:* **Imagen a usar**
- ```sh -c "yarn install && yarn run dev":``` Comando Shell:
Iniciamos un shell y ejecutamos yarn install y luego correr el
```yarn run dev```
:::
---
### 3. Anonymus volumes: Volúmenes donde sólo se especifica el path del
contenedor y Docker lo asigna automáticamente
en el host 
```bash
docker run -v /var/lib/mysql/data
```