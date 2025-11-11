import { Briefcase, TrendingUp, Code, MessageSquare, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContexts";

const Skills = () => {
  const { t } = useLanguage();
  
  const skillsData = [
    {
      category: "Gestión y liderazgo",
      icon: Briefcase,
      skills: ["Dirección de proyectos", "Toma de decisiones estratégicas", "Liderazgo motivacional"],
    },
    {
      category: "Negocios y estrategia",
      icon: TrendingUp,
      skills: ["Diseño de modelos escalables", "Análisis de mercado", "Comunicación y ventas B2B"],
    },
    {
      category: "Datos y tecnología",
      icon: Code,
      skills: [
        "Ciencia de datos y Machine Learning",
        "Python, Pandas, Scikit-Learn",
        "Regresión, SVM, XGBoost",
        "Matplotlib",
      ],
    },
    {
      category: "Marketing y comunicación",
      icon: MessageSquare,
      skills: ["Contenido digital", "Métricas básicas", "Storytelling y pitch"],
    },
    {
      category: "Idiomas",
      icon: Globe,
      skills: ["Español (nativo)", "Inglés (B2 Cambridge)"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">{t("skills.title")}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <div
                key={index}
                className="card-gradient p-6 rounded-xl border border-border hover:border-primary transition-smooth animate-fade-in"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg mr-3">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
