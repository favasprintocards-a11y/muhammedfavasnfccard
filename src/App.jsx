import React, { useState, useEffect } from 'react';
import { INITIAL_PROFILE } from './data/initialProfile';
import { ProfileCard } from './components/ProfileCard';
import { QrModal } from './components/QrModal';
import { CheckCircle } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState(INITIAL_PROFILE);

  useEffect(() => {
    setProfile(INITIAL_PROFILE);
  }, [INITIAL_PROFILE]);
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <div className="app-container" style={{ flexDirection: 'column' }}>
      {/* Dynamic Animated Ambient Mesh Orbs */}
      <div className="ambient-orb orb-1"></div>
      <div className="ambient-orb orb-2"></div>
      <div className="ambient-orb orb-3"></div>

      {/* Full Page Profile Display */}
      <main style={{
        width: '100%',
        maxWidth: '580px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10,
        margin: '0 auto',
        flex: 1
      }}>
        <ProfileCard
          profile={profile}
          onShowToast={showToast}
          onOpenQr={() => setIsQrOpen(true)}
        />
      </main>

      {/* Developer Credits Footer */}
      <footer className="dev-footer" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0px', width: '100%', textAlign: 'center' }}>
          <span className="dev-by-text" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px', textAlign: 'center' }}>
            Developed by
          </span>
          <img
            src="/printo-logo.png"
            alt="Printo Cards And Technologies"
            style={{
              height: '130px',
              width: 'auto',
              maxWidth: '95%',
              objectFit: 'contain',
              display: 'block',
              margin: '-18px auto 0'
            }}
          />
        </div>
      </footer>

      {/* Modern QR Code Modal */}
      <QrModal
        profile={profile}
        isOpen={isQrOpen}
        onClose={() => setIsQrOpen(false)}
        onShowToast={showToast}
      />

      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle size={18} color="#00F0FF" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
