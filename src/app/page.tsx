"use client";
import React, { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [showThemes, setShowThemes] = useState(false);
  const [showTrivia, setShowTrivia] = useState(false);
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
              <a href="https://www.linkedin.com/in/anand-abraham-98a0b6227" target="_blank" rel="noopener noreferrer">
                <button type="button" className="text-white bg-[#0077B5] hover:bg-[#0077B5]/90 focus:ring-4 focus:outline-none focus:ring-[#0077B5]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                  <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M416 32H31.9C14.3 32 0 45.8 0 61.6v388.9c0 15.8 14.3 29.6 31.9 29.6H416c17.6 0 32-13.8 32-29.6V61.6C448 45.8 433.6 32 416 32zM135.4 416h-66v-229h66v229zm-33-255c-19.2 0-34.8-15.6-34.8-34.8S83.2 91.4 102.4 91.4 137.2 107 137.2 126.2s-15.6 34.8-34.8 34.8zm285.5 255h-66V290.8c0-28.3-.6-64.8-39.4-64.8-39.5 0-45.6 30.9-45.6 62.9V416h-66v-229h66v33c16.7-25.7 45.5-34.8 70.2-34.8 77.3 0 91.5 50.8 91.5 116.7V416z"></path>
                  </svg>
                  LinkedIn
                </button>
              </a>

            </li>
            <li>
              <a href="https://github.com/Real-Enigma" target="_blank" rel="noopener noreferrer">
                <button type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                  <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6 .113 .793-.262 .793-.577 0-.285-.01-1.04-.015-2.04-3.34 .725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.092-.745 .083-.73 .083-.73 1.207 .085 1.838 1.236 1.838 1.236 1.07 1.835 2.81 1.305 3.495 .997 .108-.776 .418-1.305 .76-1.605-2.665-.306-5.466-1.335-5.466-5.93 0-1.31 .465-2.38 1.236-3.22-.125-.304-.535-1.527 .117-3.176 0 0 1.008-.322 3.3 1.23 .958-.267 1.983-.398 3.003-.402 1.02 .004 2.045 .135 3.003 .402 2.29-1.552 3.297-1.23 3.297-1.23 .654 1.648 .245 2.872 .12 3.176 .77 .84 1.235 1.91 1.235 3.22 0 4.608-2.805 5.62-5.475 5.92 .42 .372 .81 1.106 .81 2.23 0 1.61-.015 2.91-.015 3.295 0 .317 .192 .69 .8 .572 4.765-1.585 8.2-6.082 8.2-11.385 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  GitHub
                </button>
              </a>



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
