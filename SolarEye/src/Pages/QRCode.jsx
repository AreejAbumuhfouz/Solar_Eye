// import React from "react";
// import NavBar from '../components/NavBar';
// import ShaheenFooter from '../components/Footer';
// export default function QRCodePage() {
//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h1 style={styles.title}>Al Khatem Inventory</h1>
//         <p style={styles.subtitle}>Quick Links</p>

//         <div style={styles.links}>
//           <a href="https://alkhateminventory.com" target="_blank" rel="noreferrer">
//             🌐 Website
//           </a>

//           <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
//             📸 Instagram
//           </a>

//           <a href="https://wa.me/962XXXXXXXXX" target="_blank" rel="noreferrer">
//             💬 WhatsApp
//           </a>

//           <a href="mailto:info@alkhateminventory.com">
//             ✉️ Email
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f4f6f9",
//   },
//   card: {
//     background: "#ffffff",
//     padding: "40px",
//     borderRadius: "16px",
//     textAlign: "center",
//     boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
//     width: "350px",
//   },
//   title: {
//     marginBottom: "10px",
//   },
//   subtitle: {
//     marginBottom: "25px",
//     color: "#777",
//   },
//   links: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px",
//   },
// };



import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import {
  MapPin, Mail, Phone, Globe, Download, Copy, Check,
  Share2, Zap, Sun, ArrowUpRight, ChevronRight,
  Linkedin, Twitter, Youtube, Instagram, Facebook, ExternalLink,
} from "lucide-react";
import NavBar from "../components/NavBar";
import ShaheenFooter from "../components/Footer";
import { SEOHead, StructuredData, BreadcrumbSchema } from "../SEO/SEOHead.jsx";

/* ─── Social platforms ─── */
const SOCIALS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "SolarEye Technologies",
    icon: Linkedin,
    href: "https://linkedin.com/company/solareye",
    color: "#0A66C2",
    from: "#0A66C2",
    to: "#0284C7",
  },
  {
    id: "twitter",
    label: "X  /  Twitter",
    handle: "@solareye",
    icon: Twitter,
    href: "https://twitter.com/solareye",
    color: "#1D9BF0",
    from: "#1D9BF0",
    to: "#0EA5E9",
  },
  {
    id: "instagram",
    label: "Instagram",
    handle: "@solareye",
    icon: Instagram,
    href: "https://instagram.com/solareye",
    color: "#E1306C",
    from: "#F59E0B",
    to: "#EC4899",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "SolarEye",
    icon: Youtube,
    href: "https://youtube.com/@solareye",
    color: "#FF0000",
    from: "#EF4444",
    to: "#B91C1C",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "SolarEye",
    icon: Facebook,
    href: "https://facebook.com/solareye",
    color: "#1877F2",
    from: "#1877F2",
    to: "#1D4ED8",
  },
  {
    id: "website",
    label: "Website",
    handle: "solareye.info",
    icon: Globe,
    href: "https://solareye.info",
    color: "#4ACEF4",
    from: "#226F9E",
    to: "#4ACEF4",
  },
];

/* ─── Contact items ─── */
const CONTACTS = [
  { icon: Phone,  label: "Phone",       value: "+971 50 123 4567",   href: "tel:+971501234567" },
  { icon: Mail,   label: "Email",       value: "info@SolarEye.info", href: "mailto:info@SolarEye.info" },
  { icon: Globe,  label: "Website",     value: "solareye.info",       href: "https://solareye.info" },
  { icon: MapPin, label: "Head Office", value: "Dubai, UAE",          href: "https://maps.google.com/?q=Dubai,UAE" },
];

/* ─── Stats ─── */
// const STATS = [
//   { value: "500+", label: "Solar Farms Inspected" },
//   { value: "3 GW", label: "Capacity Monitored" },
//   { value: "4",    label: "Global Offices" },
//   { value: "24/7", label: "AI Monitoring" },
// ];

/* ─── QR helper (free, no package) ─── */
const qrSrc = (url, size = 240) =>
  `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    url
  )}&size=${size}x${size}&ecc=H&color=226F9E&bgcolor=ffffff&qzone=2&format=png`;

const PAGE_URL = "https://solareye.info/contactus";

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════ */

/* Glowing orb */
const Orb = ({ className }) => (
  <div className={`absolute rounded-full pointer-events-none ${className}`} />
);

/* Animated grid lines */
const GridLines = () => (
  <div
    className="absolute inset-0 pointer-events-none opacity-[0.03]"
    style={{
      backgroundImage:
        "linear-gradient(#4ACEF4 1px,transparent 1px),linear-gradient(90deg,#4ACEF4 1px,transparent 1px)",
      backgroundSize: "60px 60px",
    }}
  />
);

/* Social card with tilt effect */
const SocialCard = ({ social, index }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [6, -6]);
  const rotateY = useTransform(x, [-40, 40], [-6, 6]);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const reset = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={social.href}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * index, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
      className="group relative flex items-center gap-4 p-5 rounded-2xl
                 bg-white/[0.04] hover:bg-white/[0.08]
                 border border-white/[0.07] hover:border-white/[0.18]
                 transition-colors duration-200 cursor-pointer overflow-hidden"
    >
      {/* glow behind icon */}
      <div
        className="absolute left-0 top-0 w-28 h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 0% 50%, ${social.color}30 0%, transparent 70%)`,
        }}
      />
      {/* icon */}
      <div
        className="relative w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
        style={{ background: `linear-gradient(135deg, ${social.from}, ${social.to})` }}
      >
        <social.icon className="w-6 h-6 text-white" strokeWidth={1.8} />
      </div>
      {/* text */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-sm group-hover:text-[#4ACEF4] transition-colors">
          {social.label}
        </p>
        <p className="text-gray-500 text-xs mt-0.5 truncate">{social.handle}</p>
      </div>
      {/* arrow */}
      <ArrowUpRight
        className="w-4 h-4 text-gray-600 group-hover:text-[#4ACEF4] group-hover:translate-x-0.5
                   group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
      />
    </motion.a>
  );
};

/* Contact row */
const ContactRow = ({ item, index }) => (
  <motion.a
    href={item.href}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, x: -16 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.1 * index + 0.3, duration: 0.45 }}
    whileHover={{ x: 5 }}
    className="group flex items-center gap-4 p-4 rounded-2xl
               bg-white/[0.04] hover:bg-white/[0.08]
               border border-white/[0.06] hover:border-[#4ACEF4]/30
               transition-all duration-200"
  >
    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
         style={{ background: "linear-gradient(135deg,#226F9E33,#4ACEF433)" }}>
      <item.icon className="w-5 h-5 text-[#4ACEF4]" strokeWidth={1.8} />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5">{item.label}</p>
      <p className="text-white text-sm font-medium truncate group-hover:text-[#4ACEF4] transition-colors">
        {item.value}
      </p>
    </div>
    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#4ACEF4] transition-colors shrink-0" />
  </motion.a>
);

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
const QRPage = () => {
  const [copied, setCopied]       = useState(false);
  const [activeTab, setActiveTab] = useState("qr"); // "qr" | "links"
  const [qrPx, setQrPx]          = useState(220);

  /* responsive QR size */
  useEffect(() => {
    const resize = () => setQrPx(window.innerWidth < 420 ? 180 : window.innerWidth < 640 ? 210 : 230);
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(PAGE_URL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const share = async () => {
    if (navigator.share) await navigator.share({ title: "SolarEye Contact", url: PAGE_URL });
    else copyLink();
  };

  const breadcrumbs = [
    { name: "Home",    url: "https://solareye.info" },
    { name: "QR Code", url: "https://solareye.info/qr" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0e17] text-white">
      <NavBar />

      {/* ── SEO ── */}
      <SEOHead
        title="SolarEye – Scan & Connect"
        description="Scan to reach SolarEye's team instantly. Access our contact details and all social media platforms."
        keywords="SolarEye QR, solar inspection contact, drone solar AI"
        canonicalUrl="https://solareye.info/qr"
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "SolarEye QR Code",
          url: "https://solareye.info/qr",
        }}
      />
      <BreadcrumbSchema items={breadcrumbs} />

      {/* ══════════════════════════════════
          HERO
      ══════════════════════════════════ */}
      <section className="relative overflow-hidden pt-32 pb-28 px-4 text-center">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1525] via-[#0b0e17] to-[#0b0e17]" />
        <GridLines />
        <Orb className="w-[600px] h-[600px] -top-48 left-1/2 -translate-x-1/2 bg-[#226F9E]/15 blur-[120px]" />
        <Orb className="w-64 h-64 top-12 right-0 bg-[#4ACEF4]/10 blur-[80px]" />

        {/* Animated sun rays */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-16 origin-top"
              style={{
                width: 1,
                height: "50%",
                background: "linear-gradient(to bottom,#4ACEF4,transparent)",
                rotate: i * 45,
              }}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 mb-7
                       rounded-full border border-[#4ACEF4]/25 bg-[#4ACEF4]/5 backdrop-blur-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sun className="w-4 h-4 text-[#4ACEF4]" />
            </motion.div>
            <span className="text-[#4ACEF4] text-xs font-bold tracking-[0.2em] uppercase">
              SolarEye Technologies
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-5"
          >
            Scan &amp;{" "}
            <span
              className="relative inline-block"
              style={{
                background: "linear-gradient(135deg,#4ACEF4 0%,#226F9E 60%,#4ACEF4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundSize: "200% auto",
              }}
            >
              Connect
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-gray-400 text-lg sm:text-xl leading-relaxed max-w-lg mx-auto"
          >
            You found us. Reach our team instantly — tap any link or scan the QR code below.
          </motion.p>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-px h-10 bg-gradient-to-b from-[#4ACEF4]/60 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#4ACEF4]/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════
          CONTENT
      ══════════════════════════════════ */}
      <main className="flex-grow pb-20 px-4">
        <div className="max-w-5xl mx-auto">

          {/* ─── TAB BAR ─── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mb-10"
          >
            <div className="relative flex gap-1 p-1.5 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
              {/* sliding pill */}
              <motion.div
                className="absolute top-1.5 h-[calc(100%-12px)] rounded-xl"
                style={{
                  background: "linear-gradient(135deg,#226F9E,#4ACEF4)",
                  boxShadow: "0 0 20px #4ACEF430",
                }}
                animate={{
                  left: activeTab === "qr" ? "6px" : "calc(50% + 2px)",
                  width: "calc(50% - 8px)",
                }}
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
              {[
                { id: "qr",    emoji: "📱", label: "QR Code" },
                { id: "links", emoji: "🔗", label: "All Links" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`relative z-10 px-7 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200
                    ${activeTab === t.id ? "text-white" : "text-gray-500 hover:text-gray-300"}`}
                >
                  {t.emoji}&nbsp; {t.label}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">

            {/* ════════════ QR TAB ════════════ */}
            {activeTab === "qr" && (
              <motion.div
                key="qr"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-6"
              >
                {/* ── QR Card ── */}
                <div className="relative rounded-3xl overflow-hidden border border-white/[0.07] bg-gradient-to-br from-[#141927] to-[#111620] p-8 sm:p-10 flex flex-col items-center">
                  <Orb className="w-64 h-64 -top-20 -right-20 bg-[#226F9E]/15 blur-3xl" />
                  <Orb className="w-48 h-48 -bottom-16 -left-16 bg-[#4ACEF4]/10 blur-3xl" />

                  {/* Brand mark */}
                  <div className="flex items-center gap-3 mb-8 self-start">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
                      style={{ background: "linear-gradient(135deg,#226F9E,#4ACEF4)", boxShadow: "0 0 24px #4ACEF430" }}
                    >
                      <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <p className="text-white font-black text-base leading-none tracking-tight">SolarEye</p>
                      <p className="text-[#4ACEF4] text-[10px] tracking-[0.2em] uppercase mt-0.5">Technologies</p>
                    </div>
                  </div>

                  {/* QR frame */}
                  <motion.div
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px #4ACEF435" }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="relative bg-white rounded-2xl p-4 shadow-2xl"
                    style={{ boxShadow: "0 0 30px #4ACEF420, 0 20px 60px #00000060" }}
                  >
                    {/* Corner brackets */}
                    {[
                      "top-0 left-0",
                      "top-0 right-0 rotate-90",
                      "bottom-0 right-0 rotate-180",
                      "bottom-0 left-0 -rotate-90",
                    ].map((cls, i) => (
                      <div key={i} className={`absolute ${cls} w-8 h-8 m-1`}>
                        <div className="absolute top-0 left-0 w-5 h-[3px] bg-[#226F9E] rounded-full" />
                        <div className="absolute top-0 left-0 h-5 w-[3px] bg-[#226F9E] rounded-full" />
                      </div>
                    ))}

                    <img
                      src={qrSrc(PAGE_URL, qrPx)}
                      alt="SolarEye QR Code — scan to visit contact page"
                      width={qrPx}
                      height={qrPx}
                      className="block rounded-xl"
                    />
                  </motion.div>

                  {/* URL badge */}
                  <div className="mt-5 flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.07]">
                    <Globe className="w-3.5 h-3.5 text-[#4ACEF4] shrink-0" />
                    <span className="text-gray-400 text-xs font-mono">{PAGE_URL}</span>
                  </div>

                  <p className="mt-3 text-gray-600 text-xs">
                    Point your camera at the QR code to open our contact page
                  </p>

                  {/* Action buttons */}
                  <div className="mt-7 flex gap-2.5 w-full">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      href={qrSrc(PAGE_URL, 600)}
                      download="SolarEye-QR.png"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-bold"
                      style={{ background: "linear-gradient(135deg,#226F9E,#4ACEF4)", boxShadow: "0 0 20px #226F9E50" }}
                    >
                      <Download size={14} strokeWidth={2.5} />
                      Download
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={copyLink}
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-white text-sm font-semibold bg-white/[0.06] border border-white/[0.10] hover:bg-white/[0.10] transition-colors"
                    >
                      {copied
                        ? <Check size={14} className="text-green-400" strokeWidth={2.5} />
                        : <Copy size={14} strokeWidth={2} />}
                      {copied ? "Copied!" : "Copy Link"}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={share}
                      aria-label="Share"
                      className="px-4 py-3 rounded-xl text-white bg-white/[0.06] border border-white/[0.10] hover:bg-white/[0.10] transition-colors"
                    >
                      <Share2 size={14} strokeWidth={2} />
                    </motion.button>
                  </div>
                </div>

                {/* ── Contact details ── */}
                <div className="relative rounded-3xl overflow-hidden border border-white/[0.07] bg-gradient-to-br from-[#141927] to-[#111620] p-8 sm:p-10 flex flex-col">
                  <Orb className="w-48 h-48 -top-12 -right-12 bg-[#4ACEF4]/08 blur-2xl" />

                  <div>
                    <motion.h2
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl font-black text-white mb-1 tracking-tight"
                    >
                      Contact Details
                    </motion.h2>
                    <p className="text-gray-500 text-sm mb-8">
                      Tap any item to call, email, or navigate directly.
                    </p>

                    <div className="space-y-3">
                      {CONTACTS.map((item, i) => (
                        <ContactRow key={item.label} item={item} index={i} />
                      ))}
                    </div>
                  </div>

                  {/* Office badges */}
                  <div className="mt-8 pt-6 border-t border-white/[0.06]">
                    <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-3">Also present in</p>
                    <div className="flex flex-wrap gap-2">
                      {["Germany 🇩🇪", "Qatar 🇶🇦", "Jordan 🇯🇴"].map((o) => (
                        <span
                          key={o}
                          className="px-3 py-1.5 rounded-lg text-xs text-gray-400 bg-white/[0.04] border border-white/[0.07]"
                        >
                          {o}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/[0.06] text-center">
                    <p className="text-gray-600 text-xs">AI-Powered Solar Inspection · Drone Diagnostics</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ════════════ LINKS TAB ════════════ */}
            {activeTab === "links" && (
              <motion.div
                key="links"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Social grid */}
                  <div className="relative rounded-3xl overflow-hidden border border-white/[0.07] bg-gradient-to-br from-[#141927] to-[#111620] p-8 sm:p-10">
                    <Orb className="w-48 h-48 -top-16 -left-16 bg-[#226F9E]/12 blur-3xl" />
                    <h2 className="text-xl font-black text-white mb-1 tracking-tight">Follow Us</h2>
                    <p className="text-gray-500 text-sm mb-7">Find SolarEye across every platform</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {SOCIALS.map((s, i) => (
                        <SocialCard key={s.id} social={s} index={i} />
                      ))}
                    </div>
                  </div>

                  {/* Contact + CTA */}
                  <div className="flex flex-col gap-6">
                    <div className="relative rounded-3xl overflow-hidden border border-white/[0.07] bg-gradient-to-br from-[#141927] to-[#111620] p-8 sm:p-10 flex-1">
                      <Orb className="w-40 h-40 -bottom-10 -right-10 bg-[#4ACEF4]/08 blur-2xl" />
                      <h2 className="text-xl font-black text-white mb-1 tracking-tight">Get in Touch</h2>
                      <p className="text-gray-500 text-sm mb-7">Reach us directly, no scan needed</p>
                      <div className="space-y-3">
                        {CONTACTS.map((item, i) => (
                          <ContactRow key={item.label} item={item} index={i} />
                        ))}
                      </div>
                    </div>

                    {/* Hours */}
                    <div className="relative rounded-3xl overflow-hidden border border-white/[0.07] bg-gradient-to-br from-[#141927] to-[#111620] p-7">
                      <div className="flex items-start gap-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: "linear-gradient(135deg,#226F9E33,#4ACEF433)" }}
                        >
                          <span className="text-[#4ACEF4] text-lg">🕐</span>
                        </div>
                        <div>
                          <p className="text-white font-bold text-sm mb-2">Business Hours</p>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            Mon – Fri: <span className="text-white">9 AM – 5 PM</span><br />
                            Saturday: <span className="text-white">10 AM – 2 PM</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ─── STATS ─── */}
          {/* <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i + 0.2 }}
                className="group relative rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03] hover:bg-white/[0.06] p-5 text-center transition-colors"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                     style={{ background: "radial-gradient(circle at 50% 0%,#4ACEF410,transparent 70%)" }} />
                <p
                  className="text-2xl sm:text-3xl font-black"
                  style={{
                    background: "linear-gradient(135deg,#4ACEF4,#226F9E)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {value}
                </p>
                <p className="text-gray-500 text-xs mt-1.5 leading-snug">{label}</p>
              </motion.div>
            ))}
          </motion.div> */}

          {/* ─── CTA BANNER ─── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8"
          >
            <div
              className="relative rounded-3xl overflow-hidden p-[1px]"
              style={{ background: "linear-gradient(135deg,#226F9E,#4ACEF4,#226F9E)" }}
            >
              <div className="relative rounded-3xl bg-gradient-to-br from-[#141927] to-[#0f1520] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
                <Orb className="w-72 h-72 -top-20 -left-20 bg-[#226F9E]/10 blur-3xl" />
                <Orb className="w-56 h-56 -bottom-16 -right-16 bg-[#4ACEF4]/08 blur-3xl" />

                <div className="relative z-10 text-center sm:text-left">
                  <div className="flex items-center gap-2 mb-3 justify-center sm:justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#4ACEF4] animate-pulse" />
                    <span className="text-[#4ACEF4] text-xs font-bold tracking-widest uppercase">
                      Free Consultation
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-2 tracking-tight">
                    Ready to maximize your solar investment?
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Book a free session with our AI drone inspection experts.
                  </p>
                </div>

                <motion.a
                  href="/contactus"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative z-10 shrink-0 flex items-center gap-2 px-8 py-4 rounded-2xl text-white font-black text-sm whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg,#226F9E,#4ACEF4)",
                    boxShadow: "0 0 30px #4ACEF440, 0 8px 32px #00000040",
                  }}
                >
                  Book Now
                  <ExternalLink size={15} strokeWidth={2.5} />
                </motion.a>
              </div>
            </div>
          </motion.div>

        </div>
      </main>

      <ShaheenFooter />
    </div>
  );
};

export default QRPage;
