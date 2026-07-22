"use client";

import { motion } from "framer-motion";
import { Copy, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "abhi.gaduputi@gmail.com",
    href: "mailto:abhi.gaduputi@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (908) 356-9089",
    href: "tel:+19083569089",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Manalapan Township, New Jersey",
    href: null,
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "abhishek-sairam-gaduputi",
    href: "https://www.linkedin.com/in/abhishek-sairam-gaduputi-23899b175/",
  },
];

const Contact = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "19083569089";
    const message = "Hi Abhishek, I came across your AI portfolio and would like to connect.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("abhi.gaduputi@gmail.com");
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      className="min-h-[80vh] py-14 xl:py-20"
    >
      <div className="container mx-auto">
        <div className="grid gap-8 xl:grid-cols-[1fr_0.85fr]">
          <section className="light-card rounded-3xl p-6 xl:p-10">
            <p className="eyebrow">Contact</p>
            <h1 className="h2 mt-4 text-white">Let us build something intelligent.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/64">
              I am open to AI engineering, machine learning, analytics, and product
              intelligence opportunities. Send a project idea, role, research direction,
              or collaboration note.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="gap-2" type="button" onClick={handleWhatsAppClick}>
                <MessageCircle size={18} />
                Message on WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="gap-2" type="button" onClick={copyEmail}>
                <Copy size={18} />
                Copy email
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["AI systems", "ML products", "Data dashboards"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <aside className="grid gap-4">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="light-card flex items-center gap-4 rounded-3xl p-5 hover:border-accent/35">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/12 p-3 text-accent">
                    <Icon size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">{item.title}</p>
                    <p className="mt-1 break-words font-semibold text-white">{item.value}</p>
                  </div>
                </div>
              );

              return item.href ? (
                <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </aside>
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
