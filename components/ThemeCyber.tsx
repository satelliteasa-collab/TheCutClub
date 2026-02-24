import React, { useState } from 'react';
import { Page, SHOP_DATA } from '../types';
import { Menu, X, MapPin, ArrowRight } from 'lucide-react';

interface Props {
  page: Page;
  setPage: (p: Page) => void;
}

export const ThemeCyber: React.FC<Props> = ({ page, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNav = (p: Page) => {
    setPage(p);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-[#333] font-sans selection:bg-gray-200 selection:text-black">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm transition-all duration-300">
        <div className="flex justify-between items-center px-6 h-20 md:px-12">
          <h1 
            className="text-2xl font-serif tracking-widest cursor-pointer z-50" 
            onClick={() => handleNav(Page.TOP)}
          >
            THE CUT CLUB
          </h1>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 text-xs tracking-[0.2em] font-medium text-gray-500">
             <button onClick={() => setPage(Page.TOP)} className="hover:text-black transition-colors">HOME</button>
             <button onClick={() => setPage(Page.CONCEPT)} className="hover:text-black transition-colors">CONCEPT</button>
             <button onClick={() => setPage(Page.ACCESS)} className="hover:text-black transition-colors">ACCESS</button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-gray-800"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
         <nav className="flex flex-col gap-8 text-center">
           <button onClick={() => handleNav(Page.TOP)} className="text-xl font-serif tracking-widest hover:opacity-50 transition-opacity text-black">HOME</button>
           <button onClick={() => handleNav(Page.CONCEPT)} className="text-xl font-serif tracking-widest hover:opacity-50 transition-opacity text-black">CONCEPT</button>
           <button onClick={() => handleNav(Page.ACCESS)} className="text-xl font-serif tracking-widest hover:opacity-50 transition-opacity text-black">ACCESS</button>
         </nav>
      </div>

      <main className="pt-20">
        {page === Page.TOP && (
          <div className="fade-in">
            {/* Hero */}
            <section className="relative h-[calc(100vh-5rem)] w-full overflow-hidden">
               <img 
                 src="https://ik.imagekit.io/Satelliteasa/floor2.jpg" 
                 className="w-full h-full object-cover object-center grayscale-[20%] contrast-[0.9] brightness-110" 
                 alt="Salon Interior" 
               />
               <div className="absolute inset-0 bg-white/10"></div>
               <div className="absolute bottom-12 left-6 md:left-12 text-white drop-shadow-md">
                 <p className="text-xs tracking-[0.3em] mb-2 uppercase">Kashima City</p>
                 <h2 className="text-4xl md:text-6xl font-serif tracking-wide">
                   Simple &<br/>Sophisticated
                 </h2>
               </div>
            </section>

            {/* Menu */}
            <section className="bg-[#f9f9f9] py-24 px-6 md:px-12">
               <div className="max-w-4xl mx-auto text-center">
                 <h3 className="text-2xl font-serif tracking-widest mb-12">MENU</h3>
                 <div className="bg-white p-8 md:p-16 shadow-sm">
                    <div className="space-y-6">
                      {SHOP_DATA.prices.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-end border-b border-gray-100 pb-4">
                          <span className="text-sm md:text-base tracking-wide text-gray-600">{item.label}</span>
                          <span className="text-lg md:text-xl font-serif">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-8 text-[10px] text-gray-400 tracking-wide text-right">
                      ※すべて税込価格です
                    </p>
                 </div>
               </div>
            </section>

            {/* Info & Hours */}
            <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
               <div className="grid md:grid-cols-2 gap-12">
                  <div className="text-center md:text-left">
                     <h3 className="text-xl font-serif tracking-widest mb-6 border-b border-gray-200 pb-2">BUSINESS HOURS</h3>
                     <p className="text-lg font-serif mb-2">9:00〜19:00</p>
                     <p className="text-sm text-gray-500 mb-4">(最終受付18:45まで)</p>
                     <p className="text-sm font-medium">定休日: 毎週月曜日</p>
                  </div>
                  <div className="text-center md:text-left">
                     <h3 className="text-xl font-serif tracking-widest mb-6 border-b border-gray-200 pb-2">INFORMATION</h3>
                     <p className="text-base font-medium mb-4">予約制ではありません。<br/>直接ご来店ください。</p>
                     <p className="text-base font-medium">駐車場完備</p>
                  </div>
               </div>
            </section>
          </div>
        )}

        {page === Page.CONCEPT && (
          <div className="fade-in">
             <div className="h-[50vh] w-full relative">
                <img src="https://ik.imagekit.io/Satelliteasa/floor5_1.jpg" className="w-full h-full object-cover" alt="Concept" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                   <h2 className="text-white text-4xl font-serif tracking-[0.2em]">CONCEPT</h2>
                </div>
             </div>
             
             <div className="max-w-3xl mx-auto px-6 py-24 text-center">
                <h3 className="text-2xl font-serif mb-8 leading-relaxed">
                  洗練された日常を、<br/>
                  ここから。
                </h3>
                <p className="text-sm leading-loose text-gray-600 mb-12 text-justify md:text-center">
                  THE CUT CLUBは、無駄を削ぎ落としたシンプルな空間で、<br className="hidden md:block"/>
                  お客様一人ひとりのライフスタイルに寄り添うヘアスタイルをご提案します。<br/>
                  忙しい毎日の中で、ふと立ち止まり、自分自身を整える。<br/>
                  そんな特別な時間をお過ごしください。
                </p>
                <div className="w-12 h-[1px] bg-gray-300 mx-auto"></div>
             </div>
          </div>
        )}

        {page === Page.ACCESS && (
          <div className="fade-in">
             <div className="h-[60vh] w-full md:w-3/4 mx-auto relative">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%)' }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://maps.google.com/maps?q=35.9713504,140.6652231&hl=ja&z=17&output=embed`}>
                </iframe>
             </div>
             
             <div className="max-w-4xl mx-auto px-6 py-24">
                <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                   <div className="md:w-1/2">
                      <h3 className="text-2xl font-serif tracking-widest mb-8">SALON INFO</h3>
                      <div className="space-y-6 text-sm text-gray-600">
                         <div>
                           <p className="font-bold text-black mb-1">ADDRESS</p>
                           <p>〒{SHOP_DATA.zip}<br/>{SHOP_DATA.address}</p>
                         </div>
                         <div>
                           <p className="font-bold text-black mb-1">OPEN</p>
                           <p>{SHOP_DATA.hours}</p>
                         </div>
                         <div>
                           <p className="font-bold text-black mb-1">CLOSE</p>
                           <p>{SHOP_DATA.holidays}</p>
                         </div>
                         <div>
                           <p className="font-bold text-black mb-1">TEL</p>
                           <p>{SHOP_DATA.phone}</p>
                         </div>
                      </div>
                   </div>
                   
                   <div className="md:w-1/2 flex flex-col justify-center">
                      <a 
                        href="https://www.google.com/maps/place/THE+CUT+CLUB/@35.9713504,140.6652231,17z/data=!3m1!4b1!4m6!3m5!1s0x60225571c9ac7375:0x3137f7671a7c45d7!8m2!3d35.9713504!4d140.6652231!16s%2Fg%2F11jv81j0gc?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between border-b border-black pb-2 hover:opacity-60 transition-opacity"
                      >
                        <span className="font-serif tracking-widest">GOOGLE MAPS</span>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
                      </a>
                   </div>
                </div>
             </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 text-center">
        <p className="text-xs tracking-widest opacity-50">&copy; 2024 THE CUT CLUB. All Rights Reserved.</p>
      </footer>
    </div>
  );
};