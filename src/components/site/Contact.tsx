import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Request received", description: "Our team will contact you shortly." });
  };

  return (
    <section id="contact" className="py-20 bg-muted/40 relative">
      <div className="container grid lg:grid-cols-2 gap-10 items-start">
        <form onSubmit={onSubmit} className="glass rounded-xl p-6 space-y-4">
          <h2 className="font-heading text-3xl mb-2">Get a Free Quote</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Name" required aria-label="Name" />
            <Input placeholder="Phone" type="tel" required aria-label="Phone" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Email" type="email" aria-label="Email" />
            <Select>
              <SelectTrigger aria-label="Service">
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential Cleaning</SelectItem>
                <SelectItem value="sofa">Sofa / Furniture</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input placeholder="Preferred Date" type="date" aria-label="Date" />
            <Input placeholder="Location" aria-label="Location" />
          </div>
          <Textarea placeholder="Message" className="min-h-28" aria-label="Message" />
          <Button type="submit" size="lg" variant="hero">Submit Request</Button>
        </form>

        <div className="rounded-xl overflow-hidden border min-h-[300px] bg-card">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019122505473!2d-122.42067958468135!3d37.779280979758336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e0a0d07%3A0x4f8e3d1b1e!2sCleaning%20Service!5e0!3m2!1sen!2sus!4v1614031234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <a
        href="https://wa.me/919000000000"
        className="fixed bottom-24 right-6 z-40 h-12 w-12 rounded-full flex items-center justify-center bg-secondary text-secondary-foreground shadow-lg hover:scale-105 transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="" />
      </a>
      <a
        href="tel:+919000000000"
        className="fixed bottom-8 right-6 z-40 h-12 w-12 rounded-full flex items-center justify-center bg-primary text-primary-foreground shadow-lg hover:scale-105 transition"
        aria-label="Call us"
      >
        <Phone />
      </a>
    </section>
  );
};

export default Contact;
