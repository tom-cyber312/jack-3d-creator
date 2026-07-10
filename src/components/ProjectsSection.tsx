import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn";
import LiveProjectButton from "./LiveProjectButton";

const projects = [
  {
    num: "01",
    category: "Client",
    name: "Nextlevel Studio",
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85",
  },
  {
    num: "02",
    category: "Personal",
    name: "Aura Brand Identity",
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85",
  },
  {
    num: "03",
    category: "Client",
    name: "Solaris Digital",
    col1img1: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    col1img2: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
    col2img: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  },
];

export default function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  return (
    <section
      ref={container}
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <h2
        className="hero-heading mb-16 text-center font-black uppercase sm:mb-20 md:mb-28"
        style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
      >
        Project
      </h2>
      {projects.map((project, index) => {
        const totalCards = projects.length;
        const targetScale = 1 - (totalCards - 1 - index) * 0.03;
        const start = (index) / totalCards;
        const end = (index + 1) / totalCards;
        const scale = useTransform(scrollYProgress, [start, end], [1, targetScale]);

        return (
          <div key={project.num} className="sticky top-24 h-[85vh] md:top-32" style={{ top: `${index * 28}px` }}>
            <FadeIn delay={index * 0.15}>
              <motion.div
                className="rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
                style={{ scale, top: `${index * 28}px` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span
                      className="font-black leading-none"
                      style={{ color: "#0C0C0C", fontSize: "clamp(3rem, 10vw, 140px)" }}
                    >
                      {project.num}
                    </span>
                    <p className="font-medium uppercase" style={{ color: "#D7E2EA", fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}>
                      {project.category}
                    </p>
                    <p className="font-medium uppercase" style={{ color: "#D7E2EA", fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}>
                      {project.name}
                    </p>
                  </div>
                  <LiveProjectButton />
                </div>
                <div className="mt-4 flex gap-3">
                  <div className="flex w-[40%] flex-col gap-3">
                    <img
                      src={project.col1img1}
                      alt=""
                      className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                      style={{ height: "clamp(130px, 16vw, 230px)" }}
                    />
                    <img
                      src={project.col1img2}
                      alt=""
                      className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                      style={{ height: "clamp(160px, 22vw, 340px)" }}
                    />
                  </div>
                  <div className="w-[60%]">
                    <img
                      src={project.col2img}
                      alt=""
                      className="h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
                    />
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        );
      })}
    </section>
  );
}
