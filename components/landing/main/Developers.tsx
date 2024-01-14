import React from 'react';
import DevelopersText from '../sub/DevelopersText';
import DevelopersContent from '../sub/DevelopersContent';

const Developers = () => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-14 mt-10"
      style={{ transform: 'scale(0.9' }}
    >
      <DevelopersText />
      <div className="mt-10">
        <DevelopersContent />
      </div>
    </section>
  );
};

export default Developers;
