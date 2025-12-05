import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Search, User, ShoppingBag, Send, 
  ChevronDown, Check, Star, ArrowRight, ShieldCheck,
  Thermometer, Truck
} from 'lucide-react';

const PepVidaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const products = [
    {
      id: "reset",
      name: "RESET",
      sub: "RETATRUTIDE 10MG",
      price: "$150 USD",
      desc: "Metabolic Optimization. Regulate appetite, optimize insulin sensitivity, and reset your biological baseline.",
      image: "media/Reset.png",
      bg: "bg-[#F4F6F5]"
    },
    {
      id: "attract",
      name: "ATTRACT",
      sub: "GHK-CU 50MG",
      price: "$100 USD",
      desc: "Beauty & Repair. Copper peptide complex for skin elasticity, collagen synthesis, and hair follicle rejuvenation.",
      image: "media/Attract.png",
      bg: "bg-[#F0F2F1]"
    },
    {
      id: "amplify",
      name: "AMPLIFY",
      sub: "TESAMORELIN 10MG",
      price: "$150 USD",
      desc: "Growth Support. Maximize natural growth hormone secretion for superior body composition.",
      image: "media/Amplify.png",
      bg: "bg-[#F4F6F5]"
    },
    {
      id: "heal",
      name: "HEAL",
      sub: "BPC 157 & TB-500 10MG",
      price: "$200 USD",
      desc: "Recovery Blend. Systemic repair stack to accelerate musculoskeletal recovery and reduce inflammation.",
      image: "media/Heal.png",
      bg: "bg-[#F0F2F1]"
    }
  ];

  return (
    <div className="min-h-screen font-sans text-[#1A1A1A] bg-[#FAF9F6] selection:bg-[#6B9080] selection:text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        /* Approximating 'The Seasons' with a similar elegant serif if local file not available, 
           or ensuring the class uses the correct font-family name if loaded globally */
        .font-serif { font-family: 'Times New Roman', serif; } 
        .font-sans { font-family: 'Montserrat', sans-serif; }
      `}</style>

      {/* 1. Top Announcement Bar (Optional/Common in e-comm) */}
      <div className="bg-[#1A1A1A] text-white text-[10px] font-bold tracking-widest text-center py-2 uppercase">
        Free Express Shipping on Orders Over $300
      </div>

      {/* 2. Header - Matches Reference Image Structure */}
      <nav className={`sticky top-0 z-50 bg-[#FAF9F6]/95 backdrop-blur-sm transition-all duration-300 border-b border-[#1A1A1A]/5 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex justify-between items-center h-full">
          
          {/* Left: Search, Shop, Learn */}
          <div className="hidden md:flex items-center gap-8">
             <button className="hover:opacity-60 transition-opacity">
               <Search size={18} strokeWidth={1.5} />
             </button>
             <div className="flex gap-8 text-xs font-semibold tracking-widest uppercase text-[#1A1A1A]">
               <button onClick={() => scrollToSection('shop')} className="hover:text-[#6B9080] transition-colors">Shop</button>
               <button onClick={() => scrollToSection('learn')} className="hover:text-[#6B9080] transition-colors">Learn</button>
             </div>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 375 374.999991" preserveAspectRatio="xMidYMid meet" className="w-10 h-10">
               <defs>
                 <clipPath id="71d2032c31">
                   <path d="M 50.75 53 L 324 53 L 324 322.050781 L 50.75 322.050781 Z M 50.75 53 " clipRule="nonzero"/>
                 </clipPath>
               </defs>
               <g clipPath="url(#71d2032c31)">
                 <path fill="#1A1A1A" d="M 230.75 98.960938 C 230.75 98.960938 272.394531 82.769531 293.96875 76.886719 C 300.640625 75.070312 317.640625 73.242188 317.640625 73.242188 C 317.640625 73.242188 306.539062 89.703125 297.402344 99.351562 C 294.707031 102.199219 283.898438 112.851562 281.160156 115.660156 C 279.710938 117.144531 278.511719 118.867188 276.945312 120.792969 C 278.234375 122.988281 279.234375 125.164062 280.644531 127.019531 C 286.132812 134.230469 291.832031 141.273438 297.292969 148.5 C 302.207031 155 307.125 161.511719 311.605469 168.308594 C 314.074219 172.054688 316.121094 176.230469 317.519531 180.492188 C 322.09375 194.390625 324.257812 208.6875 322.667969 223.339844 C 322.046875 229.03125 321.148438 234.734375 319.859375 240.308594 C 314.714844 262.703125 304.582031 322.105469 304.582031 322.105469 C 304.582031 322.105469 286.359375 309.5625 280.65625 302.433594 C 274.949219 295.300781 266.558594 284.605469 265.125 279.441406 C 262.339844 269.394531 257.179688 260.582031 250.683594 252.457031 C 245.214844 245.625 239.769531 238.75 234.71875 231.609375 C 232.136719 227.964844 229.875 223.886719 228.460938 219.667969 C 225.085938 209.652344 220.753906 175.5 220.753906 175.5 C 220.753906 175.5 210.945312 184.988281 201.824219 191.179688 C 192.707031 197.367188 180.53125 203.707031 170.105469 210.371094 C 159.441406 217.179688 147.976562 222.730469 136.898438 228.898438 C 134.015625 230.507812 131.050781 232.089844 128.515625 234.164062 C 112.144531 247.53125 95.894531 261.046875 79.570312 274.480469 C 76.140625 277.300781 68.335938 282.597656 68.335938 282.597656 L 50.789062 248.433594 C 50.789062 248.433594 80.089844 236.273438 92.285156 229.570312 C 96.785156 227.097656 101.113281 224.285156 105.730469 222.074219 C 113.003906 218.59375 118.878906 213.484375 123.761719 207.253906 C 136.261719 191.328125 148.625 175.300781 160.992188 159.277344 C 165.992188 152.800781 171.179688 146.535156 177.617188 141.410156 C 179.015625 140.296875 184.152344 136.042969 184.152344 136.042969 C 184.152344 136.042969 148.300781 125.664062 133.890625 119.425781 C 129.191406 117.390625 124.636719 114.917969 120.300781 112.1875 C 107.003906 103.8125 79.9375 87.746094 74.996094 82.183594 C 70.054688 76.617188 55.351562 60.238281 55.351562 60.238281 C 55.351562 60.238281 72.371094 57.109375 78.988281 57.199219 C 90.824219 57.363281 102.507812 55.988281 114.203125 54.640625 C 129.167969 52.917969 143.816406 54.304688 157.953125 59.378906 C 167.625 62.851562 176.789062 67.511719 185.199219 73.550781 C 192.554688 78.839844 199.863281 84.222656 207.539062 89.011719 C 214.683594 93.464844 230.75 98.960938 230.75 98.960938 Z M 230.75 98.960938 " fillOpacity="1" fillRule="evenodd"/>
               </g>
             </svg>
             <span className="text-2xl font-serif font-bold tracking-tight text-[#1A1A1A]">PEPVIDA</span>
          </div>

          {/* Right: Currency, Account, Cart, Telegram */}
          <div className="flex items-center gap-6">
             <div className="hidden lg:flex items-center gap-1 text-xs font-medium cursor-pointer hover:opacity-70">
                <img src="https://flagcdn.com/w20/ca.png" alt="CAD" className="w-4 h-auto shadow-sm"/>
                <span>English</span>
                <ChevronDown size={12}/>
             </div>
             
             <div className="hidden md:flex items-center gap-5">
               <User size={18} strokeWidth={1.5} className="cursor-pointer hover:opacity-60"/>
               <div className="relative cursor-pointer hover:opacity-60">
                 <ShoppingBag size={18} strokeWidth={1.5}/>
                 <span className="absolute -top-1 -right-1 text-[8px] font-bold bg-[#1A1A1A] text-white w-3 h-3 flex items-center justify-center rounded-full">0</span>
               </div>
             </div>

             <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest hover:text-[#6B9080] transition-colors">
               <Send size={14}/> Telegram
             </a>

             <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {isMenuOpen ? <X size={20}/> : <Menu size={20}/>}
             </button>
          </div>
        </div>
      </nav>

      {/* 3. Hero Section - Matches Reference (Blue Sky/Shadows/Pedestals) */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#EBF4F6]">
         {/* Background Shadows/Leaves Effect */}
         <div className="absolute inset-0 pointer-events-none">
            {/* Simulating the soft leaf shadows from the reference */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1508614999368-9260051292e5?auto=format&fit=crop&q=80')] bg-cover opacity-10 mix-blend-multiply filter blur-sm"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#EBF4F6] via-transparent to-[#EBF4F6]/20"></div>
         </div>

         <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Text Content */}
            <div className="order-2 lg:order-1 pt-10 lg:pt-0">
               <p className="text-xs font-bold tracking-[0.3em] text-[#1A1A1A]/60 uppercase mb-4 pl-1">Cyber Week Sale</p>
               
               <h1 className="text-6xl lg:text-9xl font-serif text-[#1A1A1A] leading-[0.9] mb-4">
                  30% OFF <br/>
                  <span className="font-sans font-bold">SITE WIDE</span>
               </h1>

               <div className="flex items-center gap-2 text-sm font-medium text-[#1A1A1A] mb-10">
                  <div className="bg-black text-white rounded-full p-0.5">
                    <Check size={12} strokeWidth={4} />
                  </div>
                  <span>Canada & US-wide shipping</span>
               </div>

               <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => scrollToSection('shop')}
                    className="bg-[#1A1A1A] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#6B9080] transition-all shadow-lg"
                  >
                     Shop Sale
                  </button>
                  <button 
                    onClick={() => scrollToSection('learn')}
                    className="bg-white border border-[#1A1A1A]/10 text-[#1A1A1A] px-10 py-4 text-xs font-bold uppercase tracking-widest hover:border-[#1A1A1A] transition-all"
                  >
                     View Protocols
                  </button>
               </div>
            </div>

            {/* Visual Composition - Single Large Product Image */}
            <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] flex items-center justify-center">
               {/* Main HEAL Product Image - Large and Centered */}
               <img 
                 src="media/pepvidaheal_fixed.png" 
                 alt="Heal" 
                 className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl rounded-2xl"
                 onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80"; }}
               />
            </div>
         </div>
      </section>

      {/* 4. "The Standard" - Bright Cyan Block (#42FFD4) */}
      <section id="learn" className="bg-[#42FFD4] text-[#1A1A1A] py-24 border-y border-[#1A1A1A]">
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-[#1A1A1A]/20">
               <h2 className="text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                  The <br/> Standard
               </h2>
               <p className="text-xl font-bold max-w-sm mt-8 md:mt-0 font-sans">
                  A new era of biological optimization. Tangible results backed by rigorous testing.
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { 
                    icon: ShieldCheck, 
                    title: "Clinical Purity", 
                    desc: "Sourced from GMP facilities with >99% purity verified by mass spectrometry." 
                  },
                  { 
                    icon: Star, 
                    title: "Luxury Minimal", 
                    desc: "Aesthetic design meets pharmaceutical grade science. No fillers." 
                  },
                  { 
                    icon: Truck, 
                    title: "Express Shipping", 
                    desc: "Canada-wide express delivery. Discreet, temperature-controlled packaging." 
                  }
               ].map((item, i) => (
                  <div key={i} className="border-2 border-[#1A1A1A] p-8 hover:bg-[#1A1A1A] hover:text-[#42FFD4] transition-all duration-300 group cursor-default h-full flex flex-col justify-between">
                     <div className="flex justify-between items-start mb-12">
                        <span className="text-5xl font-black opacity-20 group-hover:opacity-100 transition-opacity font-sans">0{i+1}</span>
                        <item.icon size={40} strokeWidth={1.5} className="group-hover:rotate-12 transition-transform duration-500"/>
                     </div>
                     <div>
                       <h3 className="text-2xl font-black uppercase mb-3 font-sans tracking-tight">{item.title}</h3>
                       <p className="font-medium text-sm leading-relaxed opacity-80 group-hover:opacity-100 font-sans">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Product Collection Grid */}
      <section id="shop" className="py-32 bg-white">
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-24">
               <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 block">Protocols</span>
               <h2 className="text-5xl lg:text-6xl font-serif text-[#1A1A1A]">Curated Collection</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
               {products.map((product) => (
                  <div key={product.id} className="group">
                     <div className={`${product.bg} aspect-[4/3] flex items-center justify-center relative overflow-hidden mb-6 rounded-2xl`}>
                        <img 
                           src={product.image} 
                           alt={product.name} 
                           className="w-[50%] object-contain drop-shadow-xl transform group-hover:scale-105 transition-transform duration-700 rounded-xl"
                           onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80"; }}
                        />
                        <div className="absolute top-4 right-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm rounded-md">
                           {product.sub}
                        </div>
                     </div>
                     <div className="flex justify-between items-start">
                        <div>
                           <h3 className="text-2xl font-serif mb-1">{product.name}</h3>
                           <p className="text-sm text-gray-500 max-w-sm font-sans leading-relaxed">{product.desc}</p>
                        </div>
                        <span className="text-lg font-bold font-sans">{product.price}</span>
                     </div>
                     <button className="mt-6 w-full border border-[#1A1A1A] py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors">
                        Add to Cart
                     </button>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Footer - Matches 'frame-34' Style */}
      <footer className="bg-[#FAF9F6] pt-24 pb-12 border-t border-[#1A1A1A]/5">
         <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-24">
            <div>
               <h3 className="text-5xl font-black uppercase tracking-tighter mb-8 font-sans">Stay In Touch</h3>
               <div className="flex border-b-2 border-[#1A1A1A] pb-2 max-w-md group focus-within:border-[#6B9080] transition-colors">
                  <input 
                     type="email" 
                     placeholder="ENTER EMAIL" 
                     className="bg-transparent w-full text-[#1A1A1A] placeholder-gray-400 focus:outline-none font-bold uppercase text-sm font-sans"
                  />
                  <button className="text-[#1A1A1A] font-black uppercase text-sm tracking-widest hover:text-[#6B9080] transition-colors font-sans">
                     Sub
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-12 text-sm font-sans">
               <div>
                  <h4 className="font-bold uppercase tracking-widest mb-6 text-xs text-gray-400">Menu</h4>
                  <ul className="space-y-4 font-bold text-gray-600">
                     <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-[#1A1A1A]">Home</button></li>
                     <li><button onClick={() => scrollToSection('shop')} className="hover:text-[#1A1A1A]">Products</button></li>
                     <li><button onClick={() => scrollToSection('learn')} className="hover:text-[#1A1A1A]">Lab Reports</button></li>
                     <li><button onClick={() => scrollToSection('learn')} className="hover:text-[#1A1A1A]">Blog</button></li>
                  </ul>
               </div>
               <div>
                  <h4 className="font-bold uppercase tracking-widest mb-6 text-xs text-gray-400">Legal</h4>
                  <ul className="space-y-4 font-bold text-gray-600">
                     <li><a href="#" className="hover:text-[#1A1A1A]">Terms & Conditions</a></li>
                     <li><a href="#" className="hover:text-[#1A1A1A]">Privacy Policy</a></li>
                     <li><a href="#" className="hover:text-[#1A1A1A]">Shipping Policy</a></li>
                     <li className="text-[#6B9080]">Research Use Only</li>
                  </ul>
               </div>
            </div>
         </div>

         <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-[#1A1A1A]/5 flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase tracking-widest font-sans">
            <p>© 2025 PEPVIDA. ALL RIGHTS RESERVED.</p>
            <p>MADE IN CANADA</p>
         </div>
      </footer>
    </div>
  );
};

export default PepVidaLanding;
