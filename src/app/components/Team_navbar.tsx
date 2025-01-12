'use client'

import React, { useState, useEffect, useRef } from 'react'

interface NavItem {
  text: string;
  href: string;
}

const menuItems: NavItem[] = [
  { text: 'Events', href: '#events' },
  { text: 'Hospitality', href: '#hospitality' },
  { text: 'PR', href: '#pr' },
  { text: 'Multimedia', href: '#multimedia' },
  { text: 'Web', href: '#web' },
]

function TeamNavbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const underlineRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      let currentSection = '';
      for (const item of menuItems) {
        const element = document.getElementById(item.href.slice(1));
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 0 && bottom > windowHeight * 0.5) {
            currentSection = item.href.slice(1);
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (underlineRef.current) {
      const targetIndex = hoveredIndex !== null ? hoveredIndex : 0
      const offset = targetIndex * 120
      underlineRef.current.style.transform = `translateX(${offset}px)`
      underlineRef.current.style.width = hoveredIndex !== null ? '120px' : '120px'
    }
  }, [hoveredIndex])

  const handleClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const yOffset = -60
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <div className='hidden justify-center items-center md:flex'>
        <nav className="w-[700px] shadow-xl items-center justify-center h-20 rounded-[40px] flex bg-[rgba(0,0,0,0.1)] backdrop-blur-lg z-50 transition-all duration-300 top-[60px]">
          <div className='px-4 flex'>
            <ul className='flex relative'>
              {menuItems.map((item, index) => (
                <li
                  key={item.text}
                  className='relative w-[120px]'
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleClick(item.href)
                    }}
                    className={`hover:-translate-y-1 flex items-center justify-center h-full py-2 px-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500 text-[17px] transition-colors duration-300 ${activeSection === item.href.slice(1) ? 'font-bold' : ''
                      }`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
              <span
                ref={underlineRef}
                className='absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300 ease-in-out'
                style={{
                  width: '120px',
                  transform: 'translateX(0px)',
                }}
              />
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

export default TeamNavbar

