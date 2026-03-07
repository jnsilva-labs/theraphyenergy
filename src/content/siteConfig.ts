export type Locale = "en" | "es";

export type ServiceSections = {
  whatItIs: string;
  whoItsFor: string;
  whatToExpect: string;
};

export type Service = {
  title: string;
  slug: string;
  shortDescription: string;
  sections: ServiceSections;
  sessionFormat: string;
  duration: string;
  pricing: string;
  safetyNotes: string;
  ctaPrimary: string;
  ctaSecondary: string;
  tags: string[];
  iconVariant:
    | "flowerOfLife"
    | "seedOfLife"
    | "metatron"
    | "vesica"
    | "spiral"
    | "compass";
};

export type Testimonial = {
  initials: string;
  quote: string;
  service: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type Policy = {
  title: string;
  content: string;
};

export type PractitionerInfo = {
  name: string;
  title: string;
  location: string;
  availability: string;
  tone: string;
};

export type ContactInfo = {
  email: string;
  instagram: string;
};

export type Tag = {
  id: string;
  label: string;
};

type LocaleContent = {
  meta: {
    baseTitle: string;
    defaultDescription: string;
  };
  practitioner: PractitionerInfo;
  nav: {
    about: string;
    services: string;
    testimonials: string;
    faq: string;
    booking: string;
    contact: string;
    startHere: string;
    bookSession: string;
  };
  labels: {
    all: string;
    learnMore: string;
    book: string;
    exploreServices: string;
    viewAllServices: string;
    sendMessage: string;
    email: string;
    instagram: string;
    home: string;
    skipToContent: string;
    mainNav: string;
    rightsReserved: string;
  };
  pages: {
    home: {
      hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
        ctaPrimary: string;
        ctaSecondary: string;
        availabilityNote: string;
      };
      services: {
        title: string;
        subtitle: string;
      };
      startHere: {
        eyebrow: string;
        title: string;
        body: string;
        ctaPrimary: string;
        ctaSecondary: string;
      };
      howItWorks: {
        title: string;
        subtitle: string;
        steps: string[];
      };
      testimonials: {
        title: string;
        subtitle: string;
      };
      aboutTeaser: {
        eyebrow: string;
        title: string;
        body: string;
        cta: string;
      };
      faq: {
        title: string;
        subtitle: string;
        cta: string;
      };
      finalCta: {
        title: string;
        body: string;
        formLabel: string;
        formPlaceholder: string;
        button: string;
        finePrint: string;
      };
    };
    about: {
      heroEyebrow: string;
      heroTitle: string;
      heroSubtitle: string;
      storyTitle: string;
      storyBody: string;
      approachTitle: string;
      approachItems: string[];
      lineageTitle: string;
      lineageBody: string;
      expectTitle: string;
      expectBody: string;
    };
    services: {
      heroEyebrow: string;
      heroTitle: string;
      heroSubtitle: string;
    };
    serviceDetail: {
      heroEyebrow: string;
      sectionTitles: {
        whatItIs: string;
        whoItsFor: string;
        whatToExpect: string;
      };
      detailLabels: {
        sessionFormat: string;
        duration: string;
        pricing: string;
      };
      safetyTitle: string;
      relatedTitle: string;
      relatedSubtitle: string;
      relatedCta: string;
      notFoundTitle: string;
      notFoundBody: string;
      notFoundCta: string;
    };
    booking: {
      heroEyebrow: string;
      heroTitle: string;
      heroSubtitle: string;
      formTitle: string;
      embedTitle: string;
      embedBody: string;
      ritualTitle: string;
      ritualSteps: string[];
      whatNextTitle: string;
      whatNextSteps: string[];
      successTitle: string;
      successBody: string;
      submitLabel: string;
    };
    testimonials: {
      heroEyebrow: string;
      heroTitle: string;
      heroSubtitle: string;
      featuredTitle: string;
      featuredSubtitle: string;
    };
    faq: {
      heroEyebrow: string;
      heroTitle: string;
      heroSubtitle: string;
      policiesTitle: string;
      policiesSubtitle: string;
    };
    contact: {
      heroEyebrow: string;
      heroTitle: string;
      heroSubtitle: string;
      formTitle: string;
      connectTitle: string;
      mapPlaceholder: string;
      successTitle: string;
      successBody: string;
    };
  };
  forms: {
    booking: {
      fields: {
        name: string;
        email: string;
        timeZone: string;
        service: string;
        goals: string;
        experience: string;
        availability: string;
        consent: string;
      };
      placeholders: {
        timeZone: string;
        goals: string;
        experience: string;
        availability: string;
      };
      errors: {
        name: string;
        email: string;
        timeZone: string;
        goals: string;
        consent: string;
      };
    };
    contact: {
      fields: {
        name: string;
        email: string;
        message: string;
      };
      placeholders: {
        message: string;
      };
      errors: {
        name: string;
        email: string;
        message: string;
      };
      submitLabel: string;
    };
  };
  disclaimers: {
    general: string;
    emergency: string;
  };
  services: Service[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  policies: Policy[];
  tags: Tag[];
};

export const siteConfig: {
  shared: {
    baseUrl: string;
    ogImage: string;
    contact: ContactInfo;
    instagramHandle: string;
  };
  locales: Record<Locale, LocaleContent>;
} = {
  shared: {
    baseUrl: "https://www.theraphyenergy.com",
    ogImage: "/og-image.jpg",
    contact: {
      email: "info@theraphyenergy.com",
      instagram: "https://instagram.com/yourhandle"
    },
    instagramHandle: "@yourhandle"
  },
  locales: {
    en: {
      meta: {
        baseTitle: "Adriana Monsalve | Theraphy Energy",
        defaultDescription:
          "Warm, trauma-informed tarot, healing, and coaching sessions with Adriana Monsalve in Miami and worldwide."
      },
      practitioner: {
        name: "Adriana Monsalve",
        title: "Theraphy Energy",
        location: "Miami, Florida",
        availability: "In-person in Miami + remote sessions worldwide",
        tone: "Warm, clear, confident, trauma-informed, non-dogmatic"
      },
      nav: {
        about: "About",
        services: "Services",
        testimonials: "Testimonials",
        faq: "FAQ + Policies",
        booking: "Booking",
        contact: "Contact",
        startHere: "Start Here",
        bookSession: "Book a Session"
      },
      labels: {
        all: "All",
        learnMore: "Learn more",
        book: "Book",
        exploreServices: "Explore Services",
        viewAllServices: "View all services",
        sendMessage: "Send message",
        email: "Email",
        instagram: "Instagram",
        home: "Home",
        skipToContent: "Skip to content",
        mainNav: "Main navigation",
        rightsReserved: "All rights reserved."
      },
      pages: {
        home: {
          hero: {
            eyebrow: "Tarot / Healing / Coaching / Astrology",
            title: "Sacred Alignment",
            subtitle:
              "Grounded, trauma-informed guidance for clarity, healing, and renewal - in Miami and worldwide.",
            ctaPrimary: "Book a Session",
            ctaSecondary: "Start Here (New Clients)",
            availabilityNote: "In-person in Miami + remote sessions worldwide"
          },
          services: {
            title: "Services",
            subtitle: "Choose the modality that matches your intentions and needs."
          },
          startHere: {
            eyebrow: "New here?",
            title: "Start with a calm, grounded path.",
            body:
              "If you're unsure where to begin, start here. We'll choose the right modality based on your goals and comfort level.",
            ctaPrimary: "Start Here (New Clients)",
            ctaSecondary: "Explore Services"
          },
          howItWorks: {
            title: "How it works",
            subtitle: "A simple, supportive process that keeps you in control.",
            steps: [
              "Choose a modality based on your goals and comfort.",
              "Request or book a session with clear next steps.",
              "Integrate insights with grounded support."
            ]
          },
          testimonials: {
            title: "Client reflections",
            subtitle: "Gentle, grounded feedback from recent sessions."
          },
          aboutTeaser: {
            eyebrow: "About Adriana",
            title: "Grounded spirituality with clear ethics.",
            body:
              "Adriana blends intuitive work with a trauma-informed, non-dogmatic approach. Sessions are calm, respectful, and centered on your agency.",
            cta: "Learn more about Adriana"
          },
          faq: {
            title: "FAQ",
            subtitle: "Helpful answers to common questions.",
            cta: "View full FAQ + Policies"
          },
          finalCta: {
            title: "Ready to begin?",
            body:
              "Book a session or send a brief request - we'll find the right starting point together.",
            formLabel: "Email for gentle updates",
            formPlaceholder: "you@example.com",
            button: "Join",
            finePrint: "Optional and low frequency."
          }
        },
        about: {
          heroEyebrow: "About",
          heroTitle: "Meet Adriana Monsalve",
          heroSubtitle:
            "A grounded guide offering warm, trauma-informed sessions that center your agency and lived experience.",
          storyTitle: "Adriana's story",
          storyBody:
            "Adriana's work blends intuition, embodied practices, and steady coaching to help clients feel clear and supported. Her approach is ethical, non-dogmatic, and rooted in respect for each person's autonomy.",
          approachTitle: "My approach",
          approachItems: [
            "Trauma-informed, consent-led, and non-judgmental.",
            "Clear boundaries, transparency, and practical integration.",
            "Guidance that honors your beliefs and personal agency."
          ],
          lineageTitle: "Lineage of practice",
          lineageBody:
            "Her work is informed by contemplative traditions, intuitive development, and modern nervous system education - always adapted with care for each individual.",
          expectTitle: "What you can expect working with me",
          expectBody:
            "You'll receive a calm, focused session with time to reflect, regulate, and explore next steps. We'll move at a pace that feels safe, with clear communication and supportive structure."
        },
        services: {
          heroEyebrow: "Services",
          heroTitle: "Choose a modality that fits your intention.",
          heroSubtitle:
            "Each offering is designed with a grounded, trauma-informed approach and can be tailored to your needs."
        },
        serviceDetail: {
          heroEyebrow: "Service",
          sectionTitles: {
            whatItIs: "What it is",
            whoItsFor: "Who it's for",
            whatToExpect: "What to expect"
          },
          detailLabels: {
            sessionFormat: "Session format",
            duration: "Duration",
            pricing: "Pricing"
          },
          safetyTitle: "Safety notes",
          relatedTitle: "Related services",
          relatedSubtitle: "Explore other modalities that may support your goals.",
          relatedCta: "Book this session",
          notFoundTitle: "Service not found",
          notFoundBody: "We couldn't find that service. Please browse the services list.",
          notFoundCta: "View all services"
        },
        booking: {
          heroEyebrow: "Booking",
          heroTitle: "Work with Adriana",
          heroSubtitle:
            "Request a session and share a little about what you're seeking. You'll receive a calm, respectful response with next steps.",
          formTitle: "Booking request",
          embedTitle: "Schedule online",
          embedBody:
            "A scheduling link can live here. Until then, please use the request form and we'll coordinate times with you.",
          ritualTitle: "Ritual pathway",
          ritualSteps: [
            "Choose a modality that resonates.",
            "Share your intentions and goals.",
            "Confirm timing, format, and next steps."
          ],
          whatNextTitle: "What happens next",
          whatNextSteps: [
            "You'll receive a response within 1-2 business days.",
            "We'll confirm the best modality and session format.",
            "You'll receive a clear booking link or next steps."
          ],
          successTitle: "Thank you for your request.",
          successBody:
            "Your message has been received. You'll hear back with scheduling options and next steps soon.",
          submitLabel: "Submit request"
        },
        testimonials: {
          heroEyebrow: "Testimonials",
          heroTitle: "Client reflections",
          heroSubtitle: "Gentle, grounded feedback from recent sessions.",
          featuredTitle: "Featured impressions",
          featuredSubtitle: "Short highlights from different services."
        },
        faq: {
          heroEyebrow: "FAQ + Policies",
          heroTitle: "Frequently asked questions",
          heroSubtitle: "Clear answers, expectations, and care guidelines.",
          policiesTitle: "Policies",
          policiesSubtitle: "Clear boundaries to keep the experience supportive for everyone."
        },
        contact: {
          heroEyebrow: "Contact",
          heroTitle: "Reach out",
          heroSubtitle:
            "In-person in Miami or remote worldwide. Share a brief note and we'll get back to you.",
          formTitle: "Send a message",
          connectTitle: "Connect",
          mapPlaceholder: "Map placeholder",
          successTitle: "Thank you.",
          successBody: "Your note has been received. We'll be in touch soon."
        }
      },
      forms: {
        booking: {
          fields: {
            name: "Name *",
            email: "Email *",
            timeZone: "Time zone *",
            service: "Preferred service *",
            goals: "Goals / what you're seeking *",
            experience: "Prior experience (optional)",
            availability: "Preferred dates/times (optional)",
            consent:
              "I understand this is not medical or mental health care and agree to proceed."
          },
          placeholders: {
            timeZone: "e.g., EST, PST, GMT+1",
            goals: "Share what you'd like to explore or change.",
            experience: "Optional context about past sessions or modalities.",
            availability: "A few date/time windows that work for you."
          },
          errors: {
            name: "Please enter your name.",
            email: "Please enter your email.",
            timeZone: "Please add your time zone.",
            goals: "Please share your goals.",
            consent: "Please confirm your understanding."
          }
        },
        contact: {
          fields: {
            name: "Name *",
            email: "Email *",
            message: "Message *"
          },
          placeholders: {
            message: "How can I support you?"
          },
          errors: {
            name: "Please enter your name.",
            email: "Please enter your email.",
            message: "Please add a message."
          },
          submitLabel: "Send message"
        }
      },
      disclaimers: {
        general:
          "Sessions are supportive and exploratory in nature and are not a substitute for medical, psychiatric, or emergency care. No diagnoses, treatment plans, or medical advice are provided.",
        emergency:
          "If you are in crisis or feel unsafe, call your local emergency number. In the U.S., you can also call or text 988 for the Suicide & Crisis Lifeline."
      },
      services: [
        {
          title: "Tarot Readings",
          slug: "tarot-readings",
          shortDescription:
            "Grounded, intuitive readings that illuminate patterns, options, and next steps without telling you what to do.",
          sections: {
            whatItIs:
              "Tarot as a reflective tool for insight and clarity. We explore the symbols and messages in a way that centers your agency and values.",
            whoItsFor:
              "People seeking clarity, decision support, or a calm space to explore a situation with compassionate perspective.",
            whatToExpect:
              "A gentle opening check-in, a focused spread, and a grounded closing that highlights actionable takeaways and self-trust."
          },
          sessionFormat: "Remote video or in-person in Miami",
          duration: "60 minutes",
          pricing: "Investment shared upon inquiry",
          safetyNotes:
            "Tarot is reflective guidance and is not a substitute for medical, legal, financial, or mental health care.",
          ctaPrimary: "Book this session",
          ctaSecondary: "Ask a question",
          tags: ["clarity", "guidance"],
          iconVariant: "flowerOfLife"
        },
        {
          title: "Quantum Healing Sessions",
          slug: "quantum-healing-sessions",
          shortDescription:
            "A calming, energy-based session to reset patterns and invite greater ease and self-connection.",
          sections: {
            whatItIs:
              "A meditative, trauma-informed session that supports nervous system settling and energetic alignment.",
            whoItsFor:
              "Those who feel stuck, depleted, or want to reconnect with inner calm and resilience.",
            whatToExpect:
              "A short intake, guided relaxation, focused energy work, and a debrief with integration suggestions."
          },
          sessionFormat: "Remote video or in-person in Miami",
          duration: "75 minutes",
          pricing: "Investment shared upon inquiry",
          safetyNotes:
            "This offering is supportive and not a replacement for medical or mental health treatment.",
          ctaPrimary: "Book this session",
          ctaSecondary: "Ask a question",
          tags: ["healing", "integration"],
          iconVariant: "seedOfLife"
        },
        {
          title: "TAT Therapy",
          slug: "tat-therapy",
          shortDescription:
            "Tapas Acupressure Technique for gently releasing stress patterns and supporting emotional regulation.",
          sections: {
            whatItIs:
              "A structured, gentle practice that uses acupressure points and focused statements to shift stress responses.",
            whoItsFor:
              "Those seeking relief from persistent patterns, anxiety, or emotional overwhelm in a supportive setting.",
            whatToExpect:
              "We set a clear intention, guide through the TAT process, and close with grounding and next-step care."
          },
          sessionFormat: "Remote video or in-person in Miami",
          duration: "75 minutes",
          pricing: "Investment shared upon inquiry",
          safetyNotes:
            "This is supportive, not clinical treatment. If you need mental health care, please seek a licensed provider.",
          ctaPrimary: "Book this session",
          ctaSecondary: "Ask a question",
          tags: ["healing", "integration"],
          iconVariant: "vesica"
        },
        {
          title: "Crystal Healing",
          slug: "crystal-healing",
          shortDescription:
            "Grounding, intention-led sessions that invite calm, focus, and gentle energetic support.",
          sections: {
            whatItIs:
              "A relaxing session using crystal placement and intention-setting to support reflection and ease.",
            whoItsFor:
              "Those who want a restorative experience, nervous system soothing, or a gentle ritual for renewal.",
            whatToExpect:
              "A short intake, a guided settling practice, crystal placement, and time for integration and reflection."
          },
          sessionFormat: "In-person in Miami or remote guidance",
          duration: "60 minutes",
          pricing: "Investment shared upon inquiry",
          safetyNotes:
            "Crystal sessions are for relaxation and reflection only and are not medical care.",
          ctaPrimary: "Book this session",
          ctaSecondary: "Ask a question",
          tags: ["healing", "clarity"],
          iconVariant: "spiral"
        },
        {
          title: "Plant Medicine Sessions",
          slug: "plant-medicine-sessions",
          shortDescription:
            "Integration and education-focused support for those working with plant medicine in other settings.",
          sections: {
            whatItIs:
              "A grounded integration space that helps you make meaning of experiences and align insights with daily life.",
            whoItsFor:
              "Those who want support before or after a plant medicine journey, or education on preparation and integration.",
            whatToExpect:
              "We explore intentions, boundaries, safety, and integration practices without providing substances or medical advice."
          },
          sessionFormat: "Remote video or in-person in Miami",
          duration: "75 minutes",
          pricing: "Investment shared upon inquiry",
          safetyNotes:
            "Integration and education only. No substances provided. Not medical advice or treatment.",
          ctaPrimary: "Book this session",
          ctaSecondary: "Ask a question",
          tags: ["integration", "guidance"],
          iconVariant: "seedOfLife"
        },
        {
          title: "1:1 Life Coaching",
          slug: "one-to-one-life-coaching",
          shortDescription:
            "Supportive coaching for clarity, boundaries, and aligned action with gentle accountability.",
          sections: {
            whatItIs:
              "A collaborative coaching space to clarify priorities, build resilience, and take aligned action.",
            whoItsFor:
              "People navigating transitions, decision points, or a desire for steady guidance and accountability.",
            whatToExpect:
              "We define goals, track progress, and integrate practices that feel supportive and sustainable."
          },
          sessionFormat: "Remote video or in-person in Miami",
          duration: "60 minutes",
          pricing: "Investment shared upon inquiry",
          safetyNotes:
            "Coaching is not therapy or medical care. If clinical support is needed, please seek a licensed professional.",
          ctaPrimary: "Book this session",
          ctaSecondary: "Ask a question",
          tags: ["coaching", "clarity"],
          iconVariant: "flowerOfLife"
        },
        {
          title: "Astrology Guidance",
          slug: "astrology-guidance",
          shortDescription:
            "Reflective astrology sessions that help you understand cycles, choices, and personal timing.",
          sections: {
            whatItIs:
              "Astrology as a reflective map for understanding themes, seasons, and self-awareness - never deterministic.",
            whoItsFor:
              "Those curious about timing, personal cycles, or navigating transitions with more context and compassion.",
            whatToExpect:
              "A focused chart-based conversation with practical reflections and invitations for integration."
          },
          sessionFormat: "Remote video or in-person in Miami",
          duration: "75 minutes",
          pricing: "Investment shared upon inquiry",
          safetyNotes:
            "Astrology is reflective and empowering; it is not a substitute for professional guidance or medical care.",
          ctaPrimary: "Book this session",
          ctaSecondary: "Ask a question",
          tags: ["guidance", "clarity"],
          iconVariant: "metatron"
        }
      ],
      testimonials: [
        {
          initials: "M.R.",
          quote: "So calm and clear. I left with real next steps and felt deeply respected.",
          service: "Tarot Readings"
        },
        {
          initials: "J.L.",
          quote: "The session was grounding and gentle. I felt supported without any pressure.",
          service: "Quantum Healing Sessions"
        },
        {
          initials: "A.K.",
          quote: "Adriana's presence is steady and kind. The integration support was invaluable.",
          service: "Plant Medicine Sessions"
        },
        {
          initials: "S.P.",
          quote: "Clear, professional, and nurturing. I appreciated the trauma-informed approach.",
          service: "TAT Therapy"
        },
        {
          initials: "L.D.",
          quote: "I felt empowered and more confident in my decisions.",
          service: "1:1 Life Coaching"
        },
        {
          initials: "C.T.",
          quote: "A beautiful balance of intuition and grounded guidance.",
          service: "Astrology Guidance"
        }
      ],
      faqs: [
        {
          question: "Do I need experience with tarot or energy work?",
          answer:
            "No. Sessions are beginner-friendly and adapted to your comfort level and beliefs."
        },
        {
          question: "Are sessions religious or dogmatic?",
          answer: "No. The approach is non-dogmatic and centered on your values."
        },
        {
          question: "Do you offer remote sessions?",
          answer: "Yes. Remote sessions are available worldwide, and in-person sessions are in Miami."
        },
        {
          question: "What if I feel nervous or unsure?",
          answer: "That's very common. We will go at a pace that feels safe and supportive for you."
        },
        {
          question: "Can a session replace therapy or medical care?",
          answer:
            "No. These sessions are supportive but not a substitute for medical or mental health care."
        },
        {
          question: "What should I prepare before a session?",
          answer: "Consider a question, theme, or intention. A quiet space and a journal are helpful."
        },
        {
          question: "How do I choose the right service?",
          answer: "Start with your goal. If unsure, the Start Here path can guide your choice."
        },
        {
          question: "Do you record sessions?",
          answer: "Recording is available by request and with consent."
        },
        {
          question: "Is plant medicine provided?",
          answer:
            "No. Plant medicine sessions are integration and education only. No substances are provided."
        },
        {
          question: "What if I need urgent help?",
          answer:
            "If you are in crisis or feel unsafe, call local emergency services or 988 in the U.S."
        }
      ],
      policies: [
        {
          title: "Cancellation",
          content:
            "Please provide at least 24 hours' notice to cancel. Late cancellations may be charged a fee."
        },
        {
          title: "Rescheduling",
          content:
            "Rescheduling with 24 hours' notice is welcome. Same-day requests are subject to availability."
        },
        {
          title: "Lateness",
          content:
            "Sessions begin promptly. Late arrivals may shorten the session to respect the next client."
        },
        {
          title: "Refunds",
          content:
            "Refunds are handled on a case-by-case basis. Packages are non-refundable once started."
        },
        {
          title: "Confidentiality",
          content:
            "Your privacy is respected. Information is kept confidential within the limits of the law."
        },
        {
          title: "Consent & Boundaries",
          content:
            "You are always in control. Consent is required for any practice, and you can pause or stop at any time."
        }
      ],
      tags: [
        { id: "clarity", label: "Clarity" },
        { id: "healing", label: "Healing" },
        { id: "integration", label: "Integration" },
        { id: "coaching", label: "Coaching" },
        { id: "guidance", label: "Guidance" }
      ]
    },
    es: {
      meta: {
        baseTitle: "Adriana Monsalve | Theraphy Energy",
        defaultDescription:
          "Sesiones cálidas y con enfoque trauma-informado de tarot, sanación y coaching con Adriana Monsalve en Miami y en todo el mundo."
      },
      practitioner: {
        name: "Adriana Monsalve",
        title: "Theraphy Energy",
        location: "Miami, Florida",
        availability: "Presencial en Miami + sesiones remotas en todo el mundo",
        tone: "Cálido, claro, confiado, con enfoque trauma-informado y no dogmático"
      },
      nav: {
        about: "Sobre mí",
        services: "Servicios",
        testimonials: "Testimonios",
        faq: "Preguntas + Políticas",
        booking: "Reservas",
        contact: "Contacto",
        startHere: "Empieza aquí",
        bookSession: "Reserva una sesión"
      },
      labels: {
        all: "Todos",
        learnMore: "Ver más",
        book: "Reservar",
        exploreServices: "Explorar servicios",
        viewAllServices: "Ver todos los servicios",
        sendMessage: "Enviar mensaje",
        email: "Correo",
        instagram: "Instagram",
        home: "Inicio",
        skipToContent: "Saltar al contenido",
        mainNav: "Navegación principal",
        rightsReserved: "Todos los derechos reservados."
      },
      pages: {
        home: {
          hero: {
            eyebrow: "Tarot / Sanación / Coaching / Astrología",
            title: "Alineación Sagrada",
            subtitle:
              "Guía cercana y con enfoque trauma-informado para claridad, sanación y renovación - en Miami y a distancia.",
            ctaPrimary: "Reserva una sesión",
            ctaSecondary: "Empieza aquí (nuevas personas)",
            availabilityNote: "Presencial en Miami + sesiones remotas en todo el mundo"
          },
          services: {
            title: "Servicios",
            subtitle: "Elige la modalidad que se alinea con tus necesidades e intención."
          },
          startHere: {
            eyebrow: "¿Primera vez?",
            title: "Empieza con una ruta serena y clara.",
            body:
              "Si no sabes por dónde comenzar, empieza aquí. Elegiremos la modalidad adecuada según tus objetivos y tu comodidad.",
            ctaPrimary: "Empieza aquí (nuevas personas)",
            ctaSecondary: "Explorar servicios"
          },
          howItWorks: {
            title: "Cómo funciona",
            subtitle: "Un proceso sencillo y de apoyo que te mantiene en control.",
            steps: [
              "Elige una modalidad según tus metas y tu comodidad.",
              "Solicita o reserva una sesión con pasos claros.",
              "Integra lo aprendido con apoyo y calma."
            ]
          },
          testimonials: {
            title: "Reflexiones de clientes",
            subtitle: "Comentarios suaves y honestos de sesiones recientes."
          },
          aboutTeaser: {
            eyebrow: "Sobre Adriana",
            title: "Espiritualidad con ética y claridad.",
            body:
              "Adriana combina trabajo intuitivo con un enfoque trauma-informado y no dogmático. Las sesiones son calmadas, respetuosas y centradas en tu autonomía.",
            cta: "Conoce más sobre Adriana"
          },
          faq: {
            title: "Preguntas frecuentes",
            subtitle: "Respuestas útiles a dudas comunes.",
            cta: "Ver preguntas + políticas"
          },
          finalCta: {
            title: "¿Lista para empezar?",
            body:
              "Reserva una sesión o envía una solicitud breve - encontraremos el punto de partida ideal.",
            formLabel: "Correo para novedades suaves",
            formPlaceholder: "tu@email.com",
            button: "Unirme",
            finePrint: "Opcional y de baja frecuencia."
          }
        },
        about: {
          heroEyebrow: "Sobre mí",
          heroTitle: "Conoce a Adriana Monsalve",
          heroSubtitle:
            "Una guía aterrizada que ofrece sesiones cálidas y con enfoque trauma-informado, centradas en tu experiencia y autonomía.",
          storyTitle: "La historia de Adriana",
          storyBody:
            "El trabajo de Adriana integra intuición, prácticas somáticas y coaching para ayudarte a sentir claridad y apoyo. Su enfoque es ético, no dogmático y basado en el respeto a cada persona.",
          approachTitle: "Mi enfoque",
          approachItems: [
            "Trauma-informado, con consentimiento y sin juicio.",
            "Límites claros, transparencia e integración práctica.",
            "Guía que honra tus creencias y tu autonomía."
          ],
          lineageTitle: "Linaje de práctica",
          lineageBody:
            "Su trabajo se nutre de tradiciones contemplativas, desarrollo intuitivo y educación moderna del sistema nervioso - siempre adaptado con cuidado.",
          expectTitle: "Qué puedes esperar al trabajar conmigo",
          expectBody:
            "Recibirás una sesión calma y enfocada, con tiempo para reflexionar y regularte. Avanzaremos a un ritmo seguro, con comunicación clara y estructura de apoyo."
        },
        services: {
          heroEyebrow: "Servicios",
          heroTitle: "Elige una modalidad que se alinee con tu intención.",
          heroSubtitle:
            "Cada propuesta está diseñada con un enfoque trauma-informado y puede adaptarse a tus necesidades."
        },
        serviceDetail: {
          heroEyebrow: "Servicio",
          sectionTitles: {
            whatItIs: "Qué es",
            whoItsFor: "Para quién es",
            whatToExpect: "Qué esperar"
          },
          detailLabels: {
            sessionFormat: "Formato",
            duration: "Duración",
            pricing: "Inversión"
          },
          safetyTitle: "Notas de seguridad",
          relatedTitle: "Servicios relacionados",
          relatedSubtitle: "Explora otras modalidades que puedan apoyar tus objetivos.",
          relatedCta: "Reservar esta sesión",
          notFoundTitle: "Servicio no encontrado",
          notFoundBody: "No pudimos encontrar ese servicio. Revisa la lista completa.",
          notFoundCta: "Ver todos los servicios"
        },
        booking: {
          heroEyebrow: "Reservas",
          heroTitle: "Trabaja con Adriana",
          heroSubtitle:
            "Solicita una sesión y comparte un poco sobre lo que buscas. Recibirás una respuesta clara y respetuosa con próximos pasos.",
          formTitle: "Solicitud de reserva",
          embedTitle: "Agendar en línea",
          embedBody:
            "Aquí puede ir un enlace de agenda. Mientras tanto, usa el formulario y coordinamos contigo.",
          ritualTitle: "Camino ritual",
          ritualSteps: [
            "Elige la modalidad que resuena.",
            "Comparte tus intenciones y objetivos.",
            "Confirma horario, formato y próximos pasos."
          ],
          whatNextTitle: "Qué sigue",
          whatNextSteps: [
            "Recibirás respuesta en 1-2 días hábiles.",
            "Confirmaremos la mejor modalidad y formato.",
            "Te enviaremos un enlace de reserva o próximos pasos."
          ],
          successTitle: "Gracias por tu solicitud.",
          successBody:
            "Recibimos tu mensaje. Pronto tendrás opciones de horario y próximos pasos.",
          submitLabel: "Enviar solicitud"
        },
        testimonials: {
          heroEyebrow: "Testimonios",
          heroTitle: "Reflexiones de clientes",
          heroSubtitle: "Comentarios suaves y honestos de sesiones recientes.",
          featuredTitle: "Impresiones destacadas",
          featuredSubtitle: "Breves resúmenes de diferentes servicios."
        },
        faq: {
          heroEyebrow: "Preguntas + Políticas",
          heroTitle: "Preguntas frecuentes",
          heroSubtitle: "Respuestas claras, expectativas y guías de cuidado.",
          policiesTitle: "Políticas",
          policiesSubtitle: "Límites claros para sostener una experiencia de apoyo."
        },
        contact: {
          heroEyebrow: "Contacto",
          heroTitle: "Escríbeme",
          heroSubtitle:
            "Presencial en Miami o a distancia. Comparte un breve mensaje y te responderé pronto.",
          formTitle: "Enviar un mensaje",
          connectTitle: "Conectar",
          mapPlaceholder: "Mapa (marcador)",
          successTitle: "Gracias.",
          successBody: "Recibimos tu mensaje. Te responderemos pronto."
        }
      },
      forms: {
        booking: {
          fields: {
            name: "Nombre *",
            email: "Correo *",
            timeZone: "Zona horaria *",
            service: "Servicio preferido *",
            goals: "Objetivos / lo que buscas *",
            experience: "Experiencia previa (opcional)",
            availability: "Fechas/horarios preferidos (opcional)",
            consent:
              "Entiendo que esto no es atención médica ni de salud mental y deseo continuar."
          },
          placeholders: {
            timeZone: "Ej.: EST, PST, GMT+1",
            goals: "Comparte lo que deseas explorar o transformar.",
            experience: "Contexto opcional sobre sesiones o modalidades previas.",
            availability: "Algunas opciones de fecha/horario que te funcionen."
          },
          errors: {
            name: "Por favor ingresa tu nombre.",
            email: "Por favor ingresa tu correo.",
            timeZone: "Por favor indica tu zona horaria.",
            goals: "Por favor comparte tus objetivos.",
            consent: "Por favor confirma tu comprensión."
          }
        },
        contact: {
          fields: {
            name: "Nombre *",
            email: "Correo *",
            message: "Mensaje *"
          },
          placeholders: {
            message: "¿Cómo puedo apoyarte?"
          },
          errors: {
            name: "Por favor ingresa tu nombre.",
            email: "Por favor ingresa tu correo.",
            message: "Por favor escribe un mensaje."
          },
          submitLabel: "Enviar mensaje"
        }
      },
      disclaimers: {
        general:
          "Las sesiones son de apoyo y exploración; no sustituyen atención médica, psicológica ni de emergencia. No se realizan diagnósticos ni se ofrecen tratamientos.",
        emergency:
          "Si estás en crisis o te sientes en peligro, llama a tu número local de emergencias. En EE. UU., llama o envía texto al 988."
      },
      services: [
        {
          title: "Lecturas de Tarot",
          slug: "tarot-readings",
          shortDescription:
            "Lecturas intuitivas y aterrizadas que iluminan patrones, opciones y próximos pasos sin imponerte decisiones.",
          sections: {
            whatItIs:
              "El tarot como herramienta de reflexión y claridad. Exploramos símbolos y mensajes honrando tu autonomía.",
            whoItsFor:
              "Personas que buscan claridad, apoyo en decisiones o un espacio sereno para explorar una situación.",
            whatToExpect:
              "Un breve inicio, una tirada enfocada y un cierre con ideas accionables y confianza en ti."
          },
          sessionFormat: "Video remoto o presencial en Miami",
          duration: "60 minutos",
          pricing: "Inversión a consultar",
          safetyNotes:
            "El tarot es guía reflexiva y no sustituye atención médica, legal, financiera ni de salud mental.",
          ctaPrimary: "Reservar esta sesión",
          ctaSecondary: "Hacer una consulta",
          tags: ["clarity", "guidance"],
          iconVariant: "flowerOfLife"
        },
        {
          title: "Sesiones de Sanación Cuántica",
          slug: "quantum-healing-sessions",
          shortDescription:
            "Sesión energética calmante para resetear patrones e invitar mayor equilibrio y conexión.",
          sections: {
            whatItIs:
              "Sesión meditativa con enfoque trauma-informado que apoya la regulación y la alineación energética.",
            whoItsFor:
              "Quienes se sienten estancados, agotados o desean reconectar con calma interna y resiliencia.",
            whatToExpect:
              "Breve conversación inicial, relajación guiada, trabajo energético y una integración final."
          },
          sessionFormat: "Video remoto o presencial en Miami",
          duration: "75 minutos",
          pricing: "Inversión a consultar",
          safetyNotes:
            "Esta propuesta es de apoyo y no reemplaza atención médica o de salud mental.",
          ctaPrimary: "Reservar esta sesión",
          ctaSecondary: "Hacer una consulta",
          tags: ["healing", "integration"],
          iconVariant: "metatron"
        },
        {
          title: "Terapia TAT",
          slug: "tat-therapy",
          shortDescription:
            "Técnica de Acupresión Tapas para liberar patrones de estrés y apoyar la regulación emocional.",
          sections: {
            whatItIs:
              "Una práctica estructurada y suave que utiliza puntos de acupresión y frases enfocadas para aliviar respuestas de estrés.",
            whoItsFor:
              "Quienes desean alivio de patrones persistentes, ansiedad o sobrecarga emocional en un espacio seguro.",
            whatToExpect:
              "Definimos una intención clara, guiamos el proceso TAT y cerramos con integración y cuidado."
          },
          sessionFormat: "Video remoto o presencial en Miami",
          duration: "75 minutos",
          pricing: "Inversión a consultar",
          safetyNotes:
            "Es un apoyo complementario, no tratamiento clínico. Si necesitas ayuda clínica, busca un profesional licenciado.",
          ctaPrimary: "Reservar esta sesión",
          ctaSecondary: "Hacer una consulta",
          tags: ["healing", "integration"],
          iconVariant: "vesica"
        },
        {
          title: "Sanación con Cristales",
          slug: "crystal-healing",
          shortDescription:
            "Sesiones de intención y calma que invitan enfoque, relajación y apoyo energético sutil.",
          sections: {
            whatItIs:
              "Una sesión relajante con colocación de cristales e intención para favorecer claridad y serenidad.",
            whoItsFor:
              "Quienes desean una experiencia restaurativa, calma del sistema nervioso o un ritual suave.",
            whatToExpect:
              "Breve conversación inicial, práctica de asentamiento, colocación de cristales e integración."
          },
          sessionFormat: "Presencial en Miami o guía remota",
          duration: "60 minutos",
          pricing: "Inversión a consultar",
          safetyNotes:
            "Las sesiones con cristales son para relajación y reflexión; no son atención médica.",
          ctaPrimary: "Reservar esta sesión",
          ctaSecondary: "Hacer una consulta",
          tags: ["healing", "clarity"],
          iconVariant: "spiral"
        },
        {
          title: "Sesiones de Medicina de Plantas",
          slug: "plant-medicine-sessions",
          shortDescription:
            "Acompañamiento de integración y educación para quienes trabajan con medicina de plantas en otros espacios.",
          sections: {
            whatItIs:
              "Espacio de integración para dar sentido a experiencias y llevar los aprendizajes a la vida diaria.",
            whoItsFor:
              "Personas que desean apoyo antes o después de una experiencia, o educación sobre preparación e integración.",
            whatToExpect:
              "Exploramos intenciones, límites, seguridad e integración sin ofrecer sustancias ni consejos médicos."
          },
          sessionFormat: "Video remoto o presencial en Miami",
          duration: "75 minutos",
          pricing: "Inversión a consultar",
          safetyNotes:
            "Solo integración y educación. No se proveen sustancias. No es consejo médico ni tratamiento.",
          ctaPrimary: "Reservar esta sesión",
          ctaSecondary: "Hacer una consulta",
          tags: ["integration", "guidance"],
          iconVariant: "compass"
        },
        {
          title: "Coaching 1:1",
          slug: "one-to-one-life-coaching",
          shortDescription:
            "Coaching de apoyo para claridad, límites y acción alineada con acompañamiento suave.",
          sections: {
            whatItIs:
              "Un espacio colaborativo para clarificar prioridades, fortalecer resiliencia y avanzar con intención.",
            whoItsFor:
              "Personas en transición, con decisiones importantes o que desean guía constante y amable.",
            whatToExpect:
              "Definimos metas, seguimos avances y sumamos prácticas que se sientan sostenibles."
          },
          sessionFormat: "Video remoto o presencial en Miami",
          duration: "60 minutos",
          pricing: "Inversión a consultar",
          safetyNotes:
            "El coaching no es terapia ni atención médica. Si necesitas apoyo clínico, busca un profesional licenciado.",
          ctaPrimary: "Reservar esta sesión",
          ctaSecondary: "Hacer una consulta",
          tags: ["coaching", "clarity"],
          iconVariant: "flowerOfLife"
        },
        {
          title: "Guía Astrológica",
          slug: "astrology-guidance",
          shortDescription:
            "Sesiones astrológicas reflexivas para comprender ciclos, decisiones y tiempos personales.",
          sections: {
            whatItIs:
              "La astrología como mapa reflexivo para entender temas y estaciones de vida - nunca determinista.",
            whoItsFor:
              "Quienes desean claridad sobre ciclos, transiciones o periodos de cambio con mayor contexto.",
            whatToExpect:
              "Conversación enfocada en tu carta con reflexiones prácticas e invitaciones a integrar."
          },
          sessionFormat: "Video remoto o presencial en Miami",
          duration: "75 minutos",
          pricing: "Inversión a consultar",
          safetyNotes:
            "La astrología es reflexiva y de apoyo; no sustituye asesoría profesional ni atención médica.",
          ctaPrimary: "Reservar esta sesión",
          ctaSecondary: "Hacer una consulta",
          tags: ["guidance", "clarity"],
          iconVariant: "metatron"
        }
      ],
      testimonials: [
        {
          initials: "M.R.",
          quote: "Muy calmado y claro. Salí con próximos pasos reales y me sentí respetada.",
          service: "Lecturas de Tarot"
        },
        {
          initials: "J.L.",
          quote: "La sesión fue serena y gentil. Me sentí acompañada sin presión.",
          service: "Sanación Cuántica"
        },
        {
          initials: "A.K.",
          quote: "La presencia de Adriana es estable y amable. La integración fue valiosísima.",
          service: "Medicina de Plantas"
        },
        {
          initials: "S.P.",
          quote: "Clara, profesional y contenida. Agradecí el enfoque trauma-informado.",
          service: "Terapia TAT"
        },
        {
          initials: "L.D.",
          quote: "Me sentí más segura y empoderada con mis decisiones.",
          service: "Coaching 1:1"
        },
        {
          initials: "C.T.",
          quote: "Un balance hermoso entre intuición y guía aterrizada.",
          service: "Guía Astrológica"
        }
      ],
      faqs: [
        {
          question: "¿Necesito experiencia previa con tarot o energía?",
          answer:
            "No. Las sesiones son amigables para principiantes y se adaptan a tu comodidad y creencias."
        },
        {
          question: "¿Las sesiones son religiosas o dogmáticas?",
          answer: "No. El enfoque es no dogmático y centrado en tus valores."
        },
        {
          question: "¿Ofreces sesiones remotas?",
          answer: "Sí. Hay sesiones remotas en todo el mundo y presenciales en Miami."
        },
        {
          question: "¿Y si estoy nerviosa o insegura?",
          answer: "Es muy común. Iremos a un ritmo seguro y de apoyo para ti."
        },
        {
          question: "¿Una sesión reemplaza terapia o atención médica?",
          answer:
            "No. Estas sesiones son de apoyo y no sustituyen atención médica o de salud mental."
        },
        {
          question: "¿Qué debo preparar antes de una sesión?",
          answer:
            "Considera una pregunta, tema o intención. Un espacio tranquilo y un cuaderno ayudan."
        },
        {
          question: "¿Cómo elijo el servicio adecuado?",
          answer:
            "Empieza con tu objetivo. Si no estás segura, la ruta de Empieza aquí puede guiarte."
        },
        {
          question: "¿Se pueden grabar las sesiones?",
          answer: "La grabación está disponible si la solicitas y con consentimiento."
        },
        {
          question: "¿Se provee medicina de plantas?",
          answer:
            "No. Las sesiones son solo integración y educación. No se proporcionan sustancias."
        },
        {
          question: "¿Qué pasa si necesito ayuda urgente?",
          answer:
            "Si estás en crisis o te sientes en peligro, llama a emergencias locales o al 988 en EE. UU."
        }
      ],
      policies: [
        {
          title: "Cancelaciones",
          content:
            "Por favor avisa con al menos 24 horas de anticipación. Las cancelaciones tardías pueden tener un cargo."
        },
        {
          title: "Reprogramaciones",
          content:
            "Reprogramar con 24 horas de aviso es bienvenido. Las solicitudes el mismo día están sujetas a disponibilidad."
        },
        {
          title: "Llegadas tarde",
          content:
            "Las sesiones comienzan puntualmente. Llegadas tarde pueden reducir el tiempo para respetar a la siguiente persona."
        },
        {
          title: "Reembolsos",
          content:
            "Los reembolsos se revisan caso por caso. Los paquetes no son reembolsables una vez iniciados."
        },
        {
          title: "Confidencialidad",
          content:
            "Tu privacidad es respetada. La información se mantiene confidencial dentro de los límites de la ley."
        },
        {
          title: "Consentimiento y límites",
          content:
            "Tú siempre estás al mando. Se requiere consentimiento para cualquier práctica y puedes pausar o detenerte en cualquier momento."
        }
      ],
      tags: [
        { id: "clarity", label: "Claridad" },
        { id: "healing", label: "Sanación" },
        { id: "integration", label: "Integración" },
        { id: "coaching", label: "Coaching" },
        { id: "guidance", label: "Guía" }
      ]
    }
  }
};
