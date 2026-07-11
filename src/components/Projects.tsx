import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, X, Calendar, MapPin, DollarSign, User, Maximize2, Layers } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Before / After Slider States
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 - 100)
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Filter projects
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  // Handle Before/After slider movement
  const handleSliderMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleSliderMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleSliderMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleMouseUp);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);
  };

  // Prevent memory leaks
  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 bg-[#FAF9F6] text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="h-[1px] w-6 bg-orange-600"></span>
              <span className="text-xs font-mono tracking-[0.25em] text-orange-600 uppercase font-semibold">
                OUR WORKS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-gray-900">
              Architectural Case Studies
            </h2>
          </div>
          
          {/* Navigation Filter Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-gray-200 lg:border-none pb-4 lg:pb-0">
            {['all', 'residential', 'commercial', 'design-build', 'renovation'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'text-orange-600 font-bold border-b-2 border-orange-600'
                    : 'text-gray-500 hover:text-gray-900'
                }`}
                id={`filter-${cat}`}
              >
                {cat.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* SPECIAL INTERACTIVE CORNER: BEFORE / AFTER SLIDER */}
        <div className="mb-24 bg-white border border-gray-200 shadow-sm p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="px-2 py-0.5 bg-orange-50 text-orange-600 text-[9px] font-mono tracking-widest uppercase border border-orange-100">
                ACTIVE ENGINEERING HIGHLIGHT
              </span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-gray-900 tracking-tight">
                Borrowdale Villa Renovation Reveal
              </h3>
              <p className="text-xs md:text-sm text-gray-600 font-sans font-light leading-relaxed">
                We stabilized the structural cantilevers of a vintage shell in Borrowdale, Harare, before casting raw board-formed concrete and installing custom panoramic glazing. 
              </p>
              <div className="text-xs text-gray-500 font-mono space-y-1">
                <p>● Left: Raw Vintage Structure (Before)</p>
                <p>● Right: Luxury Villa Completed (After)</p>
              </div>
              <div className="pt-4">
                <span className="text-[10px] font-mono text-orange-600 animate-pulse tracking-widest">
                  ◀ DRAG CENTRAL SLIDER TO REVIEW BAR ▶
                </span>
              </div>
            </div>

            {/* Slider Container Component */}
            <div className="lg:col-span-8 flex justify-center">
              <div
                ref={sliderContainerRef}
                className="relative w-full aspect-[16/9] max-w-2xl overflow-hidden shadow-md select-none cursor-ew-resize group border border-gray-200"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                id="before-after-slider-container"
              >
                {/* After Image (Full Base) */}
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
                  alt="Borrowdale Villa Completed"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
                
                {/* After Text Label */}
                <div className="absolute right-4 bottom-4 z-20 px-3 py-1 bg-black/70 backdrop-blur-sm text-[10px] font-mono text-white tracking-widest uppercase">
                  AFTER: HOVE COMPLETED BUILD
                </div>

                {/* Before Image (Overlay clipped by percentage) */}
                <div
                  className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10"
                  style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&q=80&w=1200"
                    alt="Borrowdale Villa Before"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{ width: sliderContainerRef.current?.getBoundingClientRect().width }}
                    referrerPolicy="no-referrer"
                  />
                  {/* Before Text Label */}
                  <div className="absolute left-4 bottom-4 z-20 px-3 py-1 bg-black/70 backdrop-blur-sm text-[10px] font-mono text-white tracking-widest uppercase">
                    BEFORE: ORIGINAL STRUCTURE
                  </div>
                </div>

                {/* Slider bar line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-orange-600 hover:bg-orange-500 cursor-ew-resize z-30 shadow-[0_0_10px_rgba(234,88,12,0.5)]"
                  style={{ left: `${sliderPosition}%` }}
                >
                  {/* Slider Circle Controller Handle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-orange-600 hover:bg-orange-500 border-2 border-white flex items-center justify-center shadow-lg transition-transform duration-200 group-hover:scale-110">
                    <Sliders className="w-3.5 h-3.5 text-white rotate-90" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Portfolio Thumbnail Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="bg-white border border-gray-100 overflow-hidden group shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
                id={`project-thumbnail-${project.id}`}
              >
                {/* Thumbnail Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <img
                    src={project.afterImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-gray-900 transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-md">
                      <Maximize2 className="w-5 h-5 text-orange-600" />
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#FAF9F6]/90 backdrop-blur-sm border border-gray-200 text-[10px] font-mono tracking-widest text-gray-800 uppercase">
                    {project.categoryLabel}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs font-mono text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location}
                      </span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-3">
                      {project.title}
                    </h4>
                    <p className="text-sm text-gray-600 font-sans font-light leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-orange-600 font-medium">
                      VIEW FULL PROFILE
                    </span>
                    <span className="text-xs font-mono text-gray-400">
                      {project.area}
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* IMMERSIVE MODAL / LIGHTBOX DETAILS */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-10 overflow-y-auto"
              onClick={() => setSelectedProject(null)}
              id="project-lightbox-modal"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-white text-gray-900 max-w-4xl w-full border border-gray-200 overflow-hidden relative shadow-2xl my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-40 p-2 bg-black/60 hover:bg-orange-600 text-white rounded-full transition-colors cursor-pointer"
                  id="close-lightbox-btn"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Left Column (Hero Image) */}
                  <div className="md:col-span-7 relative bg-gray-100 min-h-[300px] md:h-full">
                    <img
                      src={selectedProject.afterImage}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover min-h-[300px] md:absolute md:inset-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/60 backdrop-blur-sm text-[10px] font-mono tracking-widest text-white uppercase">
                      COMPLETED VIEW
                    </div>
                  </div>

                  {/* Right Column (Specifications & Description) */}
                  <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-orange-600 uppercase font-bold">
                        {selectedProject.categoryLabel}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-gray-900 mt-1 mb-4">
                        {selectedProject.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 font-sans font-light leading-relaxed mb-6">
                        {selectedProject.description}
                      </p>

                      {/* Spec metrics grid */}
                      <div className="grid grid-cols-2 gap-4 border-y border-gray-100 py-6 mb-6">
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-gray-400 block">CLIENT</span>
                          <span className="text-xs font-sans text-gray-800 font-medium flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-gray-500" />
                            {selectedProject.client}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-gray-400 block">LOCATION</span>
                          <span className="text-xs font-sans text-gray-800 font-medium flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-gray-500" />
                            {selectedProject.location}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-gray-400 block">BUILD SCALE</span>
                          <span className="text-xs font-sans text-gray-800 font-medium flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-gray-500" />
                            {selectedProject.area}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-mono text-gray-400 block">BUDGET / YEAR</span>
                          <span className="text-xs font-sans text-gray-800 font-medium flex items-center gap-1.5">
                            <DollarSign className="w-3.5 h-3.5 text-gray-500" />
                            {selectedProject.budget || "CONFIDENTIAL"} / {selectedProject.year}
                          </span>
                        </div>
                      </div>

                      {/* Project Highlights checklist */}
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-gray-500 block mb-3 uppercase">
                          STRUCTURAL & FINISH DETAILS:
                        </span>
                        <ul className="space-y-2.5">
                          {selectedProject.highlights.map((highlight, index) => (
                            <li key={index} className="flex items-center gap-2.5">
                              <div className="w-1.5 h-1.5 bg-orange-600 rounded-none shrink-0" />
                              <span className="text-xs font-sans text-gray-700 font-light">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-gray-100 pt-6">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="w-full py-3 bg-gray-900 hover:bg-orange-600 text-white font-mono text-xs tracking-widest uppercase transition-colors cursor-pointer"
                        id="lightbox-close-cta"
                      >
                        CLOSE CASE STUDY
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
