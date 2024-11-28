import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';


import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { body } from '../assets';
import { AiFillPhone, AiOutlineMail, AiTwotoneMail } from 'react-icons/ai';
import { FaMapMarkedAlt } from 'react-icons/fa';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full black-gradient p-[2px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white rounded-[20px] py-5 px-12 min-h-[150px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-25 h-25 object-contain" />
          <h3 className="text-black text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <> 
      <div className='flex flex-row justify-start items-center mt-0 '>
        <div className="w-4/6"> 
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}></p>  
          <h2 className={styles.sectionHeadText}>Know me More!</h2>
        </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-1 text-white text-[17=px] max-w-2xl leading-[20px]"
      >
        I am Kurt Ivan A. Lopez, born and raised from the lowlands of Quirino Province. I am 18 years old and currently taking BSCS in the University of the Cordilleras. Elon Musk&#39;s success is what got me into programming and now  I have my own self established Fivem Car Developing business called NWORX.
      </motion.p>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-5 text-white text-[17=px] max-w-2xl leading-[30px]"
      >EDUCATIONAL ATTAINMENT:
      </motion.p>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-1 text-white text-[17=px] max-w-2xl leading-[30px]"
      >Graduated Elementary at Saint Vincent School with Honors
      </motion.p>  <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-1 text-white text-[17=px] max-w-2xl leading-[30px]"
      >Graduated Junior and Senior High School at Maddela Comprehensive High School with Honors
      </motion.p>
    </div>
      
      <div className="w-1/5 ">
        <Tilt >
          <motion.img src={body} variants={textVariant} className=' w-full white-gradient p-[1px] rounded-[20px] shadow-card' />
        </Tilt>
      </div>
      </div>
      
      <div className="mt-1 w-full ">
      <h2 className={styles.sectionHeadText}>My Skills</h2>
      </div>

      <div className="mt-2 flex gap-45">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      
      <div className="mt-2 w-full ">
      <h2 className={styles.sectionHeadText}>Contact Me!</h2>
      </div>
      
      <div>
        <ul>
        <li>
          <AiFillPhone size="1.5em" color="white" /> 09295923239
          </li>
          <li>
          <AiOutlineMail size="1.5em" color="white" /> lopezkurt09@gmail.com
          </li>
          <li>
          <AiTwotoneMail size="1.5em" color="white" /> email@uc-bcf.edu.ph
          </li>
          <li>
          <FaMapMarkedAlt size="1.5em" color="white" /> Baguio City, Philippines
          </li>
        </ul>
      </div>
      <div className="absolute xs:bottom-20 bottom-32 w-full flex justify-center items-center">
        <a href="#works">
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

    </>
    
  );
};

      

export default SectionWrapper(About, 'about');
