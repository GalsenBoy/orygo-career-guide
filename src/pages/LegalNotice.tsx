import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Scale, Building2, Server, Code, Mail } from "lucide-react";

const LegalNotice = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-tertiary-light/20">
      <Navbar />
      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[hsl(var(--gradient-end))] text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <Scale className="w-4 h-4" />
              <span className="text-sm font-medium">Mentions légales</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Informations légales
            </h1>

            <p className="text-xl text-primary-light">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique
            </p>

            <p className="text-sm text-primary-light mt-4">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Éditeur du site */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Building2 className="w-8 h-8 text-primary" />
                Éditeur du site
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">Raison sociale :</p>
                  <p>Bilaly CISSOKHO - Auto-entrepreneur</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-1">SIRET :</p>
                  <p>938 934 759 00011</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-1">Siège social :</p>
                  <p>20 avenue d'Alsace</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-1">Directeur de la publication :</p>
                  <p>Bilaly CISSOKHO</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-1">Contact :</p>
                  <p>Email : <a href="mailto:bilaly.cissokho21@gmail.com" className="text-primary hover:underline">bilaly.cissokho21@gmail.com</a></p>
                  <p>Téléphone : <a href="tel:+33699060557" className="text-primary hover:underline">06 99 06 05 57</a></p>
                  <p>Support : <a href="mailto:support@orygo.app" className="text-primary hover:underline">support@orygo.app</a></p>
                </div>
              </div>
            </Card>

            {/* Hébergement */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Server className="w-8 h-8 text-primary" />
                Hébergement du site
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">Hébergeur :</p>
                  <p>Netlify, Inc.</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-1">Adresse :</p>
                  <p>44 Montgomery Street, Suite 300</p>
                  <p>San Francisco, California 94104</p>
                  <p>États-Unis</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-1">Site web :</p>
                  <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.netlify.com
                  </a>
                </div>
              </div>
            </Card>

            {/* Propriété intellectuelle */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Code className="w-8 h-8 text-primary" />
                Propriété intellectuelle
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, graphismes, icônes, sons, logiciels, etc.)
                  est la propriété exclusive de Bilaly CISSOKHO ou de ses partenaires, sauf mention contraire.
                </p>

                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
                  du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.
                </p>

                <p>
                  Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient sera considérée
                  comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et
                  suivants du Code de Propriété Intellectuelle.
                </p>

                <div className="bg-tertiary-light/30 p-4 rounded-lg border border-tertiary mt-4">
                  <p className="font-semibold text-foreground mb-2">Marque :</p>
                  <p>
                    La marque "Orygo" ainsi que tous les logos et visuels associés sont des marques déposées ou en cours
                    de dépôt. Toute utilisation non autorisée de ces marques est strictement interdite.
                  </p>
                </div>
              </div>
            </Card>

            {/* Responsabilité */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Limitation de responsabilité
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Contenu du site</h3>
                  <p>
                    Bilaly CISSOKHO s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site,
                    dont il se réserve le droit de corriger le contenu à tout moment et sans préavis.
                  </p>
                  <p className="mt-2">
                    Toutefois, Bilaly CISSOKHO ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations
                    mises à disposition sur ce site. En conséquence, l'utilisateur reconnaît utiliser ces informations sous
                    sa responsabilité exclusive.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Disponibilité du site</h3>
                  <p>
                    Bilaly CISSOKHO met tout en œuvre pour assurer la disponibilité du site 24h/24, 7j/7. Cependant,
                    il ne peut être tenu responsable des interruptions de service, qu'elles soient programmées pour
                    maintenance ou causées par des cas de force majeure.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Liens hypertextes</h3>
                  <p>
                    Le site peut contenir des liens hypertextes vers d'autres sites. Bilaly CISSOKHO n'exerce aucun contrôle
                    sur ces sites et décline toute responsabilité quant à leur contenu ou leur disponibilité.
                  </p>
                  <p className="mt-2">
                    La création de liens hypertextes vers le site orygo.app nécessite une autorisation préalable écrite.
                  </p>
                </div>
              </div>
            </Card>

            {/* Données personnelles */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Protection des données personnelles
              </h2>
              <p className="text-muted-foreground mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés,
                vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles
                vous concernant.
              </p>
              <p className="text-muted-foreground">
                Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter
                notre <a href="/privacy" className="text-primary hover:underline font-medium">Politique de confidentialité</a>.
              </p>
            </Card>

            {/* Cookies */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Cookies
              </h2>
              <p className="text-muted-foreground mb-4">
                Le site orygo.app utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic du site
                via des outils d'analyse (Google Analytics ou Matomo).
              </p>
              <p className="text-muted-foreground">
                Vous pouvez paramétrer votre navigateur pour refuser les cookies. Cependant, le refus d'installation de cookies
                peut entraîner une impossibilité d'accéder à certains services du site.
              </p>
              <p className="text-muted-foreground mt-4">
                Pour plus de détails, consultez notre <a href="/privacy" className="text-primary hover:underline font-medium">Politique de confidentialité</a>.
              </p>
            </Card>

            {/* Droit applicable */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Droit applicable et juridiction compétente
              </h2>
              <p className="text-muted-foreground mb-4">
                Les présentes mentions légales sont régies par le droit français.
              </p>
              <p className="text-muted-foreground">
                En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément
                aux règles de compétence en vigueur.
              </p>
            </Card>

            {/* Crédits */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Crédits
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <div>
                  <p className="font-semibold text-foreground mb-1">Conception et développement :</p>
                  <p>Bilaly CISSOKHO</p>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-1">Technologies utilisées :</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>React.js</li>
                    <li>TypeScript</li>
                    <li>Vite</li>
                    <li>Tailwind CSS</li>
                    <li>shadcn/ui</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold text-foreground mb-1">Icônes :</p>
                  <p>Lucide React</p>
                </div>
              </div>
            </Card>

            {/* Contact */}
            <Card className="p-8 border-2 bg-gradient-to-br from-primary/5 to-tertiary/5">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Mail className="w-8 h-8 text-primary" />
                Nous contacter
              </h2>
              <p className="text-muted-foreground mb-4">
                Pour toute question concernant les mentions légales ou le fonctionnement du site :
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email : <a href="mailto:support@orygo.app" className="text-primary hover:underline font-medium">support@orygo.app</a></p>
                <p>Téléphone : <a href="tel:+33699060557" className="text-primary hover:underline font-medium">06 99 06 05 57</a></p>
              </div>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LegalNotice;
