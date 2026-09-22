import avatarImg from '../assets/avatar.jpeg';

export const INITIAL_PROFILE = {
  name: "Muhammed Favas",
  role: "Software Developer",
  company: "Printo Cards And Technologies",
  bio: "Crafting digital experiences, spatial interfaces & next-gen brand identities.",
  verified: true,
  avatar: avatarImg,
  banner: "/banner.png",
  location: "Cairo / Remote",
  phone: "+91 8086630149",
  email: "mfavax@gmail.com",
  website: "https://printocards.com",
  vcardNotes: "Met via tap. NFC Digital Business Card",
  theme: "stone", // 'stone', 'midnight', 'cyber', 'pearl', 'gold'
  accentColor: "#6E3AFF",
  cardStyle: "glass", // 'glass', 'flat', 'bordered'
  socials: [
    {
      id: "whatsapp",
      name: "WhatsApp",
      handle: "+1 (555) 234-5678",
      url: "https://wa.me/+918086630149",
      color: "#25D366",
      bgColor: "#E8F9EE",
      icon: "whatsapp",
      image: "/icons/whatsapp.png"
    },
    {
      id: "instagram",
      name: "Instagram",
      handle: "@ahmed.gamal",
      url: "https://instagram.com/mhmdfavz",
      color: "#E4405F",
      bgColor: "#FDEAEF",
      icon: "instagram",
      image: "/icons/instagram.png"
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      handle: "ahmedgamal-pd",
      url: "https://linkedin.com",
      color: "#0A66C2",
      bgColor: "#E6F0FA",
      icon: "linkedin",
      image: "/icons/linkedin.png"
    },


    // {
    //   id: "twitter",
    //   name: "X (Twitter)",
    //   handle: "@ahmedgamal_ux",
    //   url: "https://x.com",
    //   color: "#000000",
    //   bgColor: "#F0F0F0",
    //   icon: "twitter",
    //   image: "/icons/twitter.png"
    // }
  ]
};
