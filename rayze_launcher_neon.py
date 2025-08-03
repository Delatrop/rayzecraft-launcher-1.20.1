try:
    import customtkinter as ctk
    import tkinter as tk
    from tkinter import messagebox
    import requests
    import zipfile
    import os
    import shutil
    import threading
    import logging
    from datetime import datetime
    import sys
    import psutil
    import math
    import random
    import time
    from PIL import Image, ImageDraw, ImageTk, ImageFilter, ImageEnhance
except ImportError as e:
    print(f"Erro: Dependência não encontrada - {e}")
    print("Execute 'setup_complete.bat' para instalar as dependências.")
    input("Pressione Enter para sair...")
    sys.exit(1)

# Configuração do CustomTkinter
ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("blue")

class RayzeCraftLauncher:
    def __init__(self):
        self.root = ctk.CTk()
        self.root.title("RayzeCraft Launcher v2.0")
        self.root.geometry("950x750")
        self.root.resizable(False, False)
        
            # Fundo modernizado com transparência sutil
        self.root.attributes('-alpha', 0.95)
        
        # Detectar RAM do sistema
        self.detect_system_ram()
        
        # Setup do logging
        self.setup_logging()
        
        # Configurações
        self.config_file = "launcher_config.json"
        self.config = {
            "game_directory": "C://rayzecraft//rayzecraft-launcher-1.20.1-main",
            "download_url": "https://github.com/Delatrop/rayzecraft-launcher-1.20.1/archive/refs/heads/main.zip",
            "temp_zip": "rayzecraft-launcher-1.20.1-main.zip",
            "player_name": "",
            "ram": str(self.default_ram),
            "theme": "dark"
        }
        
        # Carregar configurações salvas
        self.load_config()
        
        # Variáveis de controle
        self.is_downloading = False
        self.main_interface_loaded = False
        
        # Mostrar tela de seleção de nick primeiro
        self.show_nick_selection()
        
    def detect_system_ram(self):
        """Detecta a quantidade de RAM disponível no sistema"""
        try:
            total_memory_bytes = psutil.virtual_memory().total
            total_memory_mb = total_memory_bytes // (1024 * 1024)
            
            self.min_ram = 1024
            self.max_ram = int(total_memory_mb * 0.75)
            self.total_ram = total_memory_mb
            self.default_ram = min(self.max_ram // 2, 2048)
            
            if self.default_ram < self.min_ram:
                self.default_ram = self.min_ram
            
            print(f"🖥️ RAM detectada: {total_memory_mb}MB total")
            print(f"📊 Limites configurados: {self.min_ram}MB - {self.max_ram}MB")
            print(f"⚡ RAM padrão: {self.default_ram}MB")
            
        except Exception as e:
            print(f"⚠️ Erro ao detectar RAM: {e}")
            self.min_ram = 1024
            self.max_ram = 8192
            self.default_ram = 2048
            self.total_ram = 8192
        
    def setup_logging(self):
        """Configura o sistema de logging"""
        logging.basicConfig(
            filename='launcher_log.txt',
            level=logging.INFO,
            format='%(asctime)s - %(message)s',
            datefmt='%Y-%m-%d %H:%M:%S'
        )
        self.logger = logging.getLogger(__name__)
        
    def load_config(self):
        """Carrega configurações do arquivo JSON"""
        try:
            if os.path.exists(self.config_file):
                import json
                with open(self.config_file, 'r', encoding='utf-8') as f:
                    saved_config = json.load(f)
                    for key, value in saved_config.items():
                        if key in self.config:
                            self.config[key] = value
                self.logger.info("Configurações carregadas com sucesso")
            else:
                self.logger.info("Arquivo de configuração não encontrado, usando padrões")
        except Exception as e:
            self.logger.error(f"Erro ao carregar configurações: {str(e)}")

    def init_planet(self):
        """Inicializa as variáveis do planeta 3D"""
        self.planet_rotation_x = 0
        self.planet_rotation_y = 0
        self.planet_size = 80
        self.planet_health = 100
        self.crack_positions = []
        self.explosion_particles = []
        self.is_exploding = False
        self.animation_running = True
        
    def create_earth_texture(self):
        """Cria uma textura realista da Terra em qualidade 4K usando PIL"""
        size = self.planet_size * 3  # Aumentar resolução para 4K
        
        # Criar imagem base de alta resolução
        earth_image = Image.new('RGB', (size, size), (5, 5, 15))  # Espaço escuro
        draw = ImageDraw.Draw(earth_image)
        
        # === FUNDO DO ESPAÇO COM NEBULOSAS ===
        # Criar fundo estrelado mais realista
        for _ in range(800):  # Mais estrelas para efeito 4K
            star_x = random.randint(0, size)
            star_y = random.randint(0, size)
            star_brightness = random.randint(50, 255)
            star_size = random.choice([1, 1, 1, 2, 3])  # Estrelas de tamanhos variados
            
            # Estrelas pequenas
            if star_size == 1:
                draw.point((star_x, star_y), fill=(star_brightness, star_brightness, star_brightness))
            else:
                # Estrelas maiores com brilho
                for i in range(star_size):
                    brightness = max(20, star_brightness - i * 40)
                    draw.ellipse([
                        star_x - i//2, star_y - i//2,
                        star_x + i//2, star_y + i//2
                    ], fill=(brightness, brightness, brightness))
        
        # Nebulosa sutil no fundo
        for _ in range(50):
            nebula_x = random.randint(0, size)
            nebula_y = random.randint(0, size)
            nebula_size = random.randint(20, 80)
            nebula_color = random.choice([
                (20, 5, 40),   # Púrpura
                (5, 20, 40),   # Azul escuro
                (40, 5, 20),   # Vermelho escuro
            ])
            
            draw.ellipse([
                nebula_x - nebula_size, nebula_y - nebula_size,
                nebula_x + nebula_size, nebula_y + nebula_size
            ], fill=nebula_color)
        
        # === BASE OCEÂNICA REALISTA ===
        # Oceano com gradiente e profundidade
        ocean_center_x, ocean_center_y = size//2, size//2
        ocean_radius = size//2 - 8
        
        # Múltiplas camadas oceânicas para profundidade
        ocean_layers = [
            (ocean_radius, (15, 82, 186)),      # Oceano profundo
            (ocean_radius-2, (25, 105, 180)),   # Oceano médio
            (ocean_radius-4, (35, 125, 200)),   # Oceano superficial
        ]
        
        for radius, color in ocean_layers:
            draw.ellipse([
                ocean_center_x - radius, ocean_center_y - radius,
                ocean_center_x + radius, ocean_center_y + radius
            ], fill=color)
        
        # === CONTINENTES REALISTAS ===
        # Dados aproximados dos continentes (posições relativas)
        continents_data = [
            # América do Norte
            {
                'regions': [
                    {'pos': (size*0.25, size*0.3), 'size': 35, 'type': 'forest'},
                    {'pos': (size*0.2, size*0.35), 'size': 25, 'type': 'plains'},
                    {'pos': (size*0.3, size*0.25), 'size': 20, 'type': 'mountains'},
                ]
            },
            # América do Sul
            {
                'regions': [
                    {'pos': (size*0.28, size*0.55), 'size': 30, 'type': 'rainforest'},
                    {'pos': (size*0.25, size*0.65), 'size': 20, 'type': 'plains'},
                    {'pos': (size*0.32, size*0.6), 'size': 15, 'type': 'mountains'},
                ]
            },
            # Europa
            {
                'regions': [
                    {'pos': (size*0.52, size*0.28), 'size': 20, 'type': 'temperate'},
                    {'pos': (size*0.48, size*0.32), 'size': 15, 'type': 'plains'},
                ]
            },
            # África
            {
                'regions': [
                    {'pos': (size*0.55, size*0.45), 'size': 25, 'type': 'desert'},
                    {'pos': (size*0.52, size*0.55), 'size': 20, 'type': 'savanna'},
                    {'pos': (size*0.48, size*0.5), 'size': 18, 'type': 'rainforest'},
                ]
            },
            # Ásia
            {
                'regions': [
                    {'pos': (size*0.65, size*0.3), 'size': 35, 'type': 'temperate'},
                    {'pos': (size*0.7, size*0.25), 'size': 25, 'type': 'tundra'},
                    {'pos': (size*0.75, size*0.35), 'size': 20, 'type': 'desert'},
                ]
            },
            # Oceania/Austrália
            {
                'regions': [
                    {'pos': (size*0.72, size*0.65), 'size': 18, 'type': 'desert'},
                    {'pos': (size*0.75, size*0.68), 'size': 12, 'type': 'temperate'},
                ]
            },
        ]
        
        # Paleta de cores por tipo de terreno
        terrain_colors = {
            'forest': (34, 139, 34),         # Verde floresta
            'rainforest': (0, 100, 0),       # Verde escuro
            'plains': (107, 142, 35),        # Verde oliva
            'mountains': (139, 90, 43),      # Marrom montanha
            'desert': (238, 203, 173),       # Bege deserto
            'savanna': (189, 183, 107),      # Verde amarelado
            'temperate': (85, 140, 70),      # Verde temperado
            'tundra': (176, 196, 222),       # Azul gelo
        }
        
        # Desenhar continentes com detalhes
        for continent in continents_data:
            for region in continent['regions']:
                x, y = region['pos']
                size_var = region['size']
                terrain_type = region['type']
                base_color = terrain_colors[terrain_type]
                
                # Adicionar variação natural na cor
                color_variation = random.randint(-30, 30)
                varied_color = tuple(max(0, min(255, c + color_variation)) for c in base_color)
                
                # Desenhar região principal
                draw.ellipse([
                    x - size_var, y - size_var,
                    x + size_var, y + size_var
                ], fill=varied_color)
                
                # Adicionar detalhes menores para realismo
                for _ in range(random.randint(3, 8)):
                    detail_x = x + random.randint(-size_var//2, size_var//2)
                    detail_y = y + random.randint(-size_var//2, size_var//2)
                    detail_size = random.randint(3, size_var//3)
                    
                    # Cor ligeiramente diferente para detalhes
                    detail_color = tuple(max(0, min(255, c + random.randint(-20, 20))) for c in varied_color)
                    
                    draw.ellipse([
                        detail_x - detail_size, detail_y - detail_size,
                        detail_x + detail_size, detail_y + detail_size
                    ], fill=detail_color)
        
        # === SISTEMAS DE NUVENS REALÍSTICOS ===
        # Camadas de nuvens com diferentes altitudes
        cloud_systems = [
            {'count': 40, 'size_range': (15, 35), 'opacity': 180, 'color': (255, 255, 255)},  # Nuvens altas
            {'count': 25, 'size_range': (20, 45), 'opacity': 120, 'color': (240, 248, 255)},  # Nuvens médias
            {'count': 15, 'size_range': (30, 60), 'opacity': 80, 'color': (220, 230, 255)},   # Nuvens baixas
        ]
        
        # Criar camada transparente para nuvens
        cloud_layer = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        cloud_draw = ImageDraw.Draw(cloud_layer)
        
        for system in cloud_systems:
            for _ in range(system['count']):
                # Garantir que as nuvens ficam sobre o planeta
                distance_from_center = random.randint(0, ocean_radius - 30)
                angle = random.uniform(0, 2 * math.pi)
                cloud_x = ocean_center_x + int(distance_from_center * math.cos(angle))
                cloud_y = ocean_center_y + int(distance_from_center * math.sin(angle))
                
                cloud_size = random.randint(*system['size_range'])
                r, g, b = system['color']
                cloud_color = (r, g, b, system['opacity'])
                
                # Desenhar nuvem com formato mais orgânico
                for i in range(3):
                    offset_x = random.randint(-cloud_size//4, cloud_size//4)
                    offset_y = random.randint(-cloud_size//4, cloud_size//4)
                    sub_size = cloud_size - i * 5
                    
                    cloud_draw.ellipse([
                        cloud_x + offset_x - sub_size//2, cloud_y + offset_y - sub_size//2,
                        cloud_x + offset_x + sub_size//2, cloud_y + offset_y + sub_size//2
                    ], fill=cloud_color)
        
        # === CALOTAS POLARES DETALHADAS ===
        # Polo Norte
        north_pole_size = 25
        draw.ellipse([
            ocean_center_x - north_pole_size, ocean_center_y - ocean_radius + 5,
            ocean_center_x + north_pole_size, ocean_center_y - ocean_radius + 5 + north_pole_size*2
        ], fill=(240, 248, 255))
        
        # Detalhes do gelo no polo norte
        for _ in range(8):
            ice_x = ocean_center_x + random.randint(-north_pole_size//2, north_pole_size//2)
            ice_y = ocean_center_y - ocean_radius + 10 + random.randint(0, north_pole_size)
            ice_size = random.randint(3, 8)
            ice_brightness = random.randint(220, 255)
            draw.ellipse([
                ice_x - ice_size, ice_y - ice_size,
                ice_x + ice_size, ice_y + ice_size
            ], fill=(ice_brightness, ice_brightness, 255))
        
        # Polo Sul
        south_pole_size = 20
        draw.ellipse([
            ocean_center_x - south_pole_size, ocean_center_y + ocean_radius - 5 - south_pole_size*2,
            ocean_center_x + south_pole_size, ocean_center_y + ocean_radius - 5
        ], fill=(230, 240, 250))
        
        # === ATMOSFERA E BRILHO ===
        # Criar gradiente atmosférico
        atmosphere_layer = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        atm_draw = ImageDraw.Draw(atmosphere_layer)
        
        # Múltiplas camadas atmosféricas
        for i in range(10):
            alpha = max(5, 40 - i * 4)
            radius = ocean_radius + i * 2
            atm_draw.ellipse([
                ocean_center_x - radius, ocean_center_y - radius,
                ocean_center_x + radius, ocean_center_y + radius
            ], outline=(135, 206, 235, alpha), width=2)  # Azul céu
        
        # Compor todas as camadas
        earth_image = earth_image.convert('RGBA')
        earth_image = Image.alpha_composite(earth_image, cloud_layer)
        earth_image = Image.alpha_composite(earth_image, atmosphere_layer)
        
        # === MÁSCARA CIRCULAR SUAVE ===
        # Criar máscara com borda suave (anti-aliasing)
        mask = Image.new('L', (size, size), 0)
        mask_draw = ImageDraw.Draw(mask)
        
        # Múltiplas camadas para suavizar a borda
        for i in range(5):
            alpha = 255 - i * 30
            radius = ocean_radius - i
            mask_draw.ellipse([
                ocean_center_x - radius, ocean_center_y - radius,
                ocean_center_x + radius, ocean_center_y + radius
            ], fill=alpha)
        
        # Aplicar máscara
        earth_image.putalpha(mask)
        
        # === FILTROS DE QUALIDADE 4K ===
        # Aplicar múltiplos filtros para melhorar a qualidade
        earth_image = earth_image.filter(ImageFilter.SMOOTH_MORE)
        earth_image = earth_image.filter(ImageFilter.DETAIL)
        
        # Melhorar contraste e saturação
        enhancer = ImageEnhance.Contrast(earth_image)
        earth_image = enhancer.enhance(1.2)
        
        enhancer = ImageEnhance.Color(earth_image)
        earth_image = enhancer.enhance(1.1)
        
        # Converter de volta para RGB para compatibilidade
        final_image = Image.new('RGB', (size, size), (0, 0, 0))
        final_image.paste(earth_image, (0, 0), earth_image)
        
        return final_image
    
    def draw_planet(self):
        """Desenha um planeta Terra 4K realista no Canvas"""
        if not hasattr(self, 'canvas_planet'):
            return
            
        self.canvas_planet.delete("all")
        
        # Centro do canvas
        center_x = 280
        center_y = 90
        
        if not self.is_exploding:
            # Criar textura da Terra se não existir ou se a saúde mudou significativamente
            if not hasattr(self, 'earth_texture') or not hasattr(self, 'last_health_state'):
                self.earth_texture = self.create_earth_texture()
                self.last_health_state = self.planet_health
            elif abs(self.planet_health - self.last_health_state) > 20:
                self.earth_texture = self.create_earth_texture()
                self.last_health_state = self.planet_health
            
            # Converter PIL para PhotoImage
            rotated_earth = self.earth_texture.rotate(self.planet_rotation_x * 0.5)
            
            # Aplicar efeitos baseados na saúde
            health_ratio = self.planet_health / 100.0
            if health_ratio < 0.7:
                # Aplicar filtro vermelho para dano
                enhancer = ImageEnhance.Color(rotated_earth)
                if health_ratio > 0.4:
                    rotated_earth = enhancer.enhance(1.3)  # Mais saturado
                else:
                    # Planeta crítico - mais vermelho
                    red_filter = Image.new('RGBA', rotated_earth.size, (255, 100, 100, 50))
                    rotated_earth = Image.alpha_composite(rotated_earth.convert('RGBA'), red_filter)
            
            self.earth_photo = ImageTk.PhotoImage(rotated_earth)
            
            # Desenhar a Terra
            self.canvas_planet.create_image(
                center_x, center_y, 
                image=self.earth_photo
            )
            
            # Efeito de atmosfera (anel azul claro)
            atmosphere_size = self.planet_size + 8
            self.canvas_planet.create_oval(
                center_x - atmosphere_size, center_y - atmosphere_size,
                center_x + atmosphere_size, center_y + atmosphere_size,
                outline="#87CEEB", width=2, fill=""
            )
            
            # Brilho solar (luz vinda da direita)
            sun_angle = math.radians(45)  # Sol a 45 graus
            sun_x = center_x + int((self.planet_size + 15) * math.cos(sun_angle))
            sun_y = center_y - int((self.planet_size + 15) * math.sin(sun_angle))
            
            # Gradiente de luz solar
            for i in range(3):
                intensity = 150 - (i * 30)
                color = f"#{intensity:02x}{intensity:02x}00"  # Amarelo dourado
                self.canvas_planet.create_oval(
                    sun_x - (5 + i*2), sun_y - (5 + i*2),
                    sun_x + (5 + i*2), sun_y + (5 + i*2),
                    fill=color, outline=""
                )
            
            # Desenhar rachaduras como raios vermelhos
            for crack in self.crack_positions:
                start_x = center_x + crack['x']
                start_y = center_y + crack['y']
                end_x = start_x + crack['dx']
                end_y = start_y + crack['dy']
                
                # Rachadura principal
                self.canvas_planet.create_line(
                    start_x, start_y, end_x, end_y,
                    fill="#ff3333", width=4
                )
                # Brilho da rachadura
                self.canvas_planet.create_line(
                    start_x, start_y, end_x, end_y,
                    fill="#ffaaaa", width=2
                )
            
        else:
            # Animação de explosão épica
            for particle in self.explosion_particles:
                # Partículas com brilho
                self.canvas_planet.create_oval(
                    particle['x'] - particle['size'], particle['y'] - particle['size'],
                    particle['x'] + particle['size'], particle['y'] + particle['size'],
                    fill=particle['color'], outline="#ffffff", width=1
                )
                
                # Rastro da partícula
                trail_x = particle['x'] - particle['vx'] * 3
                trail_y = particle['y'] - particle['vy'] * 3
                self.canvas_planet.create_line(
                    particle['x'], particle['y'], trail_x, trail_y,
                    fill=particle['color'], width=2
                )
            
            # Efeito de explosão central
            explosion_size = 40 + int(20 * math.sin(time.time() * 10))
            self.canvas_planet.create_oval(
                center_x - explosion_size, center_y - explosion_size,
                center_x + explosion_size, center_y + explosion_size,
                fill="#ffff00", outline="#ff0000", width=3
            )
                
        # Atualizar rotação automaticamente
        if self.animation_running:
            self.planet_rotation_x += 0.5  # Rotação mais suave
            self.planet_rotation_y += 0.2
            
            # Atualizar partículas de explosão
            if self.is_exploding:
                for particle in self.explosion_particles[:]:
                    particle['x'] += particle['vx']
                    particle['y'] += particle['vy']
                    particle['life'] -= 0.02
                    particle['vy'] += 0.1  # Gravidade
                    if particle['life'] <= 0:
                        self.explosion_particles.remove(particle)
            
            self.canvas_planet.after(50, self.draw_planet)  # 20 FPS
            
    def save_config(self):
        """Salva as configurações no arquivo JSON"""
        try:
            import json
            with open(self.config_file, 'w', encoding='utf-8') as f:
                json.dump(self.config, f, indent=4, ensure_ascii=False)
            self.logger.info("Configurações salvas com sucesso")
        except Exception as e:
            self.logger.error(f"Erro ao salvar configurações: {str(e)}")
        
    def create_neon_button(self, parent, text, command, width=200, height=50, 
                              fg_color="#00ff88", hover_color="#00cc66", 
                              border_color="#00ffaa", text_color="white"):
        """Cria um botão com efeito neon simples (sem animação RGB)"""
        button = ctk.CTkButton(
            parent,
            text=text,
            font=ctk.CTkFont(size=16, weight="bold"),
            width=width,
            height=height,
            fg_color=fg_color,
            hover_color=hover_color,
            text_color=text_color,
            corner_radius=25,
            border_width=3,
            border_color=border_color,
            command=command
        )
        return button
        
    def create_rgb_frame(self, parent, width, height, corner_radius=25, fg_color="#0a0a1a"):
        """Cria um frame com animação RGB em onda ao redor da borda"""
        import math
        
        frame = ctk.CTkFrame(
            parent,
            width=width,
            height=height,
            corner_radius=corner_radius,
            fg_color=fg_color,
            border_width=4,
            border_color="#ff0000"  # Cor inicial
        )
        
        # Variáveis para a animação
        animation_data = {
            'phase': 0,
            'speed': 0.1
        }
        
        def animate_rgb_border():
            # Calcular a cor baseada na fase da onda
            phase = animation_data['phase']
            
            # Criar cores RGB usando funções seno para efeito de onda
            red = int(127.5 * (1 + math.sin(phase)))
            green = int(127.5 * (1 + math.sin(phase + 2 * math.pi / 3)))
            blue = int(127.5 * (1 + math.sin(phase + 4 * math.pi / 3)))
            
            # Converter para hexadecimal
            color = f"#{red:02x}{green:02x}{blue:02x}"
            
            # Aplicar a cor à borda
            frame.configure(border_color=color)
            
            # Incrementar a fase para o próximo frame
            animation_data['phase'] += animation_data['speed']
            if animation_data['phase'] > 2 * math.pi:
                animation_data['phase'] = 0
            
            # Agendar próxima atualização
            frame.after(50, animate_rgb_border)  # 20 FPS
        
        # Iniciar animação
        animate_rgb_border()
        
        return frame
        
    def show_nick_selection(self):
        """Tela de seleção de nick com design neon"""
        # Limpar a janela
        for widget in self.root.winfo_children():
            widget.destroy()
            
        # Título principal com efeito neon
        title_label = ctk.CTkLabel(
            self.root,
            text="⚡ RAYZE CRAFT ⚡",
            font=ctk.CTkFont(size=42, weight="bold"),
            text_color="#00ffff"  # Ciano brilhante
        )
        title_label.pack(pady=40)
        
        # Subtítulo com glow effect
        subtitle_label = ctk.CTkLabel(
            self.root,
            text="━━━━━━━━ Criado por Delatro ━━━━━━━━",
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color="#ff00ff"  # Magenta brilhante
        )
        subtitle_label.pack(pady=10)
        
        # Mensagem de boas-vindas
        welcome_label = ctk.CTkLabel(
            self.root,
            text="Digite seu nickname para entrar no melhor universo",
            font=ctk.CTkFont(size=16),
            text_color="#ffffff"
        )
        welcome_label.pack(pady=20)
        
        # Frame principal com bordas neon
        nick_frame = ctk.CTkFrame(
            self.root, 
            width=600, 
            height=350, 
            corner_radius=30,
            fg_color="#0a0a1a",
            border_width=4,
            border_color="#00ffff"
        )
        nick_frame.pack(pady=30, padx=50)
        nick_frame.pack_propagate(False)
        
        # Ícone de usuário
        user_icon = ctk.CTkLabel(
            nick_frame,
            text="Bem Vindo ao Rayze!!",
            font=ctk.CTkFont(size=48),
            text_color="#00ff88"
        )
        user_icon.pack(pady=20)
        
        # Campo de entrada com efeito neon
        self.nick_entry = ctk.CTkEntry(
            nick_frame,
            width=400,
            height=60,
            font=ctk.CTkFont(size=20, weight="bold"),
            placeholder_text="Insira seu nome aqui...",
            corner_radius=30,
            fg_color="#1a1a2e",
            border_color="#00ffff",
            border_width=3,
            text_color="#ffffff",
            placeholder_text_color="#888888"
        )
        self.nick_entry.pack(pady=20)
        self.nick_entry.focus()
        
        # Bind Enter key
        self.nick_entry.bind("<Return>", lambda event: self.validate_nick())
        
        # Botão continuar com efeito neon
        continue_button = self.create_neon_button(
            nick_frame,
            "✨ ENTRAR NA NOSSA FAMILIA",
            self.validate_nick,
            width=400,
            height=70,
            fg_color="#ff00ff",
            hover_color="#cc00cc",
            border_color="#ff44ff"
        )
        continue_button.pack(pady=20)
        
        # Aviso com cores neon
        warning_label = ctk.CTkLabel(
            self.root,
            text="⚠️ Nickname: 3-16 caracteres (letras, números e _)",
            font=ctk.CTkFont(size=12),
            text_color="#ffaa00"
        )
        warning_label.pack(pady=20)
        
        # Footer neon
        footer_nick = ctk.CTkLabel(
            self.root,
            text="━━━━━ RayzeCraft Edição v1.0 ━━━━━",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color="#00ff88"
        )
        footer_nick.pack(pady=20)
        
    def validate_nick(self):
        """Valida o nickname inserido"""
        nickname = self.nick_entry.get().strip()
        
        if len(nickname) < 3:
            messagebox.showerror("❌ Erro", "O nickname deve ter pelo menos 3 caracteres!")
            return
            
        if len(nickname) > 16:
            messagebox.showerror("❌ Erro", "O nickname deve ter no máximo 16 caracteres!")
            return
            
        import re
        if not re.match("^[a-zA-Z0-9_]+$", nickname):
            messagebox.showerror("❌ Erro", "O nickname pode conter apenas letras, números e underscore (_)!")
            return
            
        self.config["player_name"] = nickname
        self.logger.info(f"Nickname definido: {nickname}")
        
        messagebox.showinfo("🎉 Bem-vindo!", f"Olá, {nickname}!\nBem-vindo ao RayzeCraft!")
        
        self.show_main_launcher()
        
    def rotate_planet(self, event):
        """Gira o planeta baseado na movimentação do mouse"""
        if hasattr(self, 'last_mouse_x') and hasattr(self, 'last_mouse_y'):
            dx = event.x - self.last_mouse_x
            dy = event.y - self.last_mouse_y
            self.planet_rotation_x += dx * 2
            self.planet_rotation_y += dy * 2
        
        self.last_mouse_x = event.x
        self.last_mouse_y = event.y
    
    def click_planet(self, event):
        """Interage com o planeta ao clicar"""
        if not self.is_exploding:
            # Reduzir saúde do planeta
            self.planet_health -= 10
            
            # Adicionar rachadura
            crack = {
                'x': random.randint(-self.planet_size, self.planet_size),
                'y': random.randint(-self.planet_size, self.planet_size),
                'dx': random.randint(-30, 30),
                'dy': random.randint(-30, 30)
            }
            self.crack_positions.append(crack)
            
            # Verificar se o planeta deve explodir
            if self.planet_health <= 0:
                self.explode_planet()
            
        self.last_mouse_x = event.x
        self.last_mouse_y = event.y
    
    def hover_planet(self, event):
        """Efeito ao passar o mouse sobre o planeta"""
        # Alterar cursor quando sobre o planeta
        center_x = 280  # Centro do canvas
        center_y = 90
        distance = math.sqrt((event.x - center_x)**2 + (event.y - center_y)**2)
        
        if distance <= self.planet_size:
            self.canvas_planet.configure(cursor="hand2")
        else:
            self.canvas_planet.configure(cursor="")
    
    def explode_planet(self):
        """Inicia a explosão do planeta"""
        self.is_exploding = True
        
        # Criar partículas de explosão
        for _ in range(20):
            particle = {
                'x': 280 + random.randint(-self.planet_size, self.planet_size),
                'y': 90 + random.randint(-self.planet_size, self.planet_size),
                'vx': random.uniform(-5, 5),
                'vy': random.uniform(-5, 5),
                'size': random.randint(3, 8),
                'life': 1.0,
                'color': random.choice(['#ff4444', '#ff8844', '#ffaa44', '#ffffff'])
            }
            self.explosion_particles.append(particle)
        
        # Mostrar mensagem
        messagebox.showinfo("💥 KABOOM!", "Planeta destruído!\n\nClique novamente para restaurar.")
        
        # Agendar restauração
        self.canvas_planet.after(3000, self.restore_planet)
    
    def restore_planet(self):
        """Restaura o planeta após a explosão"""
        self.is_exploding = False
        self.planet_health = 100
        self.crack_positions = []
        self.explosion_particles = []
    def show_main_launcher(self):
        """Mostra o launcher principal com design neon"""
        # Limpar a janela
        for widget in self.root.winfo_children():
            widget.destroy()
            
        self.setup_neon_ui()
        self.check_game_status()
        self.main_interface_loaded = True
        
    def setup_neon_ui(self):
        """Interface principal redesenhada para imitar o launcher antigo"""
        
        # LAYOUT PRINCIPAL - 2 colunas como no launcher antigo
        main_container = ctk.CTkFrame(
            self.root,
            width=950,
            height=650,
            corner_radius=0,
            fg_color="transparent"
        )
        main_container.pack(fill="both", expand=True, padx=20, pady=20)
        main_container.pack_propagate(False)
        
        # === PAINEL ESQUERDO (35%) - Como no launcher antigo ===
        left_column = ctk.CTkFrame(
            main_container,
            width=320,
            height=650,
            corner_radius=15,
            fg_color="#0a0a0a",
            border_width=2,
            border_color="#333333"
        )
        left_column.pack(side="left", fill="y", padx=(0, 10))
        left_column.pack_propagate(False)
        
        # Logo do RayzeCraft (circular como no antigo)
        logo_container = ctk.CTkFrame(
            left_column,
            width=250,
            height=250,
            corner_radius=125,
            fg_color="#1a1a1a",
            border_width=4,
            border_color="#00ff00"
        )
        logo_container.pack(pady=40)
        logo_container.pack_propagate(False)
        
        # Logo image - Server Rayze
        try:
            from PIL import Image, ImageTk
            logo_path = "C:/Users/Delatro/Downloads/Server Rayze.png"
            if os.path.exists(logo_path):
                logo_image = Image.open(logo_path)
                logo_resized = logo_image.resize((200, 200), Image.Resampling.LANCZOS)
                logo_photo = ImageTk.PhotoImage(logo_resized)
                logo_label = ctk.CTkLabel(
                    logo_container,
                    image=logo_photo,
                    text=""
                )
                logo_label.image = logo_photo  # keep a reference
                logo_label.pack(expand=True)
            else:
                # Fallback para texto se a imagem não for encontrada
                logo_label = ctk.CTkLabel(
                    logo_container,
                    text="⚡\nRAYZE\nCRAFT\n⚡",
                    font=ctk.CTkFont(size=28, weight="bold"),
                    text_color="#00ff00",
                    justify="center"
                )
                logo_label.pack(expand=True)
        except Exception as e:
            print(f"[!] Erro ao carregar logo: {e}")
            # Fallback para texto em caso de erro
            logo_label = ctk.CTkLabel(
                logo_container,
                text="⚡\nRAYZE\nCRAFT\n⚡",
                font=ctk.CTkFont(size=28, weight="bold"),
                text_color="#00ff00",
                justify="center"
            )
            logo_label.pack(expand=True)

        # Versão/Info
        version_label = ctk.CTkLabel(
            left_column,
            text="Minecraft 1.20.1\nForge Edition",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color="#888888",
            justify="center"
        )
        version_label.pack(pady=20)
        
        # Status do jogo
        self.game_status_label = ctk.CTkLabel(
            left_column,
            text="✅ Pronto para Jogar",
            font=ctk.CTkFont(size=16, weight="bold"),
            text_color="#00ff00"
        )
        self.game_status_label.pack(pady=10)
        
        # BOTÃO VERDE GRANDE (principal do painel esquerdo)
        self.main_button = ctk.CTkButton(
            left_column,
            text="PRONTO PARA JOGAR",
            font=ctk.CTkFont(size=16, weight="bold"),
            width=280,
            height=70,
            fg_color="#00aa00",
            hover_color="#00cc00",
            text_color="white",
            corner_radius=10,
            border_width=2,
            border_color="#00ff00",
            command=self.main_action
        )
        self.main_button.pack(pady=30)
        
        # === PAINEL DIREITO (65%) - Como no launcher antigo ===
        right_column = ctk.CTkFrame(
            main_container,
            width=610,
            height=650,
            corner_radius=15,
            fg_color="#0f0f0f",
            border_width=2,
            border_color="#333333"
        )
        right_column.pack(side="right", fill="both", expand=True)
        right_column.pack_propagate(False)
        
        # Mensagem de boas-vindas (sem ícone duplicado)
        welcome_frame = ctk.CTkFrame(
            right_column,
            width=580,
            height=80,
            corner_radius=12,
            fg_color="#1a1a1a",
            border_width=2,
            border_color="#0066ff"
        )
        welcome_frame.pack(pady=30, padx=15)
        welcome_frame.pack_propagate(False)
        
        welcome_text = ctk.CTkLabel(
            welcome_frame,
            text=f"🎮 Bem-vindo de volta, {self.config.get('player_name', 'Player')}!",
            font=ctk.CTkFont(size=20, weight="bold"),
            text_color="#00ffff"
        )
        welcome_text.pack(expand=True)
        
        # Inicializar o planeta interativo
        self.init_planet()
        
        # Área do planeta 3D no painel direito
        planet_container = ctk.CTkFrame(
            right_column,
            width=580,
            height=200,
            corner_radius=15,
            fg_color="#000000",
            border_width=2,
            border_color="#444444"
        )
        planet_container.pack(pady=15, padx=15)
        planet_container.pack_propagate(False)
        
        # Canvas para o planeta
        self.canvas_planet = tk.Canvas(
            planet_container, 
            width=560, 
            height=180, 
            bg="#000000", 
            highlightthickness=0
        )
        self.canvas_planet.pack(pady=10)
        
        # Eventos de mouse para interação
        self.canvas_planet.bind('<B1-Motion>', self.rotate_planet)
        self.canvas_planet.bind('<Button-1>', self.click_planet)
        self.canvas_planet.bind('<Motion>', self.hover_planet)
        
        # Iniciar animação do planeta
        self.draw_planet()
        
        # TRÊS BOTÕES MENORES em linha horizontal
        buttons_frame = ctk.CTkFrame(
            right_column,
            width=580,
            height=80,
            corner_radius=8,
            fg_color="transparent"
        )
        buttons_frame.pack(pady=15, padx=15)
        buttons_frame.pack_propagate(False)
        
        # Botão Configurações
        self.settings_button = ctk.CTkButton(
            buttons_frame,
            text="⚙️ Configurações",
            font=ctk.CTkFont(size=12, weight="bold"),
            width=180,
            height=60,
            fg_color="#555555",
            hover_color="#777777",
            text_color="white",
            corner_radius=8,
            command=self.open_settings
        )
        self.settings_button.pack(side="left", padx=5)
        
        # Botão Verificar
        
        # Botão Atualizar
        update_button = ctk.CTkButton(
            buttons_frame,
            text="🔄 Atualizar",
            font=ctk.CTkFont(size=12, weight="bold"),
            width=180,
            height=60,
            fg_color="#9900cc",
            hover_color="#bb00ff",
            text_color="white",
            corner_radius=8,
            command=lambda: messagebox.showinfo("Info", "Sistema atualizado!")
        )
        update_button.pack(side="right", padx=5)
        
        # STATUS/PROGRESSO
        status_frame = ctk.CTkFrame(
            right_column,
            width=580,
            height=120,
            corner_radius=10,
            fg_color="#1a1a1a",
            border_width=2,
            border_color="#444444"
        )
        status_frame.pack(pady=15, padx=15)
        status_frame.pack_propagate(False)
        
        # Label de status
        self.status_label = ctk.CTkLabel(
            status_frame,
            text="🔍 Verificando status do jogo...",
            font=ctk.CTkFont(size=14, weight="bold"),
            text_color="#ffffff"
        )
        self.status_label.pack(pady=10)
        
        # Barra de progresso
        self.progress_bar = ctk.CTkProgressBar(
            status_frame,
            width=520,
            height=20,
            progress_color="#00aa00",
            fg_color="#333333",
            corner_radius=10
        )
        self.progress_bar.pack(pady=10)
        self.progress_bar.set(0)
        
        # Label de progresso
        self.progress_label = ctk.CTkLabel(
            status_frame,
            text="Pronto para iniciar sua aventura?",
            font=ctk.CTkFont(size=12),
            text_color="#cccccc"
        )
        self.progress_label.pack(pady=5)
        
        # RODAPÉ
        footer_frame = ctk.CTkFrame(
            right_column,
            width=580,
            height=60,
            corner_radius=8,
            fg_color="#111111",
            border_width=1,
            border_color="#333333"
        )
        footer_frame.pack(pady=10, padx=15, side="bottom")
        footer_frame.pack_propagate(False)
        
        # Texto do rodapé
        footer_text = ctk.CTkLabel(
            footer_frame,
            text="⚡ RayzeCraft edição v1.0 ⚡",
            font=ctk.CTkFont(size=12, weight="bold"),
            text_color="#00ccff"
        )
        footer_text.pack(expand=True)
        
    def check_game_status(self):
        """Verifica o status atual do jogo"""
        try:
            game_dir = self.config["game_directory"]
            
            # Verificar se o jogo foi baixado do GitHub
            if os.path.exists(game_dir):
                # Verificar se as pastas essenciais existem
                essential_dirs = ["config", "mods", "kubejs", "resourcepacks", "shaderpacks"]
                essential_files = ["rayze_launcher_neon.py", "launcher_config.json"]
                
                all_dirs_exist = all(os.path.exists(os.path.join(game_dir, d)) for d in essential_dirs)
                all_files_exist = all(os.path.exists(os.path.join(game_dir, f)) for f in essential_files)
                
                if all_dirs_exist and all_files_exist:
                    # Contar mods para mostrar informação adicional
                    mods_dir = os.path.join(game_dir, "mods")
                    mod_count = len([f for f in os.listdir(mods_dir) if f.endswith('.jar')]) if os.path.exists(mods_dir) else 0
                    
                    self.status_label.configure(
                        text=f"✅ Minecraft 1.20.1 pronto! ({mod_count} mods carregados)",
                        text_color="#00ff88"
                    )
                    self.game_status_label.configure(
                        text="✅ Pronto para Jogar",
                        text_color="#00ff88"
                    )
                    self.main_button.configure(text="🚀 INICIAR JOGO")
                else:
                    self.status_label.configure(
                        text="⚠️ Instalação incompleta - necessário baixar",
                        text_color="#ffaa00"
                    )
                    self.game_status_label.configure(
                        text="⏳ Download necessário",
                        text_color="#ffaa00"
                    )
                    self.main_button.configure(text="📥 BAIXAR JOGO")
            else:
                self.status_label.configure(
                    text="❌ Jogo não encontrado - clique para baixar",
                    text_color="#ff4444"
                )
                self.game_status_label.configure(
                    text="⏳ Download necessário",
                    text_color="#ffaa00"
                )
                self.main_button.configure(text="📥 BAIXAR JOGO")
                
        except Exception as e:
            self.logger.error(f"Erro ao verificar status: {str(e)}")
            self.status_label.configure(
                text="⚠️ Erro ao verificar status",
                text_color="#ffaa00"
            )
            
    def main_action(self):
        """Ação principal do botão (Play ou Install)"""
        if not self.is_downloading:
            if os.path.exists(self.config["game_directory"]):
                self.launch_game()
            else:
                self.install_game()
                
    def install_game(self):
        """Instala o jogo"""
        if not self.is_downloading:
            thread = threading.Thread(target=self.download_and_install)
            thread.daemon = True
            thread.start()
            
    def download_and_install(self, force_update=False):
        """Download e instalação do jogo"""
        try:
            self.is_downloading = True
            self.main_button.configure(state="disabled")
            self.settings_button.configure(state="disabled")
            
            if force_update and os.path.exists(self.config["game_directory"]):
                self.update_progress("🗑️ Removendo versão anterior...", 0.1)
                shutil.rmtree(self.config["game_directory"])
                self.logger.info(f"Diretório {self.config['game_directory']} removido.")
                
            self.update_progress("📡 Baixando RayzeCraft...", 0.2)
            self.logger.info("Baixando o repositório RayzeCraft...")
            
            # Download do arquivo
            response = requests.get(self.config["download_url"], stream=True)
            total_size = int(response.headers.get('content-length', 0))
            
            with open(self.config["temp_zip"], 'wb') as file:
                downloaded = 0
                for chunk in response.iter_content(chunk_size=8192):
                    if chunk:
                        file.write(chunk)
                        downloaded += len(chunk)
                        if total_size > 0:
                            progress = 0.2 + (downloaded / total_size) * 0.6
                            self.update_progress(f"📥 Baixando... {downloaded//1024//1024}MB", progress)
                            
            self.update_progress("📦 Extraindo arquivos...", 0.8)
            
            # Extrair ZIP
            with zipfile.ZipFile(self.config["temp_zip"], 'r') as zip_ref:
                zip_ref.extractall("C://rayzecraft//")
                
            self.logger.info("Repositório descompactado com sucesso.")
            
            # Limpar arquivo temporário
            os.remove(self.config["temp_zip"])
            self.logger.info("Arquivo ZIP removido.")
            
            self.update_progress("✅ Instalação concluída!", 1.0)
            
            # Atualizar interface
            self.root.after(1000, self.installation_complete)
            
        except Exception as e:
            self.logger.error(f"Erro durante instalação: {str(e)}")
            self.root.after(0, lambda: messagebox.showerror("Erro", f"Erro na instalação: {str(e)}"))
            self.root.after(0, self.reset_ui)
            
    def update_progress(self, text, progress):
        """Atualiza a barra de progresso"""
        self.root.after(0, lambda: [
            self.progress_bar.set(progress),
            self.progress_label.configure(text=text)
        ])
        
    def installation_complete(self):
        """Chamado quando a instalação é concluída"""
        self.is_downloading = False
        self.main_button.configure(state="normal", text="🚀 INICIAR JOGO")
        self.settings_button.configure(state="normal")
        self.check_game_status()
        messagebox.showinfo("Sucesso", "RayzeCraft instalado com sucesso!")
        
    def reset_ui(self):
        """Reseta a interface após erro"""
        self.is_downloading = False
        self.main_button.configure(state="normal")
        self.settings_button.configure(state="normal")
        self.progress_bar.set(0)
        self.progress_label.configure(text="❌ Erro na operação")
        
    def launch_game(self):
        """Inicia o jogo - Baseado nos logs do launcher funcional"""
        try:
            game_dir = "C:\\Users\\Delatro\\Desktop\\RayzeCraft Launcher ultima versão"
            
            if not os.path.exists(game_dir):
                messagebox.showerror("Erro", "Diretório do jogo não encontrado!")
                return
            
            # Definir caminhos importantes
            java_path = os.path.join(game_dir, "runtime", "java-runtime-gamma", "windows-x64", "java-runtime-gamma", "bin", "java.exe")
            forge_jar = os.path.join(game_dir, "versions", "1.20.1-forge-47.2.0", "1.20.1-forge-47.2.0.jar")
            libraries_path = os.path.join(game_dir, "libraries")
            natives_path = os.path.join(game_dir, "versions", "1.20.1-forge-47.2.0", "natives")
            
            # Verificar se temos Java interno ou usar do sistema
            if not os.path.exists(java_path):
                java_path = "java"
                self.logger.info("Usando Java do sistema")
            else:
                self.logger.info("Usando Java interno do jogo")
                
            if not os.path.exists(forge_jar):
                messagebox.showerror("Erro", "Arquivo do Forge não encontrado!")
                return
            
            # Lista específica de JARs na ordem correta para Minecraft 1.20.1
            specific_jars = [
                "net/minecraftforge/forge/1.20.1-47.2.0/forge-1.20.1-47.2.0.jar",
                "cpw/mods/securejarhandler/2.1.4/securejarhandler-2.1.4.jar",
                "org/ow2/asm/asm/9.5/asm-9.5.jar",
                "org/ow2/asm/asm-commons/9.5/asm-commons-9.5.jar",
                "org/ow2/asm/asm-tree/9.5/asm-tree-9.5.jar",
                "org/ow2/asm/asm-util/9.5/asm-util-9.5.jar",
                "org/ow2/asm/asm-analysis/9.5/asm-analysis-9.5.jar",
                "net/minecraftforge/accesstransformers/8.0.4/accesstransformers-8.0.4.jar",
                "org/antlr/antlr4-runtime/4.9.1/antlr4-runtime-4.9.1.jar",
                "net/minecraftforge/eventbus/6.0.3/eventbus-6.0.3.jar",
                "net/minecraftforge/forgespi/7.0.1/forgespi-7.0.1.jar",
                "net/minecraftforge/coremods/5.0.1/coremods-5.0.1.jar",
                "cpw/mods/modlauncher/10.0.8/modlauncher-10.0.8.jar",
                "net/minecraftforge/unsafe/0.2.0/unsafe-0.2.0.jar",
                "com/electronwill/night-config/core/3.6.4/core-3.6.4.jar",
                "com/electronwill/night-config/toml/3.6.4/toml-3.6.4.jar",
                "org/apache/maven/maven-artifact/3.8.5/maven-artifact-3.8.5.jar",
                "net/jodah/typetools/0.8.3/typetools-0.8.3.jar",
                "org/apache/logging/log4j/log4j-api/2.19.0/log4j-api-2.19.0.jar",
                "org/apache/logging/log4j/log4j-core/2.19.0/log4j-core-2.19.0.jar",
                "org/apache/logging/log4j/log4j-slf4j2-impl/2.19.0/log4j-slf4j2-impl-2.19.0.jar",
                "org/slf4j/slf4j-api/2.0.1/slf4j-api-2.0.1.jar",
                "net/minecrell/terminalconsoleappender/1.2.0/terminalconsoleappender-1.2.0.jar",
                "org/jline/jline-reader/3.12.1/jline-reader-3.12.1.jar",
                "org/jline/jline-terminal/3.12.1/jline-terminal-3.12.1.jar",
                "org/spongepowered/mixin/0.8.5/mixin-0.8.5.jar",
                "org/openjdk/nashorn/nashorn-core/15.3/nashorn-core-15.3.jar",
                "net/minecraftforge/JarJarSelector/0.3.16/JarJarSelector-0.3.16.jar",
                "net/minecraftforge/JarJarMetadata/0.3.16/JarJarMetadata-0.3.16.jar",
                "cpw/mods/bootstraplauncher/1.1.2/bootstraplauncher-1.1.2.jar",
                "net/minecraftforge/JarJarFileSystems/0.3.16/JarJarFileSystems-0.3.16.jar",
                "com/mojang/logging/1.1.1/logging-1.1.1.jar",
                "com/mojang/blocklist/1.0.10/blocklist-1.0.10.jar",
                "com/mojang/patchy/2.2.10/patchy-2.2.10.jar",
                "com/github/oshi/oshi-core/6.2.2/oshi-core-6.2.2.jar",
                "net/java/dev/jna/jna/5.10.0/jna-5.10.0.jar",
                "net/java/dev/jna/jna-platform/5.10.0/jna-platform-5.10.0.jar",
                "org/slf4j/slf4j-api/1.8.0-beta4/slf4j-api-1.8.0-beta4.jar",
                "org/apache/logging/log4j/log4j-slf4j18-impl/2.19.0/log4j-slf4j18-impl-2.19.0.jar",
                "com/ibm/icu/icu4j/71.1/icu4j-71.1.jar",
                "com/mojang/javabridge/1.2.24/javabridge-1.2.24.jar",
                "net/sf/jopt-simple/jopt-simple/5.0.4/jopt-simple-5.0.4.jar",
                "io/netty/netty-common/4.1.77.Final/netty-common-4.1.77.Final.jar",
                "io/netty/netty-buffer/4.1.77.Final/netty-buffer-4.1.77.Final.jar",
                "io/netty/netty-codec/4.1.77.Final/netty-codec-4.1.77.Final.jar",
                "io/netty/netty-handler/4.1.77.Final/netty-handler-4.1.77.Final.jar",
                "io/netty/netty-resolver/4.1.77.Final/netty-resolver-4.1.77.Final.jar",
                "io/netty/netty-transport/4.1.77.Final/netty-transport-4.1.77.Final.jar",
                "io/netty/netty-transport-native-unix-common/4.1.77.Final/netty-transport-native-unix-common-4.1.77.Final.jar",
                "io/netty/netty-transport-classes-epoll/4.1.77.Final/netty-transport-classes-epoll-4.1.77.Final.jar",
                "com/google/guava/failureaccess/1.0.1/failureaccess-1.0.1.jar",
                "com/google/guava/guava/31.1-jre/guava-31.1-jre.jar",
                "org/apache/commons/commons-lang3/3.12.0/commons-lang3-3.12.0.jar",
                "commons-io/commons-io/2.11.0/commons-io-2.11.0.jar",
                "commons-codec/commons-codec/1.15/commons-codec-1.15.jar",
                "com/mojang/brigadier/1.1.8/brigadier-1.1.8.jar",
                "com/mojang/datafixerupper/6.0.8/datafixerupper-6.0.8.jar",
                "com/google/code/gson/gson/2.10.1/gson-2.10.1.jar",
                "com/mojang/authlib/4.0.43/authlib-4.0.43.jar",
                "org/apache/commons/commons-compress/1.21/commons-compress-1.21.jar",
                "org/apache/httpcomponents/httpclient/4.5.13/httpclient-4.5.13.jar",
                "commons-logging/commons-logging/1.2/commons-logging-1.2.jar",
                "org/apache/httpcomponents/httpcore/4.4.14/httpcore-4.4.14.jar",
                "it/unimi/dsi/fastutil/8.5.6/fastutil-8.5.6.jar",
                "org/lwjgl/lwjgl/3.3.1/lwjgl-3.3.1.jar",
                "org/lwjgl/lwjgl-jemalloc/3.3.1/lwjgl-jemalloc-3.3.1.jar",
                "org/lwjgl/lwjgl-openal/3.3.1/lwjgl-openal-3.3.1.jar",
                "org/lwjgl/lwjgl-opengl/3.3.1/lwjgl-opengl-3.3.1.jar",
                "org/lwjgl/lwjgl-glfw/3.3.1/lwjgl-glfw-3.3.1.jar",
                "org/lwjgl/lwjgl-stb/3.3.1/lwjgl-stb-3.3.1.jar",
                "org/lwjgl/lwjgl-tinyfd/3.3.1/lwjgl-tinyfd-3.3.1.jar",
                "org/lwjgl/lwjgl/3.3.1/lwjgl-3.3.1-natives-windows.jar",
                "org/lwjgl/lwjgl-jemalloc/3.3.1/lwjgl-jemalloc-3.3.1-natives-windows.jar",
                "org/lwjgl/lwjgl-openal/3.3.1/lwjgl-openal-3.3.1-natives-windows.jar",
                "org/lwjgl/lwjgl-opengl/3.3.1/lwjgl-opengl-3.3.1-natives-windows.jar",
                "org/lwjgl/lwjgl-glfw/3.3.1/lwjgl-glfw-3.3.1-natives-windows.jar",
                "org/lwjgl/lwjgl-stb/3.3.1/lwjgl-stb-3.3.1-natives-windows.jar",
                "org/lwjgl/lwjgl-tinyfd/3.3.1/lwjgl-tinyfd-3.3.1-natives-windows.jar",
                "com/mojang/text2speech/1.17.9/text2speech-1.17.9.jar",
                "ca/weblite/java-objc-bridge/1.0.0/java-objc-bridge-1.0.0.jar"
            ]
            
            classpath_items = []
            
            # Adicionar JARs na ordem específica
            for jar_path in specific_jars:
                full_path = os.path.join(libraries_path, jar_path.replace("/", os.sep))
                if os.path.exists(full_path):
                    classpath_items.append(full_path)
                else:
                    self.logger.warning(f"JAR não encontrado: {full_path}")
            
            # Adicionar o JAR principal do Forge no final
            classpath_items.append(forge_jar)
            
            classpath = ";".join(classpath_items)
            
            # Nickname do jogador
            player_name = self.config.get("player_name", "Player")
            
            # Configurar quantidade de RAM
            ram_amount = self.config.get("ram", "2048")
            max_ram = f"-Xmx{ram_amount}M"
            min_ram = f"-Xms{max(512, int(ram_amount)//2)}M"
            
            self.logger.info(f"Iniciando com {ram_amount}MB de RAM ({min_ram} inicial, {max_ram} máximo)")
            
            # Comando completo para Minecraft 1.20.1
            cmd = [
                java_path,
                max_ram,
                min_ram,
                "-XX:+UnlockExperimentalVMOptions",
                "-XX:+UseG1GC",
                "-XX:G1NewSizePercent=20",
                "-XX:G1ReservePercent=20",
                "-XX:MaxGCPauseMillis=50",
                "-XX:G1HeapRegionSize=32M",
                f"-Djava.library.path={natives_path}",
                "-Dlog4j2.formatMsgNoLookups=true",
                "-cp", classpath,
                "cpw.mods.bootstraplauncher.BootstrapLauncher",
                "--username", player_name,
                "--version", "1.20.1-forge-47.2.0",
                "--gameDir", game_dir,
                "--assetsDir", os.path.join(game_dir, "assets"),
                "--assetIndex", "5",
                "--uuid", "offline-uuid",
                "--accessToken", "",
                "--clientId", "offline-uuid",
                "--xuid", "offline-uuid",
                "--userType", "msa",
                "--versionType", "release",
                "--launchTarget", "forgeclient"
            ]
            
            # Log do comando completo para debug
            cmd_str = " ".join(cmd)
            self.logger.info(f"Executando o comando: {cmd_str}")
            
            # Mostrar mensagem de inicialização
            messagebox.showinfo("RayzeCraft", f"🚀 Iniciando RayzeCraft para {player_name}!\n\n⏳ Aguarde alguns segundos...\n\n✨ O jogo abrirá em breve!")
            
            # Executar o comando em uma nova thread
            import subprocess
            import threading
            
            def run_game():
                try:
                    process = subprocess.Popen(
                        cmd, 
                        cwd=game_dir,
                        creationflags=subprocess.CREATE_NO_WINDOW
                    )
                    self.logger.info(f"Processo Java iniciado com PID: {process.pid}")
                    self.logger.info(f"Minecraft Forge iniciado com sucesso para jogador: {player_name}")
                    
                    # Aguardar um pouco para o Minecraft inicializar
                    import time
                    time.sleep(5)
                    
                    # Verificar se o processo ainda está rodando
                    if process.poll() is not None:
                        self.logger.error(f"Processo terminou prematuramente com código: {process.returncode}")
                        debug_process = subprocess.Popen(
                            cmd,
                            cwd=game_dir,
                            stdout=subprocess.PIPE,
                            stderr=subprocess.PIPE,
                            creationflags=subprocess.CREATE_NO_WINDOW
                        )
                        stdout, stderr = debug_process.communicate(timeout=10)
                        error_msg = stderr.decode('utf-8', errors='ignore') if stderr else "Processo terminou sem mensagem de erro"
                        self.logger.error(f"Erro capturado: {error_msg}")
                        self.root.after(0, lambda: messagebox.showerror("Erro de Inicialização", f"O jogo falhou ao iniciar.\n\nDetalhes técnicos:\n{error_msg[:800]}"))
                    else:
                        self.logger.info(f"Minecraft está rodando com PID: {process.pid}")
                        self.root.after(0, lambda: messagebox.showinfo("✨ Sucesso!", f"RayzeCraft foi iniciado com sucesso!\n\n🎮 Jogador: {player_name}\n🔢 PID: {process.pid}\n\n✨ Divirta-se jogando!"))
                    
                except subprocess.TimeoutExpired:
                    self.logger.info("Minecraft ainda está inicializando (timeout de debug atingido)")
                    self.root.after(0, lambda: messagebox.showinfo("⏳ Inicializando", "O Minecraft está inicializando...\nPode demorar alguns minutos na primeira execução."))
                except Exception as e:
                    self.logger.error(f"Erro ao executar comando: {str(e)}")
                    self.root.after(0, lambda: messagebox.showerror("Erro", f"Erro ao iniciar o jogo:\n\n{str(e)}"))
            
            thread = threading.Thread(target=run_game, daemon=True)
            thread.start()
            
        except Exception as e:
            self.logger.error(f"Erro ao iniciar jogo: {str(e)}")
            messagebox.showerror("Erro", f"Erro ao iniciar o jogo: {str(e)}")
            
    def open_settings(self):
        """Abre janela de configurações com design neon"""
        settings_window = ctk.CTkToplevel(self.root)
        settings_window.title("⚙️ Configurações")
        settings_window.geometry("750x700")
        settings_window.resizable(False, False)
        settings_window.configure(fg_color="#0a0a0f")
        
        # Título
        title_label = ctk.CTkLabel(
            settings_window,
            text="⚙️ CONFIGURAÇÕES",
            font=ctk.CTkFont(size=28, weight="bold"),
            text_color="#00ffff"
        )
        title_label.pack(pady=30)
        
        # Diretório de instalação
        dir_frame = ctk.CTkFrame(
            settings_window, 
            width=600, 
            height=120,
            corner_radius=25,
            fg_color="#0a0a1a",
            border_width=3,
            border_color="#00ff88"
        )
        dir_frame.pack(pady=20, padx=25, fill="x")
        dir_frame.pack_propagate(False)
        
        ctk.CTkLabel(
            dir_frame,
            text="📁 Diretório de Instalação:",
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color="#00ff88"
        ).pack(pady=15)
        
        dir_entry = ctk.CTkEntry(
            dir_frame, 
            width=500, 
            height=40,
            corner_radius=20,
            fg_color="#1a1a2e",
            border_color="#00ff88",
            border_width=3,
            text_color="#ffffff",
            font=ctk.CTkFont(size=12, weight="bold")
        )
        dir_entry.pack(pady=10)
        dir_entry.insert(0, self.config["game_directory"])
        
        # Quantidade de RAM
        ram_frame = ctk.CTkFrame(
            settings_window, 
            width=600, 
            height=160,
            corner_radius=25,
            fg_color="#0a0a1a",
            border_width=3,
            border_color="#ff00ff"
        )
        ram_frame.pack(pady=20, padx=25, fill="x")
        ram_frame.pack_propagate(False)
        
        ctk.CTkLabel(
            ram_frame,
            text="💾 Quantidade de RAM (MB):",
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color="#ff00ff"
        ).pack(pady=15)
        
        # Info do sistema
        system_info = ctk.CTkLabel(
            ram_frame,
            text=f"🖥️ Sistema: {self.total_ram}MB total | Disponível: {self.min_ram}-{self.max_ram}MB",
            font=ctk.CTkFont(size=12),
            text_color="#00ff88"
        )
        system_info.pack(pady=5)
        
        ram_var = ctk.StringVar(value=self.config.get("ram", str(self.default_ram)))
        ram_entry = ctk.CTkEntry(
            ram_frame,
            textvariable=ram_var,
            width=250,
            height=40,
            placeholder_text=f"{self.min_ram}-{self.max_ram} MB",
            corner_radius=20,
            fg_color="#1a1a2e",
            border_color="#ff00ff",
            border_width=3,
            text_color="#ffffff",
            font=ctk.CTkFont(size=14, weight="bold")
        )
        ram_entry.pack(pady=10)
        
        # Label informativo
        ram_info = ctk.CTkLabel(
            ram_frame,
            text=f"(Recomendado: {self.default_ram} MB)",
            font=ctk.CTkFont(size=12),
            text_color="#888888"
        )
        ram_info.pack(pady=5)

        # Tema
        theme_frame = ctk.CTkFrame(
            settings_window, 
            width=600, 
            height=120,
            corner_radius=25,
            fg_color="#0a0a1a",
            border_width=3,
            border_color="#ffaa00"
        )
        theme_frame.pack(pady=20, padx=25, fill="x")
        theme_frame.pack_propagate(False)
        
        ctk.CTkLabel(
            theme_frame,
            text="🎨 Tema da Interface:",
            font=ctk.CTkFont(size=18, weight="bold"),
            text_color="#ffaa00"
        ).pack(pady=15)
        
        theme_var = ctk.StringVar(value="dark")
        theme_menu = ctk.CTkOptionMenu(
            theme_frame,
            values=["dark", "light"],
            variable=theme_var,
            width=250,
            height=40,
            corner_radius=20,
            fg_color="#1a1a2e",
            button_color="#ffaa00",
            button_hover_color="#ff8800",
            dropdown_fg_color="#0a0a1a",
            text_color="#ffffff",
            font=ctk.CTkFont(size=14, weight="bold")
        )
        theme_menu.pack(pady=10)
        
        # Botões
        button_frame = ctk.CTkFrame(settings_window, fg_color="transparent", height=80)
        button_frame.pack(pady=30)
        button_frame.pack_propagate(False)
        
        def save_settings():
            try:
                ram_value = int(ram_var.get())
                if ram_value < self.min_ram or ram_value > self.max_ram:
                    messagebox.showerror(
                        "❌ Erro", 
                        f"A quantidade de RAM deve estar entre {self.min_ram} e {self.max_ram} MB!\n\n"
                        f"💡 Baseado na RAM disponível no seu sistema ({self.total_ram}MB total)\n"
                        f"⚡ Valor recomendado: {self.default_ram}MB"
                    )
                    return
            except ValueError:
                messagebox.showerror("❌ Erro", "Por favor, insira um número válido para a RAM!")
                return
                
            # Salvar configurações
            self.config["game_directory"] = dir_entry.get()
            self.config["ram"] = ram_var.get()
            self.config["theme"] = theme_var.get()
            
            # Salvar no arquivo
            self.save_config()
            
            # Aplicar tema
            ctk.set_appearance_mode(theme_var.get())
            
            ram_percentage = (int(ram_var.get()) / self.total_ram) * 100
            messagebox.showinfo(
                "✅ Sucesso", 
                f"Configurações salvas com sucesso!\n\n"
                f"💾 RAM configurada: {ram_var.get()} MB ({ram_percentage:.1f}% da RAM total)\n"
                f"🎨 Tema: {theme_var.get()}\n\n"
                f"💡 Sistema detectado: {self.total_ram}MB total"
            )
            settings_window.destroy()
            
        def reset_settings():
            dir_entry.delete(0, tk.END)
            dir_entry.insert(0, "C://rayzecraft//rayzecraft-main")
            ram_var.set(str(self.default_ram))
            theme_var.set("dark")
            
        save_button = self.create_neon_button(
            button_frame,
            "💾 SALVAR",
            save_settings,
            width=150,
            height=50,
            fg_color="#00ff88",
            hover_color="#00cc66",
            border_color="#00ffaa"
        )
        save_button.pack(side="left", padx=15)
        
        reset_button = self.create_neon_button(
            button_frame,
            "🔄 RESETAR",
            reset_settings,
            width=150,
            height=50,
            fg_color="#ff6644",
            hover_color="#cc4422",
            border_color="#ff8866"
        )
        reset_button.pack(side="left", padx=15)
        
        close_button = self.create_neon_button(
            button_frame,
            "❌ FECHAR",
            settings_window.destroy,
            width=150,
            height=50,
            fg_color="#666666",
            hover_color="#444444",
            border_color="#888888"
        )
        close_button.pack(side="left", padx=15)
        
    def run(self):
        """Inicia a aplicação"""
        try:
            self.root.mainloop()
        except KeyboardInterrupt:
            self.logger.info("Aplicação fechada pelo usuário.")
            
if __name__ == "__main__":
    print("🎮 Iniciando RayzeCraft Launcher Edição v1.0...")
    print("✨ Carregando interface neon...")
    app = RayzeCraftLauncher()
    app.run()
