import React, { useState, useEffect, useRef } from 'react';

const customStyles = {
  root: {
    '--paper': '#f9f2e8',
    '--card-bg': '#fffbf5',
    '--ink': '#4a2c22',
    '--ink-fade': '#7d5a4f',
    '--accent-green': '#d97706',
    '--accent-pink': '#c2410c',
    '--accent-blue': '#92400e',
    '--border-color': '#eab308',
    '--line-width': '1.5px'
  }
};

const GeometryHeader = () => {
  return (
    <div className="geometry-header" style={{
      width: '300px',
      height: '300px',
      margin: '0 auto -60px auto',
      position: 'relative',
      zIndex: 1,
      background: 'radial-gradient(circle, var(--card-bg) 40%, transparent 70%)',
      borderRadius: '50%',
      animation: 'rotateSlow 80s linear infinite'
    }}>
      <svg width="100%" height="100%" viewBox="0 0 200 200" style={{ overflow: 'visible' }}>
        <path
          className="tattoo-path"
          d="M100,20 C120,60 160,80 180,100 C160,120 120,140 100,180 C80,140 40,120 20,100 C40,80 80,60 100,20 Z"
          style={{
            fill: 'none',
            stroke: 'var(--accent-green)',
            strokeWidth: '1px',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards'
          }}
        />
        <path
          className="tattoo-path"
          d="M100,40 C110,70 140,90 150,100 C140,110 110,130 100,160 C90,130 60,110 50,100 C60,90 90,70 100,40 Z"
          style={{
            fill: 'none',
            stroke: 'var(--accent-pink)',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards 0.2s'
          }}
        />
        <path
          className="tattoo-path"
          d="M100,0 L100,200"
          style={{
            fill: 'none',
            stroke: 'var(--ink)',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards 0.4s'
          }}
        />
        <path
          className="tattoo-path"
          d="M0,100 L200,100"
          style={{
            fill: 'none',
            stroke: 'var(--ink)',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards 0.4s'
          }}
        />
        <circle
          className="tattoo-path"
          cx="100"
          cy="100"
          r="10"
          fill="var(--card-bg)"
          style={{
            stroke: 'var(--ink)',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards 0.6s'
          }}
        />
        <circle
          className="tattoo-path"
          cx="100"
          cy="100"
          r="3"
          fill="var(--ink)"
          style={{
            stroke: 'var(--ink)',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards 0.8s'
          }}
        />
      </svg>
    </div>
  );
};

const SpineNode = ({ isVisible }) => {
  return (
    <div className={`spine-node scroll-reveal ${isVisible ? 'visible' : ''}`} style={{
      gridColumn: '2',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      <div className="node-graphic" style={{
        width: '30px',
        height: '30px',
        border: '2px solid var(--ink)',
        transform: 'rotate(45deg)',
        position: 'relative',
        background: 'var(--accent-green)',
        transition: 'all 0.4s ease',
        borderRadius: '50% 0 50% 0',
        boxShadow: 'inset 0 0 0 2px var(--card-bg)'
      }}>
        <div style={{
          content: '""',
          position: 'absolute',
          top: '6px',
          left: '6px',
          right: '6px',
          bottom: '6px',
          border: '1px solid var(--ink)',
          borderRadius: '50% 0 50% 0'
        }}></div>
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description, isVisible, bgColor, borderColor, isPlaceholder }) => {
  if (isPlaceholder) {
    return <div className="service-item placeholder" style={{ opacity: 0 }}></div>;
  }

  return (
    <div className={`service-item scroll-reveal ${isVisible ? 'visible' : ''}`} style={{
      padding: '2.5rem',
      position: 'relative',
      transition: 'all 0.5s ease',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      backgroundColor: bgColor || 'var(--card-bg)',
      borderRadius: '12px',
      border: `4px double ${borderColor || 'var(--accent-pink)'}`,
      boxShadow: '0 6px 15px rgba(74, 44, 34, 0.08), inset 0 0 20px rgba(217, 119, 6, 0.05)'
    }}>
      <div style={{
        content: '""',
        position: 'absolute',
        width: '10px',
        height: '10px',
        border: '1px solid var(--ink)',
        top: '6px',
        left: '6px',
        borderRight: 'none',
        borderBottom: 'none',
        transition: 'all 0.3s ease'
      }}></div>
      <div style={{
        content: '""',
        position: 'absolute',
        width: '10px',
        height: '10px',
        border: '1px solid var(--ink)',
        bottom: '6px',
        right: '6px',
        borderLeft: 'none',
        borderTop: 'none',
        transition: 'all 0.3s ease'
      }}></div>
      <h3 style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '1.5rem',
        marginBottom: '1rem',
        display: 'inline-block',
        transition: 'border-color 0.3s ease',
        color: 'var(--ink)',
        paddingBottom: '0.5rem',
        borderBottom: '2px dotted var(--accent-pink)',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        textAlign: 'center'
      }}>{title}</h3>
      <p style={{
        fontSize: '1.15rem',
        lineHeight: '1.7',
        color: 'var(--ink-fade)',
        fontStyle: 'italic'
      }} dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
};

const FooterGeometry = () => {
  return (
    <div className="footer-geo" style={{
      width: '100%',
      height: '200px',
      marginTop: '4rem',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      opacity: '0.7'
    }}>
      <svg viewBox="0 0 100 200" width="100" height="200" style={{ transform: 'rotate(180deg)' }}>
        <path
          className="tattoo-path"
          d="M50,10 C60,40 80,50 90,60 C80,70 60,80 50,110 C40,80 20,70 10,60 C20,50 40,40 50,10 Z"
          style={{
            fill: 'none',
            stroke: 'var(--accent-pink)',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards'
          }}
        />
        <line
          className="tattoo-path"
          x1="50"
          y1="0"
          x2="50"
          y2="150"
          style={{
            fill: 'none',
            stroke: 'var(--ink)',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards'
          }}
        />
        <circle
          className="tattoo-path"
          cx="50"
          cy="160"
          r="2"
          fill="var(--ink)"
          style={{
            stroke: 'var(--ink)',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards'
          }}
        />
      </svg>
    </div>
  );
};

const FloatingAccent = ({ style, children }) => {
  const [transform, setTransform] = useState('translate(0px, 0px)');

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const index = style.left ? 0 : 1;
      const speed = (index + 1) * 20;
      setTransform(`translate(${x * speed}px, ${y * speed}px)`);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [style]);

  return (
    <svg
      className="floating-accent"
      style={{
        ...style,
        position: 'absolute',
        opacity: 0.2,
        pointerEvents: 'none',
        fill: 'none',
        stroke: 'var(--accent-green)',
        transform
      }}
      viewBox="0 0 100 200"
    >
      {children}
    </svg>
  );
};

const App = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const observerRefs = useRef([]);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        background-color: var(--paper);
        color: var(--ink);
        font-family: 'Cormorant Garamond', serif;
        overflow-x: hidden;
        background-image: 
          radial-gradient(var(--accent-green) 1px, transparent 1px),
          radial-gradient(var(--accent-green) 1px, transparent 1px);
        background-size: 40px 40px;
        background-position: 0 0, 20px 20px;
        background-attachment: fixed;
        min-height: 100vh;
      }

      body::after {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 150px rgba(194, 65, 12, 0.1);
        pointer-events: none;
        z-index: 10;
      }

      @keyframes drawInk {
        from { stroke-dasharray: 1000; stroke-dashoffset: 1000; opacity: 1;}
        to { stroke-dasharray: 1000; stroke-dashoffset: 0; opacity: 1;}
      }

      @keyframes rotateSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      .service-item:hover {
        transform: translateY(-8px) !important;
        border-color: var(--border-color) !important;
        box-shadow: 0 12px 25px rgba(74, 44, 34, 0.12) !important;
      }

      .service-item:hover h3 {
        border-bottom: 2px solid var(--ink) !important;
      }

      .service-item:hover + .spine-node .node-graphic,
      .spine-node:hover .node-graphic {
        transform: rotate(225deg) scale(1.3) !important;
        background: var(--accent-pink) !important;
      }

      .btn-sacred:hover {
        background: var(--paper) !important;
        color: var(--ink) !important;
        border-color: var(--ink) !important;
        box-shadow: 0 0 0 4px var(--accent-pink) !important;
        transform: scale(1.02) !important;
      }

      @media (max-width: 768px) {
        .services-grid {
          grid-template-columns: 1fr !important;
          gap: 2rem !important;
        }
        .spine, .spine-node {
          display: none !important;
        }
        .service-item:nth-child(4n+1), 
        .service-item:nth-child(4n+3) {
          grid-column: 1 !important;
          text-align: center !important;
          margin: 0 !important;
        }
        h1 { font-size: 2.2rem !important; }
      }
    `;
    document.head.appendChild(styleElement);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = observerRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleItems((prev) => [...new Set([...prev, index])]);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      document.head.removeChild(styleElement);
      observer.disconnect();
    };
  }, []);

  const services = [
    {
      title: 'Tarot Readings',
      description: 'Illuminating the present moment through ancient archetypes. A mirrored reflection of your current energetic trajectory.',
      bgColor: '#fffaf0',
      borderColor: 'var(--accent-pink)'
    },
    {
      title: 'Quantum Healing',
      description: 'Vibrational frequency alignment transcending space and time. Address the root cause in the subtle body.',
      bgColor: '#fef3c7',
      borderColor: 'var(--accent-green)'
    },
    {
      title: 'TAT Therapy',
      description: 'Tapas Acupressure Technique. A gentle fusion of attention and touch to dissolve past traumas and limiting beliefs.',
      bgColor: '#ffedd5',
      borderColor: 'var(--accent-blue)'
    },
    {
      title: 'Crystal Healing',
      description: 'Mineral kingdom resonance therapy. Stones placed on meridian points to restore equilibrium and flow.',
      bgColor: '#fffaf0',
      borderColor: 'var(--accent-pink)'
    },
    {
      title: 'Plant Medicine',
      description: 'Focused on integration and education. We provide preparation and aftermath guidance for your journey. <br><em style="font-size: 0.9em; opacity: 0.8;">*Disclaimers applied. No medical claims.</em>',
      bgColor: '#fef3c7',
      borderColor: 'var(--accent-green)'
    },
    {
      title: '1:1 Life Coaching',
      description: 'Strategic partnership to bridge the gap between where you are and where you are destined to be.',
      bgColor: '#ffedd5',
      borderColor: 'var(--accent-blue)'
    }
  ];

  const handleBookConsultation = () => {
    alert('Booking consultation... This would open a booking modal or redirect to a booking page.');
  };

  return (
    <div style={customStyles.root}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&display=swap" rel="stylesheet" />

      <div className="spine" style={{
        position: 'fixed',
        top: 0,
        left: '50%',
        width: '3px',
        height: '100vh',
        backgroundImage: 'linear-gradient(to bottom, var(--accent-pink) 50%, transparent 50%)',
        backgroundSize: '2px 20px',
        borderLeft: '1px solid rgba(255,255,255,0.3)',
        borderRight: '1px solid rgba(255,255,255,0.3)',
        transform: 'translateX(-50%)',
        zIndex: 0,
        opacity: 0.4
      }}></div>

      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        padding: '4rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <GeometryHeader />

        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          textAlign: 'center',
          color: 'var(--ink)',
          fontSize: '3.5rem',
          marginBottom: '1rem',
          position: 'relative',
          zIndex: 2,
          textShadow: '2px 2px 0px rgba(234, 179, 8, 0.15)'
        }}>
          <span style={{ fontSize: '1.5rem', verticalAlign: 'middle', color: 'var(--accent-pink)', margin: '0 15px' }}>❧</span>
          Sacred Alignment
          <span style={{ fontSize: '1.5rem', verticalAlign: 'middle', color: 'var(--accent-pink)', margin: '0 15px' }}>❧</span>
        </h1>

        <div className="subtitle" style={{
          textAlign: 'center',
          fontSize: '1.1rem',
          letterSpacing: '0.2em',
          color: 'var(--accent-pink)',
          marginBottom: '4rem',
          textTransform: 'uppercase',
          fontWeight: 600,
          borderTop: '1px solid var(--accent-green)',
          borderBottom: '1px solid var(--accent-green)',
          display: 'inline-block',
          padding: '0.5rem 2rem',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'var(--card-bg)',
          borderRadius: '50px',
          boxShadow: '0 4px 10px rgba(74, 44, 34, 0.05)'
        }}>Curated Holistic Offerings</div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 80px 1fr',
          gap: '3rem 0',
          width: '100%',
          maxWidth: '1050px',
          position: 'relative',
          zIndex: 2,
          marginTop: '4rem'
        }}>
          <div ref={(el) => (observerRefs.current[0] = el)} style={{ gridColumn: '1', textAlign: 'center', marginRight: '1rem' }}>
            <ServiceItem
              title={services[0].title}
              description={services[0].description}
              isVisible={visibleItems.includes(0)}
              bgColor={services[0].bgColor}
              borderColor={services[0].borderColor}
            />
          </div>
          <div ref={(el) => (observerRefs.current[1] = el)}>
            <SpineNode isVisible={visibleItems.includes(1)} />
          </div>
          <ServiceItem isPlaceholder={true} />

          <ServiceItem isPlaceholder={true} />
          <div ref={(el) => (observerRefs.current[2] = el)}>
            <SpineNode isVisible={visibleItems.includes(2)} />
          </div>
          <div ref={(el) => (observerRefs.current[3] = el)} style={{ gridColumn: '3', textAlign: 'center', marginLeft: '1rem' }}>
            <ServiceItem
              title={services[1].title}
              description={services[1].description}
              isVisible={visibleItems.includes(3)}
              bgColor={services[1].bgColor}
              borderColor={services[1].borderColor}
            />
          </div>

          <div ref={(el) => (observerRefs.current[4] = el)} style={{ gridColumn: '1', textAlign: 'center', marginRight: '1rem' }}>
            <ServiceItem
              title={services[2].title}
              description={services[2].description}
              isVisible={visibleItems.includes(4)}
              bgColor={services[2].bgColor}
              borderColor={services[2].borderColor}
            />
          </div>
          <div ref={(el) => (observerRefs.current[5] = el)}>
            <SpineNode isVisible={visibleItems.includes(5)} />
          </div>
          <ServiceItem isPlaceholder={true} />

          <ServiceItem isPlaceholder={true} />
          <div ref={(el) => (observerRefs.current[6] = el)}>
            <SpineNode isVisible={visibleItems.includes(6)} />
          </div>
          <div ref={(el) => (observerRefs.current[7] = el)} style={{ gridColumn: '3', textAlign: 'center', marginLeft: '1rem' }}>
            <ServiceItem
              title={services[3].title}
              description={services[3].description}
              isVisible={visibleItems.includes(7)}
              bgColor={services[3].bgColor}
              borderColor={services[3].borderColor}
            />
          </div>

          <div ref={(el) => (observerRefs.current[8] = el)} style={{ gridColumn: '1', textAlign: 'center', marginRight: '1rem' }}>
            <ServiceItem
              title={services[4].title}
              description={services[4].description}
              isVisible={visibleItems.includes(8)}
              bgColor={services[4].bgColor}
              borderColor={services[4].borderColor}
            />
          </div>
          <div ref={(el) => (observerRefs.current[9] = el)}>
            <SpineNode isVisible={visibleItems.includes(9)} />
          </div>
          <ServiceItem isPlaceholder={true} />

          <ServiceItem isPlaceholder={true} />
          <div ref={(el) => (observerRefs.current[10] = el)}>
            <SpineNode isVisible={visibleItems.includes(10)} />
          </div>
          <div ref={(el) => (observerRefs.current[11] = el)} style={{ gridColumn: '3', textAlign: 'center', marginLeft: '1rem' }}>
            <ServiceItem
              title={services[5].title}
              description={services[5].description}
              isVisible={visibleItems.includes(11)}
              bgColor={services[5].bgColor}
              borderColor={services[5].borderColor}
            />
          </div>

          <div className="cta-container" ref={(el) => (observerRefs.current[12] = el)} style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            marginTop: '6rem',
            position: 'relative',
            opacity: visibleItems.includes(12) ? 1 : 0,
            transform: visibleItems.includes(12) ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease'
          }}>
            <button className="btn-sacred" onClick={handleBookConsultation} style={{
              background: 'var(--ink)',
              color: 'var(--paper)',
              border: '4px double var(--paper)',
              fontFamily: "'Cinzel', serif",
              fontSize: '1.2rem',
              letterSpacing: '0.2em',
              padding: '1.5rem 5rem',
              cursor: 'pointer',
              position: 'relative',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              boxShadow: '0 0 0 2px var(--ink)',
              borderRadius: '4px'
            }}>
              Book Consultation
            </button>
          </div>
        </div>

        <FooterGeometry />
      </div>

      <FloatingAccent style={{ top: '15%', left: '2%', width: '200px', height: '350px' }}>
        <path
          className="tattoo-path"
          d="M50,0 Q100,50 50,100 Q0,150 50,200"
          opacity="0.3"
          stroke="var(--accent-green)"
          style={{
            fill: 'none',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards'
          }}
        />
        <path
          className="tattoo-path"
          d="M50,0 Q0,50 50,100 Q100,150 50,200"
          opacity="0.3"
          stroke="var(--accent-pink)"
          style={{
            fill: 'none',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards'
          }}
        />
      </FloatingAccent>

      <FloatingAccent style={{ top: '55%', right: '2%', width: '200px', height: '350px' }}>
        <line
          className="tattoo-path"
          x1="50"
          y1="0"
          x2="50"
          y2="200"
          opacity="0.3"
          stroke="var(--accent-blue)"
          style={{
            fill: 'none',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards'
          }}
        />
        <rect
          className="tattoo-path"
          x="25"
          y="75"
          width="50"
          height="50"
          transform="rotate(45 50 100)"
          opacity="0.3"
          stroke="var(--accent-green)"
          style={{
            fill: 'none',
            strokeWidth: 'var(--line-width)',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            opacity: 0,
            animation: 'drawInk 2s ease-out forwards'
          }}
        />
      </FloatingAccent>
    </div>
  );
};

export default App;