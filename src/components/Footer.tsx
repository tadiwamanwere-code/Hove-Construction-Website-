import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import logo from '../assets/images/hove-logo-400.png';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#07080A] text-white border-t border-white/5 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-5 space-y-6">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <img
                src={logo}
                alt="Hove Construction"
                width={400}
                height={228}
                className="h-14 w-auto transition-all duration-300 group-hover:brightness-110"
              />
            </button>
            <p className="text-xs md:text-sm font-sans text-gray-400 font-light leading-relaxed max-w-sm">
              Precast concrete panel construction across Zimbabwe. Wall panels, roofing, slabs and paving &mdash; built on site, to spec, in weeks rather than months.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase block">
              QUICK SECTIONS
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              {[
                { id: 'about', label: 'ABOUT US' },
                { id: 'services', label: 'CAPABILITIES' },
                { id: 'projects', label: 'CASE STUDIES' },
                { id: 'process', label: 'THE LIFECYCLE' },
                { id: 'testimonials', label: 'CLIENT REVIEWS' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer uppercase"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] font-mono text-gray-500 tracking-widest uppercase block">
              DIGITAL NETWORKS
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={CONTACT_INFO.socials.archdaily}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1 group"
                >
                  ARCHDAILY PROFILE
                  <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-orange-500 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1 group"
                >
                  LINKEDIN COMPANY
                  <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-orange-500 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={CONTACT_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors flex items-center gap-1 group"
                >
                  INSTAGRAM GALLERY
                  <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-orange-500 transition-colors" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-[10px] font-mono text-gray-500">
          <div>
            <p>© {new Date().getFullYear()} HOVE CONSTRUCTION. ALL RIGHTS RESERVED.</p>
            <p className="mt-1 text-gray-600">EST. 2010. CERTIFIED LICENSED CONTRACTOR #76428-A.</p>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 px-3 py-2 border border-white/5 hover:border-orange-500 hover:text-orange-500 transition-colors group cursor-pointer"
            aria-label="Scroll back to top"
          >
            BACK TO SUMMIT
            <ArrowUp className="w-3.5 h-3.5 text-gray-500 group-hover:text-orange-500 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>

      </div>
    </footer>
  );
}
