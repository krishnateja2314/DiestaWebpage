'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  useEffect(() => {
    if (underlineRef.current) {
      const targetIndex = hoveredIndex !== null ? hoveredIndex : 0
      const offset = targetIndex * 120
      underlineRef.current.style.transform = `translateX(${offset}px)`
      underlineRef.current.style.width = hoveredIndex !== null ? '120px' : '120px'
    }
  }, [hoveredIndex])

  const handleMenu = () => setMenuOpen(!menuOpen)

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

      <nav className="hidden">
        <motion.button
          className="fixed right-1 top-4 z-50 w-12 h-12 rounded-full bg-white/10 bg-opacity-20 backdrop-filter backdrop-blur-lg flex items-center justify-center"
          onClick={handleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={menuOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 }
            }}
          >
            <svg width="23" height="23" viewBox="0 0 23 23">
              <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="white"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" }
                }}
              />
              <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="white"
                strokeLinecap="round"
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }}
              />
              <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="white"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" }
                }}
              />
            </svg>
          </motion.div>
        </motion.button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-64 h-screen bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg z-40 shadow-2xl rounded-l-3xl"
            >
              <motion.ul
                className='flex flex-col justify-center h-full px-8 space-y-6'
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
              >
                {menuItems.map((item) => (
                  <motion.li
                    key={item.text}
                    variants={{
                      open: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          y: { stiffness: 1000, velocity: -100 }
                        }
                      },
                      closed: {
                        y: 50,
                        opacity: 0,
                        transition: {
                          y: { stiffness: 1000 }
                        }
                      }
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleClick(item.href)
                      }}
                      className={`text-[24px] font-semibold transition-colors duration-300 inline-block ${
                        activeSection === item.href.slice(1)
                          ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text'
                          : 'text-white hover:text-gray-200'
                      }`}
                    >
                      {item.text}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default TeamNavbar

