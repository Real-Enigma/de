"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
 
  return (
    
      <div className='w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4'>
        <h1 className='text-4xl font-semibold text-black'>404 - Page Not Found</h1>
        <h4 className='py-10 text-lg text-black font-light'>
          Sorry, there isn't much to see here. How about you check out the rest of our amazing website?
        </h4>
       
        <div className='space-x-4 justify-center'>
          <Link className='font-semibold text-blue-600 hover:text-red-500 duration-300' href='/'>
            Homepage
          </Link>
        </div>
      </div>
  );
}
