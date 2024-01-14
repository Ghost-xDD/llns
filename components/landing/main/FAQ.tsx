import React from 'react';
import { faqQuestions } from '@/constants';
import FAQContent from '../sub/FAQContent';
import FAQText from '../sub/FAQText';

const FAQ = () => {
  return (
    <div
      className=" w-full items-center justify-center gap-3 h-full relative overflow-hidden pb-20 mt-10"
      style={{ transform: 'scale(0.9' }}
    >
      <FAQText />{' '}
      <div className="mt-12">
        {faqQuestions.map((faq) => (
          <FAQContent
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
