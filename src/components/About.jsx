import React from 'react';
import ParallaxTilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <ParallaxTilt
      className="xs:w-[250px] w-full"
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
    >
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </ParallaxTilt>
  );
};


const About = () => {
  return (
    <> 
    <motion.div>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I am an ASP.NET Full-Stack developer that created web applications in ASP .Net Core by using MVC and Web API.
       For the frontend,
        I utilized Angular for the Single Page Application with TypeScript, HTML5, CSS, Bootstrap to create web page UI.
        Expertise in frameworks like React, Node.js, and Three.js.
         For the backend, I used C# to implement entity framework core, ADO .NET, and MS SQL Server databases.
          I used GitHub for version control, xUnit, MOQ framework for unit testing to improve code quality.
           Azure DevOps for CI/CD pipeline. 
           In my previous project, I used Kanban Board to keep track of the progress in the agile scrum methodology. 
           I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. 
        Let's work together to bring your ideas to life!
    </motion.p>
    <div className="mt-20 flex flex-wrap gap-10">
      {services.map((service,index)=>(
        <ServiceCard key ={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper (About,"about");