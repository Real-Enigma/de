"use client";
import React, { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [showThemes, setShowThemes] = useState(false);
  const [showTrivia, setShowTrivia] = useState(true);
  const [showGetInvolved, setShowGetInvolved] = useState(false);

  const handleThemesClick = () => {
    setShowThemes(!showThemes);
  };

  const handleTriviaClick = () => {
    setShowTrivia(!showTrivia);
  };

  const handleGetInvolvedClick = () => {
    setShowGetInvolved(!showGetInvolved);
  };

  // Sustainability themes
  const sustainabilityThemes = [
    {
      name: "Renewable Energy",
      description: "Learn about renewable energy sources and support initiatives that promote their adoption.",
      link: "https://www.un.org/en/climatechange/what-is-renewable-energy#:~:text=Renewable%20energy%20is%20energy%20derived,plentiful%20and%20all%20around%20us.",
    },
    {
      name: "Circular Economy",
      description: "Explore the concept of a circular economy and discover ways to reduce waste and promote recycling.",
      link: "https://www.europarl.europa.eu/news/en/headlines/economy/20151201STO05603/circular-economy-definition-importance-and-benefits#:~:text=What%20is%20the%20circular%20economy,cycle%20of%20products%20is%20extended.",
    },
    {
      name: "Sustainable Fashion",
      description: "Support ethical and eco-friendly practices in the fashion industry by choosing sustainable fashion brands.",
      link: "https://emeritus.org/blog/sustainability-sustainable-fashion/#:~:text=they%20do%20business.-,What%20is%20Sustainable%20Fashion%3F,animal%20welfare%2C%20and%20ecological%20integrity.",
    },
    {
      name: "Water Conservation",
      description: "Learn about water conservation techniques and take action to reduce water consumption at home and in your community.",
      link: "https://www.constellation.com/energy-101/water-conservation-tips0.html#:~:text=Water%20conservation%20is%20the%20practice,well%20as%20a%20costly%20one.",
    },
    {
      name: "Zero Waste Lifestyle",
      description: "Discover tips and practices for living a zero waste lifestyle and minimizing waste generation.",
      link: "https://onetreeplanted.org/blogs/stories/how-to-reduce-waste",
    },
    // Add more sustainability themes as needed
  ];

  // Sustainability trivia
  const sustainabilityTrivia = [
    "The first Earth Day was celebrated on April 22, 1970.",
    "Renewable energy sources are becoming more affordable and widely used.",
    "Composting is an effective way to reduce food waste and create nutrient-rich soil.",
    "Many companies are adopting sustainable practices to reduce their environmental impact.",
    "Individual actions, such as using reusable bags and reducing water consumption, can make a difference.",
    "Sustainable fashion promotes ethical and eco-friendly practices in the fashion industry.",
    "The circular economy aims to minimize waste and maximize the lifespan of products.",
    "Renewable energy sources include solar power, wind power, and hydropower.",
    "Reducing plastic waste is essential for marine conservation and the health of ecosystems.",
    "Energy-efficient buildings help reduce carbon emissions and save energy costs.",
    // Add more sustainability trivia as needed
  ];

  return (
    <div className="bg-[#97b160]">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <div className="sticky top-0 z-10 py-4 bg-[#8aca64]">
        <div className="container mx-auto flex items-center justify-between">
          <div>
            <Link href="/">
              <p className="text-black hover:text-gray-700 transition-colors duration-300 text-lg font-bold cursor-pointer">
                SUSTAINABILITY HUB
              </p>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-6 text-lg font-semibold">
              <li>
                <a
                  href="#about"
                  className="text-black hover:text-gray-700 transition-colors duration-300"
                >
                  What is Sustainability?
                </a>
              </li>
              <li>
                <button
                  onClick={handleThemesClick}
                  className="text-black hover:text-gray-700 transition-colors duration-300"
                >
                  Sustainability Themes
                </button>
                {showThemes && (
                  <ul className="absolute mt-2 py-2 px-4 bg-white shadow-lg">
                    {sustainabilityThemes.map((theme, index) => (
                      <li key={index}>
                        <a
                          href={theme.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {theme.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <main className="min-h-screen flex flex-col justify-center items-center bg-[#cbebad] text-black transition-all">
        <section className="container mx-auto py-8" id="about">
          <div className="max-w-4xl mx-auto">
            <h1 className="mt-12 text-8xl font-bold mb-12">What is Sustainability?</h1>
            <p className="text-lg text-ellipsis mr-40">
              Sustainability is the practice of living in a way that meets the needs of the present
              generation without compromising the ability of future generations to meet their own
              needs. It involves balancing environmental, social, and economic considerations to
              ensure a more sustainable and equitable world for all.
            </p>
          </div>
        </section>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 transition-colors duration-300"
          onClick={handleTriviaClick}
        >
          {showTrivia ? "Trivia" : "Trivia"}
        </button>
        {showTrivia && (
          <section className="container mx-auto py-8" id="trivia">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Sustainability Trivia</h2>
              <ul className="list-disc ml-6">
                {sustainabilityTrivia.map((trivia, index) => (
                  <li key={index} className="mb-2">
                    {trivia}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4 transition-colors duration-300"
          onClick={handleGetInvolvedClick}
        >
          {showGetInvolved ? "Get Involved" : "Get Involved"}
        </button>
        {showGetInvolved && (
          <section className="container mx-auto py-8" id="contact">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-4">Get Involved</h2>
              <p className="text-lg">
                Get involved in the efforts for <span className="font-semibold text-green-700 text-ellipsis">SUSTAINABILITY </span>
                along with others. Make your contribution to saving <span className="font-semibold text-blue-700 text-ellipsis">E</span><span className="font-semibold text-red-700 text-ellipsis">A</span>
                <span className="font-semibold text-yellow-950 text-ellipsis">R</span><span className="font-semibold text-green-600 text-ellipsis">T</span>
                <span className="font-semibold text-purple-600 text-ellipsis">H</span>
              </p>
              <h3 className="text-xl font-bold mt-8 mb-4">Sustainability Organizations</h3>
              <ul className="list-disc ml-6">
                <li className="mb-2">
                  <a
                    href="https://www.greenpeace.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Greenpeace
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.worldwildlife.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    World Wildlife Fund
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.sierraclub.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Sierra Club
                  </a>
                </li>
              </ul>
            </div>
          </section>
        )}
      </main>
      <footer className="py-4 bg-[#8aca64]">
        <div className="container mx-auto text-center text-black">
          <ul className="flex justify-center space-x-4">
            <li>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/anand-abraham-98a0b6227/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold hover:text-gray-300 transition-colors duration-300"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                <a href="https://github.com/Real-Enigma" > My Github</a>
              </button>
            </li>
          </ul>
          <p className="text-sm mt-4">
            &copy; 2023 Sustainability Hub | Made with{" "}
            <span role="img" aria-label="Love">
              ❤️
            </span>{" "}
            by Anand Abraham
          </p>
        </div>
      </footer>

    </div>

  );
};

export default Home;
