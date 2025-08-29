
'use client';

import { useState, useEffect } from 'react';

interface CookieConsentProps {
  message?: string;
  policyLink?: string;
}

export default function CookieConsent({ 
  message = "Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar contenido.", 
  policyLink = "/politica-cookies" 
}: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    const isAccepted = consent === 'accepted';
    
    if (!isAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Aquí puedes inicializar Google Analytics u otras cookies
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-4 shadow-lg md:inset-x-8 dark:border-gray-700 dark:bg-gray-800">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex-1">
          <h3 className="mb-1 font-semibold text-gray-900 dark:text-white">
            🍪 Política de Cookies
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {message}{' '}
            <a 
              href={policyLink} 
              className="text-red-600 hover:underline dark:text-red-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Más información
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            onClick={handleReject}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
          >
            Aceptar cookies
          </button>
        </div>
      </div>
    </div>
  );
}