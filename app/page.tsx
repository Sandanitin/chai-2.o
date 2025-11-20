
"use client";
export const dynamic = "force-dynamic";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Instagram, Utensils, Leaf, Coffee, Sandwich, Sprout, ShoppingCart } from "lucide-react";
import Menu from "@/components/Menu";
import Image from "next/image";
import Navbar from "@/components/Navbar";

/**
 * Chai Bisket — Single‑file Landing Page
 * Tech: Next.js + Tailwind + local UI + Framer Motion
 */

const heroBg = `
  radial-gradient(1200px 600px at 10% -10%, rgba(255, 214, 153, 0.35), transparent 60%),
  radial-gradient(1000px 500px at 90% 0%, rgba(189, 255, 200, 0.30), transparent 60%),
  linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75))
`;

const bananaLeafSvg = (
  <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="leafs" width="200" height="200" patternUnits="userSpaceOnUse">
        <path d="M20,100 C60,20 140,20 180,100 C140,180 60,180 20,100 Z" fill="none" stroke="#3BAA6B" strokeWidth="1.2" />
        <path d="M20,100 C60,60 140,60 180,100" fill="none" stroke="#74C69D" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#leafs)" />
  </svg>
);

const Section = ({ id, children, className = "" }: { id?: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`relative py-16 md:py-24 ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

// Local inline SVG artwork (data URIs) so no external requests are needed
const toDataUri = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
const art = {
  heroChai: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#fde68a' offset='0'/><stop stop-color='#a7f3d0' offset='1'/></linearGradient></defs>
    <rect fill='url(#g)' width='1200' height='900'/>
    <g fill='none' stroke='#059669' stroke-width='14'><rect x='280' y='240' rx='32' width='480' height='340'/><path d='M760 320 h80 a80 80 0 0 1 0 160 h-80'/></g>
    <g stroke='#10b981' stroke-width='6'><path d='M420 220 c40 -60 40 -60 0 -120'/><path d='M500 220 c40 -60 40 -60 0 -120'/><path d='M580 220 c40 -60 40 -60 0 -120'/></g>
    <text x='60' y='840' font-family='sans-serif' font-size='48' fill='#065f46'>Masala Chai</text>
  </svg>`),
  thumb1: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#fff7ed'/><circle cx='400' cy='320' r='180' fill='#fde68a' stroke='#f59e0b' stroke-width='10'/><ellipse cx='400' cy='360' rx='220' ry='60' fill='none' stroke='#16a34a' stroke-width='8'/></svg>`),
  thumb2: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#ecfeff'/><path d='M160 380 q240 -220 480 0' fill='#fcd34d' stroke='#f59e0b' stroke-width='10'/><path d='M160 380 q240 120 480 0' fill='#16a34a' opacity='0.25'/></svg>`),
  thumb3: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#f0fdf4'/><rect x='220' y='260' width='360' height='120' rx='60' fill='#fff' stroke='#10b981' stroke-width='8'/></svg>`),
  // Local images for menu items (Next.js public folder)
  iraniChai: "/images/iran%20chaai.png",
  biscuits: "/images/osimania%20biskets.png",
  biryani: "/images/Hyderabadi%20Biryani.jpg",
  bunMaska: "/images/Bun%20Maska.jpg",
  vadaPav: "/images/Vada%20Pav.jpg",
  chicken65: "/images/Chicken%2065.jpg",
  monuments: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'><rect width='1200' height='900' fill='#ecfeff'/><path d='M160 700 h240 v-200 h-240 z' fill='#a7f3d0'/><path d='M520 700 h200 v-240 l-100 -80 -100 80 z' fill='#fef3c7'/><path d='M820 700 h220 v-160 h-220 z' fill='#fde68a'/></svg>`),
  gallery: [
    "/images/iran chaai.png",
    "/images/osimania biskets.png",
    "/images/Hyderabadi Biryani.jpg",
    "/images/Bun Maska.jpg",
    "/images/Vada Pav.jpg",
    "/images/Chicken 65.jpg",
    "/images/iran chaai.png",
    "/images/osimania biskets.png",
  ],
};

const heroBanners = [
  { src: "/images/banner1.jpg", alt: "Signature chai and biscuits" },
  { src: "/images/banner2.jpg", alt: "Street food favourites" },
];

const Placeholder = ({ label = "Image" }: { label?: string }) => (
  <div className="w-full h-full grid place-items-center bg-gradient-to-br from-[#050302] via-[#120a07] to-[#050302] text-[#f5eddc]">
    <div className="text-center p-4">
      <div className="text-xs uppercase tracking-wide opacity-70">{label}</div>
      <div className="text-2xl font-extrabold">Chai Bisket</div>
    </div>
  </div>
);

const SafeImage = ({ src, alt, className = "", label }: { src: string, alt?: string, className?: string, label?: string }) => {
  const [broken, setBroken] = React.useState(false);
  return (
    <div className={className}>
      {!broken ? (
        <img
          src={src}
          alt={alt || ""}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover"
          onError={() => {
            console.error(`Image failed to load: ${src}`);
            setBroken(true);
          }}
        />
      ) : (
        <Placeholder label={label || alt} />
      )}
    </div>
  );
};
// --- Robust ContactForm (paste above the default export in app/page.tsx) ---
function ContactForm() {
  const [status, setStatus] = React.useState<"idle"|"sending"|"ok"|"error">("idle");
  const [errorMsg, setErrorMsg] = React.useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: any = {};
      try { data = await res.json(); } catch { /* ignore parse errors */ }

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      setStatus("ok");
      formEl.reset(); // clear fields on success
    } catch (err: any) {
      setErrorMsg(err?.message || "Unknown error");
      setStatus("error");
    }
  };

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <input name="name" className="border border-[#2d1a11] bg-[#050302] text-[#f5eddc] placeholder:text-[#f5eddc]/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c87534]" placeholder="Your name" required />
      <input name="email" type="email" className="border border-[#2d1a11] bg-[#050302] text-[#f5eddc] placeholder:text-[#f5eddc]/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c87534]" placeholder="Email address" required />
      <input name="phone" className="border border-[#2d1a11] bg-[#050302] text-[#f5eddc] placeholder:text-[#f5eddc]/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c87534]" placeholder="Phone number (optional)" />
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <textarea name="message" rows={4} className="border border-[#2d1a11] bg-[#050302] text-[#f5eddc] placeholder:text-[#f5eddc]/40 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c87534]" placeholder="Tell us about your event or question (e.g., party size, date, special requests)" required />
      <Button type="submit" disabled={status==="sending"}>
        {status==="sending" ? "Sending..." : "Send Message"}
      </Button>
      {status==="ok" && <div className="text-sm text-[#c87534] font-medium">Thanks! We’ve received your message and will get back to you shortly.</div>}
      {status==="error" && <div className="text-sm text-[#ff9b7a]">Something went wrong. Please try again. {errorMsg && <span className="opacity-70">({errorMsg})</span>}</div>}
    </form>
  );
}


export default function Page() {
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeBanner, setActiveBanner] = useState(0);

  // Get cart count from localStorage
  const getCartCount = () => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const cart = JSON.parse(savedCart);
          return cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0);
        } catch (e) {
          return 0;
        }
      }
    }
    return 0;
  };

  // Check login status
  const checkLoginStatus = () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user) {
        try {
          const userData = JSON.parse(user);
          setIsLoggedIn(true);
          setUserName(userData.name || '');
        } catch (e) {
          setIsLoggedIn(false);
          setUserName('');
        }
      } else {
        setIsLoggedIn(false);
        setUserName('');
      }
    }
  };

  // Update cart count and login status on component mount and when localStorage changes
  useEffect(() => {
    setIsClient(true);
    setCartCount(getCartCount());
    checkLoginStatus();
    const bannerInterval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % heroBanners.length);
    }, 3000);
    
    // Listen for storage changes (in case cart is updated in another tab)
    const handleStorageChange = () => {
      setCartCount(getCartCount());
      checkLoginStatus();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Listen for cart updates from Menu component
    const handleCartUpdate = () => {
      setCartCount(getCartCount());
    };
    
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    // Also check for changes periodically
    const interval = setInterval(() => {
      setCartCount(getCartCount());
      checkLoginStatus();
    }, 1000);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleCartUpdate);
      clearInterval(interval);
      clearInterval(bannerInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#050302] text-[#f5eddc]">
      {/* Use the Navbar component */}
      <Navbar cartCount={cartCount} />
      
      {/* HERO */}
      <Section id="home" className="relative overflow-hidden min-h-[650px] flex items-center py-20">
        <div className="absolute inset-0">
          {heroBanners.map((banner, index) => (
            <div
              key={banner.src}
              className={`absolute inset-0 transition-opacity duration-700 ${index === activeBanner ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/65 to-[#050302]/95" />
        </div>

        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-[#f5eddc]/80 bg-[#120a07]/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6 border border-[#f5eddc]/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f0a35c] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f0a35c]"></span>
              </span>
              Now serving in Cumming, GA
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-[#f5eddc] drop-shadow-[0_6px_25px_rgba(0,0,0,0.45)]">
              Biryani is an{" "}
              <span className="relative inline-block px-2">
                <span className="relative z-10 text-[#f0a35c]">emotion</span>
                <span className="absolute inset-x-0 bottom-1 h-[12px] bg-[#f0a35c]/20 -z-0"></span>
              </span>
              , chai is the{" "}
              <span className="relative inline-block px-2">
                <span className="relative z-10 text-[#d97a3a]">mood.</span>
                <span className="absolute inset-x-0 bottom-1 h-[12px] bg-[#d97a3a]/25 -z-0"></span>
              </span>
            </h1>

            <p className="mt-5 sm:mt-7 text-base sm:text-lg md:text-xl text-[#f5eddc]/85 max-w-2xl leading-relaxed">
              1920×650 stories of warmth, spice, and soulful nostalgia sliding every three seconds.
              From Irani chai to Osmania biscuits, we pour authentic Hyderabadi comfort into every cup and plate.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                className="py-5 sm:py-6 px-6 sm:px-8 text-base font-medium rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all duration-300"
                size="lg"
                asChild
              >
                <a href="#menu" className="flex items-center justify-center sm:justify-start gap-2">
                  <Utensils className="h-5 w-5" />
                  Explore Our Menu
                </a>
              </Button>
              <Button 
                variant="outline" 
                className="py-5 sm:py-6 px-6 sm:px-8 text-base font-medium rounded-xl transition-all duration-300"
                size="lg"
                asChild
              >
                <a href="#contact" className="flex items-center justify-center sm:justify-start gap-2">
                  <Phone className="h-5 w-5" />
                  Order Now
                </a>
              </Button>
            </div>

            <div className="mt-6">
              <Button 
                className="py-4 px-6 text-base font-medium rounded-xl shadow-lg bg-gradient-to-r from-[#f0a35c] to-[#d97a3a] hover:from-[#f5b97a] hover:to-[#e08a4a] transition-all duration-300 transform hover:scale-105"
                size="lg"
                asChild
              >
                <a href="#specials" className="flex items-center justify-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  Today's Special
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-[#f5eddc]/80">
              {[
                { label: "Freshly brewed chai", color: "#f0a35c" },
                { label: "Charcoal-fired kebabs", color: "#d97a3a" },
                { label: "Vegetarian favourites", color: "#f5b97a" },
              ].map((chip) => (
                <div key={chip.label} className="flex items-center gap-2 bg-[#120a07]/80 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm border border-[#f5eddc]/10">
                  <div className="h-2 w-2 rounded-full" style={{ backgroundColor: chip.color }}></div>
                  <span>{chip.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>

        {/* Scroll indicator - hidden on mobile */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-[#f5eddc]/40 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-[#f5eddc]/70 rounded-full animate-scroll"></div>
          </div>
        </div>

        <style jsx global>{`
          @keyframes scroll {
            0% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(10px); opacity: 0.5; }
            100% { transform: translateY(0); opacity: 1; }
          }
          .animate-scroll {
            animation: scroll 2s infinite;
          }
        `}</style>
      </Section>

      {/* MARQUEE - Hidden on mobile, visible on md screens and up */}
      <div className="hidden md:block relative overflow-hidden bg-[#120a07]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#120a07] via-transparent to-[#120a07] z-10"/>
        <div className="whitespace-nowrap animate-[marquee_20s_linear_infinite] py-3 text-sm font-medium text-[#f5eddc]/80 md:animate-[marquee_30s_linear_infinite]">
          <span className="mx-4 md:mx-8">Irani Chai</span>
          <span className="mx-4 md:mx-8">Osmania Biscuits</span>
          <span className="mx-4 md:mx-8">Hyderabadi Biryani</span>
          <span className="mx-4 md:mx-8">Samosa & Cutlets</span>
          <span className="mx-4 md:mx-8">Bun Maska</span>
          <span className="mx-4 md:mx-8">Vada Pav</span>
          <span className="mx-4 md:mx-8">Chicken 65</span>
          <span className="mx-4 md:mx-8">Kulfi & Falooda</span>
          
          {/* Duplicate items for seamless loop - hidden on mobile */}
          <span className="hidden md:inline-block mx-4 md:mx-8">Irani Chai</span>
          <span className="hidden md:inline-block mx-4 md:mx-8">Osmania Biscuits</span>
          <span className="hidden md:inline-block mx-4 md:mx-8">Hyderabadi Biryani</span>
          <span className="hidden md:inline-block mx-4 md:mx-8">Samosa & Cutlets</span>
          <span className="hidden md:inline-block mx-4 md:mx-8">Bun Maska</span>
          <span className="hidden md:inline-block mx-4 md:mx-8">Vada Pav</span>
          <span className="hidden md:inline-block mx-4 md:mx-8">Chicken 65</span>
          <span className="hidden md:inline-block mx-4 md:mx-8">Kulfi & Falooda</span>
        </div>
      </div>

      {/* TODAY'S SPECIAL */}
      <Section id="specials" className="py-16 bg-[#0b0503]">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f5eddc] mb-4">Today's Special</h2>
            <p className="text-[#f5eddc]/80 max-w-2xl mx-auto">
              Discover our chef's special creations for the day, crafted with the finest ingredients and authentic flavors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Special Item 1 */}
            <div className="bg-[#120a07] rounded-2xl overflow-hidden border border-[#2d1a11] shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/Hyderabadi Biryani.jpg"
                  alt="Special Hyderabadi Biryani"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#f5eddc]">Hyderabadi Biryani</h3>
                  <span className="text-amber-200 font-bold">$12.99</span>
                </div>
                <p className="text-[#f5eddc]/80 mb-4">Authentic dum biryani with tender meat and fragrant basmati rice.</p>
                <Button className="w-full bg-gradient-to-r from-[#f0a35c] to-[#d97a3a] hover:from-[#f5b97a] hover:to-[#e08a4a]">
                  Add to Cart
                </Button>
              </div>
            </div>
            
            {/* Special Item 2 */}
            <div className="bg-[#120a07] rounded-2xl overflow-hidden border border-[#2d1a11] shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/iran chaai.png"
                  alt="Special Irani Chai"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#f5eddc]">Irani Chai</h3>
                  <span className="text-amber-200 font-bold">$3.99</span>
                </div>
                <p className="text-[#f5eddc]/80 mb-4">Traditional strong tea with spices, served with Osmania biscuits.</p>
                <Button className="w-full bg-gradient-to-r from-[#f0a35c] to-[#d97a3a] hover:from-[#f5b97a] hover:to-[#e08a4a]">
                  Add to Cart
                </Button>
              </div>
            </div>
            
            {/* Special Item 3 */}
            <div className="bg-[#120a07] rounded-2xl overflow-hidden border border-[#2d1a11] shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/Chicken 65.jpg"
                  alt="Special Chicken 65"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-[#f5eddc]">Chicken 65</h3>
                  <span className="text-amber-200 font-bold">$9.99</span>
                </div>
                <p className="text-[#f5eddc]/80 mb-4">Spicy deep-fried chicken with authentic South Indian spices.</p>
                <Button className="w-full bg-gradient-to-r from-[#f0a35c] to-[#d97a3a] hover:from-[#f5b97a] hover:to-[#e08a4a]">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MENU SECTION */}
      <Section id="menu" className="py-16 bg-[#0b0503]">
        <Menu onCartUpdate={() => setCartCount(getCartCount())} />
      </Section>

      {/* STORY */}
      <Section id="story" className="relative overflow-hidden bg-[#120a07]">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute top-1/4 -right-20 w-64 h-64 bg-[#c87534]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/2 -left-20 w-72 h-72 bg-[#f0a35c]/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        
        <Container>
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-[#f0a35c] text-sm font-semibold tracking-wider uppercase mb-2">
                Our Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#f5eddc] mb-4">Our Story</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#c87534] to-[#f0a35c] mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10 bg-[#1c0f08]/90 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-[#2d1a11]">
                  <p className="text-lg leading-relaxed text-[#f5eddc]/85 mb-8 relative">
                    <span className="absolute -left-6 -top-4 text-6xl text-[#f5eddc]/20 font-serif">"</span>
                    Born from Hyderabadi passion and Indian street‑food nostalgia, Chai Bisket blends the warmth of 
                    traditional <em className="font-medium text-[#f0a35c]">chai addas</em> with a fresh, contemporary vibe. 
                    Think banana leaves, coastal breezes, and the timeless silhouettes of Charminar, Gateway of India, 
                    and the Taj — all on your plate, in your city.
                    <span className="text-[#f5eddc]/20 font-serif text-6xl absolute -right-4 -bottom-8">"</span>
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { 
                        icon: <Leaf className="h-5 w-5 text-[#f0a35c]" />,
                        text: 'House‑blend masalas'
                      },
                      { 
                        icon: <Sprout className="h-5 w-5 text-[#f0a35c]" />,
                        text: 'Fresh, local ingredients'
                      },
                      { 
                        icon: <Utensils className="h-5 w-5 text-[#f0a35c]" />,
                        text: 'Vegetarian & non‑veg'
                      },
                      { 
                        icon: <Coffee className="h-5 w-5 text-[#f0a35c]" />,
                        text: 'Chai & biscuit pairings'
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-[#120a07] rounded-xl border border-[#2d1a11] hover:shadow-md transition-all hover:border-[#c87534]/40">
                        <div className="p-2 bg-[#1e120b] rounded-lg">
                          {item.icon}
                        </div>
                        <span className="text-[#f5eddc]/90 text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-[#c87534]/20 rounded-full"></div>
              </motion.div>

              <motion.div 
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10" />
                  <Image
                    src="/images/iran chaai.png"
                    alt="Chai Bisket experience"
                    fill
                    className="object-cover"
                    priority={isClient}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <div className="bg-[#120a07]/90 backdrop-blur-sm p-4 rounded-xl border border-[#2d1a11] shadow-lg">
                      <div className="text-xl font-bold text-[#f0a35c]">"Mass & class — same glass."</div>
                      <div className="text-sm text-[#f5eddc]/70 mt-1">— Hyderabadi proverb (our vibe)</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#f0a35c]/20 rounded-full -z-10"></div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>
      {/* LOCATION & HOURS */}
      <Section id="location" className="bg-[#0b0503]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-[#f5eddc]/80">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#f0a35c] mt-1" />
                  <div>
                    <div className="font-medium">911 Market Pl Blvd, Suite L</div>
                    <div>Cumming, GA 30041</div>
                    <a 
                      href="https://www.google.com/maps/dir//911+Market+Pl+Blvd+%23L,+Cumming,+GA+30041" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#f0a35c] hover:underline text-sm inline-flex items-center gap-1 mt-1"
                    >
                      <span>Get Directions</span>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-[#f0a35c] mt-1" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div>Mon–Thu: 11:00 AM – 9:30 PM</div>
                    <div>Fri–Sat: 11:00 AM – 10:30 PM</div>
                    <div>Sun: 11:00 AM – 9:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[#f0a35c] mt-1" />
                  <div>
                    <div className="font-medium">Call Us</div>
                    <a href="tel:+17705550123" className="hover:underline">(770) 555-0123</a>
                  </div>
                </div>
                <div className="pt-6 flex flex-wrap gap-4 sm:gap-5 justify-center sm:justify-start">
                  <a 
                    href="#menu" 
                    className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-[#120a06] bg-[#c87534] rounded-lg shadow-md hover:bg-[#d8843d] hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    View Our Menu
                  </a>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium text-[#f5eddc] bg-transparent border-2 border-[#2d1a11] rounded-lg shadow-sm hover:border-[#c87534] hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    Catering Inquiries
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <div className="rounded-3xl overflow-hidden shadow-xl h-full">
              <div className="relative h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.125603227977!2d-84.2151689243235!3d34.18057607322581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59f6c9bafb7b9%3A0x8c5f6b6b6b6b6b6b6!2s911%20Market%20Pl%20Blvd%20%23L%2C%20Cumming%2C%20GA%2030041!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chai Bisket Location"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" className="bg-[#120a07]">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Moments & Mood</h2>
            <p className="mt-3 text-[#f5eddc]/70">Swipe through the vibe — tag us <span className="font-semibold text-[#f0a35c]">@chaibisket_eats</span> on Instagram to get featured!</p>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {art.gallery.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl">
                <SafeImage
                  src={src}
                  alt={`Chai Bisket gallery ${i+1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" className="border-[#f5eddc]/40">
              <a href="https://instagram.com/chaibisket_eats" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Instagram className="mr-2 h-4 w-4"/>Follow @chaibisket_eats
              </a>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Floating Catering Button - Mobile Only */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <a 
          href="#contact"
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#c87534] to-[#8a4b24] text-[#120a06] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          aria-label="Get a Catering Quote"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </a>
      </div>

      {/* CONTACT / CATERING */}
      <Section id="contact" className="bg-[#0b0503] pt-20 lg:pt-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>Contact & Catering</CardTitle>
              </CardHeader>
              <CardContent>

                <ContactForm />
              </CardContent>
            </Card>
            <div className="bg-gradient-to-br from-[#2b160d] to-[#5a2d1a] text-[#f5eddc] rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#f5eddc]/10 rounded-full"/>
              <h3 className="text-2xl font-semibold">Hosting a Party?</h3>
              <p className="mt-3 text-[#f5eddc]/80">From chai counters to biryani bars — we cater birthdays, office events, and desi celebrations.</p>
              <ul className="mt-4 space-y-2 text-sm text-[#f5eddc]/90">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#f5eddc]"></div> Customizable menus</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#f5eddc]"></div> Bulk chai, biscuits & snacks</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#f5eddc]"></div> On‑site live stations</li>
              </ul>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold text-center text-[#120a06] bg-gradient-to-r from-[#f0a35c] to-[#c87534] hover:from-[#f5b97a] hover:to-[#d8843d] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-95 w-full sm:w-auto"
              >
                Get a Catering Quote
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* FOOTER */}
      <footer className="bg-[#120a07] text-[#f5eddc] border-t border-[#2d1a11]">
        <Container className="py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-semibold">Chai Bisket LLC</div>
            <div className="text-[#f5eddc]/70 text-sm">an Indian eatery</div>
            <p className="mt-3 text-[#f5eddc]/70 text-sm max-w-sm">
              Light, emotional, and full of passion & food — welcome to your new chai adda in Cumming.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2 text-[#f5eddc]/70 text-sm">
              <li><a href="#menu" className="hover:text-[#ffd9a0]">Menu</a></li>
              <li><a href="#story" className="hover:text-[#ffd9a0]">Our Story</a></li>
              <li><a href="#location" className="hover:text-[#ffd9a0]">Location & Hours</a></li>
              <li><a href="#contact" className="hover:text-[#ffd9a0]">Catering</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Find Us</div>
            <div className="text-sm text-[#f5eddc]/70 flex items-start gap-2"><MapPin className="h-4 w-4 mt-1"/> 911 Market Pl Blvd, Suite L, Cumming, GA 30041</div>
            <div className="text-sm text-[#f5eddc]/70 mt-2">Phone: (770) 555‑0123</div>
            <a href="https://instagram.com/chaibisket_eats" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-[#f5eddc] hover:text-[#ffd9a0]">
              <Instagram className="h-4 w-4"/> Follow on Instagram
            </a>
          </div>
        </Container>
        <div className="border-t border-[#2d1a11]">
          <Container className="py-4 text-xs text-[#f5eddc]/60 flex flex-wrap items-center justify-between">
            <span>© {new Date().getFullYear()} Chai Bisket LLC. All rights reserved.</span>
            <span>Made with ❤ chai & biscuits.</span>
          </Container>
        </div>
      </footer>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes marquee { 
          0% { transform: translateX(0); } 
          100% { transform: translateX(-50%); } 
        }
      `}</style>
    </div>
  );
}

export const runtime = "nodejs";
export const preferredRegion = "auto";
