# Estrutura CSS do Hero.tsx

## 📋 Classes CSS Utilizadas no Hero

### 1. **Container Principal** (`motion.section`)
```tsx
className="min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 py-20 relative overflow-hidden"
```
**Estilos inline via Framer Motion:**
- `opacity`: controlado por `heroOpacity` (transforma de 1 para 0 ao scroll)
- `y`: controlado por `heroY` (move -50px ao scroll)

---

### 2. **Background Terminal** (`.hero-terminal`)
**Localização:** `app/globals.css` (linhas 165-183)

```css
.hero-terminal {
  background: 
    radial-gradient(ellipse at 80% 50%, rgba(0, 254, 252, 0.1) 0%, transparent 50%),
    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 254, 252, 0.02) 2px, rgba(0, 254, 252, 0.02) 4px);
  position: relative;
}

.hero-terminal::before {
  content: '>>> ';
  font-family: var(--font-mono);
  color: #00FEFC;
  position: absolute;
  top: 50%;
  left: 10%;
  opacity: 0.1;
  font-size: 4rem;
  pointer-events: none;
  z-index: 0;
}
```

**Uso no componente:**
```tsx
<div className="absolute inset-0 z-0 hero-terminal" />
```

---

### 3. **Logos de Tecnologias** (Topo Direito)
```tsx
className="absolute top-24 right-4 md:right-8 flex items-center gap-2 md:gap-4 flex-wrap justify-end z-10"
```

**Cada logo:**
```tsx
className="text-[#888888] text-xs font-mono cursor-interactive transition-all duration-300 code-hover"
```

**Classe `.code-hover`** (globals.css linhas 247-256):
```css
.code-hover {
  font-family: var(--font-mono);
  background: transparent;
  transition: all 0.3s ease;
}

.code-hover:hover {
  background: rgba(0, 254, 252, 0.1);
  box-shadow: 0 0 0 1px rgba(0, 254, 252, 0.3);
}
```

**Animações via Framer Motion:**
- `opacity`: 0 → 0.7 (com delay escalonado)
- `y`: [0, -8, 0] (loop infinito)
- `hover`: opacity 1, scale 1.1, glow effect

---

### 4. **Mensagem "@ROCHALABS"** (Avatar + Texto)
```tsx
className="flex items-center gap-3 mb-8"
```

**Avatar:**
```tsx
className="w-8 h-8 rounded-full bg-[#888888] border border-[#888888] overflow-hidden"
```

**Letra "R" dentro do avatar:**
```tsx
className="text-[#888888] text-xs"
```

**Texto da mensagem:**
```tsx
className="text-[#888888] text-xs uppercase tracking-wider font-mono"
```

---

### 5. **Headline Principal** (`.main-command`)
**Localização:** `app/globals.css` (linhas 698-704)

```css
.main-command {
  font-family: 'Clash Display', sans-serif;
  font-weight: 400;
  font-size: clamp(2.5rem, 6vw, 4rem);  /* Responsivo: 40px - 64px */
  color: #FFFFFF;
  line-height: 1.1;
}
```

**Uso no componente:**
```tsx
className="main-command mb-12 leading-tight"
```

**Estilos inline via Framer Motion:**
- `y`: controlado por `headlineY` (parallax effect, move -30px ao scroll)

**Cursor piscante:**
```tsx
className="inline-block w-1 h-12 bg-[#FFFFFF] ml-2"
```
- Animação: `opacity: [1, 0]` com repeat infinito

---

### 6. **CTA Button** (Ghost Button)
```tsx
className="cursor-interactive relative inline-flex items-center gap-2 border border-[#888888] text-[#FFFFFF] rounded-full px-4 py-2 text-sm font-normal transition-all duration-400 overflow-hidden group"
```

**Hover via Framer Motion:**
- `borderColor`: '#00FEFC'
- `boxShadow`: '0 0 20px rgba(0, 254, 252, 0.4)'

**Efeito de brilho deslizante:**
```tsx
<motion.div
  className="absolute inset-0"
  style={{
    background: 'linear-gradient(90deg, transparent, rgba(0, 254, 252, 0.2), transparent)',
  }}
/>
```

---

### 7. **Ícone de Seta** (`.cta-arrow-icon`)
**Localização:** `app/globals.css` (linhas 45-68)

```css
@keyframes bounce-arrow {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(3px);
  }
}

@media (prefers-reduced-motion: no-preference) {
  .cta-arrow-icon {
    animation: bounce-arrow 2s infinite ease-out;
    animation-delay: 1.5s;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cta-arrow-icon {
    animation: none;
  }
}
```

**Uso no componente:**
```tsx
className="relative z-10 cta-arrow-icon w-4 h-4 text-[#00FEFC]"
```

**Estilos inline:**
```tsx
style={{
  filter: 'drop-shadow(0 0 4px rgba(0, 254, 252, 0.8))',
}}
```

**Animação adicional via Framer Motion:**
- `y`: [0, -8, 0] (loop infinito)

---

## 🎨 Variáveis CSS Globais Utilizadas

```css
:root {
  --background: #000000;
  --foreground: #FFFFFF;
  --gray-medium: #888888;
  --font-display: 'DM Serif Display', serif;
  --font-sans: 'DM Sans', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
}
```

---

## 📱 Breakpoints Responsivos

### Mobile (< 768px)
- Padding horizontal: `px-4` (16px)
- Logo gap: `gap-2` (8px)
- Logo right: `right-4` (16px)

### Tablet (768px - 1024px)
- Padding horizontal: `px-8` (32px)
- Logo gap: `gap-4` (16px)
- Logo right: `right-8` (32px)

### Desktop (> 1024px)
- Padding horizontal: `px-16` (64px)

---

## 🔄 Animações e Transições

### Scroll-based (via Framer Motion)
1. **Hero Opacity**: `scrollYProgress [0, 0.3] → opacity [1, 0]`
2. **Hero Y**: `scrollYProgress [0, 0.3] → y [0, -50]`
3. **Headline Y** (Parallax): `scrollYProgress [0, 0.3] → y [0, -30]`

### Hover Effects
- Logos: opacity 1, scale 1.1, glow
- CTA Button: border color change, box shadow glow
- Code hover: background + border glow

### Auto-animações
- Logos: floating animation (y: [0, -8, 0])
- Arrow icon: bounce animation
- Typing effect: cursor blink

---

## 📊 Hierarquia Visual

1. **Hero Terminal Background** (z-0)
2. **Logos Tecnologias** (z-10)
3. **Container Principal** (z-10)
4. **Avatar + Mensagem** (z-10, dentro do container)
5. **Headline** (z-10, dentro do container)
6. **CTA Button** (z-10, dentro do container)

---

## 🎯 Cores Utilizadas

- **Background**: `#000000` (preto)
- **Texto Principal**: `#FFFFFF` (branco)
- **Texto Secundário**: `#888888` (cinza)
- **Acento**: `#00FEFC` (ciano)
- **Bordas**: `#888888` (cinza)
- **Background Avatar**: `#333333` (cinza escuro)

