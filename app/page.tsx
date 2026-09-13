"use client";

import { useEffect, useState } from "react";

const services = [
  ["01", "Wedding Photography", "Editorial portraits, candid emotion and every ritual—crafted into a timeless visual story."],
  ["02", "4K Cinematic Films", "A film made around your people, your energy and the moments you never saw happening."],
  ["03", "Aerial Perspectives", "Licensed drone coverage that gives celebrations scale, place and a cinematic sense of arrival."],
  ["04", "Portrait Sessions", "Natural, guided portraiture for couples, families, graduates and personal milestones."],
  ["05", "Albums & Fine Art", "Museum-quality prints and heirloom albums designed to feel as special decades from now."],
  ["06", "Live Event Coverage", "Reliable multi-camera photography and film coverage for cultural and corporate occasions."],
];

const packages = [
  { name: "The Intimate", label: "Essential story", price: "₹XX,XXX", features: ["1-day photography", "Candid highlights", "Curated digital gallery", "Signature photo film"] },
  { name: "The Signature", label: "Most chosen", price: "₹XX,XXX", featured: true, features: ["Photo + cinematic film", "Dedicated candid team", "4K delivery", "Premium album included"] },
  { name: "The Heirloom", label: "Complete legacy", price: "₹XX,XXX", features: ["Multi-event coverage", "Aerial cinematography", "Teaser + full film", "Luxury album collection"] },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sagar Studio home"><span className="brand-mark">S</span><span>Sagar Studio<small>Wedding photography &amp; cinematography</small></span></a>
        <button className="menu-button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
        <nav className={menuOpen ? "nav open" : "nav"} onClick={() => setMenuOpen(false)}><a href="#about">About</a><a href="#services">Services</a><a href="#stories">Stories</a><a href="#investment">Investment</a><a className="nav-cta" href="#contact">Check availability</a></nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true"/><div className="hero-grain" aria-hidden="true"/>
        <div className="hero-content"><p className="eyebrow hero-kicker">Wedding stories · Portraits · 4K films</p><h1>Capturing moments.<br/><em>Keeping them forever.</em></h1><p className="hero-copy">Honest photographs and cinematic films for people who want to remember how it felt—not just how it looked.</p><div className="hero-actions"><a className="button gold" href="#stories">Explore our stories</a><a className="text-link light" href="#contact">Plan your celebration <span>↗</span></a></div></div>
        <div className="scroll-cue"><span>Scroll to discover</span><i/></div>
      </section>

      <section className="section about" id="about">
        <div className="section-label" data-reveal><span>01</span> Behind the lens</div>
        <div className="about-grid"><div data-reveal><p className="eyebrow">Stories, not poses</p><h2>Crafting cinematic legacies, one honest frame at a time.</h2><p className="body-copy">Sagar Studio brings patient observation and cinematic craft to weddings, portraits and celebrations. Led by Shaik Alam, our team blends candid storytelling with an editorial eye—so every image feels polished, but never staged.</p><div className="stats"><div><strong>15+</strong><span>Years of craft</span></div><div><strong>4K</strong><span>Cinematic delivery</span></div><div><strong>∞</strong><span>Moments kept</span></div></div></div><figure className="portrait-frame" data-reveal><img src="/gallery/founder.webp" alt="Sagar Studio photographer at work"/><figcaption><span>Shaik Alam</span> Photographer &amp; filmmaker</figcaption></figure></div>
      </section>

      <section className="services" id="services"><div className="section inner"><div className="center-head" data-reveal><p className="eyebrow">What we create</p><h2>Complete visual storytelling,<br/><em>from vows to forever.</em></h2></div><div className="service-grid">{services.map(([n,title,copy]) => <article className="service-card" key={n} data-reveal><span>{n}</span><div className="service-icon">✦</div><h3>{title}</h3><p>{copy}</p><a href="#contact" aria-label={`Enquire about ${title}`}>Enquire <b>↗</b></a></article>)}</div></div></section>

      <section className="section stories" id="stories">
        <div className="stories-head" data-reveal><div><div className="section-label"><span>02</span> Selected stories</div><h2>Written in light<br/>and devotion.</h2></div><p>Every celebration has its own rhythm. We follow it quietly, then shape it into a story worth returning to.</p></div>
        <div className="gallery-grid">{[1,2,3,4].map((item,index) => <a className={`gallery-item gallery-${item}`} href="#contact" key={item} data-reveal><img src={`/gallery/story-${item}.webp`} alt={["Outdoor wedding portrait","Bride in a garden portrait","Traditional wedding ceremony","Joyful couple portrait"][index]}/><div className="gallery-overlay"><span>{index < 2 ? "Portrait story" : "Wedding story"}</span><h3>{["A quiet kind of joy","Among the green","Sacred beginnings","Together, entirely"][index]}</h3><p>View album ↗</p></div></a>)}</div>
        <div className="gallery-note" data-reveal><p>Full-resolution client galleries are coming soon.</p><a className="text-link" href="#contact">Request a complete album <span>↗</span></a></div>
      </section>

      <section className="drone-section"><div className="drone-image" data-reveal><img src="/gallery/drone.webp" alt="Cinematic outdoor wedding portrait"/><span className="orbit">4K · AIR · FILM · STORY ·</span></div><div data-reveal><p className="eyebrow">A wider point of view</p><h2>4K ultra-HD and<br/>high-altitude drone vision.</h2><p>From an intimate exchange of vows to the grandeur of a venue, our aerial and cinematic team captures the scale, atmosphere and movement of your celebration.</p><ul><li>4K cinematic master films</li><li>Licensed aerial coverage</li><li>Colour grading and sound design</li><li>Private digital delivery</li></ul><a className="button outline-light" href="#contact">Discuss your film</a></div></section>

      <section className="section investment" id="investment"><div className="center-head" data-reveal><p className="eyebrow">Collections &amp; investment</p><h2>Choose the way you want<br/><em>to remember it.</em></h2><p>Every celebration is different. These collections are starting points—we’ll tailor the final quote after understanding your events.</p></div><div className="price-grid">{packages.map((pkg) => <article className={pkg.featured ? "price-card featured" : "price-card"} key={pkg.name} data-reveal>{pkg.featured && <span className="popular">Most loved</span>}<p className="eyebrow">{pkg.label}</p><h3>{pkg.name}</h3><div className="price">{pkg.price}<small> onwards</small></div><ul>{pkg.features.map(f => <li key={f}><span>✓</span>{f}</li>)}</ul><a className={pkg.featured ? "button gold" : "button dark"} href="#contact">Get a tailored quote</a></article>)}</div></section>

      <section className="contact" id="contact"><div className="contact-copy" data-reveal><p className="eyebrow">Your story starts here</p><h2>Tell us what<br/>you’re celebrating.</h2><p>Share your date, venue and the moments that matter most. We’ll reply with availability and a collection made for your celebration.</p><div className="contact-detail"><span>Call / WhatsApp</span><a href="tel:+919010204543">+91 90102 04543</a></div><div className="contact-detail"><span>Based in</span><p>Hyderabad · Available worldwide</p></div></div><form className="contact-form" action="mailto:sagarstudio@example.com" method="post" encType="text/plain" data-reveal><label>Your name<input name="name" required placeholder="Name"/></label><label>Phone number<input name="phone" required placeholder="+91" type="tel"/></label><label>Event date<input name="date" type="date"/></label><label>Celebration type<select name="event"><option>Wedding</option><option>Engagement</option><option>Portrait session</option><option>Corporate / cultural event</option><option>Other</option></select></label><label className="full">Tell us a little about it<textarea name="message" rows={4} placeholder="Venue, events, what you have in mind..."/></label><button className="button gold full" type="submit">Check my date <span>↗</span></button></form></section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">S</span><span>Sagar Studio<small>Wedding photography &amp; cinematography</small></span></a><p>Stories made with patience, light and heart.</p><div><a href="#stories">Portfolio</a><a href="#contact">Contact</a><a href="#top">Back to top ↑</a></div><small>© 2026 Sagar Studio. All photographs are original work.</small></footer>
    </main>
  );
}
