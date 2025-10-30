import { ExternalLink, Rocket, Eye, Brain, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";
import React from "react";

const useLanguage = () => {
  // Minimal fallback translator used when ../contexts/LanguageContext is not present.
  // It returns keys by default so the app still compiles and renders predictable text.
  const t = (key: string) => {
    const translations: Record<string, string> = {
      "projects.title": "Projects",
      "projects.aguila.role": "Co-founder",
      "projects.aguila.description": "Descripción del proyecto Águila.",
      "projects.pipeeye.role": "Developer",
      "projects.pipeeye.description": "Descripción del proyecto PipeEye.",
    };
    return translations[key] ?? key;
  };

  return { t };
};

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: "Águila",
      role: t("projects.aguila.role"),
      description: t("projects.aguila.description"),
      link: "https://aguila.lat/es",
      icon: Rocket,
    },
    {
      title: "PipeEye",
      role: t("projects.pipeeye.role"),
      description: t("projects.pipeeye.description"),
      link: "https://pipeeye.vercel.app/#",
      icon: Eye,
    },
    {
      title: "SIMA",
      role: "Co-founder & CTO",
      description:
        "Proyecto de machine learning con datos tabulares para detectar esclerosis múltiple, presentado en el Seminario internacional CLAYSS.",
      link: "https://sima-web-six.vercel.app/",
      icon: Brain,
    },
    {
      title: "Diller Teen Fellows",
      role: "Programa de liderazgo internacional",
      description:
        "Experiencia 2024–2025 en liderazgo juvenil y trabajo intercultural.",
      link: null,
      icon: Users,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">{t("projects.title")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const CardWrapper = project.link ? "a" : "div";
            const cardProps = project.link
              ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
              : {};

            return (
              <CardWrapper
                key={index}
                {...cardProps}
                className={`block ${project.link ? "cursor-pointer group" : ""}`}
              >
                <Card className="h-full card-gradient border-border hover:border-primary transition-smooth hover:glow-effect">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      {project.link && (
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-smooth" />
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-primary/80 font-medium">
                      {project.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
