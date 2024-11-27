# Asegurarse de estar en el directorio correcto
cd "C:\Users\CessaBit\Desktop\Escritorio\Pagina Groove\client"

# Ejecutar el build
npm run build

# Borrar archivos en la raíz (si ya existen)
Remove-Item -Path ".\index.html" -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".\favicon.ico" -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".\manifest.json" -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".\robots.txt" -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".\asset-manifest.json" -Force -ErrorAction SilentlyContinue

# Eliminar cualquier PNG u otros archivos estáticos que puedan haber sido copiados previamente
Remove-Item -Path ".\*.png" -Force -ErrorAction SilentlyContinue

# Copiar archivos del build a la raíz
Copy-Item -Path "build\index.html" -Destination ".\" -Force
Copy-Item -Path "build\favicon.ico" -Destination ".\" -Force
Copy-Item -Path "build\manifest.json" -Destination ".\" -Force
Copy-Item -Path "build\robots.txt" -Destination ".\" -Force
Copy-Item -Path "build\asset-manifest.json" -Destination ".\" -Force

# Copiar todo lo que está en "build/static/" a la raíz (si hay imágenes, JS, CSS, etc.)
Copy-Item -Path "build\static\*" -Destination ".\static" -Recurse -Force

# Hacer commit y push (si es necesario)
git add .
git commit -m "Actualizar archivos de build"
git push origin main

# Eliminar los archivos copiados temporalmente (por si fuera necesario)
Remove-Item -Path ".\index.html" -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".\favicon.ico" -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".\manifest.json" -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".\robots.txt" -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".\asset-manifest.json" -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".\*.png" -Force -ErrorAction SilentlyContinue

Write-Host "Despliegue completado y archivos temporales eliminados."
