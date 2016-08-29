# Base image for donetcore apps
FROM microsoft/dotnet:1.0.0-core
# Sets the working directory for following RUN, CMD, ENTRYPOINT, COPY and ADD commands
WORKDIR /app
# Set environment variable that will be available in the container
ENV API_PORT 5000
ENV ASPNETCORE_URLS http://*:${API_PORT}
# Notes what port is exposed by the app
EXPOSE ${API_PORT}
# The process that runs in the container
ENTRYPOINT ["dotnet", "api-dotnet.dll"]
# Copy the published app context to the WORKDIR folder in the container (/app) 
COPY . .
