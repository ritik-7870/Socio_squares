<!-- Project Setup

Prerequisites

Node.js installed on your system.

Package manager (npm or yarn).

Installation

Clone the repository:

git clone <repository_url>
cd <repository_directory>

Install dependencies:

npm install

Required dependencies:

npm install @mui/material @emotion/react @emotion/styled redux react-redux @reduxjs/toolkit react-hook-form next-redux-wrapper axios typescript @types/react @types/node

Run the development server:

npm run dev

Open your browser and navigate to http://localhost:3000.

Application Structure

|-- pages
|   |-- index.tsx
|   |-- register.tsx
|   |-- login.tsx
|   |-- dashboard.tsx
|-- components
|   |-- Layout.tsx
|-- features
|   |-- authSlice.ts
|   |-- apiSlice.ts
|-- styles
|   |-- globals.css
|-- store
|   |-- store.ts

Folder Explanation

pages/: Contains the application's pages (Register, Login, Dashboard).

components/: Reusable UI components, such as Layout.

features/: Redux Toolkit slices and RTK Query APIs.

store/: Redux store configuration.

styles/: Global CSS for the project.

Application Pages

1. Register Page

Route: /register

Features:

Registration form with fields:

Email (valid email format required).

Password (minimum 8 characters).

Real-time validation feedback using React Hook Form.

On successful registration, stores the token and redirects to the Dashboard.

Error handling for failed registrations.

Responsive design with Material-UI Grid system.

API:

Endpoint: POST https://reqres.in/api/register

Example Request:

{
  "email": "eve.holt@reqres.in",
  "password": "pistol"
}

2. Login Page

Route: /login

Features:

Login form with fields:

Email (valid email format required).

Password (minimum 8 characters).

Real-time validation feedback using React Hook Form.

On successful login, stores the token and redirects to the Dashboard.

Error handling for failed logins.

Link to the Register page for new users.

Responsive design with Material-UI Grid system.

API:

Endpoint: POST https://reqres.in/api/login

Example Request:

{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}

3. Dashboard Page

Route: /dashboard

Features:

Protected route: Accessible only to authenticated users (based on the presence of a valid token).

Displays a list of users fetched from the API.

Logout functionality to clear the authentication token and redirect to the Login page.

Responsive design using Material-UI Grid.

Data fetching using RTK Query with optional pagination.

API:

Endpoint: GET https://reqres.in/api/users?page={page}

Protected Routes

Redirects unauthenticated users to the /register page.

Scripts

Development:

npm run dev

Build for Production:

npm run build

Start Production Server:

npm start

Known Issues

Ensure valid API responses from Reqres.in; improper inputs may result in errors. -->