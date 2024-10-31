# Conexion TCP nest.JS

Un ejemplo sencillo usando conector TCP de 2 servicios

## Instalacion

se necesita instalar todos los paquetes

```bash
cd http-server
yarn install
cd ../math-microservice
yarn install
cd ../servicio-string
yarn install
```

## Uso
Se necesita montar varias terminales para poder usar el programa

```bash
cd http-server
yarn run start:dev
cd math-microservice
yarn run start:dev
cd servicio-string
yarn run start:dev
```

## Ejemplo

```bash
POST localhost:3000/sum
BODY { data : [6,2,9] }
```

