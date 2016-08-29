# Base image for NodeJS runtime
FROM node
# Location of application in container
WORKDIR /src
# Copy the source artifacts
COPY . .
# Install the dependencies into the application directory
RUN npm install
# The port to expose 
EXPOSE 3000
# How to start the app
ENTRYPOINT ["node", "server.js"]
