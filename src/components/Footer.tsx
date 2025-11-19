// src/components/Footer.tsx
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Mostakim69",
      hoverColor: "hover:text-gray-900",
      shadowColor: "shadow-gray-500/20",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/MostakimHosennnn",
      hoverColor: "hover:text-blue-600",
      shadowColor: "shadow-blue-500/20",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/posterboy3369/",
      hoverColor: "hover:text-pink-600",
      shadowColor: "shadow-pink-500/20",
    },
    {
      name: "Twitter",
      icon: FaTwitter,
      url: "https://x.com/mostakim14467",
      hoverColor: "hover:text-blue-400",
      shadowColor: "shadow-blue-400/20",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/@PosterBoy3369",
      hoverColor: "hover:text-red-600",
      shadowColor: "shadow-red-500/20",
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      className="relative py-16 bg-blue-50"
    >
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-12">
          {/* Logo section */}
          <motion.div variants={itemVariants} className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl shadow-lg shadow-blue-500/30" />
              <span className="text-2xl font-bold">POS SaaS</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Smart, simple & modern point-of-sale solution for businesses.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Integrations"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h3 className="font-semibold mb-5 text-foreground">Follow Us</h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -6, scale: 1.12 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-xl border border-border bg-background/70 backdrop-blur-sm flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.hoverColor} hover:border-transparent hover:shadow-xl ${social.shadowColor}`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Copyright Section - নিচের লাইনটা এখন উপরের লাইনের সাথে পুরোপুরি মিলছে */}
        <motion.div
          variants={itemVariants}
          className="relative mt-14 pt-8 text-center"
        >
          {/* Bottom gradient line - exactly same as top */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

          <p className="text-sm text-muted-foreground relative z-10">
            © {year} POS SaaS. All rights reserved. •{" "}
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>{" "}
            •{" "}
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
