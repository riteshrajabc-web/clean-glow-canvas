import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const socials = [
    { Icon: Facebook, href: "#" },
    { Icon: Instagram, href: "#" },
    { Icon: Twitter, href: "#" },
    { Icon: Linkedin, href: "#" },
  ];
  return (
    <footer className="bg-foreground text-background py-12 mt-16">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md" style={{ background: "var(--gradient-primary)" }} />
          <span className="font-heading font-semibold">SLG Housekeeping Services</span>
        </div>
        <div className="flex items-center gap-4">
          {socials.map(({ Icon, href }) => (
            <a key={href} href={href} aria-label="social" className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition">
              <Icon className="text-background/90" />
            </a>
          ))}
        </div>
      </div>
      <div className="container text-sm text-background/70 mt-6">© {new Date().getFullYear()} SLG Housekeeping Services. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
