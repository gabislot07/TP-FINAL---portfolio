import { FileText, MessageCircle, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import fotoMia from "@/assets/foto_mia.jfif";

const Hero = () => {
  const { t } = useLanguage();
  
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center animate-fade-in">
        <div className="flex justify-center mb-8">
          <img 
            src={fotoMia} 
            alt="Gabriel Slotnisky" 
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary shadow-elegant"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in">
          {t("hero.title")} <br />
          <span className="text-primary">{t("hero.projects")}</span> {t("hero.with")} <span className="text-primary">{t("hero.impact")}</span>.
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          <Button
            variant="default"
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold glow-effect transition-smooth"
            asChild
          >
            <a
              href="/Gabriel_Bernardo_Slotnisky_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('/Gabriel_Bernardo_Slotnisky_CV.pdf', '_blank', 'noopener,noreferrer');
              }}
            >
              <FileText className="mr-2 h-5 w-5" />
              {t("hero.viewCV")}
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold"
            asChild
          >
            <a
              href="https://api.whatsapp.com/send?phone=5491158350321&text=Hola%20Gabi%2C%20vi%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              {t("hero.whatsapp")}
            </a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/gabriel-b-slotnisky-435a0a328/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              {t("hero.linkedin")}
            </a>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="bg-secondary hover:bg-secondary/80 transition-smooth font-semibold"
            onClick={scrollToProjects}
          >
            <ArrowDown className="mr-2 h-5 w-5" />
            {t("hero.viewProjects")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
