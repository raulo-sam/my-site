Este curso y apunter viene del curso de Docker Fernando Herrrera en [Udemy](https://www.udemy.com/course/docker-guia-practica/) o en [DevTalles](https://cursos.devtalles.com/collections)


### Descarga imagen
`` docker pull hello-world
### Ejecutar la imagen
``docker container run hello-world

:::tip
<!-- <a target="\_blank" href={require('./assets/docusaurus-asset-example.docx').default}> Download this docx </a> -->
:::


``docker container ls === docker ps
list all containers -> ``docker container ls -a
remove all container -> ``docker container prune

##### Detached mode  -d ( modo desenlazado de la consola, no aparece la ejecucion en consola )
##### Publish -p [ puerto:puerto ]
publicar el puerto 80 de mi equipo con el puerto 80 que expone el contenedor
docker container run -d -p 80:80 docker/getting-started

### Variables de entorno
util para manda cierta configuracion cuando levantamos un contenedor

```bash
docker container run -d `
	-e MYSQL_ROOT_PASSWORD=secret
	--env MYSQL_ROOT_PASSWORD=secret
`
```

```js
docker container run `
>> -e MARIADB_RANDOM_ROOT_PASSWORD=yes `
>> -dp 3306:3306 `
>> mariadb:jammy
```

test