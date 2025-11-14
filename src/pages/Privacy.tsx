import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-tertiary-light/20">
      <Navbar />
      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[hsl(var(--gradient-end))] text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Politique de confidentialité</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Vos données personnelles
            </h1>

            <p className="text-xl text-primary-light">
              Orygo respecte votre vie privée et s'engage à protéger vos données personnelles.
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

            {/* Introduction */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Eye className="w-8 h-8 text-primary" />
                Introduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                La présente politique de confidentialité décrit comment Orygo collecte, utilise et protège
                les informations que vous nous fournissez lors de votre navigation sur le site orygo.app.
                En utilisant notre site, vous acceptez les pratiques décrites dans cette politique.
              </p>
            </Card>

            {/* Responsable du traitement */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Responsable du traitement des données
              </h2>
              <div className="text-muted-foreground space-y-2">
                <p><strong className="text-foreground">Nom :</strong> Bilaly CISSOKHO</p>
                <p><strong className="text-foreground">Statut :</strong> Auto-entrepreneur</p>
                <p><strong className="text-foreground">SIRET :</strong> 938 934 759 00011</p>
                <p><strong className="text-foreground">Adresse :</strong> 20 avenue d'Alsace</p>
                <p><strong className="text-foreground">Email :</strong> <a href="mailto:bilaly.cissokho21@gmail.com" className="text-primary hover:underline">bilaly.cissokho21@gmail.com</a></p>
                <p><strong className="text-foreground">Téléphone :</strong> 06 99 06 05 57</p>
              </div>
            </Card>

            {/* Données collectées */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Database className="w-8 h-8 text-primary" />
                Données collectées
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Données de navigation</h3>
                  <p className="text-muted-foreground">
                    Notre site collecte automatiquement certaines informations lors de votre visite via des outils
                    d'analyse (Google Analytics ou Matomo) :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>Adresse IP (anonymisée)</li>
                    <li>Type de navigateur et système d'exploitation</li>
                    <li>Pages visitées et durée de visite</li>
                    <li>Source de référencement (comment vous êtes arrivé sur notre site)</li>
                    <li>Données de localisation approximative (pays, ville)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Données de contact</h3>
                  <p className="text-muted-foreground">
                    Lorsque vous nous contactez via le formulaire de contact, nous collectons :
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Message et sujet de votre demande</li>
                  </ul>
                </div>

                <div className="bg-tertiary-light/30 p-4 rounded-lg border border-tertiary">
                  <p className="text-foreground font-medium">
                    <strong>Important :</strong> Orygo est un site vitrine présentant notre application.
                    Nous ne proposons pas de création de compte utilisateur, de tests RIASEC en ligne,
                    ni de fonctionnalités nécessitant une inscription. Aucune donnée personnelle sensible
                    n'est collectée via ce site.
                  </p>
                </div>
              </div>
            </Card>

            {/* Utilisation des données */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Utilisation des données
              </h2>
              <p className="text-muted-foreground mb-4">
                Les données collectées sont utilisées uniquement pour :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Améliorer l'expérience utilisateur et la navigation sur le site</li>
                <li>Analyser le trafic et les statistiques de visite</li>
                <li>Répondre à vos demandes de contact</li>
                <li>Optimiser le référencement naturel (SEO) de notre site</li>
              </ul>
            </Card>

            {/* Cookies */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Cookies et technologies similaires
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation et analyser
                  l'audience du site.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Types de cookies utilisés :</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li><strong className="text-foreground">Cookies analytiques :</strong> Google Analytics ou Matomo pour mesurer l'audience et analyser le comportement des visiteurs (anonymisés)</li>
                    <li><strong className="text-foreground">Cookies techniques :</strong> Nécessaires au bon fonctionnement du site</li>
                  </ul>
                </div>

                <p className="text-muted-foreground">
                  Vous pouvez configurer votre navigateur pour refuser les cookies ou être informé de leur dépôt.
                  La désactivation des cookies peut affecter certaines fonctionnalités du site.
                </p>
              </div>
            </Card>

            {/* Partage des données */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Lock className="w-8 h-8 text-primary" />
                Partage et transfert des données
              </h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Orygo ne vend, ne loue et ne partage pas vos données personnelles avec des tiers à des fins commerciales.
                </p>

                <p className="text-muted-foreground">
                  Vos données peuvent être partagées uniquement avec :
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li><strong className="text-foreground">Hébergeur :</strong> Netlify (États-Unis) - pour l'hébergement du site</li>
                  <li><strong className="text-foreground">Outils d'analyse :</strong> Google Analytics ou Matomo - pour les statistiques de visite</li>
                </ul>

                <p className="text-muted-foreground">
                  Ces prestataires sont tenus de respecter la confidentialité de vos données et ne peuvent les utiliser
                  à d'autres fins que celles pour lesquelles elles ont été collectées.
                </p>
              </div>
            </Card>

            {/* Conservation des données */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Conservation des données
              </h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Données de navigation :</strong> Conservées pendant 26 mois maximum (conformément aux recommandations CNIL)</li>
                <li><strong className="text-foreground">Données de contact :</strong> Conservées pendant la durée nécessaire au traitement de votre demande, puis archivées pendant 3 ans</li>
              </ul>
            </Card>

            {/* Vos droits */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Vos droits (RGPD)
              </h2>
              <p className="text-muted-foreground mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong className="text-foreground">Droit d'accès :</strong> Obtenir une copie de vos données personnelles</li>
                <li><strong className="text-foreground">Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
                <li><strong className="text-foreground">Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong className="text-foreground">Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                <li><strong className="text-foreground">Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                <li><strong className="text-foreground">Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
              </ul>

              <div className="mt-6 p-4 bg-primary-light/10 rounded-lg border border-primary">
                <p className="text-foreground font-medium flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Pour exercer vos droits :
                </p>
                <p className="text-muted-foreground mt-2">
                  Contactez-nous par email à <a href="mailto:support@orygo.app" className="text-primary hover:underline font-medium">support@orygo.app</a> ou
                  par courrier à l'adresse : Bilaly CISSOKHO, 20 avenue d'Alsace.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Nous nous engageons à répondre dans un délai d'un mois maximum.
                </p>
              </div>
            </Card>

            {/* Sécurité */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Sécurité des données
              </h2>
              <p className="text-muted-foreground">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
                contre tout accès non autorisé, perte, destruction ou altération. Notre site utilise le protocole HTTPS
                pour sécuriser les échanges de données.
              </p>
            </Card>

            {/* Réclamation */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Droit de réclamation
              </h2>
              <p className="text-muted-foreground">
                Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la
                Commission Nationale de l'Informatique et des Libertés (CNIL) :
              </p>
              <div className="mt-4 p-4 bg-secondary-light/30 rounded-lg">
                <p className="text-foreground font-medium">CNIL</p>
                <p className="text-muted-foreground">3 Place de Fontenoy</p>
                <p className="text-muted-foreground">TSA 80715</p>
                <p className="text-muted-foreground">75334 PARIS CEDEX 07</p>
                <p className="text-muted-foreground mt-2">
                  Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
                </p>
              </div>
            </Card>

            {/* Modifications */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Modifications de la politique
              </h2>
              <p className="text-muted-foreground">
                Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment.
                Toute modification sera publiée sur cette page avec une nouvelle date de mise à jour.
                Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques.
              </p>
            </Card>

            {/* Contact */}
            <Card className="p-8 border-2 bg-gradient-to-br from-primary/5 to-tertiary/5">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Questions ?
              </h2>
              <p className="text-muted-foreground mb-4">
                Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:support@orygo.app"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium"
                >
                  <Mail className="w-5 h-5" />
                  Nous contacter
                </a>
              </div>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
