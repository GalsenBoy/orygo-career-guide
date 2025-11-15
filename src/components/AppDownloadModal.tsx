import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Apple, Smartphone, Clock } from "lucide-react";

interface AppDownloadModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AppDownloadModal = ({ open, onOpenChange }: AppDownloadModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Téléchargez l'application Orygo
          </DialogTitle>
          <DialogDescription className="text-center text-base pt-2">
            Notre application mobile est actuellement en cours de vérification sur les stores
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-6">
          {/* Status Badge */}
          <div className="flex items-center justify-center gap-2 bg-warning/10 text-warning px-4 py-3 rounded-lg border border-warning/20">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">En cours de vérification</span>
          </div>

          {/* iOS Button */}
          <Button
            disabled
            className="w-full h-auto py-4 px-6 bg-black hover:bg-black/90 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <div className="flex items-center gap-3 w-full">
              <Apple className="w-8 h-8" />
              <div className="text-left flex-1">
                <div className="text-xs">Télécharger sur</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </div>
          </Button>

          {/* Android Button */}
          <Button
            disabled
            className="w-full h-auto py-4 px-6 bg-black hover:bg-black/90 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <div className="flex items-center gap-3 w-full">
              <Smartphone className="w-8 h-8" />
              <div className="text-left flex-1">
                <div className="text-xs">Télécharger sur</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </div>
          </Button>

          {/* Info Text */}
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground">
              L'application sera bientôt disponible sur iOS et Android.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Vous serez notifié dès la mise en ligne !
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AppDownloadModal;
