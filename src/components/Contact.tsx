import { MessageCircle, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";

const messages: Record<string, string> = {
  "contact.title": "Contact",
  "contact.whatsapp": "WhatsApp",
  "contact.linkedin": "LinkedIn",
  "contact.email": "Email",
  "contact.downloadCV": "Download CV",
  "contact.thanks": "Thanks for visiting!",
};

const useLanguage = () => {
  return {
    t: (key: string) => messages[key] ?? key,
  };
};

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-gradient">{t("contact.title")}</span>
        </h2>

        <div className="card-gradient p-8 sm:p-10 md:p-12 rounded-2xl border border-border shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <Button
              variant="outline"
              size="lg"
              className="h-auto py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold flex flex-col items-center gap-3"
              asChild
            >
              <a
                href="https://api.whatsapp.com/send?phone=5491158350321&text=Hola%20Gabi%2C%20vi%20tu%20p%C3%A1gina%20y%20me%20gustar%C3%ADa%20contactarte."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-8 w-8" />
                <span>{t("contact.whatsapp")}</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-auto py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold flex flex-col items-center gap-3"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/gabriel-b-slotnisky-435a0a328/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-8 w-8" />
                <span>{t("contact.linkedin")}</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-auto py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold flex flex-col items-center gap-3"
              asChild
            >
              <a href="mailto:gabislot07@gmail.com">
                <Mail className="h-8 w-8" />
                <span>{t("contact.email")}</span>
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-auto py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-semibold flex flex-col items-center gap-3"
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
                <FileText className="h-8 w-8" />
                <span>{t("contact.downloadCV")}</span>
              </a>
            </Button>
          </div>

          <p className="text-center text-lg text-muted-foreground italic">
            {t("contact.thanks")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
