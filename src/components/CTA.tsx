import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Test RIASEC complet et gratuit",
  "Accès à plus de 1500 métiers",
  "Matching personnalisé en temps réel",
  "Suggestions de formations certifiées",
];

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-[hsl(var(--gradient-end))] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-8">
            <span className="text-sm font-medium">100% Gratuit • Sans engagement</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Prêt à découvrir votre avenir professionnel ?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-light mb-12 max-w-2xl mx-auto">
            Rejoignez des milliers d'utilisateurs qui ont déjà trouvé leur voie avec Orygo
          </p>
          
          {/* Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 text-left">
                <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-primary-light hover:text-primary-dark font-bold text-xl px-12 py-8 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Commencer gratuitement
            <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          
          <p className="text-sm text-primary-light mt-6">
            Aucune carte bancaire requise • Démarrez en 2 minutes
          </p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
    </section>
  );
};

export default CTA;
