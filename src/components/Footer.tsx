import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Orygo</h3>
            <p className="text-muted-foreground">
              Votre compagnon d'orientation professionnelle pour découvrir plus de 1500 métiers et construire votre avenir.
            </p>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Produit</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Test RIASEC</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Métiers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Formations</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Entreprise</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/about" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carrières</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Légal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/privacy" className="hover:text-primary transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">CGU</a></li>
              <li><a href="/cookies" className="hover:text-primary transition-colors">Cookies</a></li>
              <li><a href="/legal" className="hover:text-primary transition-colors">Mentions légales</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Orygo. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <span>Fait avec</span>
            <Heart className="w-4 h-4 text-error fill-error" />
            <span>pour votre avenir</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
