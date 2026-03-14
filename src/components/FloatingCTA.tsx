import React, { useState, useEffect } from "react";
import { Phone, X, MessageCircle } from "lucide-react";

const FloatingCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded options */}
      {expanded && (
        <div className="flex flex-col gap-2 items-end animate-fade-up">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 bg-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <Phone size={16} />
            Call Now
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-800 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        {expanded ? <X size={24} /> : <Phone size={24} />}
      </button>

      {/* Pulse ring */}
      {!expanded && (
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30 pointer-events-none" />
      )}
    </div>
  );
};

export default FloatingCTA;