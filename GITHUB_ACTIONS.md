# 🤖 GitHub Actions - Automatización de Deploy

Tu proyecto ahora tiene **automatización total** con GitHub Actions:

## ✅ Lo que se hace automáticamente

### 1️⃣ Cada vez que haces `git push main`:

```bash
✅ Compila el backend (Maven)
✅ Compila el frontend (Node)
✅ Guarda el JAR como artifact
✅ Crea un Release con el JAR
✅ Hace deploy del frontend a GitHub Pages
```

### 2️⃣ Frontend automático

- 🌐 Siempre actualizado en: https://illescas970103.github.io/controller-fca-informatica/
- Se redeploya automáticamente con cada push

### 3️⃣ Backend automático

- 📦 El JAR está disponible en:
  - **Artifacts**: Actions → Últimas ejecuciones
  - **Releases**: https://github.com/Illescas970103/controller-fca-informatica/releases
- Puedes descargar y ejecutar en cualquier servidor

## 🚀 Como usar

### Opción A: Deploy Backend Automático en Render (RECOMENDADO)

**Paso 1**: Crea cuenta en Render.com
```
1. Ve a https://render.com
2. Sign up con GitHub
3. Conecta tu repositorio
```

**Paso 2**: Crear Web Service en Render
```
1. "New Web Service"
2. Conecta: controller-fca-informatica
3. Selecciona Root directory: `/` (raíz)
4. Build command: `cd backend && mvn clean package -DskipTests`
5. Start command: `java -jar backend/target/my-vite-spring-app-1.0-SNAPSHOT.jar`
6. Deploy!
```

**Paso 3**: Obtener URL de Deploy Hook
```
1. En tu Web Service en Render
2. Busca "Deploy Hook" en Settings
3. Copia el URL
```

**Paso 4**: Agregar Secret a GitHub
```
1. Repo → Settings → Secrets and variables → Actions
2. Click "New repository secret"
3. Name: RENDER_DEPLOY_HOOK_URL
4. Value: (pega el URL de Deploy Hook)
5. Save
```

Ahora cada push a `main` automáticamente:
- Compila el backend
- Dispara el deploy en Render

### Opción B: Descargar JAR y ejecutar en tu servidor

```bash
# El JAR está en:
# https://github.com/Illescas970103/controller-fca-informatica/releases

# Descargar:
wget https://github.com/Illescas970103/controller-fca-informatica/releases/download/build-XXX/app-XXX.jar

# Ejecutar:
java -jar app-XXX.jar
```

## 📊 Ver el estado de los workflows

1. Ve a: https://github.com/Illescas970103/controller-fca-informatica/actions
2. Allí ves todos los deployments
3. Haz click en un workflow para ver detalles

## 🔧 Workflows incluidos

### `deploy.yml` - Frontend a GitHub Pages
- Corre en cada push a `main`
- Compila frontend y hace deploy
- Crea releases con el backend

### `deploy-backend.yml` - Backend a Render
- Corre cuando cambias archivos en `backend/`
- Dispara el deploy en Render
- Guarda artifact del JAR

## ⚡ Quick Start

1. **Hacer un cambio en el código**
```bash
git add .
git commit -m "Mi cambio"
git push origin main
```

2. **GitHub Actions automáticamente**:
- Compila todo
- Despliega el frontend
- Actualiza el backend

3. **Ver resultados**:
- Frontend: https://illescas970103.github.io/controller-fca-informatica/
- Backend: En Render (una vez configurado)
- Logs: https://github.com/Illescas970103/controller-fca-informatica/actions

## 🆘 Troubleshooting

### El workflow falla
- Ve a Actions → el workflow fallido
- Haz click para ver los logs
- Busca el error específico

### GitHub Pages no actualiza
- Espera 1-2 minutos
- Limpia cache del navegador (Ctrl+Shift+Del)
- Verifica que branch sea `gh-pages`

### El backend no se despliega en Render
- Verifica que RENDER_DEPLOY_HOOK_URL esté en Secrets
- Revisa los logs de Render
- El Procfile debe estar en la raíz

## 📚 Recursos

- GitHub Actions Docs: https://docs.github.com/en/actions
- Render Docs: https://render.com/docs
- GitHub Pages: https://pages.github.com

---

**🎉 Tu proyecto ahora es completamente automatizado!**
