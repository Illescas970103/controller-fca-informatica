# 🎯 Guía Completa de Deploy - FCA INFORMATICA Controller

## ✅ Lo que ya está hecho

- ✅ Frontend en GitHub Pages: https://illescas970103.github.io/controller-fca-informatica/
- ✅ Código en GitHub: https://github.com/Illescas970103/controller-fca-informatica
- ⏳ Backend pendiente de deploy

## 🚀 Paso 1: Desplegar el Backend en Railway

### 1. Registrarse en Railway
```
1. Ve a https://railway.app
2. Click "Start a New Project"
3. Conecta con tu cuenta de GitHub
```

### 2. Crear Proyecto
```
1. "Deploy from GitHub Repo"
2. Busca: controller-fca-informatica
3. Conecta el repositorio
```

### 3. Railway Deployment
```
- Railway automáticamente:
  ✅ Detectará que es Java (por el Procfile)
  ✅ Compilará el backend
  ✅ Desplegará en segundos
  ✅ Te dará una URL pública
```

### 4. Copiar URL del Backend
Una vez desplegado, tu URL será algo como:
```
https://controller-fca-informatica-prod.up.railway.app
```

## 🔗 Paso 2: Conectar Frontend con Backend

### 1. Editar Configuración de Producción
```bash
cd frontend
nano .env.production
```

### 2. Actualizar la URL
```env
VITE_API_BASE=https://controller-fca-informatica-prod.up.railway.app/api/items
```
*(Reemplaza con tu URL real de Railway)*

### 3. Redeploy del Frontend
```bash
cd frontend
npm run deploy
```

## ✅ Verificar que Todo Funciona

### Test Local
```bash
# Terminal 1: Backend
cd backend
mvn spring-boot:run

# Terminal 2: Frontend
cd frontend
npm run dev
```
Abre http://localhost:5173 y prueba agregar/eliminar elementos.

### Test en Producción
1. Ve a https://illescas970103.github.io/controller-fca-informatica/
2. Prueba las funcionalidades
3. Si funciona → ¡Éxito! 🎉

## 📊 Resumen Final

Tu aplicación completa en producción:

```
┌─────────────────────────────────────────────────────┐
│           FCA INFORMATICA Controller                │
├─────────────────────────────────────────────────────┤
│                                                     │
│  🌐 Frontend (GitHub Pages)                        │
│  https://illescas970103.github.io/...              │
│                                                     │
│  ↕️  Comunicación HTTP                              │
│                                                     │
│  🔧 Backend (Railway)                              │
│  https://your-railway-app.up.railway.app           │
│  ├─ POST /api/items (crear)                       │
│  ├─ GET  /api/items (listar)                       │
│  ├─ PUT  /api/items/{id} (editar)                  │
│  └─ DELETE /api/items/{id} (eliminar)             │
│                                                     │
│  💾 Base de Datos (H2 - in-memory)                 │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## 🆘 Troubleshooting

### El frontend no funciona después de deploy
- Verifica que VITE_API_BASE sea la URL correcta
- Asegúrate de haber hecho `npm run deploy`
- Limpia el cache del navegador (Ctrl+Shift+Del)

### Backend retorna error CORS
- El CORS ya está configurado en CorsConfig.java
- Si aún no funciona, verifica que:
  - El backend está corriendo
  - La URL es accesible
  - No hay firewall bloqueando

### Railway dice "Deployment Failed"
- Revisa los logs en Railway: "Deployments" → "View Logs"
- Errores comunes:
  - Procfile mal ubicado
  - Java 17 no detectado
  - Archivo JAR faltante

## 📱 Testing Manual

### Con cURL
```bash
# GET
curl https://your-railway-app.up.railway.app/api/items

# POST
curl -X POST https://your-railway-app.up.railway.app/api/items \
  -H "Content-Type: text/plain" \
  -d "Mi elemento"

# DELETE
curl -X DELETE https://your-railway-app.up.railway.app/api/items/0
```

## 📞 Soporte

- GitHub Issues: https://github.com/Illescas970103/controller-fca-informatica/issues
- Railway Docs: https://docs.railway.app
- Spring Boot Docs: https://spring.io/projects/spring-boot

---

**¡Tu aplicación está lista para producción! 🚀**
