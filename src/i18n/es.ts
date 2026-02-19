import type { Translations } from './en';

export const es: Translations = {
  lang: "es",
  langToggle: { label: "EN", href: "/" },

  nav: {
    program: "Programa",
    events: "Eventos",
    community: "Comunidad",
    trajectory: "Trayectoria",
    cta: "Únete a la Lista",
  },

  hero: {
    badge: "Próxima cohorte: 2026",
    headline1: "Entiende la IA.",
    headline2: "Construye el Futuro.",
    subheadline: "Democratizando el conocimiento práctico de IA en Latinoamérica. No te enseñamos a usar herramientas — te enseñamos a",
    subheadlineStrong: "entender la tecnología",
    ctaPrimary: "Únete a la Lista",
    ctaSecondary: "Ver Programas",
    codeComment1: "# Usa la herramienta de IA que quieras",
    codeComment2: "# Pero entiende lo que hizo",
    codeComment3: "# ← Esto es lo que importa",
    partnersLabel: "Respaldados por líderes tech de LATAM",
  },

  problem: {
    label: "El problema del que nadie habla",
    title1: "El Nuevo \"Tutorial Hell\"",
    title2: "de la Era de la IA",
    subtitle: "Las herramientas de IA generativa te permiten <em>producir</em> más rápido que nunca. Pero producir no es lo mismo que <strong>entender</strong>.",
    steps: [
      { num: "1", title: "Usas herramientas de IA", desc: "Claude Code, Cursor, Windsurf, Lovable..." },
      { num: "2", title: "Generas código", desc: "La IA crea una solución funcional por ti" },
      { num: "3", title: "Haces deploy", desc: "Tienes algo 'en producción'" },
      { num: "4", title: "Te preguntan cómo funciona", desc: "...y no puedes explicarlo" },
      { num: "5", title: "Algo se rompe", desc: "...y no sabes cómo arreglarlo" },
      { num: "6", title: "Sale una nueva herramienta", desc: "...y tienes que empezar de cero" },
    ],
    quote: "\"Tienes proyectos desplegados pero no conocimiento. Eres un operador de herramientas, no un constructor de soluciones.\"",
    stats: [
      { value: "73", suffix: "%", label: "no puede explicar su propio código" },
      { value: "68", suffix: "%", label: "no puede debuggear sin IA" },
      { value: "81", suffix: "%", label: "depende de una sola herramienta" },
    ],
  },

  solution: {
    label: "La Solución",
    title: "AI TechProducts",
    quote: "\"Si no puedes explicarlo, no lo construiste — solo lo generaste.\"",
    pillars: [
      { icon: "🔨", title: "Construye productos reales", desc: "Usa las herramientas que quieras — Claude Code, Cursor, Windsurf, no-code. Lo que importa es el resultado y que lo entiendas." },
      { icon: "🧠", title: "Demuestra que entiendes", desc: "Explica qué hizo la IA, por qué funciona y cómo lo modificarías sin empezar de cero." },
      { icon: "🚀", title: "Despliega con usuarios reales", desc: "Lanza a usuarios reales que te dan feedback. Itera basándote en uso real, no en hipótesis." },
    ],
    milestonesTitle: "Los 4 hitos de cada proyecto",
    milestones: [
      { num: "01", title: "Diseño y Arquitectura", desc: "Planifica tu solución y define el enfoque técnico" },
      { num: "02", title: "Desarrollo 1.0", desc: "Construye y despliega tu primera versión funcional" },
      { num: "03", title: "Iteración con Feedback", desc: "Recoge feedback de usuarios reales e itera" },
      { num: "04", title: "Deploy y Pruebas de Usuario", desc: "Despliegue final con aprendizajes documentados" },
    ],
    validationTitle: "Cómo validamos el aprendizaje",
    validations: [
      "¿Puedes explicar qué hace cada parte de tu código?",
      "¿Puedes identificar dónde la IA aplicó ciertos conceptos?",
      "¿Puedes modificar la solución sin pedirle a la IA que rehaga todo?",
      "¿Puedes defender tu arquitectura y decisiones técnicas?",
    ],
    structureStats: [
      { value: "3", label: "meses por ciclo" },
      { value: "3-4", label: "semanas por sprint" },
      { value: "3+", label: "productos desplegados" },
      { value: "1-2", label: "personas por equipo" },
    ],
    cta: "Únete a la Lista de AI TechProducts",
  },

  umbral: {
    label: "Plataforma",
    title: "Umbral",
    tagline: "\"Desarrolla. Despliega. Aprende.\"",
    desc: "Tu centro de control para construir un portafolio técnico real mientras aprendes los fundamentos de IA. Umbral es donde demuestras que no solo <em>generaste</em> — que <strong>construiste con entendimiento</strong>.",
    features: [
      { icon: "🌐", title: "Proyectos desplegados", desc: "Rastrea proyectos con URLs en vivo y métricas reales de uso" },
      { icon: "📚", title: "Fundamentos dominados", desc: "Registro de conceptos que aplicaste y puedes explicar" },
      { icon: "🔄", title: "Historial de iteraciones", desc: "Cómo evolucionó tu proyecto basado en feedback real" },
      { icon: "📝", title: "Documentación de aprendizaje", desc: "Tus conclusiones técnicas de cada sprint" },
    ],
    mockup: {
      url: "umbral.aiplaygrounds.com",
      header: "Mi Portafolio",
      cohort: "Cohorte 2026",
      project1: { name: "Bot de Soporte con IA", status: "En vivo", tags: ["NLP", "RAG", "FastAPI"], pct: "85" },
      project2: { name: "Analizador Inteligente de Docs", status: "Iterando", tags: ["Vision", "Embeddings"], pct: "60" },
      statsLabels: ["Desplegados", "Conceptos", "Usuarios"],
      fundamentalsLabel: "Fundamentos dominados",
    },
  },

  trajectory: {
    label: "Resultados",
    title: "Nuestra Trayectoria 2025",
    subtitle: "En nuestro primer año, ya generamos impacto en toda Latinoamérica.",
    stats: [
      { value: "1000", suffix: "+", label: "Inscritos al Hackathon" },
      { value: "300", suffix: "+", label: "Participantes del Bootcamp" },
      { value: "16", suffix: "", label: "Speakers Internacionales" },
      { value: "40", suffix: "", label: "Becas Completas" },
    ],
    events: [
      { title: "Bootcamp GenAI Fundamentals", desc: "Bootcamp nacional de fundamentos de IA Generativa. 300+ inscritos, 40 becas completas en Perú y Chile. 16 speakers internacionales.", tags: ["Bootcamp", "Perú", "Chile"] },
      { title: "The Real AI", desc: "Evento para emprendedores: '¿Realmente necesitas IA en tus procesos?' Cortando el hype para identificar necesidades reales.", tags: ["Emprendedores", "Estrategia"] },
      { title: "Colombia Tech Week", desc: "Participación en Tech Fest y Platzi Conf. Staff en el AI Hackathon Colombia. Networking con líderes tech de LATAM.", tags: ["Colombia", "Networking"] },
      { title: "AI Hackathon Peru 2025", desc: "El hackathon de IA más grande del Perú. 1,000+ inscritos, 120 seleccionados. 24 horas construyendo. $1,500 USD en premios.", tags: ["Principal", "Hackathon", "Perú"] },
    ],
  },

  hackathon: {
    label: "Evento Principal",
    title: "AI Hackathon Peru 2025",
    subtitle: "El mejor hackathon de IA realizado en el Perú",
    desc: "Reunimos al mejor talento de IA del país durante 24 horas de construcción sin parar, mentoría de CTOs internacionales y premios reales. Este fue el evento que demostró que la comunidad de IA en Perú está lista para competir a nivel global.",
    stats: [
      { value: "1,000+", label: "Inscritos" },
      { value: "120", label: "Seleccionados" },
      { value: "24h", label: "Construyendo sin parar" },
      { value: "$1,500", label: "USD en premios" },
    ],
    judgesTitle: "Jurado Internacional",
    sponsorsTitle: "Sponsors y Aliados",
    cta: "Visita la Página del Hackathon",
    ctaUrl: "https://www.peru.ai-hackathon.co/",
  },

  coming2026: {
    label: "Próximamente",
    title: "Lo Que Viene en 2026",
    subtitle: "Escalamos nuestra misión a toda Latinoamérica.",
    events: [
      { icon: "🌎", title: "Hack@LATAM", desc: "Hackathon regional con comunidades de toda Latinoamérica", tag: "Hackathon" },
      { icon: "📖", title: "Bootcamps Fundamentales", desc: "Fundamentos de IA, GenAI y Agentes — tracks de conocimiento profundo", tag: "Educación" },
      { icon: "✈️", title: "DevDay LATAM", desc: "Alianza con Pymut: 6 horas simultáneas en múltiples países. ¡Los ganadores viajan a Silicon Valley!", tag: "Silicon Valley" },
      { icon: "🤝", title: "Fellowship de Impacto Regional", desc: "Herramientas tech y conocimiento para todas las regiones del Perú", tag: "Fellowship" },
      { icon: "🏗️", title: "Incubadoras PG", desc: "Las mejores iniciativas de AI TechProducts conectadas con incubadoras y aceleradoras aliadas", tag: "Incubación" },
    ],
    cta: "Mantenerme Informado",
  },

  community: {
    label: "Únete",
    title: "Sé Parte de la Comunidad",
    subtitle: "Síguenos para enterarte de eventos, bootcamps y oportunidades en el ecosistema de IA en LATAM.",
  },

  faq: {
    label: "Preguntas Frecuentes",
    title: "Preguntas Frecuentes",
    items: [
      { q: "¿Necesito experiencia previa en programación?", a: "Se recomienda conocimiento básico pero no es estrictamente necesario. AI TechProducts está diseñado para personas que quieren construir — aprenderás fundamentos mientras creas productos reales. La clave es la voluntad de entender, no solo generar." },
      { q: "¿Cuánto dura el programa AI TechProducts?", a: "Cada ciclo dura 3 meses, dividido en sprints de 3-4 semanas. Construirás mínimo 3 productos de IA desplegados, con consultorías semanales para feedback y guía." },
      { q: "¿Puedo usar cualquier herramienta de IA?", a: "¡Sí! Claude Code, Cursor, Windsurf, Lovable, plataformas no-code — usa lo que te ayude a construir. La diferencia es que debes entender y explicar lo que las herramientas produjeron. Abrazamos las herramientas; rechazamos la dependencia ciega." },
      { q: "¿Qué diferencia a AI TechProducts de otros bootcamps?", a: "Los bootcamps tradicionales te enseñan a seguir tutoriales. AI TechProducts requiere que construyas productos reales, los despliegues con usuarios reales y demuestres que entiendes los fundamentos. Tu portafolio se compone de productos vivos, no de tareas." },
      { q: "¿Cómo funciona la plataforma Umbral?", a: "Umbral es tu centro de control — rastrea tus proyectos desplegados, los fundamentos que dominas, tu historial de iteraciones y tu documentación de aprendizaje. Piénsalo como un portafolio vivo que demuestra que construiste con entendimiento." },
      { q: "¿Hay becas disponibles?", a: "Sí. Estamos comprometidos con democratizar el acceso. Los detalles de becas para la próxima cohorte se anunciarán cuando abramos inscripciones. Síguenos en redes para mantenerte informado." },
      { q: "¿Los eventos son presenciales o virtuales?", a: "¡Ambos! Nuestros hackathons suelen ser presenciales (como el AI Hackathon Peru en la UPCH), mientras que los bootcamps y AI TechProducts incluyen componentes virtuales para llegar a toda Latinoamérica." },
    ],
  },

  finalCta: {
    title1: "¿Listo para Entender",
    title2: "Lo Que Construyes?",
    subtitle: "Únete a la comunidad que está redefiniendo cómo se aprende IA en Latinoamérica. Sé el primero en saber cuando abramos la próxima cohorte.",
    placeholder: "tu@email.com",
    button: "Únete a la Lista",
    spam: "Sin spam. Cancela cuando quieras.",
    partnerText: "Buscamos aliados que crean en democratizar la IA en LATAM.",
    partnerStrong: "¿Quieres ser parte de esto?",
    partnerCta: "Contacto para Alianzas",
  },

  footer: {
    tagline: "Democratizando el conocimiento práctico de IA en Latinoamérica.",
    newsletter: "Suscríbete a nuestro newsletter para actualizaciones",
    subscribe: "Suscribirse",
    partnersLabel: "Aliados",
    copyright: "© 2025 AI PlayGrounds. Democratizando la IA en LATAM.",
    columns: {
      Program: [
        { label: "AI TechProducts", href: "#program" },
        { label: "Umbral", href: "#" },
        { label: "Bootcamps", href: "#" },
      ],
      Events: [
        { label: "Hack@LATAM", href: "#" },
        { label: "DevDay LATAM", href: "#" },
        { label: "Fellowship", href: "#" },
      ],
      Community: [
        { label: "Discord", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Instagram", href: "#" },
        { label: "Twitter / X", href: "#" },
      ],
      Legal: [
        { label: "Términos", href: "#" },
        { label: "Privacidad", href: "#" },
      ],
    },
  },
} as const;
