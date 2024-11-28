import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
}) => {
  return (
    <motion.div variant={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-white p-2 rounded-2xl sm:w-[300px] w-full justify-center items-center flex flex-col"
      >
        <div className="relative w-full h-[250px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

        </div>2

        <div className="mt-0">
          <h3 className="text-black font-bold text-[19px] ">{name}</h3>

        </div>

        <div className="mt-0 flex flex-wrap gap-2 ">
          {tags.map(tag => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>MY PORTFOLIO</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-0 text-WHITE text-[13px] max-w-1xl leading-[20px] "
        >

        </motion.p>
      </div>

      <div className="mt-1 flex flex-wrap gap-10 justify-center items-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="absolute xs:bottom-0 bottom-25 w-full flex justify-center items-center">
        <a href="#receiver">
          <div className="w-[35px] h-[60px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
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

export default SectionWrapper(Works, 'works');
