"use client";
import React, { useRef } from "react";
import Link from "next/link";

const Home: React.FC = () => {
  // Sustainability themes
  const sustainabilityThemes = [
    { name: "Renewable Energy", link: "https://www.un.org/en/climatechange/what-is-renewable-energy#:~:text=Renewable%20energy%20is%20energy%20derived,plentiful%20and%20all%20around%20us." },
    { name: "Circular Economy", link: "https://www.europarl.europa.eu/news/en/headlines/economy/20151201STO05603/circular-economy-definition-importance-and-benefits#:~:text=What%20is%20the%20circular%20economy,cycle%20of%20products%20is%20extended." },
    { name: "Sustainable Fashion", link: "https://emeritus.org/blog/sustainability-sustainable-fashion/#:~:text=they%20do%20business.-,What%20is%20Sustainable%20Fashion%3F,animal%20welfare%2C%20and%20ecological%20integrity." },
    { name: "Water Conservation", link: "https://www.constellation.com/energy-101/water-conservation-tips0.html#:~:text=Water%20conservation%20is%20the%20practice,well%20as%20a%20costly%20one." },
    { name: "Zero Waste Lifestyle", link: "https://onetreeplanted.org/blogs/stories/how-to-reduce-waste" },
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
          <div className="flex justify-end">
            <ul className="flex space-x-7">
              <li>
                <Link href="/">
                  <p className="text-black hover:text-gray-700 transition-colors duration-300">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <p className="text-black hover:text-gray-700 transition-colors duration-300">
                    About
                  </p>
                </Link>
              </li>
              <li className="relative">
                <Link href="#contact">
                  <p className="text-black hover:text-gray-700 transition-colors duration-300">
                    Contact
                  </p>
                </Link>
                {sustainabilityThemes.length > 0 && (
                  <div className="absolute mt-2 bg-white py-2 px-4 shadow rounded right-0">
                    {sustainabilityThemes.map((theme) => (
                      <Link key={theme.name} href={theme.link}>
                        <p className="text-gray-800 block hover:bg-gray-200 py-1 cursor-pointer">
                          {theme.name}
                        </p>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main className="min-h-screen flex flex-col justify-center items-center bg-[#cbebad] text-black transition-all">
        <section className="container mx-auto py-4" id="trivia">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 hover:text-red-600 transition-colors duration-300">
            Sustainability <span className="text-black hover:text-blue-600 transition-colors duration-300">Trivia</span>
          </h2>
          <ul className="list-disc pl-6">
            {sustainabilityTrivia.map((trivia, index) => (
              <li key={index} className="text-gray-700">
                {trivia}
              </li>
            ))}
          </ul>
        </section>
        <section className="container mx-auto py-4 " id="about">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            What is Sustainability?
          </h2>
          <p className="pr-96 text-gray-700 text-ellipsis mb-5">
            Sustainability is the practice of using resources in a way that
            meets present needs without compromising the ability of future
            generations to meet their own needs. It involves balancing economic,
            environmental, and social considerations to create a more
            sustainable and equitable world.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Sustainable Practices
          </h2>
          <p className="text-gray-700">
            Sustainable practices include:
          </p>
          <ul className="list-disc pl-6">
            <li className="text-gray-700">
              Reducing energy consumption and transitioning to renewable energy
              sources.
            </li>
            <li className="text-gray-700">
              Minimizing waste and promoting recycling and composting.
            </li>
            <li className="text-gray-700">
              Conserving water and promoting water-efficient practices.
            </li>
            <li className="text-gray-700">
              Using eco-friendly materials and promoting sustainable products.
            </li>
            <li className="text-gray-700">
              Supporting fair trade and ethical labor practices.
            </li>
            <li className="text-gray-700">
              Protecting biodiversity and preserving natural habitats.
            </li>
            <li className="text-gray-700">
              Promoting sustainable agriculture and food systems.
            </li>
          </ul>
        </section>
        <section className="container mx-auto py-4" id="contact">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Get Involved
          </h2>
          <p className="text-gray-700">
            There are many ways to get involved in sustainability efforts:
          </p>
          <ul className="list-disc pl-6">
            <li className="text-gray-700">
              Educate yourself about sustainability issues and solutions.
            </li>
            <li className="text-gray-700">
              Reduce your carbon footprint by making conscious choices in your
              daily life.
            </li>
            <li className="text-gray-700">
              Support sustainable businesses and organizations.
            </li>
            <li className="text-gray-700">
              Engage in advocacy and support policy changes for a more
              sustainable future.
            </li>
            <li className="text-gray-700">
              Participate in community initiatives and events focused on
              sustainability.
            </li>
          </ul>
        </section>
        <footer className="bg-gray-800 py-4 w-full">
          <div className="container mx-auto text-center">
            <ul className="flex justify-center space-x-4">
              <li>
                <a
                  href="https://github.com/Real-Enigma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anand-abraham-98a0b6227/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/fire_side1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </div>

  );
};

export default Home;
