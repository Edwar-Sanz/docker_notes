# imagen a partir de la cual se va a crear nuestra imagen
FROM node:latest

# crea directorio de trabajo
# todos los comandos se ejecutarán en este directorio
# alternativamente se puede usar: 
# RUN mkdir -p para crear un directorio en el sistema de archivos del contenedor.
WORKDIR /app

# copia los archivos .json en el WORKDIR
# en caso de usar "mkdir" se debe especificar la ruta
COPY package*.json ./
# ejecuta npm para instalar las dependencias
RUN npm install

#copiar todos los archivos y carpetas del directorio actual
# al contenedor de Docker que se está construyendo.
#El primer punto (".") representa el directorio actual del contexto de construcción, 
#mientras que el segundo punto representa la ruta dentro del contenedor donde se copian los archivos.
# en caso de usar "mkdir" se debe especificar la ruta
COPY . .

# el puerto 3000 del contenedor esté disponible para 
#que otros contenedores o servicios se conecten a él.
EXPOSE 3000

# comando para ejecutar el servidor, en caso de usar "mkdir" se debe especificar la ruta
CMD [ "node", "server.js" ]