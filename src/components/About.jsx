import React from "react";
import { useLanguage } from "../contexts/LanguageContexts";

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
