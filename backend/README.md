# Backend REST API Documentation

## Overview
This backend service is built using Spring Boot and provides a RESTful API for managing items. It supports standard CRUD operations: Create, Read, Update, and Delete.

## Setup Instructions

1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd my-vite-spring-app/backend
   ```

2. **Build the Project**
   Ensure you have Maven installed. Run the following command to build the project:
   ```
   mvn clean install
   ```

3. **Run the Application**
   You can run the application using the following command:
   ```
   mvn spring-boot:run
   ```
   The application will start on the default port (8080).

## API Endpoints

### Get Items
- **Endpoint:** `GET /api/items`
- **Description:** Retrieves a list of items.

### Create Item
- **Endpoint:** `POST /api/items`
- **Description:** Creates a new item.
- **Request Body:** JSON object representing the item.

### Update Item
- **Endpoint:** `PUT /api/items/{id}`
- **Description:** Updates an existing item by ID.
- **Request Body:** JSON object representing the updated item.

### Delete Item
- **Endpoint:** `DELETE /api/items/{id}`
- **Description:** Deletes an item by ID.

## CORS Configuration
CORS is configured to allow requests from specific origins. Ensure that your frontend application is running on an allowed origin to access the API.

## Additional Information
For more details on the API usage and response formats, please refer to the source code in the `controller` package.