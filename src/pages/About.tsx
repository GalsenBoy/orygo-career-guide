import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Heart, Lightbulb, Users, Award, TrendingUp, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-tertiary-light/20">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[hsl(var(--gradient-end))] text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">À propos d'Orygo</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Votre boussole professionnelle
            </h1>

            <p className="text-xl text-primary-light">
              Nous accompagnons chaque personne dans sa quête du métier idéal,
              en combinant science, technologie et passion pour l'orientation professionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Notre Mission */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Notre Mission
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  Chez Orygo, nous croyons que chacun mérite de trouver sa voie professionnelle.
                  Notre mission est de <strong className="text-foreground">démocratiser l'accès à l'orientation professionnelle</strong> en
                  offrant des outils puissants, scientifiques et accessibles à tous.
                </p>
                <p>
                  Que vous soyez étudiant, en reconversion, ou simplement curieux d'explorer de nouvelles
                  opportunités, Orygo vous guide pas à pas vers les métiers qui correspondent vraiment
                  à votre personnalité, vos compétences et vos aspirations.
                </p>
              </div>
            </Card>

            {/* Notre Histoire */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-primary" />
                Notre Histoire
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Orygo est né d'une conviction simple : <strong className="text-foreground">l'orientation professionnelle
                  ne devrait pas être un privilège, mais un droit accessible à tous</strong>.
                </p>
                <p>
                  Fondée en 2024, notre plateforme combine l'expertise en psychologie du travail avec
                  les dernières technologies pour créer une expérience d'orientation unique. Nous avons
                  rassemblé des milliers de données sur les métiers, les formations et les parcours
                  professionnels pour vous offrir les meilleurs conseils possibles.
                </p>
                <p>
                  Aujourd'hui, Orygo accompagne des milliers de personnes dans leur recherche du métier idéal,
                  en France et au-delà.
                </p>
              </div>
            </Card>

            {/* Nos Valeurs */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                Nos Valeurs
              </h2>
              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-tertiary-light/30 p-6 rounded-lg border border-tertiary">
                  <div className="w-12 h-12 rounded-xl bg-primary-light/30 flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Accessibilité</h3>
                  <p className="text-muted-foreground">
                    L'orientation professionnelle doit être accessible à tous, quel que soit votre
                    parcours, votre âge ou votre situation.
                  </p>
                </div>

                <div className="bg-tertiary-light/30 p-6 rounded-lg border border-tertiary">
                  <div className="w-12 h-12 rounded-xl bg-success/20 flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-success" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Excellence</h3>
                  <p className="text-muted-foreground">
                    Nous nous appuyons sur des méthodes scientifiques éprouvées comme le test RIASEC
                    pour vous offrir les meilleurs résultats.
                  </p>
                </div>

                <div className="bg-tertiary-light/30 p-6 rounded-lg border border-tertiary">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Nous innovons constamment pour améliorer nos algorithmes de matching et enrichir
                    notre base de données de métiers et formations.
                  </p>
                </div>

                <div className="bg-tertiary-light/30 p-6 rounded-lg border border-tertiary">
                  <div className="w-12 h-12 rounded-xl bg-error/20 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-error" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Bienveillance</h3>
                  <p className="text-muted-foreground">
                    Chaque parcours est unique. Nous vous accompagnons avec empathie et sans jugement
                    dans votre exploration professionnelle.
                  </p>
                </div>

              </div>
            </Card>

            {/* Ce qui nous rend uniques */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                Ce qui nous rend uniques
              </h2>
              <div className="space-y-6">

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">1500+ Métiers Référencés</h3>
                    <p className="text-muted-foreground">
                      La plus grande base de données de métiers en France, avec descriptions détaillées,
                      codes ROME, codes RIASEC, compétences requises et perspectives d'évolution.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Test RIASEC Scientifique</h3>
                    <p className="text-muted-foreground">
                      Notre test de personnalité professionnelle s'appuie sur le modèle RIASEC de Holland,
                      reconnu mondialement et utilisé par les psychologues du travail.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Matching Intelligent</h3>
                    <p className="text-muted-foreground">
                      Notre algorithme de matching croise vos résultats RIASEC avec les caractéristiques
                      de chaque métier pour vous proposer les professions qui vous correspondent le mieux.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">5000+ Formations</h3>
                    <p className="text-muted-foreground">
                      Pour chaque métier qui vous intéresse, découvrez toutes les formations disponibles
                      avec certifications RNCP, durées, modalités et débouchés.
                    </p>
                  </div>
                </div>

              </div>
            </Card>

            {/* Nos Engagements */}
            <Card className="p-8 border-2 bg-gradient-to-br from-primary/5 to-tertiary/5">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Nos Engagements
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>
                    <strong className="text-foreground">Données fiables et actualisées :</strong> Nous mettons
                    à jour régulièrement nos bases de données pour vous offrir les informations les plus précises.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>
                    <strong className="text-foreground">Protection de vos données :</strong> Votre vie privée est
                    sacrée. Nous ne vendons jamais vos données et respectons le RGPD.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>
                    <strong className="text-foreground">Amélioration continue :</strong> Nous écoutons vos retours
                    et améliorons constamment notre plateforme pour mieux vous servir.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p>
                    <strong className="text-foreground">Support réactif :</strong> Une question ? Un problème ?
                    Notre équipe est là pour vous aider rapidement.
                  </p>
                </div>
              </div>
            </Card>

            {/* L'équipe */}
            <Card className="p-8 border-2">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                L'Équipe
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Orygo est porté par une équipe passionnée d'experts en orientation, psychologie du travail,
                  développement web et data science. Ensemble, nous travaillons chaque jour pour faire d'Orygo
                  la référence de l'orientation professionnelle en France.
                </p>
                <p>
                  Notre équipe est animée par une vision commune : <strong className="text-foreground">permettre
                  à chacun de s'épanouir professionnellement</strong>, quel que soit son parcours.
                </p>
              </div>
            </Card>

            {/* Statistiques */}
            <Card className="p-8 border-2 bg-gradient-to-br from-primary via-primary-dark to-[hsl(var(--gradient-end))] text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Orygo en chiffres
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">1500+</div>
                  <div className="text-primary-light text-sm">Métiers référencés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
                  <div className="text-primary-light text-sm">Formations disponibles</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">100%</div>
                  <div className="text-primary-light text-sm">Scientifique & fiable</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                  <div className="text-primary-light text-sm">Accessible partout</div>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-8 border-2 bg-gradient-to-br from-tertiary-light/50 to-primary-light/30">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Prêt à découvrir votre voie ?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Rejoignez les milliers de personnes qui ont trouvé leur métier idéal grâce à Orygo.
                  Commencez votre test RIASEC dès maintenant !
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-white hover:bg-primary-dark font-semibold text-lg px-8"
                  >
                    <a href="/">
                      Commencer le test
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-lg px-8"
                  >
                    <a href="/contact">
                      Nous contacter
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
