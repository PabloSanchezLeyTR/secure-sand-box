#!/bin/bash
# Limpieza de jq de npm y asegurarse de tener el binario correcto

set -e

# 1. Desinstalar jq de npm si existe
echo "Desinstalando jq de npm si existe..."
npm uninstall -g jq || true

# 2. Buscar y mostrar cualquier jq de node_modules
find / -name jq -type f 2>/dev/null | grep node_modules || true

# 3. Instalar jq binario si no existe o si la versión no es la correcta
if ! command -v jq &> /dev/null || jq --version 2>&1 | grep -qi 'npm'; then
  echo "Instalando jq binario..."
  if command -v brew &> /dev/null; then
    brew install jq
  elif command -v apt-get &> /dev/null; then
    sudo apt-get update && sudo apt-get install -y jq
  else
    echo "No se pudo instalar jq automáticamente."
    exit 1
  fi
fi

# 4. Mostrar la versión y ruta final de jq
which jq
jq --version
