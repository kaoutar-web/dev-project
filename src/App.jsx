import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullseye,
  FaFileAlt,
  FaRocket,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaCheck,
  FaEye,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

// Composants UI simples
const Button = ({ children, className = "", variant = "default", size = "default", ...props }) => {
  const baseClasses = "font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    ghost: "hover:bg-primary hover:text-primary-foreground",
  };
  const sizes = {
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl bg-card text-card-foreground shadow-sm ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Badge = ({ children, className = "" }) => (
  <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${className}`}>
    {children}
  </div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fonction pour faire défiler vers une section spécifique
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: FaLaptopCode,
      title: "Sites Web Modernes",
      description: "Des sites web responsives et performants avec les dernières technologies",
      features: ["React & Vite", "Design Responsive", "SEO Optimisé"],
      color: "from-primary to-secondary",
    },
    {
      icon: FaBullseye,
      title: "Landing Pages",
      description: "Pages d'atterrissage optimisées pour maximiser vos conversions",
      features: ["Conversion Optimisée", "A/B Testing", "Analytics Intégrés"],
      color: "from-secondary to-accent",
    },
    {
      icon: FaPaintBrush,
      title: "UI/UX Design",
      description: "Designs modernes et intuitifs pour une expérience utilisateur exceptionnelle",
      features: ["Prototypage", "Design System", "User Research"],
      color: "from-accent to-primary",
    },
    {
      icon: FaFileAlt,
      title: "Création de CV",
      description: "CV modernes et professionnels qui mettent en valeur vos compétences et expériences",
      features: ["Design Personnalisé", "Adaptable Tous Secteurs"],
      color: "from-primary to-accent",
    },
  ];

  const testimonials = [
    {
      content: "Kaoutar a transformé notre vision en un site web magnifique qui a doublé nos conversions.",
      rating: 5,
    },
    {
      content: "Un travail exceptionnel ! Notre nouveau site génère 3x plus de leads qu'avant.",
      rating: 5,
    },
    {
      content: "Design moderne, performance excellente. Exactement ce dont nous avions besoin.",
      rating: 5,
    },
  ];

  // Ajout des projets réels
  const projects = [
    {
      id: 1,
      title: "un site fitness",
      description: "plateforme fitness complète offrant des programmes d'entraînement personnalisés, des suivis de progression et une communauté motivante",
      imageUrl: "public/fitness.PNG", // Remplacez par votre capture
    },
    {
      id: 2,
      title: "un site immobilier",
      description: "plateforme immobilière avec recherche avancée, cartes interactives et offrant des solutions innovantes qui transforment positivement la vie de nos clients",
      imageUrl: "public/the key.PNG", // Remplacez par votre capture
    },
    {
      id: 3,
      title: "school management",
      description: "une plateforme complète de gestion scolaire qui centralise toutes les activités académiques",
      imageUrl: "public/school.PNG", // Remplacez par votre capture
    },
    {
      id: 4,
      title: "Restaurant",
      description: "Cette plateforme intuitive unifie la gestion des commandes, des réservations, de la cuisine et de la clientèle pour offrir une expérience fluide et professionnelle",
      imageUrl: "public/Capture.PNG", // Remplacez par votre capture
    },
    {
      id: 5,
      title: "Quiz App",
      description: " plateforme interactive dédiée à l'apprentissage du JavaScript, des bases aux concepts avancés",
      imageUrl: "public/js.PNG", // Remplacez par votre capture
    },
    {
      id: 6,
      title: "site estate",
      description: "un site immobilier moderne et convivial qui met en valeur les propriétés avec des images haute résolution, des descriptions détaillées et des filtres de recherche avancés",
      imageUrl: "public/estate.PNG", // Remplacez par votre capture
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 text-xl font-bold"
          >
            <img 
              src="0d246754-c9e3-44ca-bdcd-d1a4d39b3274-removebg-preview.png" 
              alt="Logo BUILD_a_WEBSITE" 
              className="h-10 w-auto object-contain"
            />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              BUILD_a_WEBSITE
            </span>
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["Services", "Portfolio", "Témoignages", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
          <div 
            className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/aa/ec/93/aaec93f75a1b0f9e66c25f1dd279ae15.jpg')] bg-cover bg-center bg-no-repeat opacity-20" 
          />
        </motion.div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              ✨ Freelance Web Designer Premium
            </Badge>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Créons votre
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block">
                présence digitale
              </span>
              d'exception
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Sites web modernes, landing pages haute conversion et designs UI/UX qui transforment vos visiteurs en
              clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary text-primary-foreground group"
                onClick={() => scrollToSection("services")}
              >
                Découvrir mes services
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => scrollToSection("portfolio")}
              >
                Voir mon portfolio
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"
        />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Services Premium</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Mes <span className="text-primary">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions web complètes pour propulser votre business vers le succès
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className="text-xl text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <FaCheck className="text-primary text-xs" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">Portfolio</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Mes <span className="text-secondary">Réalisations</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
                  <div className="relative flex-grow">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h4 className="font-bold text-lg mb-2">{project.title}</h4>
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 flex-grow-0">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FaGithub />
                          </a>
                        )}
                      </div>
                      
                      <span className="text-xs text-muted-foreground">
                        Projet {index + 1} sur {projects.length}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* Vous pouvez ajouter un bouton pour voir plus de projets ici */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="témoignages" className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Témoignages</Badge>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ce que disent mes <span className="text-accent">clients</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <FaQuoteLeft className="text-3xl text-primary mb-4" />

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Prêt à transformer votre
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent block">
                présence digitale ?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discutons de votre projet et créons ensemble quelque chose d'exceptionnel
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
         
             
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Contactez-moi</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Prêt à donner vie à votre vision ? Contactez-moi pour discuter de votre projet.
              </p>

              <div className="flex gap-6">
                {[
                  { icon: FaInstagram, href: "https://www.instagram.com/dev_digital_project?igsh=aXZ0Y3FlN3ZreG9o", color: "hover:text-pink-500" },
                  { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61580523910348", color: "hover:text-blue-500" },
                  { icon: FaWhatsapp, href: "https://wa.me/212602368815", color: "hover:text-green-500" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className={`text-2xl text-muted-foreground transition-colors ${social.color}`}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="flex justify-center md:justify-end items-center gap-3 mb-4">
                <img 
                  src="0d246754-c9e3-44ca-bdcd-d1a4d39b3274-removebg-preview.png" 
                  alt="Logo BUILD_a_WEBSITE" 
                  className="h-12 w-auto object-contain"
                />
                <div className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                 BUILD_a_WEBSITE
                </div>
              </div>
              <p className="text-muted-foreground mb-4">Freelance Web Designer & Developer</p>
              <p className="text-sm text-muted-foreground">© 2025 Kaoutar-web Freelance. Tous droits réservés.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}