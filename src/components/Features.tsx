import { Card } from "@/components/ui/card";
import { Heart, Brain, GraduationCap, Target, Sparkles, Search } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "1500+ Métiers",
    description: "Explorez des centaines de métiers avec des descriptions détaillées, codes ROME et RIASEC",
    color: "text-primary",
    bgColor: "bg-primary-light/20",
  },
  {
    icon: Brain,
    title: "Test RIASEC",
    description: "Identifiez vos forces et votre orientation idéale avec notre test de personnalité professionnel",
    color: "text-tertiary",
    bgColor: "bg-tertiary-light/50",
  },
  {
    icon: Target,
    title: "Matching Intelligent",
    description: "Obtenez une correspondance personnalisée entre votre profil et les métiers disponibles",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: GraduationCap,
    title: "5000+ Formations",
    description: "Découvrez les formations adaptées à chaque métier avec certifications RNCP",
    color: "text-secondary",
    bgColor: "bg-secondary-light/50",
  },
  {
    icon: Heart,
    title: "Page Favoris",
    description: "Créez votre espace personnel et suivez votre progression vers vos métiers favoris",
    color: "text-error",
    bgColor: "bg-error/10",
  },
  {
    icon: Sparkles,
    title: "Suggestions Personnalisées",
    description: "Recevez des recommandations basées sur vos intérêts, compétences et objectifs",
    color: "text-gold",
    bgColor: "bg-gold/10",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tout ce dont vous avez besoin pour réussir
          </h2>
          <p className="text-xl text-muted-foreground">
            Orygo vous accompagne à chaque étape de votre parcours d'orientation professionnelle
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-primary/20 bg-card"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.bgColor} flex items-center justify-center mb-6`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
