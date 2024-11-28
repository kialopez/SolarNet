import { motion } from 'framer-motion';

import { TypeAnimation } from 'react-type-animation';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} ` }>
<span className="text-[#000000]">SOLARNET</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-100`}>
          <TypeAnimation
        sequence={[
          "Let's Build Something Great Together",
          1000,
          "Let's Innovate Together",
          1000,
          "Let's Create Something Amazing",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '1em' }}
      />   
          </p>
        </div>
      </div>
      
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
