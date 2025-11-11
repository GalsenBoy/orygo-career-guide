import { Card } from "@/components/ui/card";
import { UserCheck, ClipboardList, LineChart, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserCheck,
    title: "Créez votre profil",
    description: "Inscrivez-vous gratuitement et commencez votre parcours d'orientation professionnelle",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Passez le test RIASEC",
    description: "Répondez honnêtement à 18 questions pour découvrir votre profil professionnel unique",
  },
  {
    number: "03",
    icon: LineChart,
    title: "Découvrez vos matchs",
    description: "Explorez les métiers qui correspondent le mieux à votre personnalité et vos compétences",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Choisissez votre formation",
    description: "Accédez aux formations certifiées pour atteindre vos objectifs professionnels",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-xl text-muted-foreground">
            Un parcours simple et efficace en 4 étapes pour trouver votre voie
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-tertiary to-success mx-24" />
          
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative p-8 text-center bg-card hover:shadow-xl transition-all duration-300 border-2 border-border hover:border-primary/30"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-bold text-lg flex items-center justify-center shadow-lg z-10">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-primary-light/20 flex items-center justify-center mx-auto mb-6 mt-4">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-card-foreground mb-4">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
