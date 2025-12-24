import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Truck,
  Briefcase,
  MapPin,
  Archive,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLangLink } from "@/hooks/useLangLink";
import { useLanguage } from "@/contexts/LanguageContext";

/* =======================
   Types
======================= */

interface AboutPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

type PanelLevel = "main";

interface PanelItem {
  key: string;
  icon: any;
  path?: string;
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

  const mainItems: PanelItem[] = [
    { key: "nav.homeMoving", icon: Truck, path: langLink("/services/home-moving") },
    { key: "nav.officeMoving", icon: Briefcase, path: langLink("/services/office-moving") },
    { key: "nav.intercityMoving", icon: MapPin, path: langLink("/services/intercity-moving") },
    { key: "nav.storage", icon: Archive, path: langLink("/services/storage") },
  ];

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {/* Backdrop */}
<motion.div
  key="backdrop"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.45 }}
  className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-md"
  onClick={onClose}
/>

{/* Panel */}
<motion.aside
  key="panel"
  initial={{ x: isRTL ? "100%" : "-100%" , opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  exit={{ x: isRTL ? "100%" : "-100%", opacity: 0 }}
  transition={{ duration: 0.55, ease: [0.25, 0.8, 0.25, 1] }}
  className={`fixed top-0 ${
    isRTL ? "right-0" : "left-0"
  } z-[110] h-full w-full max-w-md 
     bg-white/10 backdrop-blur-xl shadow-2xl 
     border border-white/20 rounded-l-2xl overflow-hidden`}
>

  {/* Gold Accent Line */}
  <div className={`absolute top-0 ${isRTL ? "right-0" : "left-0"} 
       h-full w-[4px] bg-gradient-to-b from-royal-gold to-yellow-500`} />

  {/* Close Button */}
  <button
    onClick={onClose}
    className={`absolute top-6 ${isRTL ? "left-6" : "right-6"}
       z-20 p-3 rounded-full bg-white/20 backdrop-blur-xl 
       hover:bg-white/30 text-white transition shadow-md`}
  >
    <X className="w-6 h-6" />
  </button>

  {/* Content */}
  <div className="h-full flex flex-col pt-16 px-7 pb-10 overflow-y-auto">

    {/* Header */}
    <div className="mb-10">
      <h2 className="text-3xl font-semibold text-white mb-2 tracking-wide">
        {t("nav.services")}
      </h2>
      <div className="h-1 w-20 bg-royal-gold rounded-full mb-3" />
      <p className="text-sm text-gray-200/90">
        {language === "ar"
          ? "اختر الخدمة المناسبة لك"
          : "Choose the service that fits your needs"}
      </p>
    </div>

    {/* Items */}
    <div className="space-y-4">
      {mainItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.08, duration: 0.45 }}
          >
            <Link
              to={item.path!}
              onClick={onClose}
              className="
                group flex items-center gap-4 p-5 rounded-xl 
                bg-white/15 backdrop-blur-lg border border-white/10
                hover:bg-white/25 hover:shadow-lg transition-all duration-300
                hover:-translate-y-1
              "
            >
              <div className="
                w-12 h-12 flex items-center justify-center rounded-full
                bg-gradient-to-br from-royal-gold to-amber-400
                shadow-md group-hover:scale-110 transition-transform duration-300
              ">
                <Icon className="text-primary w-6 h-6" />
              </div>

              <span className="flex-1 text-lg font-medium text-white tracking-wide">
                {t(item.key)}
              </span>

              <ChevronRight
                className={`w-6 h-6 text-gray-200 transition-transform duration-300 
                  group-hover:translate-x-1 ${isRTL ? "rotate-180" : ""}`}
              />
            </Link>
          </motion.div>
        );
      })}
    </div>

    {/* Footer */}
    <div className="mt-auto pt-10 text-center text-white/90">
      <div className="text-sm font-bold tracking-wide">
        {language === "ar" ? "موف لاين" : "MoveLine"}
      </div>
      <div className="mt-1 text-xs">
        {language === "ar"
          ? "خدمات نقل موثوقة داخل وخارج المدن"
          : "Reliable moving services across cities"}
      </div>
    </div>
  </div>
</motion.aside>

    </AnimatePresence>,
    document.body
  );
};
