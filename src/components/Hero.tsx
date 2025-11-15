import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import AppDownloadModal from "./AppDownloadModal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-[hsl(var(--gradient-end))]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm font-medium">Découvrez votre avenir professionnel</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Trouvez le métier qui vous correspond
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-light leading-relaxed">
              Plus de 1500 métiers, des tests de personnalité RIASEC, un matching intelligent et 5000+ formations pour construire votre parcours professionnel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-primary hover:bg-primary-light hover:text-primary-dark font-semibold text-lg px-8 py-6 rounded-xl shadow-xl transition-all duration-300 hover:scale-105"
              >
                Commencer maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-primary hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6 rounded-xl transition-all duration-300"
              >
                <a href="/about">
                  En savoir plus
                </a>
              </Button>
            </div>

            <AppDownloadModal open={isModalOpen} onOpenChange={setIsModalOpen} />
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold">1500+</div>
                <div className="text-sm text-primary-light">Métiers disponibles</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold">5000+</div>
                <div className="text-sm text-primary-light">Formations référencées</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-bold">100%</div>
                <div className="text-sm text-primary-light">Personnalisé</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Découvrez votre carrière avec Orygo"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-2xl max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Matching 87%</div>
                  <div className="text-sm text-muted-foreground">Votre profil correspond</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 0L60 10C120 20 240 40 360 45C480 50 600 40 720 35C840 30 960 30 1080 35C1200 40 1320 50 1380 55L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
