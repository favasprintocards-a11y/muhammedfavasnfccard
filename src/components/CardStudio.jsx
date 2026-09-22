import React from 'react';
import { Sliders, X, Sparkles, Image, User, Briefcase, Phone, Mail, Globe, Palette, Plus, Trash2 } from 'lucide-react';

export const CardStudio = ({ profile, onChangeProfile, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleInputChange = (field, value) => {
    onChangeProfile({
      ...profile,
      [field]: value
    });
  };

  const handleSocialChange = (id, field, value) => {
    const updatedSocials = profile.socials.map((s) => 
      s.id === id ? { ...s, [field]: value } : s
    );
    onChangeProfile({
      ...profile,
      socials: updatedSocials
    });
  };

  const handleSocialIconUpload = (id, file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      handleSocialChange(id, 'image', e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAvatarFileUpload = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      handleInputChange('avatar', e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleAddSocial = () => {
    const newId = `custom-${Date.now()}`;
    const newSocial = {
      id: newId,
      name: "New Link",
      handle: "@username",
      url: "https://",
      color: "#6E3AFF",
      bgColor: "rgba(255, 255, 255, 0.08)",
      icon: "link"
    };
    onChangeProfile({
      ...profile,
      socials: [...profile.socials, newSocial]
    });
  };

  const handleRemoveSocial = (id) => {
    onChangeProfile({
      ...profile,
      socials: profile.socials.filter(s => s.id !== id)
    });
  };

  const themes = [
    { id: 'stone', label: 'Stone Steps', color: '#2A2F38' },
    { id: 'midnight', label: 'Midnight', color: '#1a1e36' },
    { id: 'cyber', label: 'Cyber Neon', color: '#15002b' },
    { id: 'pearl', label: 'Pearl White', color: '#eef2f5' },
    { id: 'gold', label: 'Gold Slate', color: '#241e12' }
  ];

  return (
    <div className="studio-sidebar">
      <div className="studio-header">
        <h3 className="studio-title">
          <Sliders size={20} color="#6E3AFF" />
          Card Studio & Customizer
        </h3>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={18} />
        </button>
      </div>

      <div className="studio-content">
        {/* Background Theme Selector */}
        <div className="form-group">
          <label className="form-label">
            <Palette size={14} style={{ display: 'inline', marginRight: '6px' }} />
            App Backdrop Theme
          </label>
          <div className="theme-presets-grid">
            {themes.map((t) => (
              <button 
                key={t.id}
                className={`theme-preset-btn ${profile.theme === t.id ? 'active' : ''}`}
                onClick={() => handleInputChange('theme', t.id)}
              >
                <div className="theme-swatch" style={{ background: t.color }}></div>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Profile Info Fields */}
        <div className="form-group">
          <label className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-input" 
            value={profile.name} 
            onChange={(e) => handleInputChange('name', e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Job Title / Role</label>
          <input 
            type="text" 
            className="form-input" 
            value={profile.role} 
            onChange={(e) => handleInputChange('role', e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Company / Studio</label>
          <input 
            type="text" 
            className="form-input" 
            value={profile.company} 
            onChange={(e) => handleInputChange('company', e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Avatar Photo</label>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <input 
              type="text" 
              className="form-input" 
              style={{ flex: 1 }}
              placeholder="Photo URL or Upload file"
              value={profile.avatar} 
              onChange={(e) => handleInputChange('avatar', e.target.value)} 
            />
            <label className="theme-preset-btn" style={{ cursor: 'pointer', padding: '10px 14px', margin: 0, display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Image size={16} />
              Upload
              <input 
                type="file" 
                accept="image/*" 
                style={{ display: 'none' }} 
                onChange={(e) => handleAvatarFileUpload(e.target.files[0])}
              />
            </label>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Phone Number (For vCard)</label>
          <input 
            type="text" 
            className="form-input" 
            value={profile.phone} 
            onChange={(e) => handleInputChange('phone', e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Email Address</label>
          <input 
            type="text" 
            className="form-input" 
            value={profile.email} 
            onChange={(e) => handleInputChange('email', e.target.value)} 
          />
        </div>

        <div className="form-group">
          <label className="form-label">Website Portfolio</label>
          <input 
            type="text" 
            className="form-input" 
            value={profile.website} 
            onChange={(e) => handleInputChange('website', e.target.value)} 
          />
        </div>

        {/* Social Apps Config */}
        <div className="form-group">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <label className="form-label" style={{ margin: 0 }}>Social Icons & Links</label>
            <button 
              onClick={handleAddSocial} 
              style={{
                background: 'rgba(110, 58, 255, 0.15)',
                border: '1px solid rgba(110, 58, 255, 0.3)',
                color: '#6E3AFF',
                borderRadius: '8px',
                padding: '4px 10px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
            >
              <Plus size={14} /> Add Social
            </button>
          </div>

          {profile.socials.map((social) => (
            <div key={social.id} style={{ background: 'rgba(255,255,255,0.03)', padding: '10px', borderRadius: '12px', marginBottom: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                {/* Custom Icon Image Preview / Upload Button */}
                <label 
                  title="Click to upload custom icon image"
                  style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '50%', 
                    background: social.bgColor || 'rgba(255,255,255,0.08)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justify-content: 'center', 
                    cursor: 'pointer',
                    overflow: 'hidden',
                    flexShrink: 0,
                    border: '1px dashed rgba(255,255,255,0.2)'
                  }}
                >
                  {social.image ? (
                    <img src={social.image} alt={social.name} style={{ width: '22px', height: '22px', objectFit: 'contain' }} />
                  ) : (
                    <Image size={18} color={social.color || '#FFF'} />
                  )}
                  <input 
                    type="file" 
                    accept="image/*" 
                    style={{ display: 'none' }} 
                    onChange={(e) => handleSocialIconUpload(social.id, e.target.files[0])} 
                  />
                </label>

                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Platform Name"
                  style={{ flex: 1 }} 
                  value={social.name} 
                  onChange={(e) => handleSocialChange(social.id, 'name', e.target.value)} 
                />

                <button 
                  onClick={() => handleRemoveSocial(social.id)}
                  style={{ background: 'none', border: 'none', color: '#FF4D4D', cursor: 'pointer', padding: '4px' }}
                  title="Remove social item"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div style={{ display: 'flex', gap: '8px' }}>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Handle (e.g. @user)"
                  style={{ flex: 1 }} 
                  value={social.handle} 
                  onChange={(e) => handleSocialChange(social.id, 'handle', e.target.value)} 
                />
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="URL link"
                  style={{ flex: 1.5 }} 
                  value={social.url || ''} 
                  onChange={(e) => handleSocialChange(social.id, 'url', e.target.value)} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
