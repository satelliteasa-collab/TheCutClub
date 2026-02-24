import React, { useState } from 'react';
import { Page, SHOP_DATA } from '../types';
import { MapPin, ArrowRight, Menu, X } from 'lucide-react';

interface Props {
  page: Page;
  setPage: (p: Page) => void;
}

export const ThemeIndustrial: React.FC<Props> = ({ page, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-200 selection:text-slate-900">
      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <h1 
            className="text-xl font-bold tracking-tighter cursor-pointer hover:opacity-60 transition-opacity" 
            onClick={() => { setPage(Page.TOP); setIsMenuOpen(false); }}
          >
            THE CUT CLUB
          </h1>
          <div className="hidden md:flex gap-8 text-xs font-medium tracking-widest uppercase">
            <button onClick={() => setPage(Page.TOP)} className={`hover:text-slate-400 transition-colors ${page === Page.TOP ? 'border-b border-black pb-1' : ''}`}>Top</button>
            <button onClick={() => setPage(Page.CONCEPT)} className={`hover:text-slate-400 transition-colors ${page === Page.CONCEPT ? 'border-b border-black pb-1' : ''}`}>Concept</button>
            <button onClick={() => setPage(Page.ACCESS)} className={`hover:text-slate-400 transition-colors ${page === Page.ACCESS ? 'border-b border-black pb-1' : ''}`}>Access</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 py-8 px-6 flex flex-col gap-6 text-center text-xs font-medium tracking-widest uppercase fade-in">
             <button onClick={() => { setPage(Page.TOP); setIsMenuOpen(false); }} className={`hover:text-slate-400 transition-colors ${page === Page.TOP ? 'text-black' : 'text-slate-500'}`}>Top</button>
             <button onClick={() => { setPage(Page.CONCEPT); setIsMenuOpen(false); }} className={`hover:text-slate-400 transition-colors ${page === Page.CONCEPT ? 'text-black' : 'text-slate-500'}`}>Concept</button>
             <button onClick={() => { setPage(Page.ACCESS); setIsMenuOpen(false); }} className={`hover:text-slate-400 transition-colors ${page === Page.ACCESS ? 'text-black' : 'text-slate-500'}`}>Access</button>
          </div>
        )}
      </nav>

      {/* Content Area */}
      <main className="pt-20">
        {page === Page.TOP && (
          <div className="fade-in">
            {/* Hero */}
            <section className="h-[80vh] w-full relative flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-slate-50">
                 <img src="https://ik.imagekit.io/Satelliteasa/floor2.jpg" className="w-full h-full object-cover opacity-80 grayscale contrast-125" alt="Clean Cut" />
               </div>
               <div className="relative z-10 text-center space-y-6 max-w-2xl px-6">
                 <p className="text-xs font-bold tracking-[0.3em] uppercase text-white bg-black inline-block px-3 py-1">Kashima City</p>
                 <h2 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-white mix-blend-difference">
                   SMART<br/>STYLE.
                 </h2>
                 <p className="text-white mix-blend-difference font-medium tracking-wide">
                   日常を、もっとスマートに。<br/>洗練されたカットを、リーズナブルに。
                 </p>
               </div>
            </section>

            {/* Price & Info Grid */}
            <section className="max-w-7xl mx-auto px-6 py-24">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                <div className="space-y-12">
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight mb-8">MENU</h3>
                    <div className="space-y-6">
                      {SHOP_DATA.prices.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center border-b border-slate-200 pb-4">
                          <span className="text-lg font-medium text-slate-600">{item.label}</span>
                          <span className="text-xl font-bold">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <p className="mt-6 text-xs text-slate-400">※税込価格 / シャンプー・ブローなし</p>
                  </div>

                  <div className="bg-slate-50 p-8 rounded-xl">
                      <h3 className="text-lg font-bold mb-4">INFORMATION</h3>
                      <p className="text-slate-700 font-medium">予約制ではありません。直接ご来店ください。</p>
                      <p className="text-slate-700 font-medium mt-2">駐車場完備</p>
                   </div>
                </div>

                <div className="space-y-12">
                   <div className="bg-slate-50 p-8 rounded-xl">
                      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">HOURS</h3>
                      <p className="text-3xl font-light tracking-tight">{SHOP_DATA.hours}</p>
                      <p className="mt-2 text-slate-500 font-medium">定休日: {SHOP_DATA.holidays}</p>
                   </div>

                   <div className="bg-slate-900 text-white p-8 rounded-xl cursor-pointer hover:bg-slate-800 transition-colors group" onClick={() => setPage(Page.ACCESS)}>
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="text-lg font-bold mb-1">LOCATION</h3>
                          <p className="text-sm opacity-70">{SHOP_DATA.address}</p>
                        </div>
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </div>
                   </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {page === Page.CONCEPT && (
          <div className="max-w-5xl mx-auto px-6 py-24 fade-in">
            <div className="flex flex-col gap-24">
              <div className="text-center max-w-2xl mx-auto">
                <span className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-4 block">Our Philosophy</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                  「整える」を、<br/>もっと身近な習慣へ。
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed text-justify md:text-center">
                  THE CUT CLUBは、従来のカット専門店のイメージを刷新します。
                  無駄を省いたミニマルな空間、確かな技術、そして心地よい時間。
                  髪を切るという行為を、単なるメンテナンスから、
                  自分を整えるポジティブな習慣へと変えていきます。
                </p>
              </div>

              <div className="w-full max-w-4xl mx-auto">
                 <img src="https://ik.imagekit.io/Satelliteasa/floor5_1.jpg" className="w-full h-[500px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" alt="Space" />
              </div>
            </div>
          </div>
        )}

        {page === Page.ACCESS && (
          <div className="h-[calc(100vh-80px)] w-full relative flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-slate-100">
               <iframe
                 width="100%"
                 height="100%"
                 style={{ border: 0, filter: 'grayscale(100%) contrast(1.1)' }}
                 loading="lazy"
                 allowFullScreen
                 referrerPolicy="no-referrer-when-downgrade"
                 src={`https://maps.google.com/maps?q=35.9713504,140.6652231&hl=ja&z=17&output=embed`}>
               </iframe>
            </div>
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-white p-12 md:p-24 flex flex-col justify-center">
               <div className="max-w-md">
                 <h2 className="text-3xl font-bold mb-12 tracking-tight">VISIT US</h2>
                 
                 <div className="space-y-8">
                   <div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Address</p>
                     <p className="text-xl font-medium">{SHOP_DATA.address}</p>
                     <p className="text-slate-500">〒{SHOP_DATA.zip}</p>
                   </div>
                   
                   <div>
                     <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Phone</p>
                     <p className="text-xl font-medium">{SHOP_DATA.phone}</p>
                   </div>

                   <a 
                     href="https://www.google.com/maps/place/THE+CUT+CLUB/@35.9713504,140.6652231,17z/data=!3m1!4b1!4m6!3m5!1s0x60225571c9ac7375:0x3137f7671a7c45d7!8m2!3d35.9713504!4d140.6652231!16s%2Fg%2F11jv81j0gc?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D"
                     target="_blank"
                     rel="noreferrer"
                     className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-slate-700 transition-colors mt-8 group"
                   >
                     <MapPin size={16} />
                     Open Google Maps
                     <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform"/>
                   </a>
                 </div>
               </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};