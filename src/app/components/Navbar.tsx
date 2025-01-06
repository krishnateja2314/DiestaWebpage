// "use client";
// import Link from "next/link";
// import React from "react";
// import { useState } from "react";
// import { useWindowSize } from "react-use";
// import { usePathname } from "next/navigation";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const size = useWindowSize();
//   const path = usePathname();
//   console.log(path);
//   return size.width > 640 ? (
//     <nav className="h-20 z-10 fixed w-full flex justify-between bg-gradient-to-b from-secondry ">
//       <Link className="hover:skew-x-12 duration-100" href="/">
//         <img src="/diestaLogo.svg" alt="Logo" className="max-h-12 m-4" />
//       </Link>
//       <div className="flex justify-between gap-4 mr-4 mt-auto mb-auto ">
//         <Link
//           className={
//             "hover:-translate-y-1 duration-100 font-bold " +
//             `${
//               path == "/"
//                 ? "text-white"
//                 : "bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
//             }`
//           }
//           href="/"
//         >
//           <span>Home</span>
//         </Link>
//         <Link
//           className={
//             "hover:-translate-y-1 duration-100 font-bold " +
//             `${
//               path == "/events"
//                 ? "text-white"
//                 : "bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
//             }`
//           }
//           href="/events"
//         >
//           <span>Events</span>
//         </Link>
//         <Link
//           className={
//             "hover:-translate-y-1 duration-100 font-bold " +
//             `${
//               path == "/livescore"
//                 ? "text-white"
//                 : "bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
//             }`
//           }
//           href="/livescore"
//         >
//           <span>Live Score</span>
//         </Link>
//         <Link
//           className={
//             "hover:-translate-y-1 duration-100 font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
//           }
//           href={"/rulebook.pdf"}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <span>Rulebook</span>
//         </Link>
//         <Link
//           className={
//             "hover:-translate-y-1 duration-100 font-bold " +
//             `${
//               path == "/calender"
//                 ? "text-white"
//                 : "bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
//             }`
//           }
//           href="/calender"
//         >
//           <span>Calender</span>
//         </Link>
//         <Link
//           className={
//             "hover:-translate-y-1 duration-100 font-bold " +
//             `${
//               path == "/team"
//                 ? "text-white"
//                 : "bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent"
//             }`
//           }
//           href="/team"
//         >
//           <span>Team</span>
//         </Link>
//       </div>
//     </nav>
//   ) : (
//     <nav className="h-20 z-20 flex justify-between bg-gradient-to-b from-secondry">
//       <Link className="hover:skew-x-12 duration-100" href="/">
//         <img src="/diestaLogo.svg" alt="Logo" className="max-h-12 m-4" />
//       </Link>
//       <div
//         className={
//           "flex z-20 flex-col justify-items-center h-max duration-150 " +
//           `${
//             isOpen
//               ? " w-80 rounded-lg bg-gradient-to-b from-black  to-secondry"
//               : ""
//           } `
//         }
//       >
//         <button
//           className="text-white p-4 text-right hover:translate-x-2 duration-100"
//           onClick={() => {
//             setIsOpen(!isOpen);
//           }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             )}
//           </svg>
//         </button>
//         {isOpen ? (
//           <div className=" flex text-xl flex-col justify-items-center gap-4 mr-4 m-4">
//             <Link
//               className="hover:translate-x-2 duration-100 flex justify-between"
//               href="/"
//             >
//               <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
//                 Home
//               </div>
//               {path == "/" ? (
//                 <div className="w-4 content-center">
//                   <img src="/diestalogo.svg" alt="logo" />
//                 </div>
//               ) : null}
//             </Link>
//             <Link
//               className="hover:translate-x-2 duration-100 flex justify-between"
//               href="/events"
//             >
//               <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
//                 Events
//               </div>
//               {path == "/events" ? (
//                 <div className="w-4 content-center">
//                   <img src="/diestalogo.svg" alt="logo" />
//                 </div>
//               ) : null}
//             </Link>
//             <Link
//               className="hover:translate-x-2 duration-100 flex justify-between"
//               href="/livescore"
//             >
//               <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
//                 Live Score
//               </div>
//               {path == "/livescore" ? (
//                 <div className="w-4 content-center">
//                   <img src="/diestalogo.svg" alt="logo" />
//                 </div>
//               ) : null}
//             </Link>
//             <Link
//               className="hover:translate-x-2 duration-100 flex justify-between"
//               href={"/rulebook.pdf"}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
//                 Rulebook
//               </div>
//             </Link>
//             <Link
//               className="hover:translate-x-2 duration-100 flex justify-between"
//               href="/calender"
//             >
//               <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
//                 Calender
//               </div>
//               {path == "/calender" ? (
//                 <div className="w-4 content-center">
//                   <img src="/diestalogo.svg" alt="logo" />
//                 </div>
//               ) : null}
//             </Link>
//             <Link
//               className="hover:translate-x-2 duration-100 flex justify-between"
//               href="/team"
//             >
//               <div className="font-bold bg-gradient-to-bl from-yellow-500 to-yellow-50 bg-clip-text text-transparent">
//                 Team
//               </div>
//               {path == "/team" ? (
//                 <div className="w-4 content-center">
//                   <img src="/diestalogo.svg" alt="logo" />
//                 </div>
//               ) : null}
//             </Link>
//           </div>
//         ) : null}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#about' },
  { name: 'Events', href: '#schedule' },
  { name: 'Live Score', href: '#speakers' },
  { name: 'Rulebook', href: '#sponsors' },
  { name: 'Calender', href: '#contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full z-50 bg-gray-900 bg-opacity-70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-purple-500">
         <img src="/diestaLogo.svg" alt="Logo" className="max-h-16" />
    
            </Link>
          </div>
          <nav className="hidden text-xl md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-purple-500 transition duration-150 ease-in-out"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-500 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-md font-medium text-gray-300 hover:text-purple-500 hover:bg-gray-800 transition duration-150 ease-in-out"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  )
}


