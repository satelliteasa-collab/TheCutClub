import React, { useState } from 'react';
import { Page, SHOP_DATA } from '../types';
import { Phone, Clock, Leaf, Menu, X } from 'lucide-react';

interface Props {
  page: Page;
  setPage: (p: Page) => void;
}

export const ThemeOrganic: React.FC<Props> = ({ page, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#4A5D4F] font-serif">
      <div className="max-w-[1440px] mx-auto bg-[#FDFDFB] min-h-screen shadow-xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 bg-[#4A5D4F] text-[#F5F5F0] p-8 flex flex-col justify-between md:h-screen sticky top-0 z-50">
          <div className="flex flex-row md:flex-col justify-between items-center md:items-start">
            <div>
              <h1 className="text-2xl font-serif tracking-widest mb-2 cursor-pointer" onClick={() => { setPage(Page.TOP); setIsMenuOpen(false); }}>
                THE CUT CLUB
              </h1>
              <p className="text-xs opacity-70 mb-0 md:mb-12 font-sans tracking-widest">KASHIMA CITY</p>
            </div>
            {/* Mobile Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col gap-6 text-sm tracking-widest font-sans mt-8 md:mt-0 fade-in`}>
            <button onClick={() => { setPage(Page.TOP); setIsMenuOpen(false); }} className={`text-left hover:opacity-100 transition-opacity ${page === Page.TOP ? 'opacity-100 border-l-2 pl-4' : 'opacity-60'}`}>HOME</button>
            <button onClick={() => { setPage(Page.CONCEPT); setIsMenuOpen(false); }} className={`text-left hover:opacity-100 transition-opacity ${page === Page.CONCEPT ? 'opacity-100 border-l-2 pl-4' : 'opacity-60'}`}>CONCEPT</button>
            <button onClick={() => { setPage(Page.ACCESS); setIsMenuOpen(false); }} className={`text-left hover:opacity-100 transition-opacity ${page === Page.ACCESS ? 'opacity-100 border-l-2 pl-4' : 'opacity-60'}`}>ACCESS</button>
          </nav>
          
          <div className="hidden md:block text-xs opacity-50 font-sans">
            &copy; 2024 THE CUT CLUB
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-y-auto h-screen scroll-smooth">
          {page === Page.TOP && (
            <div className="fade-in">
              <div className="h-[60vh] relative overflow-hidden">
                <img src="https://ik.imagekit.io/Satelliteasa/floor2.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Salon Vibe" />
                <div className="absolute inset-0 bg-[#4A5D4F]/20" />
                <div className="absolute bottom-0 left-0 p-12 bg-white/80 backdrop-blur-sm rounded-tr-[50px]">
                  <p className="text-2xl font-serif italic mb-2">Refining your daily life.</p>
                  <p className="text-sm font-sans tracking-wide">心地よい空間で、最高の身だしなみを。</p>
                </div>
              </div>
              
              <div className="p-12 md:p-24 max-w-4xl mx-auto">
                <div className="text-center mb-20">
                  <Leaf className="mx-auto mb-6 text-[#8B9D83]" size={32} />
                  <h2 className="text-3xl mb-8 font-serif">Menu & Price</h2>
                  <div className="grid md:grid-cols-2 gap-8 text-left">
                    {SHOP_DATA.prices.map((item, i) => (
                      <div key={i} className="flex items-center justify-between border-b border-[#D8D8D0] pb-4">
                        <span className="font-sans text-lg">{item.label}</span>
                        <span className="font-serif text-xl">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 bg-[#F5F5F0] p-12 rounded-2xl">
                   <div>
                     <h3 className="font-serif text-xl mb-4 flex items-center gap-2"><Clock size={18}/> Business Hours</h3>
                     <p className="font-sans whitespace-pre-line">{SHOP_DATA.hours}</p>
                     <p className="font-sans text-sm mt-2 opacity-70">定休日: {SHOP_DATA.holidays}</p>
                   </div>
                   <div>
                     <h3 className="font-serif text-xl mb-4 flex items-center gap-2"><Phone size={18}/> Information</h3>
                     <p className="font-sans">予約制ではありません。直接ご来店ください。</p>
                     <p className="font-sans mt-2">駐車場完備</p>
                   </div>
                </div>
              </div>
            </div>
          )}

          {page === Page.CONCEPT && (
            <div className="p-12 md:p-24 max-w-5xl mx-auto fade-in">
              <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center text-[#2A3D2F]">Our Story</h2>
              
              <div className="space-y-24">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <img src="https://ik.imagekit.io/Satelliteasa/floor5_1.jpg" className="rounded-2xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-700" alt="Concept 1" />
                  <div>
                    <h3 className="text-2xl font-serif mb-6 text-[#8B9D83]">日常に溶け込む、<br/>上質な時間。</h3>
                    <p className="font-sans leading-loose text-justify opacity-80">
                      私たちは、ただ髪を切るだけの場所ではありません。
                      忙しい日々の中で、少しだけ肩の力を抜ける場所でありたい。
                      そんな想いから、THE CUT CLUBは生まれました。
                      リーズナブルでありながら、一切の妥協のない技術と、
                      清潔で落ち着いた空間をご提供します。
                    </p>
                  </div>
                </div>

                <div className="bg-white p-12 rounded-3xl shadow-sm border border-[#EAEAEA]">
                   <h3 className="text-center font-serif text-2xl mb-8">お客様の声</h3>
                   <div className="relative">
                     <span className="absolute -top-4 -left-4 text-6xl text-[#E0E0E0] font-serif">“</span>
                     <p className="text-center font-sans leading-relaxed text-lg px-8">
                       お店の雰囲気がとても良く、カット専門店とは思えないクオリティでした。
                       スタッフの方も親切で、要望を丁寧に聞いてくれました。
                       また必ず利用したい隠れ家的なサロンです。
                     </p>
                     <span className="absolute -bottom-8 -right-4 text-6xl text-[#E0E0E0] font-serif">”</span>
                   </div>
                </div>
              </div>
            </div>
          )}

          {page === Page.ACCESS && (
             <div className="h-full flex flex-col fade-in">
               <div className="h-2/3 w-full bg-[#E0E0E0] relative">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    src={`https://maps.google.com/maps?q=35.9713504,140.6652231&hl=ja&z=17&output=embed`}
                    allowFullScreen 
                  />
               </div>
               <div className="flex-1 bg-white p-12 flex flex-col md:flex-row items-center justify-center gap-12">
                 <div className="text-center md:text-left">
                   <h3 className="text-xl font-serif mb-2">THE CUT CLUB</h3>
                   <p className="font-sans text-sm opacity-60">{SHOP_DATA.address}</p>
                   <p className="font-sans text-sm opacity-60">〒{SHOP_DATA.zip}</p>
                 </div>
                 <div className="h-12 w-px bg-gray-200 hidden md:block"></div>
                 <a 
                   href="https://www.google.com/maps/place/THE+CUT+CLUB/@35.9713504,140.6652231,17z/data=!3m1!4b1!4m6!3m5!1s0x60225571c9ac7375:0x3137f7671a7c45d7!8m2!3d35.9713504!4d140.6652231!16s%2Fg%2F11jv81j0gc?entry=ttu&g_ep=EgoyMDI2MDIxNi4wIKXMDSoASAFQAw%3D%3D"
                   target="_blank"
                   rel="noreferrer"
                   className="bg-[#4A5D4F] text-white px-8 py-3 rounded-full font-sans text-sm hover:bg-[#3A4D3F] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                 >
                   Googleマップで開く
                 </a>
               </div>
             </div>
          )}
        </main>
      </div>
    </div>
  );
};