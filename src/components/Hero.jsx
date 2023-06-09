import { motion } from "framer-motion";

import { styles } from "../style";
import { useEffect, useRef } from "react";
import { init } from "ityped";
// import { Computers } from "../components/canvas/Computers";

const Hero = () => {
  const textRef = useRef(null);
  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer"],
    });
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Bilal</span>
          </h1>

          <h1 className={`${styles.heroHeadSubText} text-white`}>
            Freelance &nbsp;
            <span className="text-[#915EFF] " ref={textRef} />
          </h1>
          <p className={`${styles.heroSubText} mt-3 text-white-100   `}>
            I Develop and Design, User Interfaces{" "}
            <br className="sm:block hidden" /> and Web Applications.
          </p>

          <p className={`${styles.emailSubText} mt-8  text-[#915EFF]   `}>
            bilalahmadkhan1729@gmail.com{" "}
          </p>
        </div>
      </div>

      {/* <Computers /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
