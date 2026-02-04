import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const customStyles = {
  root: {
    '--paper': '#f2eadd',
    '--card-bg': '#f9f4ef',
    '--ink': '#3a2626',
    '--ink-fade': '#6b4c4c',
    '--accent-green': '#5d876c',
    '--accent-pink': '#d48c94',
    '--accent-blue': '#6d8ea8',
    '--border-color': '#8fbc8f',
    '--line-width': '1.5px'
  }
};

const TattooPath = ({ d, style = {}, delay = 0, ...props }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <path
      d={d}
      fill="none"
      stroke="var(--ink)"
      strokeWidth="var(--line-width)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="1000"
      strokeDashoffset={animate ? 0 : 1000}
      style={{
        transition: 'stroke-dashoffset 2s ease-out',
        opacity: 1,
        ...style
      }}
      {...props}
    />
  );
};

const GeometryHeader = () => {
  return (
    <div className="w-[300px] h-[300px] mx-auto -mb-[60px] relative z-[1]" style={{
      background: 'radial-gradient(circle, var(--card-bg) 40%, transparent 70%)',
      borderRadius: '50%',
      animation: 'rotateSlow 80s linear infinite'
    }}>
      <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
        <TattooPath
          d="M100,20 C120,60 160,80 180,100 C160,120 120,140 100,180 C80,140 40,120 20,100 C40,80 80,60 100,20 Z"
          style={{ stroke: 'var(--accent-pink)', strokeWidth: '1px' }}
        />
        <TattooPath
          d="M100,40 C110,70 140,90 150,100 C140,110 110,130 100,160 C90,130 60,110 50,100 C60,90 90,70 100,40 Z"
          style={{ stroke: 'var(--accent-green)' }}
          delay={0.2}
        />
        <TattooPath d="M100,0 L100,200" delay={0.4} />
        <TattooPath d="M0,100 L200,100" delay={0.4} />
        <circle
          cx="100"
          cy="100"
          r="10"
          fill="var(--card-bg)"
          stroke="var(--ink)"
          strokeWidth="var(--line-width)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1000"
          strokeDashoffset="0"
          style={{
            opacity: 1,
            animation: 'drawInk 2s ease-out forwards 0.6s'
          }}
        />
        <circle
          cx="100"
          cy="100"
          r="3"
          fill="#3a2626"
          stroke="var(--ink)"
          strokeWidth="var(--line-width)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1000"
          strokeDashoffset="0"
          style={{
            opacity: 1,
            animation: 'drawInk 2s ease-out forwards 0.8s'
          }}
        />
      </svg>
    </div>
  );
};

const NodeGraphic = ({ isHovered }) => {
  return (
    <div
      className="w-[30px] h-[30px] border-2 border-[var(--ink)] relative transition-all duration-400"
      style={{
        transform: isHovered ? 'rotate(225deg) scale(1.3)' : 'rotate(45deg)',
        background: isHovered ? 'var(--accent-green)' : 'var(--accent-pink)',
        borderRadius: '50% 0 50% 0',
        boxShadow: 'inset 0 0 0 2px var(--card-bg)'
      }}
    >
      <div
        className="absolute top-[6px] left-[6px] right-[6px] bottom-[6px] border border-[var(--ink)]"
        style={{ borderRadius: '50% 0 50% 0' }}
      />
    </div>
  );
};

const ServiceItem = ({ title, description, bgColor, borderColor, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="p-[2.5rem] relative transition-all duration-500 rounded-[12px] border-4 border-double text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        backgroundColor: bgColor,
        borderColor: borderColor,
        boxShadow: isHovered
          ? '0 12px 25px rgba(58, 38, 38, 0.15)'
          : '0 6px 15px rgba(58, 38, 38, 0.1), inset 0 0 20px rgba(212, 140, 148, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute w-[10px] h-[10px] border border-[var(--ink)] transition-all duration-300"
        style={{
          top: '6px',
          left: '6px',
          borderRight: 'none',
          borderBottom: 'none'
        }}
      />
      <div
        className="absolute w-[10px] h-[10px] border border-[var(--ink)] transition-all duration-300"
        style={{
          bottom: '6px',
          right: '6px',
          borderLeft: 'none',
          borderTop: 'none'
        }}
      />
      <h3
        className="font-['Cinzel',serif] font-semibold uppercase tracking-[0.1em] text-[var(--ink)] text-[1.5rem] mb-4 inline-block pb-2 transition-all duration-300"
        style={{
          borderBottom: isHovered
            ? '2px solid var(--ink)'
            : '2px dotted var(--ink-fade)'
        }}
      >
        {title}
      </h3>
      <p className="font-['Cormorant_Garamond',serif] text-[1.15rem] leading-[1.7] text-[var(--ink-fade)] italic">
        {description}
      </p>
    </div>
  );
};

const SpineNode = ({ isHovered }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="flex items-center justify-center relative">
      {isVisible && <NodeGraphic isHovered={isHovered} />}
    </div>
  );
};

const FooterGeometry = () => {
  return (
    <div className="w-full h-[200px] mt-16 relative flex justify-center opacity-70">
      <svg viewBox="0 0 100 200" width="100" height="200" style={{ transform: 'rotate(180deg)' }}>
        <TattooPath
          d="M50,10 C60,40 80,50 90,60 C80,70 60,80 50,110 C40,80 20,70 10,60 C20,50 40,40 50,10 Z"
          style={{ stroke: 'var(--accent-green)' }}
        />
        <TattooPath d="M50,0 L50,150" />
        <circle cx="50" cy="160" r="2" fill="#3a2626" stroke="var(--ink)" strokeWidth="var(--line-width)" />
      </svg>
    </div>
  );
};

const FloatingAccent = ({ style, children }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const speed = parseFloat(style.left || style.right || 0) > 50 ? 40 : 20;
      setPosition({ x: x * speed, y: y * speed });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [style.left, style.right]);

  return (
    <svg
      className="absolute opacity-15 pointer-events-none"
      style={{
        ...style,
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s ease-out'
      }}
      viewBox="0 0 100 200"
    >
      {children}
    </svg>
  );
};

const HomePage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const services = [
    {
      title: 'Tarot Readings',
      description: 'Illuminating the present moment through ancient archetypes. A mirrored reflection of your current energetic trajectory.',
      bgColor: '#f7eff0',
      borderColor: 'var(--accent-pink)'
    },
    {
      title: 'Quantum Healing',
      description: 'Vibrational frequency alignment transcending space and time. Address the root cause in the subtle body.',
      bgColor: '#f0f4f2',
      borderColor: 'var(--accent-green)'
    },
    {
      title: 'TAT Therapy',
      description: 'Tapas Acupressure Technique. A gentle fusion of attention and touch to dissolve past traumas and limiting beliefs.',
      bgColor: '#eff3f7',
      borderColor: 'var(--accent-blue)'
    },
    {
      title: 'Crystal Healing',
      description: 'Mineral kingdom resonance therapy. Stones placed on meridian points to restore equilibrium and flow.',
      bgColor: '#f7eff0',
      borderColor: 'var(--accent-pink)'
    },
    {
      title: 'Plant Medicine',
      description: (
        <>
          Focused on integration and education. We provide preparation and aftermath guidance for your journey.{' '}
          <br />
          <em style={{ fontSize: '0.9em', opacity: 0.8 }}>*Disclaimers applied. No medical claims.</em>
        </>
      ),
      bgColor: '#f0f4f2',
      borderColor: 'var(--accent-green)'
    },
    {
      title: '1:1 Life Coaching',
      description: 'Strategic partnership to bridge the gap between where you are and where you are destined to be.',
      bgColor: '#eff3f7',
      borderColor: 'var(--accent-blue)'
    }
  ];

  return (
    <div className="relative">
      <div
        className="fixed top-0 left-1/2 w-[3px] h-screen z-0 opacity-60"
        style={{
          backgroundImage: 'linear-gradient(to bottom, var(--accent-green) 50%, transparent 50%)',
          backgroundSize: '2px 20px',
          borderLeft: '1px solid rgba(255,255,255,0.5)',
          borderRight: '1px solid rgba(255,255,255,0.5)',
          transform: 'translateX(-50%)'
        }}
      />

      <div className="max-w-[1200px] mx-auto relative px-8 py-16 flex flex-col items-center">
        <GeometryHeader />

        <h1 className="font-['Cinzel',serif] font-semibold uppercase tracking-[0.1em] text-center text-[var(--ink)] text-[3.5rem] mb-4 relative z-[2]"
          style={{ textShadow: '2px 2px 0px rgba(212, 140, 148, 0.2)' }}>
          <span style={{ fontSize: '1.5rem', verticalAlign: 'middle', color: 'var(--accent-green)', margin: '0 15px' }}>❧</span>
          Sacred Alignment
          <span style={{ fontSize: '1.5rem', verticalAlign: 'middle', color: 'var(--accent-green)', margin: '0 15px' }}>❧</span>
        </h1>

        <div
          className="text-center text-[1.1rem] tracking-[0.2em] text-[var(--accent-green)] mb-16 uppercase font-semibold border-t border-b border-[var(--accent-pink)] inline-block py-2 px-8 relative left-1/2 bg-[var(--card-bg)] rounded-[50px]"
          style={{ transform: 'translateX(-50%)' }}
        >
          Curated Holistic Offerings
        </div>

        <div className="grid grid-cols-[1fr_80px_1fr] gap-y-12 w-full max-w-[1050px] relative z-[2] mt-16">
          {services.map((service, index) => {
            const isLeft = index % 2 === 0;
            const rowIndex = Math.floor(index / 2);

            return (
              <React.Fragment key={index}>
                {isLeft ? (
                  <>
                    <div
                      className="mr-4"
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <ServiceItem
                        title={service.title}
                        description={service.description}
                        bgColor={service.bgColor}
                        borderColor={service.borderColor}
                        index={index}
                      />
                    </div>
                    <SpineNode isHovered={hoveredService === index || hoveredService === index + 1} />
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <SpineNode isHovered={hoveredService === index || hoveredService === index - 1} />
                    <div
                      className="ml-4"
                      onMouseEnter={() => setHoveredService(index)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <ServiceItem
                        title={service.title}
                        description={service.description}
                        bgColor={service.bgColor}
                        borderColor={service.borderColor}
                        index={index}
                      />
                    </div>
                  </>
                )}
              </React.Fragment>
            );
          })}

          <div className="col-span-3 text-center mt-24 relative">
            <button
              className="bg-[var(--ink)] text-[var(--paper)] border-4 border-double border-[var(--paper)] font-['Cinzel',serif] text-[1.2rem] tracking-[0.2em] py-6 px-20 cursor-pointer relative transition-all duration-300 uppercase rounded"
              style={{
                boxShadow: '0 0 0 2px var(--ink)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--paper)';
                e.currentTarget.style.color = 'var(--ink)';
                e.currentTarget.style.borderColor = 'var(--ink)';
                e.currentTarget.style.boxShadow = '0 0 0 4px var(--accent-green)';
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--ink)';
                e.currentTarget.style.color = 'var(--paper)';
                e.currentTarget.style.borderColor = 'var(--paper)';
                e.currentTarget.style.boxShadow = '0 0 0 2px var(--ink)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onClick={() => setShowBookingModal(true)}
            >
              Book Consultation
            </button>
          </div>
        </div>

        <FooterGeometry />
      </div>

      <FloatingAccent style={{ top: '15%', left: '2%', width: '200px', height: '350px' }}>
        <TattooPath d="M50,0 Q100,50 50,100 Q0,150 50,200" style={{ opacity: 0.3, stroke: 'var(--accent-pink)' }} />
        <TattooPath d="M50,0 Q0,50 50,100 Q100,150 50,200" style={{ opacity: 0.3, stroke: 'var(--accent-green)' }} />
      </FloatingAccent>

      <FloatingAccent style={{ top: '55%', right: '2%', width: '200px', height: '350px' }}>
        <TattooPath d="M50,0 L50,200" style={{ opacity: 0.3, stroke: 'var(--accent-blue)' }} />
        <rect
          x="25"
          y="75"
          width="50"
          height="50"
          transform="rotate(45 50 100)"
          fill="none"
          stroke="var(--accent-pink)"
          strokeWidth="var(--line-width)"
          style={{ opacity: 0.3 }}
        />
      </FloatingAccent>

      {showBookingModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowBookingModal(false)}
        >
          <div
            className="bg-[var(--card-bg)] p-12 rounded-lg max-w-md w-full border-4 border-double border-[var(--accent-green)] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-[var(--ink)] text-2xl"
              onClick={() => setShowBookingModal(false)}
            >
              ×
            </button>
            <h2 className="font-['Cinzel',serif] text-2xl uppercase tracking-[0.1em] text-center mb-6 text-[var(--ink)]">
              Book Your Consultation
            </h2>
            <p className="font-['Cormorant_Garamond',serif] text-center text-[var(--ink-fade)] italic mb-6">
              Thank you for your interest. Please fill out the form below and we will contact you shortly.
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border-2 border-[var(--accent-green)] rounded bg-white font-['Cormorant_Garamond',serif]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border-2 border-[var(--accent-green)] rounded bg-white font-['Cormorant_Garamond',serif]"
              />
              <textarea
                placeholder="What service are you interested in?"
                rows={4}
                className="w-full p-3 border-2 border-[var(--accent-green)] rounded bg-white font-['Cormorant_Garamond',serif]"
              />
              <button
                type="submit"
                className="w-full bg-[var(--ink)] text-[var(--paper)] py-3 rounded font-['Cinzel',serif] uppercase tracking-[0.15em] hover:bg-[var(--accent-green)] transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap');
      
      @keyframes drawInk {
        from { stroke-dasharray: 1000; stroke-dashoffset: 1000; opacity: 1; }
        to { stroke-dasharray: 1000; stroke-dashoffset: 0; opacity: 1; }
      }
      
      @keyframes rotateSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      body {
        overflow-x: hidden;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <Router basename="/">
      <div
        style={customStyles.root}
        className="min-h-screen overflow-x-hidden"
        style={{
          backgroundColor: 'var(--paper)',
          color: 'var(--ink)',
          fontFamily: "'Cormorant Garamond', serif",
          backgroundImage: 'radial-gradient(var(--accent-green) 1px, transparent 1px), radial-gradient(var(--accent-green) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
          backgroundAttachment: 'fixed',
          position: 'relative',
          ...customStyles.root
        }}
      >
        <div
          className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
          style={{ boxShadow: 'inset 0 0 150px rgba(58, 38, 38, 0.15)' }}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;