# Etapa 1: build de React
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Etapa 2: Nginx con HTTPS
FROM nginx:alpine

# Copiar build a nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copiar configuración de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Crear carpetas de certificados
RUN mkdir -p /etc/ssl/certs /etc/ssl/private

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
