# Documento Funcional - AI PlayGrounds Landing Page

Este documento explica cómo funciona la landing page, qué hace cada sección, dónde apuntan los botones y cómo hacer cambios comunes.

---

## 1. Flujo de Secciones

La página es un single-page con scroll continuo. Cada sección tiene un `id` único para navegación interna.

| Orden | Sección | ID | Archivo |
|-------|---------|-----|---------|
| 1 | Header | `main-header` | `Header.astro` |
| 2 | Hero | `#hero` | `Hero.astro` |
| 3 | Métricas | `#metricas` | `Metrics.astro` |
| 4 | Programas | `#programas` | `Programs.astro` |
| 5 | Casos de Éxito | `#casos` | `CaseStudies.astro` |
| 6 | Testimonios | `#testimonios` | `Testimonials.astro` |
| 7 | Equipo | `#equipo` | `Team.astro` |
| 8 | Eventos | `#eventos` | `Events.astro` |
| 9 | Partners | `#partners` | `Partners.astro` |
| 10 | Advisors | `#advisors` | `Advisors.astro` |
| 11 | CTA + FAQ | `#faq` | `CtaFaq.astro` |
| 12 | Footer | — | `Footer.astro` |

---

## 2. Qué hace cada sección y por qué existe

### Header
**Propósito:** Navegación principal y acceso rápido a secciones.

- Logo de AI PlayGrounds (lleva a `/`)
- 4 links de navegación: Programas, Casos de Éxito, Eventos, Comunidad
- Toggle de idioma ES/EN (solo visual, no funcional aún)
- Botón CTA "Empieza gratis"
- Menú hamburguesa en móvil con sidebar lateral
- Se vuelve sólido con blur al hacer scroll (sticky)

### Hero
**Propósito:** Captar atención y comunicar la propuesta de valor.

- Texto rotativo cada 3 segundos: "Comprende IA." → "Construye con IA." → "Lidera con IA."
- Subtítulo fijo sobre ser la comunidad más grande de LATAM
- Dos botones CTA (primario y secundario)
- Fondo con partículas animadas (tsParticles) y gradientes de respaldo
- Indicador de scroll animado (flecha rebotando)

### Métricas
**Propósito:** Mostrar impacto y credibilidad con números.

- 4 cards con métricas animadas (números que suben desde 0)
- Datos: 300+ participantes, 40 becas, 16 speakers, 800+ registrados hackathon
- Cada card tiene un CTA para profundizar
- Se activa cuando entras en el viewport (Intersection Observer)

### Programas
**Propósito:** Presentar los 3 programas educativos.

- **AI Fundamentals:** Gratis, 6 semanas, principiante
- **AI Technical Product:** Nuevo, 12 semanas, intermedio
- **The Real AI:** Premium, 8 semanas, avanzado
- Cards con glassmorphism, badges de estado, duración y nivel
- Cita de la filosofía de AI PlayGrounds al final

### Casos de Éxito
**Propósito:** Mostrar proyectos reales construidos por participantes.

- Grid de 4 proyectos con: nombre, problema, tecnologías, métrica de impacto, participante
- Cada card tiene overlay en hover con botón "Ver proyecto"
- Link a Umbral como plataforma de proyectos
- Transmite que no son prototipos, son productos con usuarios reales

### Testimonios
**Propósito:** Validación social con voces de la comunidad.

- Carrusel con 5 testimonios de 3 tipos: participantes, speakers, sponsors
- Autoplay cada 5 segundos, pausa en hover
- Navegación con dots y flechas laterales
- Quotes grandes en itálica con badge de tipo

### Equipo
**Propósito:** Humanizar la marca mostrando quién está detrás.

- Grid de 8 miembros con foto placeholder (iniciales), nombre, cargo, LinkedIn
- Soledad destacada con borde especial como founder/PM
- Hover que cambia el borde a cyan

### Eventos
**Propósito:** Mostrar el calendario 2026 y promocionar Hack@LATAM.

- Timeline horizontal con 3 eventos: PNUD Partnership, Hack@LATAM, IRF Fellowship
- Card destacada de Hack@LATAM con:
  - Countdown en tiempo real al 15 de mayo 2026
  - Botón de registro que abre en nueva pestaña
- El evento activo tiene animación de pulso

### Partners
**Propósito:** Mostrar credibilidad con logos de empresas aliadas.

- 28 logos organizados en 3 filas de marquee infinito
- Fila 1 y 3 se mueven a la izquierda, Fila 2 a la derecha
- Pausa completa al hacer hover
- Máscaras de desvanecimiento en los bordes

### Advisors
**Propósito:** Mostrar respaldo de líderes de la industria.

- 2 cards lado a lado: Boris (Intercorp) y Jeslyn (Amazon)
- Foto placeholder, nombre, cargo, empresa, bio breve, LinkedIn
- Visualmente diferente de Partners (personas vs logos)

### CTA + FAQ
**Propósito:** Convertir visitantes y resolver dudas.

- **CTA de urgencia:** "La próxima cohorte empieza pronto" con botón grande
- **FAQ Accordion:** 6 preguntas comunes con respuestas desplegables
- Click para expandir/colapsar, solo una abierta a la vez
- Ícono + que rota a × cuando está abierta

### Footer
**Propósito:** Links secundarios, legal y redes sociales.

- 4 columnas: Logo+descripción, Programas, Comunidad, Legal
- Íconos de redes: LinkedIn, Instagram, Discord, YouTube
- "Hecho con amor desde Perú para LATAM"

---

## 3. Tabla de Botones y CTAs

| Texto | Sección | Destino | Tipo |
|-------|---------|---------|------|
| Empieza gratis | Header | `#programas` | `btn-primary` |
| Empieza gratis | Hero | `#programas` | `btn-primary` |
| Ver Hack@LATAM 2026 | Hero | `#eventos` | `btn-secondary` |
| Ver programas → | Métricas | `#programas` | `link-indigo` |
| Aplica a una beca → | Métricas | `#programas` | `link-indigo` |
| Ver eventos → | Métricas | `#eventos` | `link-indigo` |
| Hack@LATAM 2026 → | Métricas | `#eventos` | `link-indigo` |
| Inscríbete gratis → | Programas (AI Fundamentals) | `#` (placeholder) | `btn-secondary` |
| Conoce más → | Programas (AI Technical Product) | `#` (placeholder) | `btn-primary` |
| Aplica ahora → | Programas (The Real AI) | `#` (placeholder) | `btn-coral` |
| Ver proyecto | Casos de Éxito | `#` (placeholder) | `btn-secondary` |
| Ver más proyectos en Umbral | Casos de Éxito | `#` (placeholder) | `link-indigo` |
| Registrarme | Eventos (Hack@LATAM) | `https://hacklatam.aiplaygrounds.tech` | `btn-coral` (abre nueva pestaña) |
| Ver perfil (LinkedIn) | Advisors | `#` (placeholder) | link con ícono |
| Empieza gratis ahora → | CTA Final | `#programas` | `btn-primary` |
| Links footer | Footer | Varios `#` y secciones | `link-hover` |
| Redes sociales | Footer | `#` (placeholder) | ícono circular |

---

## 4. Animaciones y Elementos Interactivos

### Scroll Reveal
- **Clase:** `.reveal` y `.reveal-stagger`
- **Qué hace:** Elementos aparecen con fade-in + slide-up al entrar en viewport
- **Activación:** Intersection Observer en `Layout.astro`
- **Dónde:** Títulos de sección, grids de cards, contenido general

### Counters Animados
- **Clase:** `.counter`
- **Atributos:** `data-target` (número final), `data-suffix` (texto después del número)
- **Qué hace:** Números suben de 0 al valor final en ~1.5 segundos
- **Activación:** Intersection Observer cuando el elemento es 50% visible
- **Dónde:** Sección Métricas

### Texto Rotativo del Hero
- **Elemento:** `#rotating-text`
- **Qué hace:** Cambia entre 3 frases cada 3 segundos con fade in/out
- **Frases:** "Comprende IA." → "Construye con IA." → "Lidera con IA."
- **Clases de animación:** `.text-entering`, `.text-exiting`

### Partículas (tsParticles)
- **Contenedor:** `#tsparticles`
- **Qué hace:** Puntos conectados con líneas que se mueven sutilmente
- **Interacción:** Los puntos se conectan al cursor en hover
- **Fallback:** Gradientes decorativos si no carga

### Sticky Header
- **Clases:** `.header-transparent` → `.header-scrolled`
- **Qué hace:** Header transparente en top, se vuelve sólido con blur después de 50px scroll
- **Activación:** Event listener de scroll en `Header.astro`

### Menú Móvil
- **Elementos:** `#mobile-menu-btn`, `#mobile-menu`, `#mobile-menu-overlay`
- **Qué hace:** Sidebar que desliza desde la derecha
- **Cierre:** Click en overlay, en X, en links, o tecla Escape
- **Animación hamburguesa:** Las 3 líneas rotan a X cuando está abierto

### Carrusel de Testimonios
- **Elementos:** `#carousel-track`, `.carousel-dot`, `#carousel-prev`, `#carousel-next`
- **Qué hace:** Slides horizontales con autoplay cada 5 segundos
- **Pausa:** En hover sobre el carrusel
- **Navegación:** Dots clickeables + flechas laterales (solo desktop)

### Marquee de Partners
- **Clases:** `.marquee-track-left`, `.marquee-track-right`
- **Qué hace:** 3 filas de logos en movimiento continuo (CSS animation)
- **Direcciones:** Filas 1 y 3 izquierda, Fila 2 derecha
- **Pausa:** Hover sobre toda la sección `.partners-marquee`

### Countdown Timer
- **Elementos:** `#countdown-days`, `#countdown-hours`, `#countdown-minutes`, `#countdown-seconds`
- **Atributo:** `data-target` con fecha ISO
- **Qué hace:** Cuenta regresiva al 15 de mayo 2026, actualiza cada segundo

### Timeline de Eventos
- **Clases:** `.timeline-node`, `.timeline-node-active`
- **Qué hace:** Nodos circulares conectados por línea
- **Animación:** El evento activo tiene pulso (`timeline-pulse`)

### FAQ Accordion
- **Clase contenedor:** `.faq-item`
- **Trigger:** `.faq-trigger`
- **Contenido:** `.faq-content`
- **Qué hace:** Click expande/colapsa respuesta, solo uno abierto a la vez
- **Ícono:** + rota a × cuando está activo (`.faq-icon`)

---

## 5. Recetas: Cómo hacer cambios comunes

### Agregar un miembro al equipo

1. Abre `src/components/Team.astro`
2. Busca el array `team` (línea ~13)
3. Agrega un nuevo objeto:
```javascript
{
  name: 'Nombre Completo',
  role: 'Cargo',
  image: '/images/team/nombre.jpg',
  linkedin: 'https://linkedin.com/in/usuario',
  featured: false, // true si debe destacarse
},
```
4. Si tienes foto, ponla en `public/images/team/` con formato JPG, cuadrada (400x400px mínimo)
5. Guarda y verifica con `npm run dev`

### Agregar un logo de partner

1. Abre `src/components/Partners.astro`
2. Busca los arrays `row1`, `row2`, o `row3` (líneas ~14-27)
3. Agrega el nombre del partner donde corresponda:
```javascript
const row1 = [
  'Yavendió!', 'ElevenLabs', 'NuevoPartner', // agregar aquí
  ...
];
```
4. Si tienes logo PNG (fondo transparente), ponlo en `public/images/partners/`
5. Modifica el código para usar `<img>` en lugar de `<span>` si quieres mostrar la imagen

### Cambiar la fecha del countdown

1. Abre `src/components/Events.astro`
2. Busca la variable `targetDate` (línea ~35):
```javascript
const targetDate = new Date('2026-05-15T00:00:00');
```
3. Cambia la fecha al formato `YYYY-MM-DDTHH:MM:SS`
4. Actualiza también el texto visible de fechas (líneas ~104-111)

### Agregar una pregunta al FAQ

1. Abre `src/components/CtaFaq.astro`
2. Busca el array `faqs` (línea ~13)
3. Agrega un nuevo objeto:
```javascript
{
  question: '¿Tu pregunta aquí?',
  answer: 'La respuesta completa aquí. Puede ser larga.',
},
```
4. El accordion se ajusta automáticamente

### Agregar un evento al timeline

1. Abre `src/components/Events.astro`
2. Busca el array `timelineEvents` (línea ~13)
3. Agrega un nuevo objeto:
```javascript
{
  name: 'Nombre del Evento',
  date: 'Fecha visible',
  description: 'Descripción corta',
  active: false, // true si es el próximo evento
},
```
4. Si agregas un cuarto evento, el grid mostrará 4 columnas en desktop

### Agregar un testimonio

1. Abre `src/components/Testimonials.astro`
2. Busca el array `testimonials` (línea ~13)
3. Agrega un nuevo objeto según el tipo:

**Participante:**
```javascript
{
  type: 'participant',
  quote: 'El testimonio entre comillas...',
  name: 'Nombre Apellido',
  role: 'Participante — Nombre del Programa',
  avatar: '/images/avatars/nombre.jpg',
},
```

**Speaker:**
```javascript
{
  type: 'speaker',
  quote: 'El testimonio...',
  name: 'Nombre Apellido',
  role: 'Cargo @ Empresa',
  company: 'Empresa',
  avatar: '/images/avatars/nombre.jpg',
},
```

**Sponsor/Aliado:**
```javascript
{
  type: 'sponsor',
  quote: 'El testimonio institucional...',
  name: 'Nombre de la Organización',
  role: 'Tipo de Alianza',
  company: 'Nombre corto',
  avatar: '/images/logos/nombre.png',
},
```

### Cambiar las métricas

1. Abre `src/components/Metrics.astro`
2. Busca el array `metrics` (línea ~13)
3. Modifica los valores:
```javascript
{
  value: 500,        // El número que se animará
  suffix: '+',       // Texto después del número ('+', '%', '')
  label: 'Descripción de la métrica',
  cta: 'Texto del link',
  ctaHref: '#seccion',
},
```

### Cambiar un link o CTA

**Links de navegación del header:**
1. Abre `src/components/Header.astro`
2. Busca `navLinks` (línea ~14)
3. Modifica `href` y `label`

**Links del footer:**
1. Abre `src/components/Footer.astro`
2. Busca `footerLinks` (línea ~13)
3. Modifica dentro de `programas`, `comunidad` o `legal`

**Redes sociales:**
1. Abre `src/components/Footer.astro`
2. Busca `socialLinks` (línea ~34)
3. Modifica `href` con la URL real

**CTAs de programas:**
1. Abre `src/components/Programs.astro`
2. En cada programa del array, modifica la propiedad `cta` y el `href` del link (actualmente `#`)

### Agregar un advisor

1. Abre `src/components/Advisors.astro`
2. Busca el array `advisors` (línea ~13)
3. Agrega un nuevo objeto:
```javascript
{
  name: 'Nombre',
  company: 'Empresa',
  role: 'Cargo',
  bio: 'Bio de 1-2 líneas explicando su rol y por qué apoya a AI PlayGrounds.',
  linkedin: 'https://linkedin.com/in/usuario',
  image: '/images/advisors/nombre.jpg',
},
```
4. Con 3+ advisors, el grid mostrará 3 columnas en desktop

---

## 6. Notas Importantes

- Todos los placeholders marcados con `#` necesitan URLs reales antes de lanzar
- Las imágenes placeholder deben reemplazarse por fotos reales
- El toggle de idioma ES/EN no funciona aún, necesita implementación de i18n
- El botón de registro de Hack@LATAM abre en nueva pestaña (`target="_blank"`)
- Las partículas usan lazy-load para no afectar la carga inicial
