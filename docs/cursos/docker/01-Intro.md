---
title: 01 - intro
keywords:
  - docker
  - Fernando Herrera
---


Este curso y apunter viene del curso de Docker Fernando Herrrera en [Udemy](https://www.udemy.com/course/docker-guia-practica/) o en [DevTalles](https://cursos.devtalles.com/collections)


### Primeros comandos por consola
```javascript
docker pull hello-world
docker container run hello-world
docker container ls === docker ps
list all containers -> docker container ls -a
remove all container -> docker container prune
```
:::tip
En powershell y bash para introducir comandos multilinea se utiliza el backtick ` + enter, esto no funciona en cmd :(
:::



### Detached mode 
- -d ( modo desenlazado de la consola, no aparece la ejecucion en consola )
### Publish 
- -p [ puertoHost:puertoContainer ]
- publicar el puerto 80 de mi equipo con el puerto 80 que expone el contenedor ```docker container run -d -p 80:80 docker/getting-started```

### Variables de entorno -e --env
- Util para manda cierta configuracion cuando levantamos un contenedor

```bash
docker container run -d `
	-e MYSQL_ROOT_PASSWORD=secret
	--env MYSQL_ROOT_PASSWORD=secret
`
```

```bash
docker container run `
>> -e MARIADB_RANDOM_ROOT_PASSWORD=yes `
>> -dp 3306:3306 `
>> mariadb:jammy
```

