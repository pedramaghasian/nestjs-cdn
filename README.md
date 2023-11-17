## CDM Project - Modular Monolithic Architecture with NestJS

## Overview
The **CDM** (Create, Authenticate, Minify) project is a simple implementation following a **modular monolithic architecture** with a **clean architecture** approach. The project is built using the **NestJS framework**, and core services are well-documented using **Swagger**. Three main services are implemented: User, Auth (JWT-based login), and Minification.

## Services

1. **User Service**
The User service allows the creation of user entities. It serves as the foundation for user management within the system.

2. **Auth Service**
The Auth service provides secure user authentication using JSON Web Tokens (JWT). Users can log in securely, and the service manages the authentication tokens for secure communication within the system.

3. **Minification Service**
The Minification service is responsible for handling CSS/JS files. It includes the following features:

- Upload CSS/JS Files
Users can upload CSS/JS files, and the system saves them to a preconfigured path.
Files are stored in the path: "/opt/username". If the path doesn't exist, it is created.
If a file with the same name already exists, it will be overwritten by the new version.

- Minification of CSS/JS
Users can request minification of CSS/JS files during the upload process.
The system measures memory and time spent on minification for each file and logs these metrics in the database.
File Details
Users can retrieve a list of files per user with detailed information.
File details include size, creation date, file type, duration of minification, and memory consumption during minification.

## Web Server (Openresty)

The project includes a web server based on Openresty, serving as a reverse proxy in front of the minification subsystem. Every API call to the minification subsystem is routed through Openresty, which is built on Nginx. The behavior of the web server can be customized using the LUA language.

## Installation Guide

**Dockerized Setup**

The project is containerized with Docker, allowing for easy deployment. You can run the entire system using Docker Compose:

1. `docker-compose up`
2. swagger : `http://localhost:3000/swagger`
3. webServer run at : `http://localhost:80`


- This command starts all the services, including the NestJS application, MongoDB, and the Openresty-based web server.

- Feel free to explore and enhance the functionalities of the CDM project!