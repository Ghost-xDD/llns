'use client';
import React, { useState } from 'react';
import { BsChevronDoubleUp, BsChevronDoubleDown } from 'react-icons/bs';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQContent: React.FC<FAQProps> = ({ question, answer }) => {
  const [expand, setExpand] = useState(false);
  const expandClass = expand ? 'display' : 'hidden';
  const ansClass = `${expandClass} p-5 text-xl text-white`;

  return (
    <>
      <div className="mt-10 mx-auto text-black shadow rounded-2xl border-cyan-500  border w-[80%] md:w-3/4 transition-all duration-500 z-[20]">
        <div className="p-4 text-xl font-medium flex w-full">
          <div
            className={`font-semibold w-full cursor-pointer transition-all duration-500 text-gray-400`}
            onClick={() => setExpand(!expand)}
          >
            {question}
          </div>
          <button
            aria-label="question-expand"
            className="text-xl p-4 focus:outline-none"
            onClick={() => setExpand(!expand)}
          >
            {expand ? (
              <BsChevronDoubleDown className="w-5 text-white font-bold" />
            ) : (
              <BsChevronDoubleUp className="w-5 text-white" />
            )}
          </button>
        </div>
        <div className={ansClass}>{answer}</div>
      </div>
    </>
  );
};

export default FAQContent;
