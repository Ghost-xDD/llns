import React from 'react';
import AboutText from '../sub/AboutText';

const About = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-5 pt-20"
      style={{ transform: 'scale(0.9' }}
    >
      <AboutText />
    </section>
  );
};

export default About;
