"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, X } from "lucide-react";

interface SuccessToastProps {
  isVisible: boolean;
  onClose: () => void;
  message?: string;
}

export default function SuccessToast({
  isVisible,
  onClose,
  message = "Thank you! We'll be in touch.",
}: SuccessToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-4 left-4 sm:left-auto sm:right-6 z-[100] flex items-center gap-3 bg-white px-5 py-4 rounded-xl shadow-lg border border-gray-100"
          style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <p className="text-sm text-gray-700 pr-2">{message}</p>
          <button
            onClick={onClose}
            className="p-1.5 -mr-1.5 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
