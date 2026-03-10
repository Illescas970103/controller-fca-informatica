# FCA INFORMATICA - Controlador Web

Una aplicación full-stack moderna para gestionar elementos con React, TypeScript, Vite y Spring Boot.

## 🚀 Características

- ⚛️ **Frontend**: React 18 + TypeScript + Vite
- 🔧 **Backend**: Spring Boot 2.7.5 + H2 Database
- 🌐 **Deployment**: GitHub Pages (Frontend) + Railway (Backend)
- 📱 **Responsive**: Mobile-friendly design
- 🔄 **CORS**: Configurado para desarrollo y producción

## 📋 Requisitos

- Node.js v14+
- Java 17+
- Maven 3.6+
- Git

## 🛠️ Instalación Local

### 1. Clonar el repositorio
```bash
git clone https://github.com/Illescas970103/controller-fca-informatica.git
cd controller-fca-informatica
```

### 2. Backend - Spring Boot
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
✅ Backend activo en: **http://localhost:8080**
- API: `http://localhost:8080/api/items`

### 3. Frontend - React + Vite
```bash
cd ../frontend
npm install
npm run dev
```
✅ Frontend en: **http://localhost:5173**

## 🌐 Deploy en Producción

### Frontend (GitHub Pages)
```bash
cd frontend
npm run deploy
```
🔗 Live: https://illescas970103.github.io/controller-fca-informatica/

### Backend (Railway)

1. Ve a [railway.app](https://railway.app)
2. Conecta tu repositorio GitHub
3. Railway detectará el Procfile automáticamente
4. Presiona Deploy

Después de deployar, obtén tu URL (ej: `https://myapp-production.up.railway.app`)

## 🔗 Conectar Frontend con Backend

Edita: `frontend/.env.production`
```
VITE_API_BASE=https://your-railway-backend.up.railway.app/api/items
```

Luego deploy nuevamente:
```bash
npm run deploy
```

## 📚 API REST

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/items` | Obtener todos los elementos |
| POST | `/api/items` | Crear nuevo elemento |
| PUT | `/api/items/{id}` | Actualizar elemento |
| DELETE | `/api/items/{id}` | Eliminar elemento |

### Ejemplo de uso
```bash
# Obtener elementos
curl http://localhost:8080/api/items

# Crear elemento
curl -X POST http://localhost:8080/api/items \
  -H "Content-Type: text/plain" \
  -d "Mi nuevo elemento"
```

## 📁 Estructura del Proyecto
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