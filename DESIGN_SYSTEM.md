# 🎨 Design System - Portfolio

## Documentação Completa: Cores, Fontes, Tamanhos e Proporções

---

## 📐 1. SISTEMA DE CORES

### Paleta Principal

O site utiliza uma paleta minimalista baseada em **3 cores principais** e **1 cor de apoio**:

#### **Cores Primárias**

```css
--background: #000000  /* Preto puro - Fundo principal */
--foreground: #FFFFFF  /* Branco puro - Texto principal */
--gray-medium: #888888  /* Cinza médio - Texto secundário, bordas e divisores */
```

**Nota**: `--gray-medium` é usado tanto para texto secundário quanto para bordas, mantendo consistência visual. As variáveis `--text-secondary` e `--border` foram consolidadas.

#### **Cores Funcionais**

| Cor | Hex | Uso | Contexto |
|-----|-----|-----|----------|
| **Preto Principal** | `#000000` | Fundo de todas as seções | Contexto principal |
| **Preto Secundário** | `#111111` | Background de elementos (cards, código) | Contraste sutil |
| **Preto Terciário** | `#333333` | Placeholders, elementos neutros | Backgrounds internos |
| **Branco Principal** | `#FFFFFF` | Textos de destaque, CTAs primários | Hierarquia máxima |
| **Cinza Médio** | `#888888` | Textos secundários, bordas, labels | Elementos de apoio |
| **Cinza Claro** | `#F0F0F0` | Hover states em botões brancos | Interações sutis |

#### **Hierarquia de Contraste**

O sistema usa **contraste extremo** para criar hierarquia visual:

1. **Máximo Contraste** (`#000000` ↔ `#FFFFFF`)
   - Títulos principais (H1, H2)
   - CTAs primários
   - Elementos estratégicos (lado direito do Dilema)

2. **Contraste Médio** (`#000000` ↔ `#888888`)
   - Textos secundários
   - Labels de formulário
   - Elementos de apoio

3. **Contraste Baixo** (`#111111` ↔ `#888888`)
   - Elementos "fáceis" (lado esquerdo do Dilema)
   - Cards e containers secundários

#### **Aplicação por Contexto**

**Seção Dilema (Split-Screen):**
- **Lado Esquerdo (Fácil)**: `bg-[#111111]` + `text-[#888888]` = Visual "morto", desbotado
- **Lado Direito (Estratégico)**: `bg-[#000000]` + `text-[#FFFFFF]` = Visual nítido, focado

**Cards e Containers:**
- Background: `bg-[#000000]` ou `bg-[#111111]`
- Borda: `border-[#888888]`
- Texto primário: `text-[#FFFFFF]`
- Texto secundário: `text-[#888888]`

**Estados Interativos:**
- Default: `border-[#888888]`
- Hover: `border-[#FFFFFF]` ou `hover:bg-[#F0F0F0]` (botões brancos)
- Focus: `focus:border-[#FFFFFF]`

---

## 🔤 2. SISTEMA TIPOGRÁFICO

### Famílias de Fonte

#### **DM Serif Display** (Display/Títulos)
```css
font-family: "DM Serif Display", serif
```
- **Uso**: Títulos principais (H1, H2)
- **Características**: Serifada, elegante, impacto emocional
- **Pesos**: Regular (400), Italic
- **Aplicação**: Headlines que precisam de impacto emocional

**Onde é usado:**
- Hero headline: `text-4xl md:text-5xl lg:text-6xl xl:text-7xl`
- Títulos de seção: `text-4xl md:text-5xl lg:text-6xl`
- Títulos de projetos (hover): `text-3xl md:text-4xl lg:text-5xl`

#### **DM Sans** (Corpo de Texto)
```css
font-family: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```
- **Uso**: Corpo de texto, parágrafos, elementos funcionais
- **Características**: Sans-serif, legível, moderna
- **Pesos**: 100-1000 (variável)
- **Aplicação**: Textos longos, labels, botões

**Fallback**: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

#### **Monospace** (Técnico)
```css
font-family: "SF Mono", "Menlo", "Consolas", "Monaco", "Courier New", monospace
```
- **Uso**: Código, elementos técnicos, labels secundários
- **Características**: Monoespaçada, técnica, precisa
- **Fallback**: Stack de fontes monospace do sistema para garantir consistência
- **Aplicação**: 
  - Logos de tecnologias no Hero
  - Bloco de código no Differential
  - Labels de arquivo (n8n-workflow.json)

### Escala Tipográfica

#### **Títulos (DM Serif Display)**

| Elemento | Mobile | Tablet | Desktop | XL | Uso |
|----------|--------|--------|---------|----|-----|
| **Hero H1** | `text-4xl` (36px) | `text-5xl` (48px) | `text-6xl` (60px) | `text-7xl` (72px) | Headline principal |
| **H2 Seções** | `text-4xl` (36px) | `text-5xl` (48px) | `text-6xl` (60px) | - | Títulos de seção |
| **H3 Cards** | `text-3xl` (30px) | `text-4xl` (36px) | `text-5xl` (48px) | - | Títulos de projetos |

#### **Corpo de Texto (DM Sans)**

| Elemento | Tamanho | Classe Tailwind | Uso |
|----------|---------|-----------------|-----|
| **Labels** | `12px` | `text-xs` | Labels de formulário, tags |
| **Base** | `14px` | `text-sm` | Texto padrão do body |
| **Parágrafos** | `14px` | `text-sm` | Texto corrido |
| **Títulos de Cards** | `16px` | `text-base` | Títulos de cards (Problems) |
| **CTAs** | `14px` | `text-sm` | Botões padrão |
| **CTA Primário** | `18px` | `text-lg` | Botão WhatsApp |

### Pesos de Fonte

| Peso | Uso | Contexto |
|------|-----|----------|
| **400 (Normal)** | Padrão | Body, parágrafos, labels |
| **Semibold (600)** | Destaque | Botões, títulos de cards |
| **Bold (700)** | Ênfase | Títulos de projetos (hover) |

### Line Height (Leading)

| Contexto | Valor | Classe | Uso |
|----------|-------|--------|-----|
| **Títulos** | `1.2` (tight) | `leading-tight` | Headlines principais |
| **Corpo** | `1.5-1.6` (relaxed) | `leading-relaxed` | Parágrafos, textos longos |
| **Default** | `1.5` | `leading-normal` | Textos padrão |

### Letter Spacing

| Contexto | Valor | Classe | Uso |
|----------|-------|--------|-----|
| **Labels técnicos** | `0.05em` (wider) | `tracking-wider` | "// UMA MENSAGEM DE @FROCHADEV" |
| **Uppercase** | `0.05em` | `uppercase tracking-wider` | Labels em caixa alta |

---

## 📏 3. SISTEMA DE ESPAÇAMENTO

### Espaçamento Vertical (Padding/Margin)

O site usa um sistema baseado em **múltiplos de 4px** (Tailwind padrão):

#### **Padding de Seções**
- `py-20` (80px) - Padding padrão vertical
- `py-32` (128px) - Padding generoso (Projects, Contact)
- **Padding Horizontal Responsivo**: `px-4 md:px-8 lg:px-16`
  - Mobile: `px-4` (16px)
  - Tablet: `px-8` (32px)
  - Desktop: `px-16` (64px)

#### **Espaçamento entre Elementos**

| Elemento | Espaçamento | Classe | Contexto |
|----------|-------------|--------|----------|
| **Título → Subtítulo** | `mb-4` (16px) | `mb-4` | Regra geral (exceto Hero) |
| **Título → Conteúdo** | `mb-12` (48px) | `mb-12` | Seções padrão |
| **Título → Conteúdo (Grande)** | `mb-16` (64px) | `mb-16` | Seções com muito espaço |
| **Título → Conteúdo (Projects)** | `mb-20` (80px) | `mb-20` | Seção Projects |
| **Cards (Grid)** | `gap-6` (24px) | `gap-6` | Grid padrão |
| **Lista de Itens** | `space-y-4` (16px) | `space-y-4` | Listas verticais |
| **Itens (Grande)** | `space-y-6` (24px) | `space-y-6` | Espaçamento generoso |

**Nota**: O Hero Section usa espaçamentos específicos (`mb-8` entre Foto → Headline, `mb-12` entre Headline → CTA) que são uma exceção deliberada à regra geral para criar hierarquia visual específica.

#### **Padding Interno de Cards**

| Elemento | Padding | Classe | Contexto |
|----------|---------|--------|----------|
| **Cards padrão** | `p-6` (24px) | `p-6` | Cards de problemas, projetos |
| **Cards grandes** | `p-8` (32px) | `p-8` | Cards de serviços, diferenciais |
| **Botões** | `px-4 py-2` (16px/8px) | `px-4 py-2` | Botões padrão |
| **CTA Primário** | `py-6` (24px) | `py-6` | Botão WhatsApp |
| **Inputs** | `px-4 py-3` (16px/12px) | `px-4 py-3` | Campos de formulário |

---

## 📐 4. PROPORÇÕES E LAYOUT

### Container Widths

| Container | Largura | Classe | Uso |
|----------|---------|--------|-----|
| **Hero** | `max-w-4xl` (896px) | `max-w-4xl` | Conteúdo principal |
| **Seções Padrão** | `max-w-6xl` (1152px) | `max-w-6xl` | Seções com grid |
| **Formulário** | `max-w-2xl` (672px) | `max-w-2xl` | Formulário de contato |
| **Social Proof** | `max-w-4xl` (896px) | `max-w-4xl` | Depoimentos |

### Grid System

#### **Breakpoints Tailwind**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

#### **Grids por Seção**

**Problems:**
- Mobile: `grid-cols-1` (1 coluna)
- Tablet: `md:grid-cols-2` (2 colunas)
- Desktop: `lg:grid-cols-3` (3 colunas)

**Dilema:**
- Mobile: `flex-col` (vertical)
- Desktop: `md:flex-row` (horizontal split-screen)

**Differential:**
- Mobile: `grid-cols-1`
- Desktop: `lg:grid-cols-2` (texto + código)

**Projects:**
- **Não usa grid** - Usa lista vertical de títulos grandes com preview flutuante no hover
- Ver detalhes na Seção 5 ("Projects Section")

### Alturas de Seção

| Seção | Altura | Classe | Propósito |
|--------|--------|--------|-----------|
| **Hero** | `min-h-screen` | `min-h-screen` | Viewport completo (otimizado para mobile) |
| **Dilema** | `min-h-screen` | `min-h-screen` | Split-screen completo (otimizado para mobile) |
| **Seções Padrão** | `min-h-screen` | `min-h-screen` | Mínimo uma tela |
| **Seções Compactas** | `py-20` | Padding apenas | Social Proof |

**Nota Técnica**: Usamos `min-h-screen` em vez de `h-screen` para evitar problemas em dispositivos móveis onde `100vh` pode causar "pulos" no layout quando as barras de navegação do navegador aparecem/desaparecem. `min-h-screen` garante altura mínima mas permite crescimento quando necessário.

### Aspect Ratios

| Elemento | Ratio | Classe | Uso |
|----------|-------|--------|-----|
| **Preview Projetos** | `16:9` | `aspect-[16/9]` | Imagens de projetos |
| **Avatar** | `1:1` | `w-8 h-8 rounded-full` | Foto do perfil |

---

## 🎯 5. COMPONENTES E SEUS ESPECÍFICOS

### Hero Section

**Tipografia:**
- H1: `text-4xl md:text-5xl lg:text-6xl xl:text-7xl` (DM Serif Display)
- Label: `text-xs uppercase tracking-wider font-mono`
- Logos: `text-xs font-mono`

**Espaçamento:**
- Container: `max-w-4xl mx-auto`
- Foto → Headline: `mb-8` (32px) - *Exceção deliberada para hierarquia visual*
- Headline → CTA: `mb-12` (48px) - *Exceção deliberada para hierarquia visual*

**Nota**: Os espaçamentos do Hero são maiores que a regra geral (`mb-4` para título → subtítulo) para criar impacto visual e hierarquia clara no primeiro contato do usuário.

**Cores:**
- Background: `#000000`
- Texto principal: `#FFFFFF`
- Texto secundário: `#888888`

### Dilema Section (Split-Screen)

**Layout:**
- Container: `min-h-screen flex flex-col overflow-hidden`
- Split: `flex-col md:flex-row h-full`
- Cada lado: `flex-1` (50% cada)

**Tipografia:**
- Títulos: `text-3xl md:text-4xl` (DM Serif Display)
- Texto: `text-sm`

**Cores:**
- Lado Esquerdo: `bg-[#111111]` + `text-[#888888]`
- Lado Direito: `bg-[#000000]` + `text-[#FFFFFF]`

### Problems Section

**Grid:**
- `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Gap: `gap-6` (24px)

**Cards:**
- Padding: `p-6` (24px)
- Borda: `border border-[#888888]`
- Altura mínima: `min-h-[200px]` (mas agora usa `h-full`)

**Tipografia:**
- Título card: `text-base font-semibold`
- Descrição: `text-sm`

### Projects Section

**Layout:**
- Lista vertical de títulos grandes
- Títulos: `text-3xl md:text-4xl lg:text-5xl` (DM Serif Display)
- Opacity hover: `0.5` → `1.0`
- Preview flutuante: `w-80` (320px)

**Tipografia:**
- Título (normal): `opacity-50` + `text-[#888888]`
- Título (hover): `opacity-100` + `text-[#FFFFFF]`

### Contact Section

**Hierarquia Visual:**
1. **Headline**: `text-4xl md:text-5xl lg:text-6xl` (DM Serif Display)
2. **CTA Primário** (WhatsApp): `bg-[#FFFFFF] text-[#000000] py-6 text-lg`
3. **Separador**: `h-px bg-[#888888]`
4. **Formulário**: `bg-[#000000] border-[#888888]`

**Inputs:**
- Padding: `px-4 py-3`
- Border: `border-[#888888]`
- Focus: `focus:border-[#FFFFFF]`
- Texto: `text-sm`

### Botões (Componentes Formais)

#### **Botão Primário (CTA Principal)**
**Uso**: Ação principal (ex: WhatsApp, CTAs de conversão)

**Estilos:**
- Background: `bg-[#FFFFFF]`
- Texto: `text-[#000000]`
- Padding: `py-6 px-4` (ou `w-full py-6` para full-width)
- Tamanho de fonte: `text-lg`
- Font weight: `font-semibold`
- Border radius: `rounded-lg`

**Estados:**
- Default: `bg-[#FFFFFF] text-[#000000]`
- Hover: `hover:bg-[#F0F0F0]` (cinza muito claro)
- Transição: `transition-all`

**Exemplo**: Botão WhatsApp na seção Contact

#### **Botão Secundário (Ghost)**
**Uso**: Ações secundárias, elementos menos críticos

**Estilos:**
- Background: `bg-transparent` ou `bg-[#000000]`
- Texto: `text-[#FFFFFF]`
- Border: `border border-[#888888]`
- Padding: `px-4 py-2`
- Tamanho de fonte: `text-sm`
- Font weight: `font-normal`

**Estados:**
- Default: `border-[#888888] text-[#FFFFFF]`
- Hover: `hover:border-[#FFFFFF] hover:text-[#FFFFFF]`
- Transição: `transition-all`

**Exemplo**: Botão "Leia o diagnóstico" no Hero

#### **Botão Terciário (Formulário)**
**Uso**: Botões de formulário (submit, reset)

**Estilos:**
- Background: `bg-[#000000]`
- Texto: `text-[#FFFFFF]`
- Border: `border border-[#888888]`
- Padding: `py-4 px-4`
- Tamanho de fonte: `text-sm`
- Font weight: `font-semibold`

**Estados:**
- Default: `border-[#888888]`
- Hover: `hover:border-[#FFFFFF]`
- Transição: `transition-all`

**Exemplo**: Botão "Enviar E-mail" no formulário de contato

---

## 🎨 6. PRINCÍPIOS DE DESIGN

### Hierarquia Visual

1. **Contraste Extremo** (`#000000` ↔ `#FFFFFF`)
   - Máxima atenção
   - Elementos estratégicos
   - CTAs primários

2. **Contraste Médio** (`#000000` ↔ `#888888`)
   - Informação secundária
   - Elementos de apoio
   - Elementos "fáceis"

3. **Contraste Baixo** (`#111111` ↔ `#888888`)
   - Elementos desbotados
   - Contexto negativo (lado esquerdo Dilema)

### Tipografia como Hierarquia

- **DM Serif Display** = Emoção, impacto, importância
- **DM Sans** = Funcionalidade, legibilidade, clareza
- **Monospace** = Técnico, preciso, credibilidade

### Espaçamento como Respiração

- **Espaçamento Generoso**: Títulos grandes precisam de espaço
- **Padding Vertical**: `py-20` mínimo, `py-32` para seções importantes
- **Margin Bottom**: `mb-12` padrão, `mb-16` ou `mb-20` para impacto

### Proporção Áurea Implícita

- Containers principais: `max-w-4xl` (896px) - proporção confortável
- Grid de 3 colunas: Divide espaço em terços harmoniosos
- Split-screen: 50/50 cria simetria visual

---

## 📱 7. RESPONSIVIDADE

### Mobile First Approach

**Mobile (< 768px):**
- 1 coluna em todos os grids
- Títulos: `text-4xl` (36px)
- Padding horizontal: `px-4` (16px)
- Dilema: vertical (stack)

**Tablet (768px - 1024px):**
- 2 colunas em grids
- Títulos: `text-5xl` (48px)
- Padding horizontal: `px-8` (32px)
- Dilema: começa a ser horizontal

**Desktop (> 1024px):**
- 3 colunas em grids
- Títulos: `text-6xl` (60px)
- Padding horizontal: `px-16` (64px)
- Dilema: horizontal completo

**XL (> 1280px):**
- Hero H1: `text-7xl` (72px)
- Containers mantêm `max-w-*`

---

## 🎯 8. REGRAS DE USO

### ✅ Quando Usar Cada Cor

**`#FFFFFF` (Branco):**
- Títulos principais
- Textos estratégicos (lado direito Dilema)
- CTAs primários
- Elementos que precisam de destaque máximo

**`#888888` (Cinza):**
- Textos secundários
- Labels de formulário
- Bordas e divisores
- Elementos de apoio
- Elementos "fáceis" (lado esquerdo Dilema)

**`#111111` (Cinza Escuro):**
- Backgrounds de cards técnicos
- Lado esquerdo do Dilema (contraste negativo)
- Containers de código

**`#000000` (Preto):**
- Background principal
- Background de elementos estratégicos
- Máximo contraste

### ✅ Quando Usar Cada Fonte

**DM Serif Display:**
- H1, H2 (títulos de seção)
- Headlines impactantes
- Títulos de projetos em hover
- Qualquer texto que precisa de impacto emocional

**DM Sans:**
- Corpo de texto
- Parágrafos
- Labels
- Botões
- Qualquer texto funcional

**Monospace:**
- Código
- Nomes de tecnologias
- Labels técnicos
- Nomes de arquivos

### ✅ Escala de Tamanhos

**Use `text-4xl md:text-5xl lg:text-6xl`:**
- Títulos principais de seção
- Headlines importantes

**Use `text-3xl md:text-4xl lg:text-5xl`:**
- Títulos de projetos (hover)
- Subtítulos grandes

**Use `text-sm`:**
- Corpo de texto padrão
- Parágrafos
- Descrições

**Use `text-base`:**
- Títulos de cards (ex: Problems Section)
- Elementos que precisam de destaque médio

**Use `text-xs`:**
- Labels
- Tags
- Informações secundárias

---

## 📊 9. MÉTRICAS E RATIOS

### Ratios Importantes

- **Hero Container**: `max-w-4xl` = ~896px (56rem)
- **Grid Gap**: `gap-6` = 24px (1.5rem)
- **Card Padding**: `p-6` = 24px (1.5rem)
- **Section Padding**: `py-20` = 80px (5rem)

### Espaçamento Consistente

- **Espaçamento pequeno**: `mb-4` (16px)
- **Espaçamento médio**: `mb-8` (32px)
- **Espaçamento grande**: `mb-12` (48px)
- **Espaçamento extra**: `mb-16` (64px) ou `mb-20` (80px)

---

## 🎨 10. RESUMO EXECUTIVO

### Paleta de Cores
- **3 cores principais**: Preto (`#000000`), Branco (`#FFFFFF`), Cinza (`#888888`)
- **1 cor funcional**: Cinza escuro (`#111111`) para contraste negativo
- **Sistema baseado em contraste**: Máximo para elementos estratégicos, mínimo para elementos "fáceis"

### Tipografia
- **2 famílias principais**: DM Serif Display (emoção) + DM Sans (funcionalidade)
- **1 família técnica**: Monospace (credibilidade)
- **Escala responsiva**: De `text-4xl` (mobile) até `text-7xl` (XL desktop)

### Espaçamento
- **Sistema baseado em 4px**: Todos os espaçamentos são múltiplos de 4
- **Padding generoso**: Mínimo `py-20`, ideal `py-32` para seções importantes
- **Containers proporcionais**: `max-w-4xl` para conteúdo principal, `max-w-6xl` para grids

### Proporções
- **Grids responsivos**: 1 → 2 → 3 colunas (Problems)
- **Lista interativa**: Projects usa lista vertical com preview flutuante (não grid)
- **Split-screen**: 50/50 em desktop, vertical em mobile
- **Alturas**: `min-h-screen` para todas as seções (otimizado para mobile)

---

**Este documento serve como referência completa para manter consistência visual em todo o portfólio.**

