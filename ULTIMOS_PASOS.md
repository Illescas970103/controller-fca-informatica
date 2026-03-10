# 🚀 DEPLOY AUTOMÁTICO COMPLETO

Todo está configurado y automatizado. Solo **3 pasos finales** (5 minutos):

## 📋 Requisitos

- Cuenta en Render.com (gratis)
- Git actualizado

---

## 🎯 PASOS FINALES

### 1️⃣ Render - Crear Web Service (2 minutos)

```
1. Ve a https://render.com
2. Sign up con GitHub
3. Dashboard → "New" → "Web Service"
4. Selecciona: controller-fca-informatica
5. Configura:
   - Name: controller-fca-informatica
   - Build command: (dejar vacío - usa Dockerfile)
   - Start command: (dejar vacío - usa Dockerfile)
6. Click "Create Web Service"
```

Render automáticamente:
- ✅ Lee el Dockerfile
- ✅ Compila el backend
- ✅ Ejecuta la aplicación

### 2️⃣ Obtener URL de Render (esperar 2-3 min)

Cuando termine el deployment:
- Tu URL será: `https://controller-fca-informatica.onrender.com`

### 3️⃣ (OPCIONAL) Actualizar Frontend URL

Si la URL es diferente, edita:
```bash
# Editar archivo
nano frontend/.env.production

# Cambiar línea a:
VITE_API_BASE=https://controller-fca-informatica.onrender.com/api/items

# Guardar y hacer push
git add frontend/.env.production
git commit -m "Update Render backend URL"
git push origin main
```

---

## ✨ ¡LISTO!

Ahora tienes:

```
Frontend: https://illescas970103.github.io/controller-fca-informatica/ ✅
Backend:  https://controller-fca-informatica.onrender.com ✅
Auto-deploy: Con cada git push ✅
```

---

## 📊 Cómo funciona

```
Tu código (main branch)
       ↓
         GitHub Actions automáticamente:
       ├─→ Compila backend (Maven)
       ├─→ Compila frontend (React/Vite)
       ├─→ Despliega frontend → GitHub Pages
       ├─→ Sube JAR → Releases
       └─→ Render automáticamente redeploya
       ↓
Todo sincronizado y en vivo!
```

---

## 🔍 Ver los workflows

```
https://github.com/Illescas970103/controller-fca-informatica/actions
```

---

## 🆘 Troubleshooting

### El backend no inicia en Render
- Render lee el `Dockerfile` automáticamente
- Si hay error, verifica los logs en Render Dashboard

### GitHub Pages no actualiza
- Espera 1-2 minutos
- Limpia cache (Ctrl+Shift+Del)

### Frontend dice "Error conectando con API"
- Asegúrate que `VITE_API_BASE` sea la URL correcta
- El backend debe estar corriendo en Render

---

## 📚 Archivos creados

- `Dockerfile` - Para ejecutar el backend
- `render.yaml` - Configuración para Render
- `docker-compose.yml` - Para testing local
- `.github/workflows/deploy.yml` - GitHub Actions
- `frontend/.env.production` - Configuración del frontend

---

## 🎉 ¡Proyecto Completado!

Tu aplicación Full-Stack está lista para producción con:
- ⚛️ React 18 + TypeScript
- 🔧 Spring Boot Backend
- 🚀 Auto-deploy en cada push
- 🌐 URLs públicas y accesibles
- 📱 Responsive design
- 🔄 CORS configurado

¡Felicidades! 👏
