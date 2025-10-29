import React, { useState, useEffect, type ReactNode } from "react";
import { Menu, X, Languages } from "lucide-react";

/**
 * Local fallback Button component to avoid a missing external module.
 * It provides minimal styling and API compatible with usages in this file.
 */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | string;
  size?: "sm" | "md" | "lg" | string;
  children?: ReactNode;
  className?: string;
};

const Button = ({ variant, size, className = "", children, ...rest }: ButtonProps) => {
  const base = "inline-flex items-center justify-center rounded-md focus:outline-none transition";
  const variants: Record<string, string> = {
    default: "bg-primary text-primary-foreground",
    outline: "border border-primary text-primary bg-transparent",
  };
  const sizes: Record<string, string> = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-2 text-lg",
  };
  const cls = [base, variants[variant ?? "default"] || "", sizes[size ?? "md"] || "", className].join(" ").trim();

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
};

/**
 * Local fallback implementation of useLanguage to avoid a missing external module.
 * This keeps Navbar self-contained: it stores the language in localStorage and
 * provides a minimal translation function for the nav labels used in this file.
 */
type Language = "en" | "es";

const defaultTranslations: Record<Language, Record<string, any>> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
  },
};

function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem("lang") as Language | null;
      return stored || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("lang", language);
    } catch {
      // ignore localStorage errors (e.g. SSR or privacy mode)
    }
  }, [language]);

  const t = (key: string) => {
    const parts = key.split(".");
    let cur: any = defaultTranslations[language];
    for (const p of parts) {
      if (cur && typeof cur === "object" && p in cur) {
        cur = cur[p];
      } else {
        return key; // fallback to the key if not found
      }
    }
    return typeof cur === "string" ? cur : key;
  };

  return { language, setLanguage, t };
}

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), href: "#hero" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-smooth ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-gradient">Gabriel Slotnisky</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-muted-foreground hover:text-primary transition-smooth font-medium"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold"
              >
                <Languages className="mr-2 h-4 w-4" />
                {language === "es" ? "EN" : "ES"}
              </Button>
            </div>

            {/* Mobile menu button and language toggle */}
            <div className="md:hidden flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold"
              >
                <Languages className="h-4 w-4" />
              </Button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-foreground hover:text-primary transition-smooth"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border-t border-border animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-smooth"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
