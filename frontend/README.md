# Frontend Documentation for My Vite Spring App

## Overview

This project is a full-stack application that combines a Spring Boot backend with a React frontend. The backend provides a RESTful API, while the frontend is built using Vite and React.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- Java (version 11 or higher)
- Maven

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd my-vite-spring-app
   ```

2. **Set up the backend:**

   Navigate to the `backend` directory and run:

   ```bash
   mvn install
   ```

   This will install the necessary dependencies.

3. **Run the backend:**

   Start the Spring Boot application:

   ```bash
   mvn spring-boot:run
   ```

   The backend will be running on `http://localhost:8080`.

4. **Set up the frontend:**

   Navigate to the `frontend` directory and run:

   ```bash
   npm install
   ```

5. **Run the frontend:**

   Start the Vite development server:

   ```bash
   npm run dev
   ```

   The frontend will be accessible at `http://localhost:3000`.

## API Endpoints

The backend exposes several API endpoints for CRUD operations. You can interact with these endpoints using the functions defined in the `frontend/src/services/api.ts` file.

## CORS Configuration

The backend is configured to allow cross-origin requests from the frontend. Ensure that the frontend is running on the specified port to avoid CORS issues.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.