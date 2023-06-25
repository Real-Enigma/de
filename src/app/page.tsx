"use client";
import React from 'react';
import Layout from './layout';
import SustainabilityCard from './cards';
import { FiSun } from 'react-icons/fi';
import { MdEco } from 'react-icons/md';
import Navbar from './components/Navbar';

const Page: React.FC = () => {
  const sustainabilityFacts = [
    'Approximately 8 million metric tons of plastic waste enter the oceans each year.',
    'Recycling one aluminum can saves enough energy to power a TV for three hours.',
    'The fashion industry is responsible for 10% of annual global carbon emissions.',
    'E-waste is the fastest-growing waste stream globally, with about 50 million metric tons generated each year.',
    'By 2050, it is estimated that there will be more plastic in the oceans than fish.',
  ];

  const sustainabilityTrivia = [
    'The first Earth Day was celebrated on April 22, 1970.',
    'Renewable energy sources such as solar and wind power are becoming more affordable and widely used.',
    'Composting is an effective way to reduce food waste and create nutrient-rich soil.',
    'Many companies are adopting sustainable practices to reduce their environmental impact.',
    'Individual actions, such as using reusable bags and reducing water consumption, can make a difference.',
  ];

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />

        <div className="container mx-auto py-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold">Welcome to the Sustainability Hub</h1>
            <p className="text-lg mt-4">
              We are dedicated to creating a sustainable future through engineering and design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SustainabilityCard
              title="Renewable Energy"
              description="Learn about renewable energy sources and how to integrate them into your designs."
              icon={FiSun}
            />
            <SustainabilityCard
              title="Circular Economy"
              description="Discover ways to design products and systems that promote reuse and recycling."
              icon={MdEco}
            />
            {/* Add more SustainabilityCard components with different icons */}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Sustainability Facts</h2>
            <ul className="list-disc pl-6">
              {sustainabilityFacts.map((fact, index) => (
                <li key={index}>{fact}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Sustainability Trivia</h2>
            <ul className="list-disc pl-6">
              {sustainabilityTrivia.map((trivia, index) => (
                <li key={index}>{trivia}</li>
              ))}
            </ul>
          </div>
        </div>

        <footer className="bg-gray-800 py-4 text-center text-white">
          &copy; {new Date().getFullYear()} Sustainability Hub. All rights reserved.
        </footer>
      </div>
    </Layout>
  );
};

export default Page;
