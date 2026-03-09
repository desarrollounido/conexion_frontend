# Dockerfile para desarrollo
FROM node:18-alpine

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer puerto
EXPOSE 5173

# Comando para desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]