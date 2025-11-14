import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto link
    const mailtoLink = `mailto:support@orygo.app?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;

    toast.success("Votre client email va s'ouvrir");

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/20 via-background to-tertiary-light/20">
      <Navbar />
      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-[hsl(var(--gradient-end))] text-white py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <MessageSquare className="w-4 h-4" />
              <span className="text-sm font-medium">Contactez-nous</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nous sommes là pour vous aider
            </h1>

            <p className="text-xl text-primary-light">
              Une question sur Orygo ? Besoin d'assistance ? Notre équipe est à votre écoute.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="p-6 border-2 border-border hover:border-primary/20 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary-light/20 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:support@orygo.app"
                  className="text-primary hover:text-primary-dark transition-colors font-medium"
                >
                  support@orygo.app
                </a>
                <p className="text-sm text-muted-foreground mt-2">
                  Réponse sous 24-48h
                </p>
              </Card>

              <div className="bg-gradient-to-br from-primary/5 to-tertiary/5 rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-3">Horaires de support</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Lundi - Vendredi</p>
                  <p className="font-medium text-foreground">9h00 - 18h00</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8 border-2 border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jean Dupont"
                      required
                      className="border-2"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jean.dupont@email.com"
                      required
                      className="border-2"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="En quoi pouvons-nous vous aider ?"
                    required
                    className="border-2"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre demande en détail..."
                    required
                    rows={6}
                    className="border-2 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold text-lg py-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  Envoyer le message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Questions fréquentes ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Consultez notre FAQ pour trouver rapidement des réponses aux questions les plus courantes.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold"
            >
              Voir la FAQ
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
