import React, { createContext, useContext, useState, ReactNode } from "react";

type LanguageContextValue = {
  t: (key: string) => string;
  language: string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("en");
  const t = (key: string) => {
    // Simple placeholder translator; replace with your translations
    const translations: Record<string, Record<string, string>> = {
      en: {
        "about.title": "About",
        "about.me": "me",
        "about.text1": "Text1",
        "about.text2": "Text2",
        "about.founder": "Founder",
        "about.and": "and",
        "about.cofounder": "Co-founder",
        "about.text3": "Text3",
      },
    };
    return translations[language]?.[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          {t("about.title")} <span className="text-gradient">{t("about.me")}</span>
        </h2>

        <div className="card-gradient p-8 sm:p-10 md:p-12 rounded-2xl border border-border shadow-lg animate-fade-in">
          <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground">
            {t("about.text1")}
            <br /><br />
            {t("about.text2")} <span className="text-primary font-semibold">{t("about.founder")}</span> {t("about.and")}{" "}
            <span className="text-primary font-semibold">{t("about.cofounder")}</span>.
            <br /><br />
            {t("about.text3")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
