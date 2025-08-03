@echo off
echo ========================================
echo  RayzeCraft Launcher - Instalador
echo ========================================
echo.

echo [1/3] Verificando Python...
python --version >nul 2>&1
if errorlevel 1 (
    echo ERRO: Python nao encontrado!
    echo Por favor, instale o Python 3.8+ antes de continuar.
    pause
    exit /b 1
)

echo [2/3] Instalando dependencias...
pip install -r requirements.txt

echo [3/3] Instalacao concluida!
echo.
echo Para executar o launcher, execute:
echo python rayze_launcher.py
echo.
pause
