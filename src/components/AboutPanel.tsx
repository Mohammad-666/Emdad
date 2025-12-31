import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  ChevronLeft,
  ArrowLeft,
  ArrowRight,
  Building2,
  Shield,
  Sparkles,
  Leaf,
  Activity,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLangLink } from "@/hooks/useLangLink";
import { useLanguage } from "@/contexts/LanguageContext";

/* =======================
   Types
======================= */

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type PanelLevel = "main" | "about" | "governance";

interface PanelItem {
  key: string;
  icon: any;
  path?: string;
  next?: PanelLevel;
}

/* =======================
   Component
======================= */

export const AboutPanel = ({ isOpen, onClose }: AboutPanelProps) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const langLink = useLangLink();

  const [level, setLevel] = useState<PanelLevel>("main");
  const isRTL = language === "ar";
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

  /* =======================
     Lock body scroll
  ======================= */
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  /* =======================
     Helpers
  ======================= */

  const goTo = (path: string) => {
    navigate(path);
    onClose();
    setLevel("main");
  };

  const mainItems: PanelItem[] = [
    { key: "panel.about", icon: Building2, next: "about" },
    { key: "panel.whyPetra", icon: Sparkles, path: langLink("/why-petra") },
    { key: "panel.governance", icon: Shield, next: "governance" },
    { key: "panel.sustainability", icon: Leaf, path: langLink("/sustainability") },
  ];

  const aboutItems: PanelItem[] = [
    { key: "panel.about", icon: Building2, path: langLink("/about") },
    { key: "panel.services", icon: Sparkles, path: langLink("/services") },
    { key: "panel.safety", icon: Shield, path: langLink("/safety") },
    { key: "panel.activities", icon: Activity, path: langLink("/activities") },
  ];

  const governanceItems: PanelItem[] = [
    { key: "panel.governance", icon: Shield, path: langLink("/governance") },
    { key: "panel.ethics", icon: Shield, path: langLink("/ethics-governance") },
    { key: "panel.values", icon: Leaf, path: langLink("/our-values") },
  ];

  const getItems = () => {
    switch (level) {
      case "about":
        return aboutItems;
      case "governance":
        return governanceItems;
      default:
        return mainItems;
    }
  };

  const getTitle = () => {
    switch (level) {
      case "about":
        return t("panel.about");
      case "governance":
        return t("panel.governance");
      default:
        return t("panel.title");
    }
  };

  /* =======================
     Render
  ======================= */

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
        onClick={() => {
          setLevel("main");
          onClose();
        }}
      />

      {/* Panel */}
      <motion.aside
        initial={{ x: isRTL ? "100%" : "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: isRTL ? "100%" : "-100%" }}
        transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
        className={`fixed top-0 ${
          isRTL ? "right-0" : "left-0"
        } z-[110] h-full w-full max-w-md bg-gradient-to-b from-petroleum-green via-petroleum-green/95 to-petroleum-green/90 shadow-2xl`}
      >
        {/* Close */}
        <button
          onClick={() => {
            setLevel("main");
            onClose();
          }}
          className={`absolute top-6 ${
            isRTL ? "left-6" : "right-6"
          } p-3 rounded-full bg-white/10 hover:bg-white/20 text-white`}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="h-full flex flex-col pt-20 px-8 pb-8 overflow-y-auto">
          {/* Header */}
          <div className="mb-10">
            {level !== "main" && (
              <button
                onClick={() => setLevel("main")} // 👈 التعديل الوحيد
                className="mb-4 flex items-center gap-2 text-white/70 hover:text-royal-gold"
              >
                <BackIcon className="w-5 h-5" />
                <span>{t("panel.back")}</span>
              </button>
            )}

            <h2 className="text-3xl font-bold text-white mb-2">
              {getTitle()}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-royal-gold to-royal-gold/50 rounded-full" />
          </div>

          {/* Items */}
          <div className="space-y-3">
            {getItems().map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.key}
                  initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                  onClick={() => {
                    if (item.next) setLevel(item.next);
                    if (item.path) goTo(item.path);
                  }}
                  className="w-full flex items-center p-5 rounded-xl
                    bg-white/5 hover:bg-white/15 transition-all"
                >
                  {/* ICON */}
                  <div className="p-3 rounded-lg bg-white/10 shrink-0">
                    <Icon className="w-5 h-5 text-royal-gold" />
                  </div>

                  {/* TEXT */}
                  <span className="mr-4 text-lg text-white whitespace-nowrap">
                    {t(item.key)}
                  </span>

                  {/* ARROW */}
                  {item.next &&
                    (isRTL ? (
                      <ChevronLeft className="w-5 h-5 text-white/40 mr-auto" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-white/40 ml-auto" />
                    ))}
                </motion.button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-auto pt-8 border-t border-white/10 text-center text-royal-gold tracking-widest text-sm">
            PETRA
          </div>
        </div>
      </motion.aside>
    </AnimatePresence>,
    document.body
  );
};
