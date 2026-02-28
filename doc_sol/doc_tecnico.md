# Documento Técnico - AI PlayGrounds Landing Page

Este documento explica la estructura técnica del proyecto, las tecnologías usadas, cómo modificar cada componente y cómo desplegar el sitio.

---

## 1. Estructura de Archivos

```
landing-page/
├── .astro/                    # Cache interno de Astro (ignorar)
├── .git/                      # Repositorio Git
├── dist/                      # Build de producción (se genera con npm run build)
├── doc_sol/                   # Documentación del proyecto
│   ├── doc_funcional.md       # Documento funcional
│   └── doc_tecnico.md         # Este documento
├── node_modules/              # Dependencias instaladas (ignorar)
├── public/                    # Archivos estáticos (accesibles directamente)
│   ├── favicon.ico            # Ícono del navegador
│   ├── favicon.svg            # Ícono en SVG
│   └── images/                # Carpeta para imágenes (crear subcarpetas)
│       ├── team/              # Fotos del equipo
│       ├── advisors/          # Fotos de advisors
│       ├── partners/          # Logos de partners
│       ├── avatars/           # Avatares de testimonios
│       └── projects/          # Screenshots de proyectos
├── src/                       # Código fuente
│   ├── components/            # Componentes reutilizables
│   │   ├── Header.astro       # Navegación + menú móvil
│   │   ├── Hero.astro         # Sección hero + partículas
│   │   ├── Metrics.astro      # Métricas con counters
│   │   ├── Programs.astro     # Cards de programas
│   │   ├── CaseStudies.astro  # Proyectos de participantes
│   │   ├── Testimonials.astro # Carrusel de testimonios
│   │   ├── Team.astro         # Grid del equipo
│   │   ├── Events.astro       # Timeline + countdown
│   │   ├── Partners.astro     # Marquee de logos
│   │   ├── Advisors.astro     # Cards de advisors
│   │   ├── CtaFaq.astro       # CTA final + FAQ accordion
│   │   └── Footer.astro       # Pie de página
│   ├── layouts/               # Layouts base
│   │   └── Layout.astro       # Layout principal con <head>
│   ├── pages/                 # Rutas/páginas
│   │   └── index.astro        # Página principal (/)
│   └── styles/                # Estilos globales
│       └── global.css         # CSS con Tailwind v4 + custom
├── astro.config.mjs           # Configuración de Astro
├── CLAUDE.md                  # Instrucciones para desarrollo con IA
├── package.json               # Dependencias y scripts
├── package-lock.json          # Lock de versiones
├── tsconfig.json              # Configuración de TypeScript
└── README.md                  # Readme del repo
```

---

## 2. Tecnologías Utilizadas

### Astro 5.x
- **Qué es:** Framework web para sitios estáticos y contenido-first
- **Por qué:** Genera HTML estático, carga JavaScript solo donde se necesita, excelente performance
- **Dónde aparece:** Archivos `.astro`, `astro.config.mjs`, `package.json`
- **Documentación:** https://docs.astro.build

### Tailwind CSS 4.x
- **Qué es:** Framework CSS utility-first
- **Por qué:** Desarrollo rápido, clases directas en HTML, fácil de mantener
- **Dónde aparece:** `global.css` (tema con `@theme`), clases en componentes
- **Documentación:** https://tailwindcss.com/docs

### tsParticles 3.x
- **Qué es:** Librería para animaciones de partículas
- **Por qué:** Efecto visual futurista en el hero
- **Dónde aparece:** `Hero.astro` (inicialización en script), `package.json`
- **Documentación:** https://particles.js.org

### TypeScript
- **Qué es:** Superset de JavaScript con tipos estáticos
- **Por qué:** Menos errores, mejor autocompletado, código más robusto
- **Dónde aparece:** `tsconfig.json`, scripts dentro de componentes `.astro`
- **Documentación:** https://www.typescriptlang.org/docs

### Google Fonts (Sora + DM Sans)
- **Qué es:** Servicio de fuentes web gratuitas
- **Por qué:** Tipografía consistente sin hospedar archivos
- **Dónde aparece:** `global.css` línea 7 (`@import`), `Layout.astro` (preconnect)
- **Documentación:** https://fonts.google.com

### Vite
- **Qué es:** Bundler y servidor de desarrollo moderno
- **Por qué:** Astro lo usa internamente, rápido HMR (Hot Module Replacement)
- **Dónde aparece:** `astro.config.mjs` (plugin de Tailwind), configuración implícita
- **Documentación:** https://vitejs.dev

---

## 3. Componentes: Qué hace cada uno y cómo modificarlo

### Layout.astro
**Ubicación:** `src/layouts/Layout.astro`

**Qué hace:**
- Define la estructura HTML base (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`)
- Incluye meta tags SEO, Open Graph, Twitter Cards
- Carga Google Fonts con preconnect
- Importa `global.css`
- Contiene scripts globales para Intersection Observer (reveal y counters)

**Propiedades (Props):**
```typescript
interface Props {
  title?: string;        // Título de la página
  description?: string;  // Meta description
  lang?: string;         // Idioma (default: "es")
  ogImage?: string;      // Imagen para compartir
}
```

**Para modificar:**
- **Meta tags:** Edita las props por defecto en líneas 15-20
- **URL base:** Cambia `siteUrl` en línea 23 para producción
- **Scripts globales:** Modifica el `<script>` al final (líneas 76-126)

---

### Header.astro
**Ubicación:** `src/components/Header.astro`

**Qué hace:**
- Muestra logo + navegación horizontal en desktop
- Menú hamburguesa con sidebar en móvil
- Sticky header que cambia de transparente a sólido al scroll
- Toggle de idioma (solo visual)
- CTA "Empieza gratis"

**Datos editables:**
```javascript
const navLinks = [
  { href: '#programas', label: 'Programas' },
  { href: '#casos', label: 'Casos de Éxito' },
  // ... agregar o modificar links aquí
];
```

**Para modificar:**
- **Links:** Edita el array `navLinks` (línea 14)
- **Logo:** Reemplaza el placeholder en líneas 30-38
- **CTA:** Modifica líneas 65-71

---

### Hero.astro
**Ubicación:** `src/components/Hero.astro`

**Qué hace:**
- Muestra texto rotativo animado
- Fondo con partículas tsParticles
- Gradientes decorativos como fallback
- 2 CTAs (primario y secundario)
- Indicador de scroll

**Datos editables:**
```javascript
const rotatingTexts = [
  'Comprende IA.',
  'Construye con IA.',
  'Lidera con IA.',
];
```

**Para modificar:**
- **Textos rotativos:** Edita el array `rotatingTexts` (línea 13) - hay que editarlo también en el script (línea 122)
- **Subtítulo:** Modifica líneas 46-48
- **CTAs:** Modifica líneas 52-67
- **Configuración de partículas:** Modifica el objeto de configuración en `initParticles()` (líneas 160-223)

---

### Metrics.astro
**Ubicación:** `src/components/Metrics.astro`

**Qué hace:**
- Muestra 4 cards con métricas de impacto
- Números con animación de counter
- CTAs hacia otras secciones

**Datos editables:**
```javascript
const metrics = [
  {
    value: 300,           // Número final
    suffix: '+',          // Sufijo ('+', '%', '')
    label: 'Participantes en bootcamps',
    cta: 'Ver programas',
    ctaHref: '#programas',
  },
  // ...
];
```

**Para modificar:**
- **Métricas:** Edita el array `metrics` (línea 13)
- El counter se activa con `data-target` y `data-suffix`

---

### Programs.astro
**Ubicación:** `src/components/Programs.astro`

**Qué hace:**
- Muestra 3 cards de programas educativos
- Badges de estado (GRATIS, NUEVO, PREMIUM)
- Información de duración y nivel
- CTAs específicos

**Datos editables:**
```javascript
const programs = [
  {
    name: 'AI Fundamentals',
    tag: 'GRATIS',
    tagStyle: 'badge-cyan',     // badge-cyan, badge-indigo, badge-coral
    subtitle: 'Tu puerta de entrada',
    duration: '6 semanas',
    level: 'Principiante',
    price: null,                // o string con precio
    description: '...',
    cta: 'Inscríbete gratis',
    ctaStyle: 'btn-secondary',  // btn-primary, btn-secondary, btn-coral
    featured: false,            // true para destacar
  },
  // ...
];
```

---

### CaseStudies.astro
**Ubicación:** `src/components/CaseStudies.astro`

**Qué hace:**
- Grid de proyectos construidos por participantes
- Cards con imagen, nombre, problema, tecnologías, impacto
- Overlay en hover con botón "Ver proyecto"

**Datos editables:**
```javascript
const projects = [
  {
    name: 'AsistenteDoc',
    problem: 'Simplifica la gestión de documentos médicos con IA',
    technologies: ['Claude API', 'Python', 'FastAPI'],
    impact: '120 usuarios activos',
    participant: {
      name: 'María González',
      role: 'AI Technical Product',
      avatar: '/images/avatars/placeholder-1.jpg',
    },
    image: '/images/projects/placeholder-1.jpg',
  },
  // ...
];
```

---

### Testimonials.astro
**Ubicación:** `src/components/Testimonials.astro`

**Qué hace:**
- Carrusel horizontal de testimonios
- 3 tipos: participant, speaker, sponsor
- Autoplay cada 5 segundos con pausa en hover
- Navegación con dots y flechas

**Datos editables:**
```javascript
const testimonials = [
  {
    type: 'participant',  // 'participant', 'speaker', 'sponsor'
    quote: '...',
    name: 'Nombre',
    role: 'Rol',
    company: 'Empresa',   // solo para speaker/sponsor
    avatar: '/images/...',
  },
  // ...
];
```

**Para modificar:**
- **Velocidad autoplay:** Cambia `5000` en línea 197 (milisegundos)

---

### Team.astro
**Ubicación:** `src/components/Team.astro`

**Qué hace:**
- Grid de miembros del equipo
- Foto placeholder con iniciales
- Nombre, cargo, link LinkedIn
- Soledad destacada como founder

**Datos editables:**
```javascript
const team = [
  {
    name: 'Soledad Ñahui',
    role: 'Project Manager',
    image: '/images/team/soledad.jpg',
    linkedin: '#',
    featured: true,
  },
  // ...
];
```

---

### Events.astro
**Ubicación:** `src/components/Events.astro`

**Qué hace:**
- Timeline horizontal con eventos 2026
- Card destacada de Hack@LATAM
- Countdown en tiempo real

**Datos editables:**
```javascript
// Timeline
const timelineEvents = [
  {
    name: 'PNUD Partnership',
    date: '28 Marzo 2026',
    description: 'Alianza estratégica con PNUD Perú',
    active: false,  // true = próximo evento (con animación)
  },
  // ...
];

// Fecha del countdown
const targetDate = new Date('2026-05-15T00:00:00');
```

---

### Partners.astro
**Ubicación:** `src/components/Partners.astro`

**Qué hace:**
- 3 filas de marquee infinito con logos
- Movimiento continuo CSS (no JavaScript)
- Pausa en hover

**Datos editables:**
```javascript
const row1 = ['Yavendió!', 'ElevenLabs', ...];
const row2 = ['Finity', 'CloudforgeAI', ...];
const row3 = ['Globant', 'BCP', ...];
```

**Para logos reales:**
Reemplaza el `<span>` por `<img>`:
```html
<img
  src={`/images/partners/${nombre.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`}
  alt={nombre}
  class="h-10 lg:h-12 w-auto"
/>
```

---

### Advisors.astro
**Ubicación:** `src/components/Advisors.astro`

**Qué hace:**
- 2 cards de advisors lado a lado
- Foto, nombre, cargo, empresa, bio, LinkedIn

**Datos editables:**
```javascript
const advisors = [
  {
    name: 'Boris',
    company: 'Intercorp',
    role: 'Executive Leader',
    bio: 'Bio de 1-2 líneas...',
    linkedin: '#',
    image: '/images/advisors/boris.jpg',
  },
  // ...
];
```

---

### CtaFaq.astro
**Ubicación:** `src/components/CtaFaq.astro`

**Qué hace:**
- CTA de urgencia con gradiente
- FAQ accordion con 6 preguntas
- Solo una pregunta abierta a la vez

**Datos editables:**
```javascript
const faqs = [
  {
    question: '¿Necesito saber programar?',
    answer: 'No. AI Fundamentals está diseñado para...',
  },
  // ...
];
```

---

### Footer.astro
**Ubicación:** `src/components/Footer.astro`

**Qué hace:**
- 4 columnas: Logo, Programas, Comunidad, Legal
- Redes sociales con íconos SVG
- Copyright y frase final

**Datos editables:**
```javascript
const footerLinks = {
  programas: [{ label: 'AI Fundamentals', href: '#programas' }, ...],
  comunidad: [...],
  legal: [...],
};

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: 'M20.447...', // Path SVG
  },
  // ...
];
```

---

## 4. Comandos Esenciales

### Instalación
```bash
npm install
```
Instala todas las dependencias listadas en `package.json`.

### Desarrollo local
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:4321`.
Los cambios se reflejan automáticamente (HMR).

### Build de producción
```bash
npm run build
```
Genera archivos estáticos optimizados en la carpeta `dist/`.

### Preview del build
```bash
npm run preview
```
Sirve la carpeta `dist/` para verificar el build antes de desplegar.

---

## 5. Git Básico

### Estado actual
```bash
git status
```
Muestra archivos modificados, nuevos y staged.

### Agregar cambios
```bash
git add .                    # Todos los archivos
git add src/components/      # Solo una carpeta
git add archivo.astro        # Solo un archivo
```

### Hacer commit
```bash
git commit -m "descripción de los cambios"
```

### Ver historial
```bash
git log --oneline -10        # Últimos 10 commits
```

### Subir cambios
```bash
git push origin main         # A la rama main
git push origin feature/x    # A otra rama
```

### Crear rama
```bash
git checkout -b feature/nueva-seccion
```

### Cambiar de rama
```bash
git checkout main
git checkout feature/design-update
```

### Actualizar desde remoto
```bash
git pull origin main
```

---

## 6. Opciones de Deploy

### Vercel (Recomendado)
1. Crea cuenta en https://vercel.com
2. Conecta tu repositorio de GitHub
3. Vercel detecta Astro automáticamente
4. Cada push a `main` despliega automáticamente
5. URLs de preview para cada PR

**Configuración adicional:**
- No requiere configuración extra
- Variables de entorno en el dashboard si las necesitas

### Netlify
1. Crea cuenta en https://netlify.com
2. "Add new site" > "Import an existing project"
3. Conecta GitHub y selecciona el repo
4. Build command: `npm run build`
5. Publish directory: `dist`

**Configuración adicional:**
Crea `netlify.toml` en la raíz:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### GitHub Pages
1. En `astro.config.mjs` agrega:
```javascript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repo-name',
  // ...
});
```
2. Crea `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```
3. En Settings > Pages, selecciona "GitHub Actions"

---

## 7. Checklist Pre-Lanzamiento

### Contenido
- [ ] Reemplazar todos los `#` placeholder con URLs reales
- [ ] Agregar fotos reales del equipo en `/public/images/team/`
- [ ] Agregar fotos de advisors en `/public/images/advisors/`
- [ ] Agregar logos de partners en `/public/images/partners/`
- [ ] Verificar testimonios (nombres reales, permisos obtenidos)
- [ ] Actualizar casos de éxito con proyectos reales
- [ ] Confirmar fecha del countdown de Hack@LATAM
- [ ] Verificar URL de registro de Hack@LATAM

### SEO y Meta
- [ ] Cambiar `siteUrl` en `Layout.astro` línea 23
- [ ] Crear imagen OG (`/public/images/og-image.png`) 1200x630px
- [ ] Agregar `apple-touch-icon.png` en `/public/`
- [ ] Verificar meta description
- [ ] Configurar Google Analytics o Plausible (opcional)

### Funcionalidad
- [ ] Probar menú móvil en dispositivos reales
- [ ] Verificar countdown funciona correctamente
- [ ] Probar todos los links de navegación
- [ ] Verificar carrusel de testimonios
- [ ] Probar FAQ accordion
- [ ] Verificar animaciones de scroll

### Performance
- [ ] Ejecutar `npm run build` sin errores
- [ ] Verificar con Lighthouse (target: 90+ en todas las categorías)
- [ ] Optimizar imágenes (WebP, tamaño adecuado)
- [ ] Verificar que partículas no afectan performance móvil

### Legal
- [ ] Agregar página de Términos y Condiciones
- [ ] Agregar página de Política de Privacidad
- [ ] Verificar GDPR/compliance si aplica
- [ ] Agregar aviso de cookies si es necesario

---

## 8. Glosario de Términos Técnicos

**Accordion:** Componente UI donde los elementos se expanden/colapsan al hacer click.

**Astro:** Framework web para crear sitios estáticos con soporte para múltiples frameworks de UI.

**Backdrop-blur:** Efecto CSS que difumina el fondo detrás de un elemento (glassmorphism).

**Build:** Proceso de compilar y optimizar el código para producción.

**CTA (Call To Action):** Botón o link diseñado para que el usuario tome una acción específica.

**CSS Custom Properties:** Variables CSS que se definen con `--nombre` y se usan con `var(--nombre)`.

**Deploy:** Publicar el sitio web en un servidor para que sea accesible en internet.

**Frontmatter:** Sección entre `---` al inicio de archivos Astro donde se escribe JavaScript/TypeScript.

**Glassmorphism:** Estilo de diseño con efecto de vidrio esmerilado (blur + transparencia).

**HMR (Hot Module Replacement):** Actualización instantánea del navegador al guardar cambios sin recargar.

**Intersection Observer:** API del navegador para detectar cuando un elemento entra en el viewport.

**Lazy-load:** Técnica de cargar recursos solo cuando se necesitan.

**Layout:** Componente que envuelve otras páginas, define estructura común (header, footer).

**Marquee:** Animación de contenido que se mueve horizontalmente de forma continua.

**OG (Open Graph):** Protocolo de meta tags para controlar cómo se muestra el contenido al compartir.

**Props:** Propiedades que se pasan a un componente para personalizarlo.

**Responsive:** Diseño que se adapta a diferentes tamaños de pantalla.

**SEO (Search Engine Optimization):** Prácticas para mejorar visibilidad en buscadores.

**Sticky:** Posición CSS donde el elemento se "pega" al hacer scroll.

**Tailwind CSS:** Framework CSS utility-first con clases predefinidas.

**tsParticles:** Librería JavaScript para crear animaciones de partículas.

**TypeScript:** Lenguaje que extiende JavaScript con tipos estáticos.

**Utility-first:** Metodología CSS donde cada clase hace una sola cosa pequeña.

**Viewport:** Área visible del navegador.

**Vite:** Herramienta de build rápida para desarrollo web moderno.

---

## 9. Solución de Problemas Comunes

### El servidor no inicia
```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules
npm install
npm run dev
```

### Cambios CSS no se ven
1. Verifica que `global.css` esté importado en `Layout.astro`
2. Limpia cache del navegador (Ctrl+Shift+R)
3. Reinicia el servidor de desarrollo

### Partículas no aparecen
1. Verifica que tsParticles esté en `package.json`
2. Las partículas cargan después de la página (lazy-load)
3. Verifica la consola del navegador por errores

### Build falla
```bash
# Ver errores detallados
npm run build 2>&1 | tee build.log
```
Los errores comunes son:
- Imports mal escritos
- Props faltantes en componentes
- Archivos referenciados que no existen

### Imágenes no cargan
1. Verifica que las rutas empiecen con `/` (absoluta desde public)
2. Revisa que los archivos estén en `/public/images/`
3. Nombres de archivo son case-sensitive en producción
