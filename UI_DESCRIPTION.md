# Descrição Detalhada da UI - Portfólio @frochadev

## Visão Geral do Design System

**Paleta de Cores:**
- Fundo principal: `#000000` (Preto puro)
- Texto principal: `#FFFFFF` (Branco)
- Texto secundário: `#888888` (Cinza médio)
- Background secundário: `#111111` (Cinza escuro)
- Acento elétrico: `#00FEFC` (Ciano - usado estrategicamente)
- Bordas: `#333333`, `#444444`, `#888888`

**Tipografia:**
- **DM Serif Display**: Títulos principais (H1, H2, H3 de impacto)
- **DM Sans**: Corpo de texto, labels, botões, parágrafos
- **Monospace**: Elementos técnicos, código, labels secundários

**Espaçamento Padrão:**
- Padding horizontal: `px-4 md:px-8 lg:px-16`
- Padding vertical: `py-20` (padrão), `py-32` (seções importantes)
- Gap entre elementos: `gap-6` (24px)

---

## 1. HEADER (Navegação Fixa)

**Layout:**
- Posição: Fixa no topo (`fixed top-0`)
- Altura: ~60px (com padding `py-3`)
- Background: Transparente inicialmente, muda para `bg-[#000000]/80 backdrop-blur-sm` ao scroll > 50px
- Z-index: `z-50` (sempre acima)

**Estrutura:**
- Container: `max-w-7xl mx-auto`
- Layout flex: Logo à esquerda, navegação central, menu mobile à direita

**Logo:**
- Texto: `@frochadev`
- Fonte: Monospace, `text-xs`
- Cor: `text-[#888888]`
- Hover: `scale: 1.05`

**Navegação Desktop:**
- Layout: Lista horizontal (`hidden md:flex`)
- Gap: `gap-6`
- Items: 7 links de navegação
- Estilo dos links:
  - Padding: `px-2 py-1`
  - Fonte: `text-xs font-normal`
  - Cor padrão: `text-[#888888]`
  - Cor ativa: `text-[#FFFFFF]`
  - Hover: `text-[#FFFFFF]` com `y: -1`
- Indicador ativo:
  - Linha animada na parte inferior (`h-px`)
  - Cor: `bg-[#00FEFC]` com `box-shadow: 0 0 8px rgba(0, 254, 252, 0.6)`
  - Animação: `layoutId="activeSection"` com spring animation

**Menu Mobile:**
- Botão hambúrguer: 3 linhas horizontais (`w-5 h-px`)
- Cor: `text-[#888888]`
- Animação: Linhas se transformam em X ao abrir
- Menu dropdown:
  - Posição: Absolute abaixo do header
  - Background: `bg-[#000000]/95 backdrop-blur-sm`
  - Borda inferior: `border-b border-[#888888]`
  - Padding: `p-4`
  - Layout: Stack vertical (`space-y-2`)

---

## 2. HERO (Primeira Impressão)

**Layout:**
- Altura: `min-h-screen` (ocupa 100vh)
- Background: `bg-[#000000]`
- Padding: `px-4 md:px-8 lg:px-16 py-20`
- Centralização: Flex vertical (`flex-col justify-center`)
- Animação de scroll: Fade out e move para cima ao scroll (`opacity: 1 → 0`, `y: 0 → -50`)

**Elementos Superiores:**
- **Logos Tecnologias (Topo Direito):**
  - Posição: Absolute `top-24 right-4 md:right-8`
  - Layout: Flex wrap com `gap-2 md:gap-4`
  - Texto: `N8N`, `OpenAI`, `WhatsApp`, `Sheets`
  - Estilo: Monospace, `text-xs`, `text-[#888888]`, `opacity: 0.7`

**Container Principal:**
- Largura máxima: `max-w-4xl mx-auto`
- Layout: Centralizado

**Foto + Label:**
- Layout: Flex horizontal (`flex items-center gap-3`)
- Avatar:
  - Tamanho: `w-8 h-8`
  - Formato: Circular (`rounded-full`)
  - Background: `bg-[#888888]`
  - Borda: `border border-[#888888]`
  - Placeholder: Letra "F" centralizada
- Texto: `// UMA MENSAGEM DE @FROCHADEV`
  - Estilo: Monospace, `text-xs`, uppercase, `tracking-wider`
  - Cor: `text-[#888888]`

**Headline Principal:**
- Texto: "Você atingiu o limite do que sua operação manual pode entregar. E sua concorrência já percebeu isso."
- Fonte: DM Serif Display
- Tamanho: `text-4xl md:text-5xl lg:text-6xl xl:text-7xl`
- Cor: `text-[#FFFFFF]`
- Leading: `leading-tight`
- Margin bottom: `mb-12`
- Animação: Parallax suave ao scroll (move mais devagar que o container)

**CTA (Call to Action):**
- Estilo: Botão "ghost" (borda, sem background)
- Layout: `inline-flex items-center gap-2`
- Padding: `px-4 py-2`
- Bordas: `border border-[#888888] rounded-full`
- Cor texto: `text-[#FFFFFF]`
- Fonte: `text-sm font-normal`
- Hover: `hover:border-[#FFFFFF]`
- Conteúdo:
  - Texto: "Leia o diagnóstico"
  - Ícone: Seta para baixo (SVG)
  - Cor do ícone: `text-[#00FEFC]`
  - Animação do ícone: Bounce vertical (`y: [0, -8, 0]`) infinito
  - Glow do ícone: `drop-shadow(0 0 4px rgba(0, 254, 252, 0.8))`

---

## 3. PROBLEMS (Problemas Comuns)

**Layout:**
- Background: `bg-[#000000]`
- Padding: `px-4 md:px-8 lg:px-16 py-20`
- Container: `max-w-6xl mx-auto`

**Título da Seção:**
- Posicionamento: Centralizado (`text-center`)
- Texto: "Sua operação está presa no manual?"
- Fonte: DM Serif Display
- Tamanho: `text-4xl md:text-5xl lg:text-6xl`
- Cor: `text-[#FFFFFF]`
- Leading: `leading-tight`
- Margin bottom: `mb-16`
- Subtítulo:
  - Texto: "Problemas comuns que consomem seu lucro"
  - Fonte: DM Sans
  - Tamanho: `text-sm`
  - Cor: `text-[#888888]`

**Grid de Cards:**
- Layout: Grid responsivo
  - Mobile: 1 coluna (`grid-cols-1`)
  - Tablet: 2 colunas (`md:grid-cols-2`)
  - Desktop: 3 colunas (`lg:grid-cols-3`)
- Gap: `gap-6` (24px)

**Cards de Problema:**
- Quantidade: 5 cards
- Estrutura:
  - Borda: `border border-[#888888]`
  - Border radius: `rounded-lg`
  - Padding: `p-6`
  - Layout: Flex column (`flex flex-col h-full`)
- Elementos internos:
  1. **Ícone Emoji**: Tamanho `text-2xl`, Cor `text-[#FFFFFF]`, Margin bottom `mb-4`
  2. **Título**: `text-base font-semibold`, Cor `text-[#FFFFFF]`, Margin bottom `mb-3`
  3. **Descrição**: `text-sm`, Cor `text-[#888888]`, `font-normal`, `leading-relaxed`, `flex-grow`
- Animações:
  - Entrada: Fade in + slide up (`opacity: 0, y: 30 → opacity: 1, y: 0`)
  - Delay progressivo: `index * 0.1s`
  - Duração: `0.6s`

---

## 4. DILEMMA (Dois Caminhos)

**Layout:**
- Background: `bg-[#000000]`
- Altura: `min-h-screen` (ocupa 100vh)
- Padding: `px-4 md:px-8 lg:px-16 py-20`
- Centralização: Flex vertical (`flex items-center`)
- Container: `max-w-7xl mx-auto`

**Título Unificado:**
- Posicionamento: Centralizado (`text-center`)
- Texto: "Dois Caminhos, Uma Escolha"
- Fonte: DM Serif Display
- Tamanho: `text-4xl md:text-5xl lg:text-6xl`
- Peso: `font-bold`
- Tracking: `tracking-tight`
- Cor: `text-[#FFFFFF]`
- Margin bottom: `mb-12 md:mb-16`
- Subtítulo:
  - Texto: "O futuro da sua operação depende da decisão que você toma agora."
  - Fonte: DM Sans
  - Tamanho: `text-sm md:text-base`
  - Cor: `text-[#888888]`
  - Largura máxima: `max-w-2xl mx-auto`
  - Leading: `leading-relaxed`

**Grid de Cards:**
- Layout: Grid assimétrico (`grid-cols-1 lg:grid-cols-3`)
- Gap: `gap-6 lg:gap-8`

### Card Esquerdo (1/3) - "O Caminho Fácil"

**Estrutura:**
- Span: `lg:col-span-1`
- Background: `bg-[#111111]`
- Borda: `border border-[#333333]`
- Border radius: `rounded-lg`
- Padding: `p-8`
- Sombra: `box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2)`

**Elementos:**
1. **Ícone**: 📄 (Template), `text-4xl mb-6`
2. **Headline**:
   - Texto: "O Caminho Fácil"
   - Fonte: DM Sans
   - Tamanho: `text-base lg:text-lg`
   - Peso: `font-normal`
   - Cor: `text-[#888888]`
   - Margin bottom: `mb-3`
3. **Subtítulo**:
   - Texto: 'Templates e "Gambiarras"'
   - Fonte: Monospace
   - Tamanho: `text-xs`
   - Estilo: `uppercase tracking-wider`
   - Cor: `text-[#888888]`
   - Margin bottom: `mb-8`
4. **Lista** (3 itens):
   - Espaçamento: `space-y-4`
   - Cada item:
     - Ícone: `//` (Monospace, `text-xs`)
     - Texto: `text-sm`, Cor `text-[#888888]`
     - Layout: Flex horizontal (`gap-3`)

**Animações:**
- Entrada: Fade in + slide up + scale (`opacity: 0, y: 30, scale: 0.98 → opacity: 1, y: 0, scale: 1`)
- Duração: `0.8s`
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- Hover: Elevação (`y: -4`)
- Itens da lista: Stagger children (`delay: 0.1s` entre cada)

### Card Direito (2/3) - "A Arquitetura Estratégica"

**Estrutura:**
- Span: `lg:col-span-2`
- Background: `bg-[#000000]`
- Borda: `border border-[#444444]`
- Border radius: `rounded-lg`
- Padding: `p-8 lg:p-12`
- Sombra: `box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3)`
- Overflow: `overflow-hidden`

**Elementos:**
1. **Ícone**: ⚙️ (Engrenagem), `text-4xl mb-6`
   - Animação: Rotação de entrada (`rotate: -180 → 0`)
2. **Headline**:
   - Texto: "A Arquitetura Estratégica"
   - Fonte: DM Serif Display
   - Tamanho: `text-4xl md:text-5xl lg:text-6xl`
   - Peso: `font-semibold`
   - Cor: `text-[#FFFFFF]`
   - Margin bottom: `mb-4`
   - Animação: Line Mask Reveal (`y: 100% → 0`)
3. **Subtítulo**:
   - Texto: "Feita por um Dev"
   - Fonte: DM Sans
   - Tamanho: `text-sm`
   - Cor: `text-[#FFFFFF]`
   - Margin bottom: `mb-10`
   - Leading: `leading-relaxed`
4. **Lista** (3 itens):
   - Espaçamento: `space-y-5`
   - Cada item:
     - Ícone: ✅ (verde), `text-lg`, Cor `text-[#00FEFC]`
     - Animação do ícone: Pulsação infinita (`scale: [1, 1.05, 1]`)
     - Texto: `text-sm`, Cor `text-[#FFFFFF]`
     - Layout: Flex horizontal (`gap-3`)

**Animações:**
- Entrada: Delay `0.2s` antes de iniciar
- Headline: Line Mask Reveal (`delay: 0.6s`)
- Hover: Elevação (`y: -4`)
- Itens da lista: Stagger children (`delay: 0.15s` entre cada)

---

## 5. DIFFERENTIAL (Diferencial Técnico)

**Layout:**
- Background: `bg-[#000000]`
- Padding: `px-4 md:px-8 lg:px-16 py-20`
- Container: `max-w-6xl mx-auto`

**Título Principal:**
- Texto: "Sua operação não cabe em um template."
- Fonte: DM Serif Display
- Tamanho: `text-4xl md:text-5xl lg:text-6xl`
- Posicionamento: Centralizado (`text-center`)
- Cor: `text-[#FFFFFF]`
- Leading: `leading-tight`
- Margin bottom: `mb-4`

**Subtítulo:**
- Texto: "Eu construo a arquitetura customizada que sua escala exige, linha por linha."
- Fonte: DM Sans
- Tamanho: `text-sm md:text-base`
- Cor: `text-[#888888]`
- Posicionamento: Centralizado (`text-center`)
- Margin bottom: `mb-12`

**Grid de 2 Colunas:**
- Layout: `grid grid-cols-1 lg:grid-cols-2`
- Gap: `gap-12`
- Alinhamento: `items-start`

### Coluna Esquerda (Explicação + Código)

**Card de Explicação:**
- Borda: `border border-[#888888]`
- Border radius: `rounded-lg`
- Padding: `p-8`
- Conteúdo:
  - Parágrafo: `text-sm`, Cor `text-[#888888]`, `leading-relaxed`, Margin bottom `mb-6`
  - Lista de checkmarks (3 itens):
    - Layout: Flex vertical (`space-y-4`)
    - Cada item: Flex horizontal (`gap-3`)
    - Checkmark: `✓` (branco), `text-sm`
    - Texto: `text-sm`, Cor `text-[#888888]`, `font-normal`

**Bloco de Código Animado:**
- Componente: `CodeBlock`
- Animação: Typing effect (código sendo digitado)
- Syntax highlighting:
  - Chaves `{`, `}`, `[`, `]`: Cor `text-[#00FEFC]` com text-shadow
  - Aspas `"`: Cor `text-[#888888]`
  - Texto: Cor `text-[#FFFFFF]`
- Cursor piscante: `bg-[#00FEFC]` com box-shadow

### Coluna Direita (Grade de Logos)

**Componente: LogoGrid**
- Layout: Grid responsivo
  - Mobile: 2 colunas (`grid-cols-2`)
  - Tablet: 3 colunas (`md:grid-cols-3`)
  - Desktop: 5 colunas (`lg:grid-cols-5`)
- Gap: `gap-6`
- Tecnologias: Python, Docker, Node.js, TypeScript, n8n
- Cada logo:
  - Tamanho: `w-12 h-12`
  - Estado padrão: Monocromático (branco via CSS filter)
  - Estado hover:
    - Cor: Ciano (`#00FEFC`) via CSS filter complexo
    - Glow: `drop-shadow(0 0 8px rgba(0, 254, 252, 0.8))`
    - Opacidade: `1.0`
    - Escala: `scale: 1.05`
    - Borda: `border-[#00FEFC]`
  - Animação: Transição suave `duration-300`

---

## 6. WHO I AM (Quem Sou Eu)

**Layout:**
- Background: `bg-[#000000]`
- Altura: `min-h-screen`
- Layout: Split-screen (`flex flex-col lg:flex-row`)
- Overflow: `overflow-hidden`

### Coluna Esquerda (Foto - 50%)

**Estrutura:**
- Largura: `w-full lg:w-1/2`
- Altura: `h-[50vh] lg:h-auto`
- Background: `bg-[#111111]`
- Posição: `relative`

**Imagem:**
- Source: `/profile-photo.jpg`
- Layout: `fill` (cobre toda a área)
- Object fit: `object-cover`
- Prioridade: `priority` (carregamento prioritário)

**Animação:**
- Tipo: Clip-path reveal
- Efeito: `clipPath: inset(0 100% 0 0) → inset(0 0% 0 0)`
- Duração: `1.2s`
- Easing: `easeOut`

### Coluna Direita (Manifesto - 50%)

**Estrutura:**
- Largura: `w-full lg:w-1/2`
- Background: `bg-[#000000]`
- Layout: Flex column centralizado (`flex flex-col justify-center`)
- Padding: `px-8 md:px-12 lg:px-16 py-16 lg:py-20`
- Container interno: `max-w-2xl mx-auto`

**Headline:**
- Texto: "Prazer, Fabiano. Engenheiro de Software."
- Fonte: DM Serif Display
- Tamanho: `text-4xl md:text-5xl lg:text-6xl`
- Cor: `text-[#FFFFFF]`
- Leading: `leading-tight`
- Margin bottom: `mb-8`

**Linha Ciano (Sotaque Elétrico):**
- Largura inicial: `0`
- Largura final: `25%`
- Altura: `h-1`
- Cor: `bg-[#00FEFC]`
- Box-shadow: `0 0 8px rgba(0, 254, 252, 0.6)`
- Margin bottom: `mb-8`
- Animação: Expansão horizontal (`duration: 0.8s, delay: 0.4s`)

**Corpo do Texto:**
- Layout: Stack vertical (`space-y-6`)
- Parágrafos (2):
  - Fonte: DM Sans
  - Tamanho: `text-sm md:text-base`
  - Cor: `text-[#FFFFFF]`
  - Peso: `font-normal`
  - Leading: `leading-relaxed`

**Links de Redes Sociais:**
- Layout: Flex wrap (`flex flex-wrap gap-6`)
- Fonte: Monospace
- Tamanho: `text-xs`
- Estilo: `uppercase tracking-wider`
- Cor: `text-[#888888]`
- Hover: `text-[#00FEFC]`
- Animação hover: Deslocamento horizontal (`x: 2`)
- Formato: `// LinkedIn`, `// GitHub`, `// Instagram`

**Animações:**
- Entrada geral: Fade in (`opacity: 0 → 1`)
- Headline: Slide up (`y: 30 → 0, delay: 0.2s`)
- Linha Ciano: Expansão (`width: 0 → 25%, delay: 0.4s`)
- Corpo: Slide up (`y: 30 → 0, delay: 0.5s`)
- Links: Slide up (`y: 30 → 0, delay: 0.6s`)

---

## 7. SOCIAL PROOF (Prova Social)

**Layout:**
- Background: `bg-[#000000]`
- Padding: `px-4 md:px-8 lg:px-16 py-20`
- Container: `max-w-4xl mx-auto`

**Título:**
- Texto: "Você não é o primeiro a transformar operação com automação"
- Fonte: DM Serif Display
- Tamanho: `text-3xl md:text-4xl lg:text-5xl`
- Posicionamento: Centralizado (`text-center`)
- Cor: `text-[#FFFFFF]`
- Leading: `leading-tight`
- Margin bottom: `mb-12`

**Grid de Depoimentos:**
- Layout: `grid grid-cols-1 md:grid-cols-2`
- Gap: `gap-6`

**Cards de Depoimento:**
- Quantidade: 2 cards
- Estrutura:
  - Borda: `border border-[#888888]`
  - Border radius: `rounded-lg`
  - Padding: `p-6`
- Conteúdo:
  1. **Citação**: `text-[#888888]`, `text-sm`, `italic`, `font-normal`, `leading-relaxed`, Margin bottom `mb-4`
  2. **Autor**: `text-[#888888]`, `text-xs`, Formato: `— {autor}`
- Animações:
  - Entrada: Fade in + slide up (`opacity: 0, y: 30 → opacity: 1, y: 0`)
  - Delay progressivo: `index * 0.1s`
  - Duração: `0.6s`

---

## 8. PROJECTS (Projetos)

**Layout:**
- Background: `bg-[#000000]`
- Padding: `px-4 md:px-8 lg:px-16 py-20`
- Posição: `relative` (para o preview flutuante)
- Container: `max-w-4xl mx-auto`
- Event handler: `onMouseMove` (para rastrear posição do cursor)

**Título:**
- Texto: "Resultados Reais de Clientes"
- Fonte: DM Serif Display
- Tamanho: `text-4xl md:text-5xl lg:text-6xl`
- Posicionamento: Centralizado (`text-center`)
- Cor: `text-[#FFFFFF]`
- Leading: `leading-tight`
- Margin bottom: `mb-20`

**Lista de Títulos:**
- Layout: Stack vertical (`space-y-4`)
- Quantidade: 3 projetos

**Cada Título de Projeto:**
- Fonte: DM Serif Display
- Tamanho: `text-3xl md:text-4xl lg:text-5xl`
- Peso: `font-bold`
- Estado padrão:
  - Opacidade: `0.5`
  - Cor: `text-[#888888]`
- Estado hover:
  - Opacidade: `1`
  - Cor: `text-[#FFFFFF]`
- Transição: `duration: 0.3s`
- Cursor: `cursor-interactive`
- Margin bottom: `mb-2`

**Preview Flutuante:**
- Posição: `fixed` (segue o cursor)
- Largura: `w-80` (320px)
- Aparece: Apenas quando `hoveredIndex !== null`
- Animação entrada: Fade in + scale (`opacity: 0, scale: 0.8 → opacity: 1, scale: 1`)
- Posicionamento:
  - X: Segue `mouseX` com spring animation
  - Y: Segue `mouseY` com spring animation
  - Offset: `translateX: -50%, translateY: -50%` (centralizado no cursor)
- Pointer events: `none` (não bloqueia interação)

**Card do Preview:**
- Background: `bg-[#111111]`
- Borda: `border border-[#888888]`
- Border radius: `rounded-lg`
- Padding: `p-6`
- Sombra: `shadow-xl`
- Elementos:
  1. **Preview visual**:
     - Aspect ratio: `aspect-[16/9]`
     - Background: `bg-[#000000]`
     - Borda: `border border-[#888888]`
     - Border radius: `rounded`
     - Placeholder: "Preview do Projeto" (`text-[#888888] text-xs`)
     - Margin bottom: `mb-4`
  2. **Descrição**: `text-sm text-[#888888] mb-4`
  3. **Métricas** (se disponível):
     - Layout: Stack vertical (`space-y-2`)
     - Tamanho: `text-xs`
     - Formato: `Resultado: {result}` (destaque branco no label)

---

## 9. CONTACT (Contato)

**Layout:**
- Background: `bg-[#000000]`
- Padding: `px-4 md:px-8 lg:px-16 py-20`
- Container: `max-w-2xl mx-auto`

**Título:**
- Texto: "Sua vez de responder."
- Fonte: DM Serif Display
- Tamanho: `text-4xl md:text-5xl lg:text-6xl`
- Posicionamento: Centralizado (`text-center`)
- Cor: `text-[#FFFFFF]`
- Leading: `leading-tight`
- Margin bottom: `mb-6`

**Subtítulo:**
- Texto: "Vamos iniciar uma conversa sobre automação?"
- Fonte: DM Sans
- Tamanho: `text-sm`
- Cor: `text-[#888888]`
- Posicionamento: Centralizado (`text-center`)
- Margin bottom: `mb-12`

**CTA Primário (WhatsApp):**
- Estilo: Botão sólido branco
- Largura: `w-full`
- Padding: `py-6`
- Background: `bg-[#FFFFFF]`
- Cor texto: `text-[#000000]`
- Fonte: `text-lg font-semibold`
- Border radius: `rounded-lg`
- Hover: `bg-[#F0F0F0]`
- Margin bottom: `mb-12`

**Separador:**
- Layout: Flex horizontal (`flex items-center gap-4`)
- Elementos:
  - Linha esquerda: `flex-1 h-px bg-[#888888]`
  - Texto: "Ou, se preferir, envie um e-mail" (`text-[#888888] text-xs`)
  - Linha direita: `flex-1 h-px bg-[#888888]`
- Margin bottom: `mb-8`

**Formulário:**
- Layout: Stack vertical (`space-y-6`)

**Campos do Formulário:**
- Quantidade: 3 campos (Nome, E-mail, Mensagem)
- Estrutura de cada campo:
  1. **Label**:
     - Display: `block`
     - Margin bottom: `mb-2`
     - Fonte: `text-sm font-normal`
     - Cor: `text-[#888888]`
  2. **Input/Textarea**:
     - Largura: `w-full`
     - Padding: `px-4 py-3`
     - Background: `bg-[#000000]`
     - Borda: `border border-[#888888]`
     - Border radius: `rounded-lg`
     - Cor texto: `text-[#FFFFFF]`
     - Fonte: `text-sm`
     - Focus: `focus:border-[#FFFFFF]`
     - Transition: `transition-all`
     - Placeholder: Texto em cinza

**Textarea Específico:**
- Rows: `6`
- Resize: `resize-none`

**Botão de Envio:**
- Largura: `w-full`
- Padding: `py-4`
- Background: `bg-[#000000]`
- Borda: `border border-[#888888]`
- Cor texto: `text-[#FFFFFF]`
- Fonte: `text-sm font-semibold`
- Border radius: `rounded-lg`
- Hover: `hover:border-[#FFFFFF]`
- Animações:
  - Hover: `scale: 1.02`
  - Tap: `scale: 0.98`

**Estado de Sucesso:**
- Aparece quando `submitted === true`
- Layout: Centralizado (`text-center py-12`)
- Elementos:
  1. Título: "Mensagem enviada!" (`text-xl font-semibold mb-4 text-[#FFFFFF]`)
  2. Descrição: `text-sm text-[#888888]`
- Animação: Fade in + scale (`opacity: 0, scale: 0.9 → opacity: 1, scale: 1`)

**Animações:**
- CTA WhatsApp: Slide up (`y: 30 → 0, delay: 0.3s`)
- Separador: Fade in (`delay: 0.4s`)
- Formulário: Slide up (`y: 30 → 0, delay: 0.4s`)
- Campos: Slide up individual (`y: 20 → 0`, delay progressivo `0.5s, 0.6s, 0.7s`)

---

## 10. FOOTER (Rodapé)

**Layout:**
- Background: `bg-[#000000]`
- Padding: `px-4 md:px-8 lg:px-16 py-8`
- Borda superior: `border-t border-[#888888]`
- Container: `max-w-7xl mx-auto`

**Estrutura:**
- Layout: Flex responsivo (`flex flex-col md:flex-row`)
- Alinhamento: `items-center justify-between`
- Gap: `gap-4`

**Copyright (Esquerda):**
- Texto: "© 2025 @frochadev. Engenharia de Automação."
- Fonte: DM Sans
- Tamanho: `text-xs`
- Cor: `text-[#888888]`
- Peso: `font-normal`

**Links Sociais (Direita):**
- Layout: Flex horizontal (`flex gap-6`)
- Fonte: Monospace
- Tamanho: `text-xs`
- Estilo: `uppercase tracking-wider`
- Cor: `text-[#888888]`
- Hover: `text-[#00FEFC]`
- Formato: `// LinkedIn`, `// GitHub`

---

## Padrões de Animação Gerais

**Entrada de Seções:**
- Trigger: `whileInView` (quando 20-30% da seção está visível)
- Efeito padrão: Fade in (`opacity: 0 → 1`)
- Duração: `0.8s`
- Execução: Uma vez (`once: true`)

**Elementos Internos:**
- Padrão: Fade in + Slide up (`opacity: 0, y: 30 → opacity: 1, y: 0`)
- Duração: `0.5-0.8s`
- Delay progressivo: Comum em listas (`index * 0.1s` ou `staggerChildren`)

**Hover States:**
- Duração: `0.3s`
- Easing: `ease-out`
- Efeitos comuns:
  - Mudança de cor (`text-[#888888] → text-[#FFFFFF]` ou `text-[#00FEFC]`)
  - Mudança de borda (`border-[#888888] → border-[#FFFFFF]`)
  - Elevação sutil (`y: -4` ou `scale: 1.02`)
  - Deslocamento horizontal (`x: 2`)

**Uso do Ciano (#00FEFC):**
- Cursor customizado (ponto central)
- Indicador de seção ativa no header
- Ícones de código (chaves, setas)
- Links sociais no hover
- Ícones de confirmação (✅) com pulsação
- Glow effects (box-shadow e drop-shadow)

---

## Responsividade

**Breakpoints:**
- Mobile: `< 768px` (md)
- Tablet: `768px - 1024px` (md a lg)
- Desktop: `> 1024px` (lg)
- XL: `> 1280px` (xl)

**Padrões:**
- Padding horizontal: `px-4` (mobile) → `md:px-8` → `lg:px-16`
- Títulos: `text-4xl` → `md:text-5xl` → `lg:text-6xl`
- Grids: 1 coluna → 2 colunas → 3 colunas
- Split-screens: Vertical (mobile) → Horizontal (desktop)

---

## Elementos de Destaque Visual

1. **Contraste de Cores**: Preto (#000000) e branco (#FFFFFF) para máximo contraste
2. **Sotaque Elétrico**: Ciano (#00FEFC) usado estrategicamente para interatividade
3. **Hierarquia Tipográfica**: DM Serif Display (emoção) vs DM Sans (funcionalidade)
4. **Espaçamento Generoso**: Padding vertical mínimo de 80px (`py-20`)
5. **Animações Sutis**: Transições suaves sem distrair do conteúdo
6. **Monocromático com Acento**: 98% preto/branco/cinza, 2% ciano

