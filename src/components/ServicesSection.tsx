import FadeIn from "./FadeIn";

const items = [
  {
    num: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    num: "02",
    name: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    num: "03",
    name: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    num: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative z-10 rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <FadeIn delay={0} y={40}>
        <h2
          className="mb-16 text-center font-black uppercase sm:mb-20 md:mb-28"
          style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {items.map((item, i) => (
          <FadeIn key={item.num} delay={i * 0.1}>
            <div className="flex items-start gap-6 py-8 sm:gap-8 sm:py-10 md:gap-10 md:py-12 border-b border-[rgba(12,12,12,0.15)]">
              <span
                className="min-w-[80px] font-black leading-none sm:min-w-[100px]"
                style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)" }}
              >
                {item.num}
              </span>
              <div>
                <p
                  className="font-medium uppercase"
                  style={{ color: "#0C0C0C", fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                >
                  {item.name}
                </p>
                <p
                  className="max-w-2xl font-light leading-relaxed"
                  style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)", opacity: 0.6 }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
