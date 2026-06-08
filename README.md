# Customer Lifecycle Frontend

Frontend desarrollado con React + Vite para crear y consultar clientes consumiendo la Customer Lifecycle API.

## Despliegues

* DEV: https://bbog-kata-ciclo-de-vida-front.vercel.app/
* PROD: https://bbog-kata-ciclo-de-vida-front-mr54.vercel.app/

## Ejecutar localmente

Instalar dependencias:

```bash
npm install
```

Ejecutar el frontend en modo desarrollo usando las variables del ambiente DEV:

```bash
npm run dev:dev
```

Este comando usa:

```bash
vite --mode development
```

Por lo tanto, Vite carga las variables definidas en el archivo:

```txt
.env.development
```

Ejecutar el frontend en modo producción local usando las variables del ambiente PROD:

```bash
npm run dev:prod
```

Este comando usa:

```bash
vite --mode production
```

Por lo tanto, Vite carga las variables definidas en el archivo:

```txt
.env.production
```
