@echo off
color 0A
echo ========================================
echo    RayzeCraft Launcher v2.0 - Setup
echo ========================================
echo.

echo [INFO] Verificando Python...
py --version >nul 2>&1
if errorlevel 1 (
    echo [AVISO] Python nao encontrado no sistema!
    echo.
    echo Voce precisa instalar Python 3.8+ para usar este launcher.
    echo.
    echo Opcoes:
    echo 1. Baixar Python do site oficial: https://python.org
    echo 2. Instalar via Microsoft Store
    echo 3. Usar winget: winget install Python.Python.3
    echo.
    echo Apos instalar Python, execute este script novamente.
    echo.
    pause
    exit /b 1
)

echo [OK] Python encontrado!
py --version

echo.
echo [INFO] Instalando dependencias...
py -m pip install customtkinter requests Pillow

if errorlevel 1 (
    echo [ERRO] Falha na instalacao das dependencias!
    echo Tente executar como administrador.
    pause
    exit /b 1
)

echo.
echo [OK] Instalacao concluida com sucesso!
echo.
echo ========================================
echo Para executar o launcher:
echo 1. Clique duplo em 'run_launcher.bat'
echo 2. Ou execute: py rayze_launcher.py
echo ========================================
echo.
pause
