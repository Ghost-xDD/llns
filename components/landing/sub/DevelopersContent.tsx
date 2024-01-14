import React from 'react';

const DevelopersContent = () => {
  const features = [
    {
      title: 'LLNS React SDK',
      description:
        'We provide a React SDK for developers to integrate LLNS domains into their applications. The SDK is open source and available on GitHub.',
    },
    {
      title: 'LLNS Resolver API',
      description:
        'We provide a resolver API for developers to resolve LLNS domains and their avatars to addresses. The API is open source and available on GitHub.',
    },
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row text-white p-10 justify">
        <h1 className="text-2xl md:text-3xl font-bold self-center mb-6 md:mb-0 md:mr-12">
          Looking to Integrate LLNS Domains into your Dapp?
        </h1>
        <div className="flex-grow space-y-4 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border border-[#06b6d4] p-4 rounded-xl"
            >
              <h2 className="text-lg md:text-2xl mt-5  font-bold gradient-text mb-2 md:mb-0 md:flex-shrink-0 w-full md:w-[30%]">
                <div className="bg-gradient-to-r from-[#06b6d4] via-[#06b6d4] to-purple-500 p-1 w-[20%] rounded-full mb-2" />
                {feature.title}
              </h2>

              <p className="w-full md:w-3/4 text-xl md:mt-5 mt-2 text-gray-400 h-[100px] mb-3">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <a className="p-4  text-center text-white cursor-pointer rounded-lg md:mx-0 mx-auto bg-gradient-to-r from-cyan-800 via-cyan-500 to-cyan-600 z-[9999]">
          Go to Documentation
        </a>
      </div>
    </>
  );
};

export default DevelopersContent;
