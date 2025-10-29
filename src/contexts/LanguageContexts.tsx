import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",
    
    // Hero
    "hero.title": "Transformo ideas en",
    "hero.projects": "proyectos",
    "hero.with": "con",
    "hero.impact": "impacto",
    "hero.viewCV": "Ver CV",
    "hero.whatsapp": "WhatsApp",
    "hero.linkedin": "LinkedIn",
    "hero.viewProjects": "Ver proyectos",
    
    // About
    "about.title": "Sobre",
    "about.me": "mí",
    "about.text1": "Soy emprendedor, curioso y orientado a la acción, con una fuerte pasión por la tecnología, los negocios, los datos, la innovación y los mercados financieros.",
    "about.text2": "Lidero proyectos que integran inteligencia artificial, estrategia y visión de negocio. Actualmente soy",
    "about.founder": "Founder & CEO en Águila",
    "about.and": "y",
    "about.cofounder": "Co-founder de PipeEye",
    "about.text3": "Me motiva aprender, construir y generar impacto real a través de soluciones que conectan a las personas con la tecnología.",
    
    // Contact
    "contact.title": "Contacto",
    "contact.whatsapp": "WhatsApp",
    "contact.linkedin": "LinkedIn",
    "contact.email": "Email",
    "contact.downloadCV": "Descargar CV",
    "contact.thanks": "Gracias por visitar mi página. Estoy siempre abierto a nuevas ideas, proyectos y oportunidades.",
    
    // Projects
    "projects.title": "Proyectos",
    "projects.aguila.title": "Águila",
    "projects.aguila.role": "Founder & CEO",
    "projects.aguila.description": "Plataforma B2B que ayuda a empresas a gestionar y mejorar su presencia digital a través de herramientas de marketing impulsadas por IA.",
    "projects.pipeeye.title": "PipeEye",
    "projects.pipeeye.role": "Co-founder",
    "projects.pipeeye.description": "Plataforma que integra inteligencia artificial para optimizar pipelines de ventas y automatizar procesos comerciales.",
    "projects.learn": "Conocer más",
    
    // Skills
    "skills.title": "Habilidades",
    "skills.technical": "Técnicas",
    "skills.business": "Negocios",
    "skills.leadership": "Liderazgo",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "I transform ideas into",
    "hero.projects": "projects",
    "hero.with": "with",
    "hero.impact": "impact",
    "hero.viewCV": "View CV",
    "hero.whatsapp": "WhatsApp",
    "hero.linkedin": "LinkedIn",
    "hero.viewProjects": "View projects",
    
    // About
    "about.title": "About",
    "about.me": "me",
    "about.text1": "I am an entrepreneur, curious and action-oriented, with a strong passion for technology, business, data, innovation, and financial markets.",
    "about.text2": "I lead projects that integrate artificial intelligence, strategy, and business vision. Currently, I am",
    "about.founder": "Founder & CEO at Águila",
    "about.and": "and",
    "about.cofounder": "Co-founder of PipeEye",
    "about.text3": "I am motivated to learn, build, and generate real impact through solutions that connect people with technology.",
    
    // Contact
    "contact.title": "Contact",
    "contact.whatsapp": "WhatsApp",
    "contact.linkedin": "LinkedIn",
    "contact.email": "Email",
    "contact.downloadCV": "Download CV",
    "contact.thanks": "Thank you for visiting my page. I am always open to new ideas, projects, and opportunities.",
    
    // Projects
    "projects.title": "Projects",
    "projects.aguila.title": "Águila",
    "projects.aguila.role": "Founder & CEO",
    "projects.aguila.description": "B2B platform that helps companies manage and improve their digital presence through AI-powered marketing tools.",
    "projects.pipeeye.title": "PipeEye",
    "projects.pipeeye.role": "Co-founder",
    "projects.pipeeye.description": "Platform that integrates artificial intelligence to optimize sales pipelines and automate commercial processes.",
    "projects.learn": "Learn more",
    
    // Skills
    "skills.title": "Skills",
    "skills.technical": "Technical",
    "skills.business": "Business",
    "skills.leadership": "Leadership",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
