import { useEffect, useRef, useState } from "react";

const gifUrls = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const row1 = gifUrls.slice(0, 11);
  const row2 = gifUrls.slice(11);
  const tripledRow1 = [...row1, ...row1, ...row1];
  const tripledRow2 = [...row2, ...row2, ...row2];

  const sectionTop = sectionRef.current?.offsetTop ?? 0;

  return (
    <section ref={sectionRef} className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
      <div className="overflow-hidden mb-3">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${(scrollY - sectionTop + window.innerHeight) * 0.3}px)`,
            willChange: "transform",
          }}
        >
          {tripledRow1.map((url, i) => (
            <img
              key={i}
              src={url}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
            />
          ))}
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(scrollY - sectionTop + window.innerHeight) * 0.3}px)`,
            willChange: "transform",
          }}
        >
          {tripledRow2.map((url, i) => (
            <img
              key={i}
              src={url}
              alt=""
              loading="lazy"
              className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
