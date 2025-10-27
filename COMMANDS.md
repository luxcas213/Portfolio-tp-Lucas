# 🛠️ Comandos Útiles

## 📦 Instalación y Setup

```bash
# Instalar dependencias
npm install

# Limpiar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install

# Actualizar dependencias
npm update
```

## 🏃 Desarrollo

```bash
# Modo desarrollo (http://localhost:3000)
npm run dev

# Modo desarrollo en puerto específico
PORT=3001 npm run dev
```

## 🏗️ Build y Producción

```bash
# Build de producción
npm run build

# Ejecutar build de producción
npm start

# Build y start en un puerto específico
npm run build && PORT=3001 npm start

# Limpiar build anterior
rm -rf .next
```

## 🔍 Verificación de Código

```bash
# Lint (verificar errores de ESLint)
npm run lint

# TypeScript check
npx tsc --noEmit

# Verificar errores de build
npm run build 2>&1 | tee build.log
```

## 🚀 Deploy

```bash
# Deploy en Vercel (desde CLI)
npx vercel

# Deploy en producción
npx vercel --prod

# Ver logs de deploy
vercel logs
```

## 📊 Análisis

```bash
# Analizar bundle size
npm run build
npx @next/bundle-analyzer

# Performance analysis
npm run build -- --profile
```

## 🔧 Git Commands

```bash
# Verificar status
git status

# Agregar todos los cambios
git add .

# Commit
git commit -m "Your message"

# Push a main
git push origin main

# Ver cambios
git diff

# Ver historial
git log --oneline
```

## 🧹 Limpieza

```bash
# Limpiar cache de Next.js
rm -rf .next

# Limpiar node_modules
rm -rf node_modules

# Limpiar todo y reinstalar
rm -rf .next node_modules package-lock.json
npm install

# Limpiar cache de npm
npm cache clean --force
```

## 🐛 Debugging

```bash
# Build con debug info
npm run build -- --debug

# Start con debug
NODE_OPTIONS='--inspect' npm run dev

# Ver variables de entorno
npm run dev -- --help
```

## 📱 Testing Local en Diferentes Puertos

```bash
# Puerto 3001
PORT=3001 npm run dev

# Puerto 3002
PORT=3002 npm run dev

# Puerto 8080
PORT=8080 npm run dev
```

## 🔐 Variables de Entorno

```bash
# Crear archivo .env.local
echo "NEXT_PUBLIC_API_URL=https://api.example.com" > .env.local

# Ver variables disponibles
printenv | grep NEXT_PUBLIC
```

## 📦 Gestión de Dependencias

```bash
# Ver dependencias desactualizadas
npm outdated

# Actualizar una dependencia específica
npm install package-name@latest

# Instalar y guardar como dev dependency
npm install -D package-name

# Remover una dependencia
npm uninstall package-name

# Ver árbol de dependencias
npm ls

# Verificar vulnerabilidades
npm audit

# Arreglar vulnerabilidades automáticamente
npm audit fix
```

## 🎨 Tailwind CSS

```bash
# Regenerar clases de Tailwind
npm run dev

# Ver configuración de Tailwind
npx tailwindcss --help
```

## 📸 Optimización de Imágenes

```bash
# Comprimir imágenes manualmente con Sharp
npm install -g sharp-cli
sharp --input yo.png --output yo-optimized.png --webp
```

## 🌐 Localhost en Red Local

```bash
# Next.js expone automáticamente en red local
npm run dev

# Ver todas las interfaces de red
ipconfig  # Windows
ifconfig  # Mac/Linux

# Acceder desde otro dispositivo
# http://[tu-ip-local]:3000
# Ejemplo: http://192.168.1.16:3000
```

## 🔄 Cache Management

```bash
# Limpiar cache de Turbopack
rm -rf .next/cache

# Limpiar cache de npm
npm cache clean --force

# Rebuild completo (sin cache)
rm -rf .next && npm run build
```

## 📋 Snippets Útiles

### Verificar que todo está OK antes de commit
```bash
npm run build && git status
```

### Deploy completo (build + verificar + push)
```bash
npm run build && \
  npm start & \
  sleep 5 && \
  curl http://localhost:3000 && \
  git add . && \
  git commit -m "Production ready" && \
  git push origin main
```

### Actualizar todo y verificar
```bash
npm update && \
  npm run build && \
  npm run lint
```

## 🎯 Shortcuts VS Code

```
Ctrl + Shift + P  - Command Palette
Ctrl + `          - Toggle Terminal
Ctrl + B          - Toggle Sidebar
Ctrl + K + S      - Save All
F5                - Start Debugging
```

## 📚 Documentación Quick Links

- Next.js: https://nextjs.org/docs
- React: https://react.dev
- Tailwind: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- Vercel: https://vercel.com/docs

---

**Tip:** Guarda este archivo como referencia rápida para comandos comunes.
