This repository contains the frontend code of a taxi management system. It is a web application built using React and Material-UI.

## Features

- Dashboard for driver, user and organization management
- Create, update and delete drivers, users and organizations
- Client history
- PDF generation for orders
- Account management

## Tech Stack

- React
- Material-UI
- Vite

## Prerequisites

- Node.js
- npm

## Installation

```bash
$ npm install
```

## Running the app

First, you need to create a `.env` file in the root directory of the project. You can copy the `.env.example` file and fill in the VITE_APP_BASE_NAME variable with the base URL of the API.

Then, you can run the app using the following command:

```bash
$ npm start
```
## Usage

Visit the `/login` route to access the application using the super admin account. The default credentials are:

- Email: `admin@admin.com`
- Password: `pass`

Important: Change the default credentials in the database after the first login before deploying the application.

