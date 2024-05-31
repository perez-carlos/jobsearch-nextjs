# Job Search Web Application

This project is a simple job search web application built with Next.js, using Tailwind CSS for styling, and a FastAPI backend with MongoDB for the database.

## Pages

### 1. Login Page

The login page (`pages/index.js`) allows users to log into the application. It has a form for email and password input. Upon submission, the credentials are sent to the backend API for authentication. If successful, the user is redirected to the Dashboard. If a user is already logged in (i.e., a token exists in `localStorage`), they are automatically redirected to the Dashboard.

### 2. Sign Up Page

The sign-up page (`pages/signup.js`) allows new users to create an account. It also has a form for email and password input. Upon submission, the details are sent to the backend API to create a new user. If successful, the user is notified via an alert.

### 3. Dashboard Page

The dashboard page (`pages/dashboard.js`) is accessible only to authenticated users. It allows users to search for job postings by job title. The search results, including the job name and company name, are displayed in a table. There is also a logout button that logs the user out by removing the token from `localStorage` and redirecting to the login page.

## Running the Application

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Python (v3.8 or higher)
- Pipenv (for managing Python dependencies)
- MongoDB (running locally or in the cloud)

### Frontend Setup (Next.js)

1. **Install Dependencies:**
   ```bash
   npm install
   # or
   yarn install
2. **Run the Development Server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```



