"use client"

import 'tailwindcss/tailwind.css'
import Image from 'next/image'
import HeroSections from './components/HeroSections'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import EmailSection from './components/EmailSection'
import Footer from './components/Footer'
import { useState } from 'react'


export default function Home() {

  const [language, setLanguage] = useState('en')

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar language={language} setLanguage={setLanguage}/>
      <div className='container mt-24 mx-auto px-12 py-4'>
      <HeroSections language={language} />
      <AboutSection language={language} />
      <ProjectsSection language={language} />
      <EmailSection language={language} />
      </div>
      <Footer />
    </main>
  )
}
