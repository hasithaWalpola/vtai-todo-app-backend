# VTAI Todo App Backend

This README outlines the steps to setup the project, provides a brief description of the application and highlights the important design and implementation decisions taken.

## Content

- [VTAI Todo App Backend](#vtai-todo-app-backend)
  - [Content](#content)
  - [Setting Up](#setting-up)
    - [Install](#install)
    - [Run](#run)
  - [Build](#build)
  - [The Application](#the-application)
    - [Design](#design)
  - [Important Decisions](#important-decisions)
    - [Architectural Decisions](#architectural-decisions)
    - [Implementation Decisions](#implementation-decisions)
  - [✅ Deployemnt](#-deployemnt)

## Setting Up

The following steps are necessary to set up the project in the development environment:

### Install

Install dependencies by running the following command in the root of the project:

```bash
# From root of the project.
yarn install or npm install
```
### Run

Run the following command to start the Websocket server and the front-end application.

```bash
# From root of the project.
npm start
```
Navigate to `http://localhost:3000/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## The Application

The application consists of two flows: the admin user flow and the normal user flow.

### Design

The design process started with creating a ER diagram for the application database.

## Important Decisions

The following implementation, and architectural decisions were taken throughout the development process:

### Architectural Decisions


- Javascript was the primary language used for development.
- PostgreSQL use as database
- JWT use for authntiaction process

### Implementation Decisions

- Node JS was used for the implementation of the backend server with PostgresSQL database.

## ✅ Deployemnt

[Deployement Document]("docs/resources/VTAI%20-%20Todo%20App%20Deployment.pdf")

- Application deployed to the Google Cloud using Github Actions
- Application deployed automatically when push to main branch(CI/CD)
