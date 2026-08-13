"use client";
<<<<<<< Updated upstream

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
=======

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const info = [
  { icon: <FaEnvelope />, title: "Email", description: "ag2936@njit.edu", href: "mailto:ag2936@njit.edu" },
  { icon: <FaPhoneAlt />, title: "Phone", description: "+1 (908) 356-9089", href: "tel:+19083569089" },
  { icon: <FaMapMarkerAlt />, title: "Location", description: "Manalapan Township, New Jersey", href: null },
];

const socials = [
  { icon: <FaLinkedin />, label: "LinkedIn", href: "https://www.linkedin.com/in/abhishek-sairam-gaduputi-23899b175/" },
  { icon: <FaGithub />, label: "GitHub", href: "https://github.com/sairam782" },
  { icon: <FaWhatsapp />, label: "WhatsApp", href: "https://wa.me/19083569089" },
];

const Contact = () => {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/19083569089?text=${encodeURIComponent(
      "Hi Abhishek! I came across your portfolio and would like to connect."
    )}`;
    window.open(url, "_blank");
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] py-16"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <span className="eyebrow">{"// contact"}</span>
          <h1 className="h2 mt-3 text-white">
            Let's build <span className="text-gradient">something</span>.
          </h1>
          <p className="mt-4 text-white/60 max-w-xl">
            Whether you have a project in mind, a research idea, or just want to
            chat about AI, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main card */}
          <div className="xl:col-span-2 card p-8 md:p-10 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <span className="chip">
                <span className="status-dot" />
                Usually replies within a day
              </span>
              <h3 className="mt-6 text-2xl md:text-3xl text-white font-semibold">
                Fastest way to reach me?
              </h3>
              <p className="mt-3 text-white/60 max-w-lg">
                Ping me on WhatsApp for a quick reply, or drop me an email for
                anything more detailed.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-white text-black hover:bg-accent inline-flex items-center gap-2"
                >
                  <FaWhatsapp className="text-lg" />
                  WhatsApp me
                </Button>
                <a href="mailto:ag2936@njit.edu">
                  <Button
                    variant="outline"
                    className="border-white/[0.14] bg-white/[0.03] text-white hover:bg-white/[0.06] hover:text-white inline-flex items-center gap-2"
                  >
                    <FaEnvelope />
                    Email
                  </Button>
                </a>
              </div>

              <div className="mt-10 divider" />

              <div className="mt-6 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-2 text-sm text-white/70 hover:text-white hover:border-accent transition-colors"
                  >
                    <span className="text-accent">{s.icon}</span>
                    {s.label}
                    <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="flex flex-col gap-5">
            {info.map((item) => {
              const Wrap = item.href ? "a" : "div";
              const props = item.href ? { href: item.href } : {};
              return (
                <Wrap
                  key={item.title}
                  {...props}
                  className="card group p-6 flex items-center gap-4"
                >
                  <span className="h-12 w-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-accent text-lg group-hover:bg-accent group-hover:text-black transition-all">
                    {item.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs uppercase tracking-[0.15em] text-white/40">
                      {item.title}
                    </p>
                    <p className="text-white truncate">{item.description}</p>
                  </div>
                </Wrap>
              );
            })}
          </div>
>>>>>>> Stashed changes
        </div>
      </div>
    </motion.main>
  );
};

export default Contact;
