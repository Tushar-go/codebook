import React from 'react'
import { Hero } from './components/home/Hero';
import FeaturedProducts from './components/home/FeaturedProducts';
import { Testimonials } from './components/home/Testimonials';
import { Faq } from './components/home/Faq';
import { useTitle } from './hooks/useTitle';

function App() {
  useTitle("Access Latest Computer Science eBooks");

  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
    </main>
  )
}

export default App