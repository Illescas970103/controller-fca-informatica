# My Vite Spring App

This project is a full-stack application that combines a Spring Boot backend with a React frontend using Vite. It demonstrates how to create a RESTful API and connect it to a modern frontend framework.

## Project Structure

```
my-vite-spring-app
├── backend          # Spring Boot backend
│   ├── src
│   │   ├── main
│   │   │   ├── java
│   │   │   │   └── com
│   │   │   │       └── example
│   │   │   │           ├── controller
│   │   │   │           │   └── ApiController.java
│   │   │   │           ├── config
│   │   │   │           │   └── CorsConfig.java
│   │   │   │           └── Application.java
│   │   │   └── resources
│   │   │       └── application.properties
│   │   └── test
│   │       └── java
│   ├── pom.xml
│   └── README.md
├── frontend         # React frontend
│   ├── src
│   │   ├── components
│   │   │   └── App.tsx
│   │   ├── pages
│   │   │   └── index.tsx
│   │   ├── services
│   │   │   └── api.ts
│   │   └── main.tsx
│   ├── index.html
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── package.json
│   └── README.md
└── README.md
```

## Backend Setup

1. Navigate to the `backend` directory.
2. Build the project using Maven:
   ```
   mvn clean install
   ```
3. Run the Spring Boot application:
   ```
   mvn spring-boot:run
   ```
4. The backend will be available at `http://localhost:8080`.

## Frontend Setup

1. Navigate to the `frontend` directory.
2. Install the dependencies:
   ```
   npm install
   ```
3. Start the Vite development server:
   ```
   npm run dev
   ```
4. The frontend will be available at `http://localhost:3000`.

## API Endpoints

The backend exposes the following API endpoints:

- `GET /api/items` - Retrieve all items
- `POST /api/items` - Create a new item
- `PUT /api/items/{id}` - Update an existing item
- `DELETE /api/items/{id}` - Delete an item

## CORS Configuration

CORS is configured in the Spring Boot application to allow requests from the frontend. Ensure that the frontend URL is included in the CORS settings.

## License

This project is licensed under the MIT License.