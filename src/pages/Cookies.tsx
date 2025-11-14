import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Cookie, Settings, Eye, Shield, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-tertiary-light/20">
      <Navbar />
      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[hsl(var(--gradient-end))] text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <Cookie className="w-4 h-4" />
              <span className="text-sm font-medium">Politique des cookies</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Gestion des cookies
            </h1>

            <p className="text-xl text-primary-light">
              Découvrez comment Orygo utilise les cookies pour améliorer votre expérience de navigation
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

            {/* Qu'est-ce qu'un cookie */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Info className="w-8 h-8 text-primary" />
                Qu'est-ce qu'un cookie ?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone)
                  lors de la visite d'un site web. Il permet au site de se souvenir de vos actions et préférences
                  pendant une période donnée.
                </p>
                <p>
                  Les cookies ne peuvent pas endommager votre appareil et ne contiennent pas de virus. Ils ne permettent
                  pas non plus de vous identifier personnellement, mais peuvent enregistrer des informations relatives à
                  la navigation de votre terminal sur notre site.
                </p>
              </div>
            </Card>

            {/* Pourquoi utilisons-nous des cookies */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Pourquoi Orygo utilise des cookies ?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nous utilisons des cookies pour plusieurs raisons :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Assurer le bon fonctionnement du site web</li>
                  <li>Améliorer votre expérience de navigation</li>
                  <li>Analyser l'audience et le trafic du site</li>
                  <li>Comprendre comment les visiteurs utilisent notre site</li>
                  <li>Optimiser les performances et le contenu</li>
                </ul>
              </div>
            </Card>

            {/* Types de cookies */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Eye className="w-8 h-8 text-primary" />
                Types de cookies utilisés
              </h2>
              <div className="space-y-6">

                {/* Cookies techniques */}
                <div className="bg-tertiary-light/20 p-6 rounded-lg border border-tertiary">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    1. Cookies strictement nécessaires
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Ces cookies sont essentiels au bon fonctionnement du site. Sans ces cookies, certains services
                    ne peuvent pas être fournis.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-foreground">Exemples :</strong></p>
                    <ul className="list-disc list-inside text-muted-foreground ml-4">
                      <li>Cookies de session pour la navigation</li>
                      <li>Cookies de sécurité</li>
                      <li>Cookies de préférences d'interface</li>
                    </ul>
                    <p className="mt-3"><strong className="text-foreground">Durée de conservation :</strong> Session ou 12 mois maximum</p>
                    <p><strong className="text-foreground">Consentement requis :</strong> <span className="text-error font-medium">Non (nécessaires au fonctionnement)</span></p>
                  </div>
                </div>

                {/* Cookies analytiques */}
                <div className="bg-primary-light/20 p-6 rounded-lg border border-primary">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    2. Cookies analytiques et de mesure d'audience
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    Ces cookies nous permettent de mesurer l'audience du site, d'analyser les statistiques de visite
                    et de comprendre comment les visiteurs utilisent notre site.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong className="text-foreground">Services utilisés :</strong></p>
                    <ul className="list-disc list-inside text-muted-foreground ml-4">
                      <li><strong>Google Analytics</strong> ou <strong>Matomo</strong> (à venir)</li>
                      <li>Collecte de données anonymisées sur la navigation</li>
                      <li>Mesure du trafic et du comportement des visiteurs</li>
                    </ul>
                    <p className="mt-3"><strong className="text-foreground">Durée de conservation :</strong> 26 mois maximum (recommandation CNIL)</p>
                    <p><strong className="text-foreground">Consentement requis :</strong> <span className="text-success font-medium">Oui</span></p>
                  </div>
                </div>

                {/* Pas de cookies publicitaires */}
                <div className="bg-secondary-light/20 p-6 rounded-lg border border-secondary">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    3. Cookies publicitaires et de réseaux sociaux
                  </h3>
                  <p className="text-muted-foreground">
                    <strong className="text-success">Orygo n'utilise pas de cookies publicitaires ni de traceurs de réseaux sociaux.</strong>
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Nous ne partageons pas vos données avec des régies publicitaires et n'utilisons pas de cookies
                    tiers à des fins de ciblage publicitaire.
                  </p>
                </div>

              </div>
            </Card>

            {/* Gestion des cookies */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Settings className="w-8 h-8 text-primary" />
                Comment gérer vos cookies ?
              </h2>
              <div className="space-y-6">

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Via votre navigateur</h3>
                  <p className="text-muted-foreground mb-4">
                    Vous pouvez à tout moment configurer votre navigateur pour accepter ou refuser les cookies.
                    Voici comment procéder selon votre navigateur :
                  </p>

                  <div className="space-y-4">
                    <div className="bg-background/50 p-4 rounded-lg border">
                      <p className="font-semibold text-foreground mb-2">Google Chrome</p>
                      <p className="text-sm text-muted-foreground">
                        Paramètres → Confidentialité et sécurité → Cookies et autres données de sites
                      </p>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg border">
                      <p className="font-semibold text-foreground mb-2">Mozilla Firefox</p>
                      <p className="text-sm text-muted-foreground">
                        Options → Vie privée et sécurité → Cookies et données de sites
                      </p>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg border">
                      <p className="font-semibold text-foreground mb-2">Safari (Mac)</p>
                      <p className="text-sm text-muted-foreground">
                        Préférences → Confidentialité → Cookies et données de sites web
                      </p>
                    </div>

                    <div className="bg-background/50 p-4 rounded-lg border">
                      <p className="font-semibold text-foreground mb-2">Microsoft Edge</p>
                      <p className="text-sm text-muted-foreground">
                        Paramètres → Confidentialité, recherche et services → Cookies et données de sites
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-warning/10 p-6 rounded-lg border border-warning">
                  <p className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5 text-warning" />
                    Important à savoir
                  </p>
                  <p className="text-muted-foreground">
                    Le refus de certains cookies peut impacter votre expérience de navigation et limiter l'accès
                    à certaines fonctionnalités du site. Les cookies strictement nécessaires ne peuvent pas être
                    désactivés car ils sont indispensables au fonctionnement du site.
                  </p>
                </div>

              </div>
            </Card>

            {/* Cookies tiers */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Cookies tiers
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Certains cookies présents sur notre site sont déposés par des services tiers (comme Google Analytics
                  ou Matomo pour les statistiques). Ces services ont leur propre politique de confidentialité :
                </p>

                <div className="bg-background/50 p-4 rounded-lg border space-y-2">
                  <p className="font-semibold text-foreground">Google Analytics</p>
                  <p className="text-sm">
                    Politique de confidentialité : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      policies.google.com/privacy
                    </a>
                  </p>
                  <p className="text-sm">
                    Désactivation : <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      tools.google.com/dlpage/gaoptout
                    </a>
                  </p>
                </div>

                <div className="bg-background/50 p-4 rounded-lg border space-y-2">
                  <p className="font-semibold text-foreground">Matomo (alternative respectueuse de la vie privée)</p>
                  <p className="text-sm">
                    Politique de confidentialité : <a href="https://matomo.org/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      matomo.org/privacy-policy
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Matomo peut être configuré pour ne pas utiliser de cookies et respecter le "Do Not Track"
                  </p>
                </div>
              </div>
            </Card>

            {/* Durée de conservation */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Durée de conservation des cookies
              </h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  La durée de conservation des cookies varie selon leur type :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-foreground">Cookies de session :</strong> Supprimés à la fermeture du navigateur</li>
                  <li><strong className="text-foreground">Cookies techniques :</strong> Maximum 12 mois</li>
                  <li><strong className="text-foreground">Cookies analytiques :</strong> Maximum 26 mois (conformément aux recommandations CNIL)</li>
                </ul>
                <p className="mt-4">
                  Passé ce délai, les cookies sont automatiquement supprimés ou nécessitent un nouveau consentement.
                </p>
              </div>
            </Card>

            {/* Vos droits */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Vos droits
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants
                  concernant vos données collectées via les cookies :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement</li>
                  <li>Droit d'opposition au traitement</li>
                  <li>Droit de retirer votre consentement à tout moment</li>
                </ul>
                <p className="mt-4">
                  Pour exercer vos droits, contactez-nous à : <a href="mailto:support@orygo.app" className="text-primary hover:underline font-medium">support@orygo.app</a>
                </p>
                <p>
                  Pour en savoir plus sur la protection de vos données personnelles, consultez notre{" "}
                  <a href="/privacy" className="text-primary hover:underline font-medium">Politique de confidentialité</a>.
                </p>
              </div>
            </Card>

            {/* Modifications */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Modifications de la politique
              </h2>
              <p className="text-muted-foreground">
                Orygo se réserve le droit de modifier cette politique des cookies à tout moment pour refléter
                les changements dans nos pratiques ou pour d'autres raisons opérationnelles, légales ou réglementaires.
                Nous vous encourageons à consulter régulièrement cette page pour rester informé.
              </p>
            </Card>

            {/* Contact */}
            <Card className="p-8 border-2 bg-gradient-to-br from-primary/5 to-tertiary/5">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Questions sur les cookies ?
              </h2>
              <p className="text-muted-foreground mb-6">
                Pour toute question concernant l'utilisation des cookies sur notre site, n'hésitez pas à nous contacter :
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-primary-dark font-semibold"
                >
                  <a href="mailto:support@orygo.app">
                    Nous contacter
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold"
                >
                  <a href="/privacy">
                    Politique de confidentialité
                  </a>
                </Button>
              </div>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cookies;
