# Deploy del Backend en Railway 🚀

Railway es la forma más fácil de desplegar tu backend Spring Boot.

## Pasos rápidos

### 1. Crear cuenta en Railway
- Ve a [railway.app](https://railway.app)
- Registrate con GitHub

### 2. Conectar Tu Repositorio
1. En Railway, click en "Create a new project"
2. Selecciona "Deploy from GitHub repo"
3. Autoriza a Railway y selecciona: `controller-fca-informatica`
4. Railway detectará automáticamente que es Java (por el `Procfile`)

### 3. Configurar Variables de Ambiente
En Railway, adiciona estas variables en "Variables":
```
PORT=8080
JAVA_TOOL_OPTIONS=-Xmx512m
```

### 4. Deploy Automático
- Railway automáticamente desplegará cuando hagas push a `main`
- Verifica el status en la pestaña "Deployments"

### 5. Obtener URL del Backend
Una vez desplegado, copia la URL pública (ej: `https://controller-fca-prod.up.railway.app`)

### 6. Actualizar Frontend
1. Edita `frontend/.env.production`:
```
VITE_API_BASE=https://controller-fca-prod.up.railway.app/api/items
```

2. Deploy el frontend nuevamente:
```bash
cd frontend
npm run deploy
```

## Variables de Entorno (Opcional)

Si necesitas cambiar configuraciones en producción:

```properties
SERVER_PORT=8080
SPRING_JPA_HIBERNATE_DDL_AUTO=create-drop
```

## Troubleshooting

### El backend no se reinicia después de git push
- Verifica que el Procfile esté en la raíz del proyecto
- Asegúrate de haber hecho `git push`

### Error 502 Bad Gateway
- Railway necesita tiempo para desplegar
- Espera 2-3 minutos
- Verifica los logs en "Logs"

### CORS Error en el Frontend
- Asegúrate de configurar CORS en CorsConfig.java
- Agregar tu URL de frontend a allowedOrigins

## Copiando el JAR Manualmente

Si prefieres subir el JAR directamente:
```bash
cd backend
mvn clean package -DskipTests
# Luego sube el JAR desde Railway UI
```

## ¿Necesita Ayuda?

1. Verifica los logs: `railway logs`
2. Documentación: https://docs.railway.app
3. El backend debe responder en: `/api/items` con GET
