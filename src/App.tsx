import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Music, 
  Mic2, 
  Speaker, 
  Users, 
  Calendar, 
  Star, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  ChevronRight,
  MapPin,
  Clock,
  CheckCircle2,
  Play
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tighter gold-text-gradient">CIIKU</span>
            <span className="text-2xl font-light tracking-widest ml-2">ENT.</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-300 hover:text-gold-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="gold-gradient text-zinc-950 px-6 py-2 rounded-full text-sm font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-white p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-300 hover:text-gold-400 block px-3 py-4 text-base font-medium border-b border-zinc-800/50"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 px-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center gold-gradient text-zinc-950 px-6 py-3 rounded-full text-base font-bold"
                >
                  Book Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2070"
          alt="Concert background"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium mb-6 tracking-wider uppercase">
            Premium Entertainment Services
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight">
            Bringing Your Events to Life with <br />
            <span className="gold-text-gradient">Sound, Music & Energy</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional sound hire, world-class DJs, and charismatic MCs for events that leave a lasting impression.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto gold-gradient text-zinc-950 px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(245,158,11,0.3)]"
            >
              Book Now
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
            >
              Our Services <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-zinc-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-zinc-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=1000"
                alt="DJ at work"
                className="rounded-2xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl"></div>
              
              <div className="absolute -bottom-10 -left-10 bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-2xl z-20 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center text-zinc-950">
                    <Star fill="currentColor" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">10+</p>
                    <p className="text-zinc-400 text-sm">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Crafting Unforgettable <br /> Moments with <span className="text-white">Precision</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              At Ciiku Entertainment, we believe that every event is a unique story waiting to be told. Founded on a passion for high-fidelity sound and vibrant atmosphere, we've spent over a decade perfecting the art of event entertainment.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Professional-grade audio equipment for any venue size',
                'Highly experienced DJs and charismatic MCs',
                'Reliable technical support and seamless event setup',
                'Tailored entertainment packages for every budget'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-gold-500" size={20} />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
            <button className="border-b-2 border-gold-500 text-gold-500 font-bold pb-1 hover:text-gold-400 hover:border-gold-400 transition-all">
              Learn More About Our Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Speaker size={32} />,
      title: 'Sound System Hire',
      description: 'Crystal clear audio solutions for everything from intimate gatherings to massive outdoor concerts.'
    },
    {
      icon: <Music size={32} />,
      title: 'Professional DJs',
      description: 'Versatile DJs who know how to read the room and keep the dance floor packed all night long.'
    },
    {
      icon: <Mic2 size={32} />,
      title: 'Charismatic MCs',
      description: 'Experienced Masters of Ceremony to guide your event with grace, humor, and perfect timing.'
    },
    {
      icon: <Users size={32} />,
      title: 'Full Live Bands',
      description: 'High-energy live performances covering various genres to bring that authentic concert feel.'
    },
    {
      icon: <Play size={32} />,
      title: 'Acoustic Sets',
      description: 'Soulful acoustic music perfect for cocktail hours, intimate dinners, and wedding ceremonies.'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Technical Support',
      description: 'End-to-end event setup, lighting, and technical management so you can focus on your guests.'
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Services</h3>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            We provide a comprehensive range of entertainment and sound solutions tailored to meet the specific needs of your event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-gold-500/50 transition-all group"
            >
              <div className="w-16 h-16 rounded-xl bg-zinc-800 flex items-center justify-center text-gold-500 mb-6 group-hover:gold-gradient group-hover:text-zinc-950 transition-all">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-white">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const eventTypes = [
    { name: 'Weddings', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800' },
    { name: 'Corporate Events', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800' },
    { name: 'Birthdays', img: 'https://images.unsplash.com/photo-1530103862676-fa8c91bbe81b?auto=format&fit=crop&q=80&w=800' },
    { name: 'Graduations', img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800' },
    { name: 'Private Parties', img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800' },
    { name: 'In-house Concerts', img: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800' },
  ];

  return (
    <section id="events" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">Events We Cover</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Perfect Sound for Every Occasion</h3>
          </div>
          <p className="text-zinc-400 md:max-w-xs">
            From intimate celebrations to large-scale productions, we bring the same level of excellence to every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventTypes.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img
                src={event.img}
                alt={event.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-2xl font-bold text-white mb-2">{event.name}</h4>
                <div className="w-12 h-1 bg-gold-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1514525253361-bee8718a74a2?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1520110120385-81262c3f5601?auto=format&fit=crop&q=80&w=800',
  ];

  return (
    <section id="gallery" className="py-24 bg-zinc-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Moments Captured</h3>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Wedding Client',
      text: 'Ciiku Entertainment made our wedding night magical. The sound quality was incredible, and the DJ kept everyone on the floor until the very last song!',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Event Manager',
      text: 'Professionalism at its finest. They handled all our technical needs for the annual gala seamlessly. Highly recommended for any corporate function.',
      rating: 5
    },
    {
      name: 'Amanda Peters',
      role: 'Birthday Party Host',
      text: 'The MC was so engaging and funny! They really knew how to manage the crowd and keep the energy high throughout the entire party.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
                ))}
              </div>
              <p className="text-zinc-300 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="text-white font-bold">{t.name}</h4>
                <p className="text-zinc-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's Create Something <span className="gold-text-gradient">Extraordinary</span></h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Ready to take your event to the next level? Fill out the form or reach out to us directly. We'll get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gold-500">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Call Us</p>
                  <p className="text-white font-medium">+254 773 529 337</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gold-500">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Email Us</p>
                  <p className="text-white font-medium">info@ciiku-ent.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gold-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-zinc-500 text-sm">Location</p>
                  <p className="text-white font-medium">Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Instagram, Facebook, Music].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-gold-500 hover:border-gold-500 transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl"
          >
            {formState === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-gold-500/20 text-gold-500 flex items-center justify-center mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-zinc-400">Thank you for reaching out. We'll be in touch shortly.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="mt-8 text-gold-500 font-bold border-b border-gold-500"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Event Type</label>
                    <select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors appearance-none">
                      <option>Wedding</option>
                      <option>Corporate</option>
                      <option>Birthday</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Event Date</label>
                    <input
                      required
                      type="date"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">Message / Requirements</label>
                  <textarea
                    rows={4}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors resize-none"
                    placeholder="Tell us more about your event..."
                  ></textarea>
                </div>
                <button
                  disabled={formState === 'submitting'}
                  className="w-full gold-gradient text-zinc-950 font-bold py-4 rounded-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Request a Quote'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold tracking-tighter gold-text-gradient">CIIKU</span>
              <span className="text-2xl font-light tracking-widest ml-2">ENT.</span>
            </div>
            <p className="text-zinc-500 leading-relaxed mb-8">
              Professional entertainment and sound hire services for events that leave a lasting impression. Quality, reliability, and energy.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Music].map((Icon, i) => (
                <a key={i} href="#" className="text-zinc-500 hover:text-gold-500 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Events', 'Gallery'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-zinc-500 hover:text-gold-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Sound Hire', 'Professional DJs', 'Charismatic MCs', 'Live Bands', 'Acoustic Music'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-zinc-500 hover:text-gold-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-zinc-500 text-sm mb-4">Subscribe for event tips and exclusive offers.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-gold-500 w-full"
              />
              <button className="gold-gradient text-zinc-950 p-2 rounded-lg">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Ciiku Entertainment. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-zinc-600 hover:text-zinc-400 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 selection:bg-gold-500 selection:text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Events />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/254773529337"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
}
