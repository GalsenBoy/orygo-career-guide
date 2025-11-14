import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftRight, TrendingUp, Calculator } from "lucide-react";

const Career = () => {
  const [salary, setSalary] = useState<string>("");
  const [profile, setProfile] = useState<string>("cadre");
  const [convertedSalary, setConvertedSalary] = useState<number | null>(null);
  const [conversionType, setConversionType] = useState<"brutToNet" | "netToBrut">("brutToNet");

  // Taux de conversion approximatifs
  const conversionRates = {
    cadre: { brutToNet: 0.75, netToBrut: 1.33 }, // ~25% de charges
    nonCadre: { brutToNet: 0.77, netToBrut: 1.30 }, // ~23% de charges
    fonctionnaire: { brutToNet: 0.85, netToBrut: 1.18 }, // ~15% de charges
    liberal: { brutToNet: 0.55, netToBrut: 1.82 }, // ~45% de charges (incluant cotisations)
  };

  const handleConvert = () => {
    const amount = parseFloat(salary);
    if (isNaN(amount) || amount <= 0) {
      setConvertedSalary(null);
      return;
    }

    const rate = conversionRates[profile as keyof typeof conversionRates][conversionType];
    const result = amount * rate;
    setConvertedSalary(Math.round(result * 100) / 100);
  };

  const toggleConversion = () => {
    setConversionType(conversionType === "brutToNet" ? "netToBrut" : "brutToNet");
    setConvertedSalary(null);
    setSalary("");
  };

  const profiles = [
    { value: "cadre", label: "Cadre" },
    { value: "nonCadre", label: "Non-cadre" },
    { value: "fonctionnaire", label: "Fonctionnaire" },
    { value: "liberal", label: "Profession libérale" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-secondary/5">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Calculator className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
            Convertisseur Salaire Brut/Net
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convertissez facilement votre salaire brut en net ou inversement selon votre statut professionnel
          </p>
        </div>
      </section>

      {/* Converter Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="shadow-xl border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Calculez votre salaire
              </CardTitle>
              <CardDescription>
                Sélectionnez votre profil et entrez le montant à convertir
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Selection */}
              <div className="space-y-2">
                <Label htmlFor="profile">Statut professionnel</Label>
                <Select value={profile} onValueChange={setProfile}>
                  <SelectTrigger id="profile">
                    <SelectValue placeholder="Sélectionnez votre statut" />
                  </SelectTrigger>
                  <SelectContent>
                    {profiles.map((p) => (
                      <SelectItem key={p.value} value={p.value}>
                        {p.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Conversion Type Toggle */}
              <div className="flex items-center justify-center">
                <Button
                  variant="outline"
                  onClick={toggleConversion}
                  className="gap-2"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                  {conversionType === "brutToNet" ? "Brut → Net" : "Net → Brut"}
                </Button>
              </div>

              {/* Salary Input */}
              <div className="space-y-2">
                <Label htmlFor="salary">
                  {conversionType === "brutToNet" ? "Salaire brut annuel" : "Salaire net annuel"} (€)
                </Label>
                <Input
                  id="salary"
                  type="number"
                  placeholder="Ex: 45000"
                  value={salary}
                  onChange={(e) => setSalary(e.target.value)}
                  className="text-lg"
                />
              </div>

              {/* Convert Button */}
              <Button
                onClick={handleConvert}
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-6 text-lg"
              >
                Convertir
              </Button>

              {/* Result */}
              {convertedSalary !== null && (
                <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border-2 border-primary/20">
                  <p className="text-sm text-muted-foreground mb-2 text-center">
                    {conversionType === "brutToNet" ? "Salaire net annuel" : "Salaire brut annuel"}
                  </p>
                  <p className="text-4xl font-bold text-center text-primary">
                    {convertedSalary.toLocaleString("fr-FR")} €
                  </p>
                  <p className="text-lg text-center text-muted-foreground mt-2">
                    Soit environ {Math.round(convertedSalary / 12).toLocaleString("fr-FR")} € / mois
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Taux de conversion</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Cadre :</span>
                    <span className="font-semibold">~25% de charges</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Non-cadre :</span>
                    <span className="font-semibold">~23% de charges</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Fonctionnaire :</span>
                    <span className="font-semibold">~15% de charges</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-muted-foreground">Libéral :</span>
                    <span className="font-semibold">~45% de charges</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">À savoir</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Les taux indiqués sont approximatifs</li>
                  <li>• Ils ne tiennent pas compte des avantages</li>
                  <li>• Les charges varient selon les entreprises</li>
                  <li>• Pour un calcul précis, consultez un expert</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
