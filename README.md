# ⚡ RayzeCraft Launcher v2.0 - Minecraft 1.20.1 ⚡

![RayzeCraft](https://img.shields.io/badge/Minecraft-1.20.1-green.svg)
![Forge](https://img.shields.io/badge/Forge-47.2.0-orange.svg)
![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

Um launcher moderno e elegante para o servidor RayzeCraft, agora compatível com **Minecraft 1.20.1**!

## ✨ Características

- 🎮 **Interface Neon**: Design moderno com efeitos visuais impressionantes
- 🚀 **Performance Otimizada**: JVM arguments otimizados para Minecraft 1.20.1
- 🔧 **Configuração Automática**: Detecta automaticamente a RAM do sistema
- 🌍 **Planeta Interativo**: Animação 4K realista da Terra
- 📦 **Modpack Completo**: Inclui todos os mods necessários para o servidor
- 🛡️ **Segurança**: Proteções contra vulnerabilidades Log4j

## 📋 Requisitos

### Sistema
- **Windows 10/11** (64-bit recomendado)
- **Java 17+** (obrigatório para Minecraft 1.20.1)
- **4GB RAM** mínimo (8GB+ recomendado)
- **Conexão com internet** para downloads

### Dependências Python
- Python 3.8+
- customtkinter
- requests
- Pillow (PIL)
- psutil

## 🚀 Instalação Rápida

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/rayzecraft-launcher.git
   cd rayzecraft-launcher
   ```

2. **Instale as dependências:**
   ```bash
   pip install -r requirements.txt
   ```
   *Ou execute: `setup_complete.bat`*

3. **Execute o launcher:**
   ```bash
   python rayze_launcher_neon.py
   ```

## 📁 Estrutura do Projeto

```
RayzeCraft-Launcher/
├── rayze_launcher_neon.py          # Launcher principal (1.20.1)
├── rayze_launcher_neon_1.20.1.py   # Versão específica 1.20.1
├── launcher_config.json            # Configurações do launcher
├── requirements.txt                # Dependências Python
├── install.bat                     # Instalador automático
├── setup_complete.bat              # Setup completo das dependências
├── config/                         # Configurações dos mods
├── mods/                          # Mods para Minecraft 1.20.1
├── kubejs/                        # Scripts KubeJS
├── shaderpacks/                   # Shaders inclusos
├── resourcepacks/                 # Resource packs
├── fancymenu_data/               # Dados do FancyMenu
└── MUDANÇAS_VERSAO_1.20.1.txt   # Changelog detalhado

```

## 🎮 Mods Inclusos

### Core Mods
- **Minecraft Forge 47.2.0**
- **KubeJS** - Personalização avançada
- **FancyMenu** - Menus customizados
- **JEI (Just Enough Items)** - Receitas e itens

### Tecnologia & Magia
- **Ars Nouveau** - Sistema de magia
- **Create** - Automação e engenharia
- **Applied Energistics 2** - Armazenamento digital
- **Thermal Series** - Máquinas e energia
- **Mekanism** - Processamento avançado

### Mundo & Exploração
- **Biomes O' Plenty** - Novos biomas
- **Waystones** - Pontos de viagem
- **Xaero's Minimap** - Minimapa avançado

### Qualidade de Vida
- **JourneyMap** - Mapa completo
- **Mouse Tweaks** - Melhorias de inventário
- **HWYLA** - Informações de blocos

*E muitos outros! Veja a pasta `mods/` para a lista completa.*

## ⚙️ Configuração

### Primeira Execução
1. Execute o launcher
2. Digite seu nickname (3-16 caracteres)
3. Configure a quantidade de RAM desejada
4. Aguarde o download automático dos arquivos

### Configurações Avançadas
- **RAM**: Ajuste através das configurações (recomendado: 4-8GB)
- **Java**: O launcher detecta automaticamente o Java instalado
- **Diretório**: Personalize o local de instalação

## 🔧 Solução de Problemas

### Erros Comuns

**"Java 17+ não encontrado"**
- Baixe e instale o Java 17+ da Oracle ou OpenJDK
- Certifique-se de que está no PATH do sistema

**"Erro ao baixar arquivos"**
- Verifique sua conexão com a internet
- Tente executar como administrador
- Verifique se o antivírus não está bloqueando

**"Jogo não inicia"**
- Verifique se tem RAM suficiente disponível
- Confirme que todos os arquivos foram baixados
- Consulte o arquivo `launcher_log.txt`

## 📝 Changelog v2.0

### 🆕 Novidades
- ✅ **Minecraft 1.20.1** - Atualização completa
- ✅ **Forge 47.2.0** - Versão mais recente
- ✅ **Modpack Atualizado** - Todos os mods compatíveis
- ✅ **Performance Melhorada** - JVM arguments otimizados
- ✅ **Segurança** - Proteções Log4j atualizadas

### 🔄 Alterações
- 🔧 **LWJGL 3.3.1** (atualizado de 2.9.4)
- 🔧 **G1GC** (substituiu ConcMarkSweepGC)
- 🔧 **Java Runtime Gamma** (novo sistema)
- 🔧 **Bootstrap Launcher** (novo sistema de inicialização)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Suporte

- **Discord**: [RayzeCraft Official](https://discord.gg/rayzecraft)
- **Website**: [www.rayzecraft.com](http://www.rayzecraft.com)
- **Issues**: [GitHub Issues](https://github.com/seu-usuario/rayzecraft-launcher/issues)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎯 Próximas Atualizações

- [ ] Sistema de autenticação Microsoft
- [ ] Auto-updater para mods
- [ ] Perfis múltiplos
- [ ] Integração com Discord RPC
- [ ] Sistema de backup de mundos

---

**Desenvolvido com ❤️ por Delatro para a comunidade RayzeCraft**

*Última atualização: Agosto 2025*
