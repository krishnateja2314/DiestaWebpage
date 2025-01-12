"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TeamNavbar from "../components/Team_navbar";
import { AnimatePresence } from "framer-motion";

// DiestaLogoBorder component

function DiestaLogoBorder({ title }: { title?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative h-20 overflow-hidden w-full z-0 my-12">
      <div className="absolute inset-0 flex items-center justify-center">
        {title && (
          <h2 className="text-4xl font-bold bg-gray-900 px-4 py-2 rounded-md relative z-10">
            <span className="bg-gradient-to-r from-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
              {title}
            </span>
          </h2>
        )}
        <motion.div
          className="flex items-center absolute left-0 right-0"
          style={{ width: "200%" }}
          animate={{
            x: isHovered ? "auto" : ["-50%", "0%"],
          }}
          transition={{
            x: {
              repeat: isHovered ? 0 : Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...Array(32)].map((_, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 flex items-center justify-center md:w-[6.25%] w-[12.5%]"
              animate={{
                rotate: isHovered ? 0 : [0, 360],
              }}
              transition={{
                rotate: {
                  repeat: isHovered ? 0 : Infinity,
                  repeatType: "loop",
                  duration: 10,
                  ease: "linear",
                },
              }}
            >
              <button
                onClick={scrollToTop}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="focus:outline-none"
                aria-label="Scroll to top"
              >
                <Image
                  src="/Diesta.png"
                  alt="Diesta Logo"
                  width={40}
                  height={40}
                  className="opacity-30 hover:opacity-60 transition-opacity w-[30px] md:w-[40px] cursor-pointer"
                  priority
                />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

interface TeamMember {
  name: string;
  role: string;
  imageUrl?: string;
}

interface Teams {
  overallCoordinators: TeamMember[];
  eventHeads: TeamMember[];
  eventCoordinators: TeamMember[];
  hospitalityHeads: TeamMember[];
  hospitalityCoordinators: TeamMember[];
  multimediaHeads: TeamMember[];
  multimediaCoordinators: TeamMember[];
  prHeads: TeamMember[];
  prCoordinators: TeamMember[];
  webHeads: TeamMember[];
  webCoordinators: TeamMember[];
}

interface TeamSectionProps {
  title?: string;
  members: TeamMember[];
  size?: "sm" | "md" | "lg";
  id?: string;
}

const TeamSection: React.FC<TeamSectionProps> = ({
  title,
  members,
  size = "md",
  id,
}) => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const sizeClasses = {
    lg: "md:w-[400px] md:h-[500px] w-[300px] h-[400px]",
    md: "md:w-[375px] md:h-[475px] w-[275px] h-[375px]",
    sm: "md:w-[300px] md:h-[400px] w-[225px] h-[325px]",
  };

  //Initial and animate variants for the container and each item
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      rotateX: -45,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  };

  const glowVariants = {
    idle: { opacity: 0 },
    hover: {
      opacity: [0, 1, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div
      id={id}
      className="w-full my-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {title && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 1,
          }}
          className="relative mb-16"
        >
          <motion.h2 className="text-5xl font-bold text-center relative z-10 bg-gradient-to-r from-violet-400 via-fuchsia-500 to-pink-500 text-transparent bg-clip-text">
            {title}
          </motion.h2>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-white blur-3xl -z-10"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}

      <motion.div
        variants={containerVariants}
        className="flex flex-wrap justify-center gap-8"
      >
        {members.map((member, index) => (
          <motion.div
            key={member.name}
            variants={itemVariants}
            className={`${sizeClasses[size]} p-4`}
            style={{ height: size === "lg" ? "" : "" }}
            onHoverStart={() => setHoveredId(member.name)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <motion.div
              className={`bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg relative group  h-full flex flex-col }`}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 -z-10"
                variants={glowVariants}
                animate={hoveredId === member.name ? "hover" : "idle"}
              />

              <div className={`relative overflow-hidden flex-grow`}>
                <motion.img
                  src={member.imageUrl || "/api/placeholder/300/300"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.4 },
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <motion.div
                className="md:p-6 p-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg md:text-xl  font-semibold mb-2 text-white bg-gradient-to-r from-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                  {member.name}
                </h3>
                <p className="text-gray-400 md:text-[18px] text-[14px]">
                  {member.role}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

//TeamPage component

const TeamPage: React.FC = () => {
  // Mobile navbar
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenu = () => setMenuOpen(!menuOpen);
  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -60;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
  };
  // Typing animation of main title

  interface NavItem {
    text: string;
    href: string;
  }

  const menuItems: NavItem[] = [
    { text: "Events", href: "#events" },
    { text: "Hospitality", href: "#hospitality" },
    { text: "PR", href: "#pr" },
    { text: "Multimedia", href: "#multimedia" },
    { text: "Web", href: "#web" },
  ];

  // Typing animation of main title
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "TEAM DIESTA";
  const typingSpeed = 200;
  const [showCursor, setShowCursor] = useState(true);
  const cursorBlinkSpeed = 200;
  let index = 0;
  let isTyping = true;

  useEffect(() => {
    const typeText = () => {
      if (isTyping) {
        if (index < fullText.length) {
          setDisplayedText(fullText.slice(0, index + 1));
          index++;
        } else {
          isTyping = false;
        }
      }
    };

    const interval = setInterval(typeText, typingSpeed);

    return () => clearInterval(interval);
  }, [fullText]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (!isTyping) {
        clearInterval(cursorInterval);
        setShowCursor(false);
        return;
      }
      setShowCursor((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, []);

  // Scroll to top button
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Team information
  const teams: Teams = {
    overallCoordinators: [
      {
        name: "Uday Sunkaraboina",
        role: "Overall Coordinator",
        imageUrl: "./Uday.webp",
      },
      {
        name: "Kesava Mahitha",
        role: "Overall Coordinator",
        imageUrl: "./Mahitha.webp",
      },
    ],
    eventHeads: [
      {
        name: "Koushik",
        role: "Event Head",
        imageUrl: "./012A89345 - Gunnam Sri Satya Koushik.webp",
      },
      {
        name: "Manoj Kumar",
        role: "Event Head",
        imageUrl:
          "./WhatsApp Image 2024-12-03 at 8.39.18 PM - Ponnamanda Manoj Kumar.webp",
      },
      {
        name: "Venkata Dheeraj",
        role: "Event Head",
        imageUrl:
          "./Screenshot_2024_1202_154212 - Kurapati Venkata Dheeraj.webp",
      },
    ],
    eventCoordinators: [
      {
        name: "Sivaneasan",
        role: "Event Coordinator",
        imageUrl: "./Screenshot_20241202_114218_Chrome - Siva neasan.webp",
      },
      {
        name: "Shashank",
        role: "Event Coordinator",
        imageUrl: "./IMG_2444 - Javaji Shashank Goud (2).webp",
      },
      {
        name: "Jayadeep",
        role: "Event Coordinator",
        imageUrl: "./20241202_031642 - Potarlanka Jayadeep.webp",
      },
      {
        name: "Rupesh",
        role: "Event Coordinator",
        imageUrl: "./IMG-20240729-WA0014 - Devarapalli Rupesh.webp",
      },
      {
        name: "Jaswanth",
        role: "Event Coordinator",
        imageUrl: "./IMG_3398 - Killana Jaswanth.webp",
      },
      {
        name: "Pranav ",
        role: "Event Coordinator",
        imageUrl: "./20241129_011145 - Pranav Devara.webp",
      },
      {
        name: "Bhavya Kumari",
        role: "Event Coordinator",
        imageUrl: "./IMG_20230907_155610 - Meka Bhavya Kumari.webp",
      },
      {
        name: "Meenakshi",
        role: "Event Coordinator",
        imageUrl:
          "./Screenshot_2024-11-26-10-37-53-89_92460851df6f172a4592fca41cc2d2e6 - Kagita Meenakshi(2).webp",
      },
      { name: "Kalyan", role: "Event Coordinator", imageUrl: "./Kalyan.webp" },
      {
        name: "Bonigi Srisanth ",
        role: "Event Coordinator",
        imageUrl: "./IMG_20241126_101036 - Bonigi Srisanth.webp",
      },
      {
        name: "K Jaswanth ",
        role: "Event Coordinator",
        imageUrl: "./IMG_20241202_081338 - Kakumanu Jaswanth.webp",
      },
      {
        name: "Shiva Chethan",
        role: "Event Coordinator",
        imageUrl: "./img inter iit - Shiva Chethan Halamane(1).webp",
      },
      {
        name: "Renu Shri",
        role: "Event Coordinator",
        imageUrl: "./IMG_2508 - Aare Renu Shri.webp",
      },
    ],
    hospitalityHeads: [
      {
        name: "Abhinay",
        role: "Hospitality Head",
        imageUrl: "./IMG-20241124-WA0053 - Dasari Abhinayshashanth.webp",
      },
      {
        name: "Jatin Choudary ",
        role: "Hospitality Head",
        imageUrl: "./Jatin.webp",
      },
      {
        name: "Rishi Kasturi ",
        role: "Hospitality Head",
        imageUrl: "./Sai_Rishi.webp",
      },
    ],
    hospitalityCoordinators: [
      {
        name: "Mokshith Kumar",
        role: "Hospitality Coordinator",
        imageUrl: "./IMG_20231021_132503_565 - Bonda Mokshith Kumar.webp",
      },
      {
        name: "Anvesh Chandra ",
        role: "Hospitality Coordinator",
        imageUrl: "./IMG_20240806_182715_166 - Anveshchandra Bavikadi.webp",
      },
      {
        name: "Jagadeesh ",
        role: "Hospitality Coordinator",
        imageUrl: "./1707648307618 - Kodadala Jagadeesh(1).webp",
      },
      {
        name: "Dinesh ",
        role: "Hospitality Coordinator",
        imageUrl: "./Dinesh.webp",
      },
      {
        name: "Karthikeya ",
        role: "Hospitality Coordinator",
        imageUrl: "./IMG_0163 - Mahenderkar Karthikeya.webp",
      },
      {
        name: "Rahul Porika ",
        role: "Hospitality Coordinator",
        imageUrl: "./IMG_2605 - Rahul Porika.webp",
      },
      {
        name: "Adarsh Patel ",
        role: "Hospitality Coordinator",
        imageUrl: "./IMG_20241125_112634 - Adarsh Patel.webp",
      },
      {
        name: "Nikhil Rajpoot ",
        role: "Hospitality Coordinator",
        imageUrl: "./IMG_20241202_160810 - Nikhil Rajpoot.webp",
      },
      {
        name: "Harsha vardhan ",
        role: "Hospitality Coordinator",
        imageUrl:
          "./295ed159-52cd-4b3a-9c93-997e1a614a1f - Harsha Vardhan.webp",
      },
      {
        name: "Yasaswi reddy  ",
        role: "Hospitality Coordinator",
        imageUrl: "./IMG_20241205_134920_292 - Gabbireddy Yasaswi Reddy.webp",
      },
      {
        name: "Tejaswi",
        role: "Hospitality Coordinator",
        imageUrl: "./IMG-20240616-WA0137 - Kadali Tejaswi.webp",
      },
      {
        name: "Saipoorna",
        role: "Hospitality Coordinator",
        imageUrl: "./20241124_222128 - Sammeta Sai Poorna.webp",
      },
      {
        name: "Sree ved ",
        role: "Hospitality Coordinator",
        imageUrl: "./IMG_1807 - Soma Sree Ved.webp",
      },
    ],
    multimediaHeads: [
      { name: "Dhruv", role: "Multimedia Head", imageUrl: "./Dhruv.webp" },
      {
        name: "Venu",
        role: "Multimedia Head",
        imageUrl: "./IMG_1091 - Banavath Venu Naik.webp",
      },
    ],
    multimediaCoordinators: [
      {
        name: "Subhasis Basa",
        role: "Multimedia Coordinator",
        imageUrl:
          "./IMG_20241116_133913347_MF_PORTRAIT (1) - Subhasis Basa.webp",
      },
      {
        name: "Silky Sau ",
        role: "Multimedia Coordinator",
        imageUrl: "./Silky sau.webp",
      },
      {
        name: "Shresth Kumar ",
        role: "Multimedia Coordinator",
        imageUrl: "./IMG20220528123259 - Shresth Kumar.webp",
      },
      {
        name: "Raja Mohan",
        role: "Multimedia Coordinator",
        imageUrl: "./IMG_20230714_181417x - P N V RAJA MOHAN.webp",
      },
      {
        name: "Viraj Rajpure",
        role: "Multimedia Coordinator",
        imageUrl:
          "./4320DEAA-D521-4483-9185-1D283E6641D3 - Rajpure Viraj Mohan.webp",
      },
      {
        name: "Eslavath Jayanth",
        role: "Multimedia Coordinator",
        imageUrl: "./IMG_6870 - Eslavath Jayanth(1).webp",
      },
      {
        name: "Abhinaba Das",
        role: "Multimedia Coordinator",
        imageUrl: "./1000103049 - Abhinaba Das.webp",
      },
      {
        name: "Jayanth Ram",
        role: "Multimedia Coordinator",
        imageUrl: "./IMG_3729 - Ramavath Jayanth Ram(1).webp",
      },
    ],
    prHeads: [
      {
        name: "Nikita",
        role: "PR Head",
        imageUrl: "./Nikita Tuwani ( Publicity Head) - Nikita Tuwani.webp",
      },
      {
        name: "Balusu Bhanu Prakash",
        role: "PR Head",
        imageUrl: "./FullSizeRender(5) - Balusu Bhanu Prakash.webp",
      },
    ],
    prCoordinators: [
      {
        name: "Bharath",
        role: "PR Coordinator",
        imageUrl: "./Pic - Mamidi Bharath.webp",
      },
      {
        name: "Abhi Rohan",
        role: "PR Coordinator",
        imageUrl:
          "./IMG-20230626-WA0000 - Kunkumagunta Sachidananda Sake Abhirohan.webp",
      },
      { name: "Vivek ", role: "PR Coordinator", imageUrl: "./Vivek.webp" },
      {
        name: "Athiradh",
        role: "PR Coordinator",
        imageUrl: "./athiradh 1 1 - Athiradh R N(1).webp",
      },
      { name: "Dharani", role: "PR Coordinator", imageUrl: "./Dharani.webp" },
      {
        name: "Gayatri Priya",
        role: "PR Coordinator",
        imageUrl: "./Gayatri.webp",
      },
    ],
    webHeads: [
      { name: "Manne Rithvik", role: "Web Head", imageUrl: "./Rithvik.webp" },
      { name: "Krishna Teja", role: "Web Head", imageUrl: "./KT.webp" },
    ],
    webCoordinators: [
      { name: "Manas", role: "Web Coordinator", imageUrl: "./file (1).webp" },
      {
        name: "Praneeth",
        role: "Web Coordinator",
        imageUrl: "./Praneeth.webp",
      },
      {
        name: "Rudranil Basak",
        role: "Web Coordinator",
        imageUrl: "./20240830_130542 - Rudranil Basak.webp",
      },
      {
        name: "Dhiraj Baid",
        role: "Web Coordinator",
        imageUrl: "./Dhiraj_baid.webp",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12 relative overflow-hidden">
      <div className="flex items-center justify-center md:m-9">
        <button
          onClick={handleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <motion.h1
            className="md:text-6xl text-[42px] font-bold p-2 bg-gradient-to-r to-pink-600 from-pink-600 via-blue-600 inline-block text-transparent bg-clip-text md:mt-4 mt-12"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {displayedText}
            <span
              className={`inline-block w-0.5 md:h-12 h-8 ml-1 bg-gradient-to-b from-pink-600 to-blue-600 ${
                showCursor ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 0.1s" }}
            ></span>
          </motion.h1>
        </button>
      </div>
      <button
        onClick={scrollToTop}
        className={`${
          isVisible ? "opacity-100" : "opacity-0"
        } fixed bottom-4 md:right-4 right-1 md:p-3 p-2 rounded-full md:hidden z-50 bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] group`}
      >
        <div className="relative w-8 h-8 transform transition-transform group-hover:-translate-y-1">
          <Image
            src="/rocket (2).png"
            alt="Scroll to top"
            fill
            className="object-contain"
          />
        </div>
      </button>
      <TeamNavbar />
      <div className="md:hidden">
        <nav className="">
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 w-64 h-screen bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg z-50 shadow-2xl rounded-tl-3xl"
              >
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-4 right-4 text-2xl p-2 rounded-full"
                  aria-label="Close Menu"
                >
                  ✖
                </button>
                <motion.ul
                  className="flex flex-col justify-center h-full px-8 space-y-6"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
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
                            y: { stiffness: 1000, velocity: -100 },
                          },
                        },
                        closed: {
                          y: 50,
                          opacity: 0,
                          transition: {
                            y: { stiffness: 1000 },
                          },
                        },
                      }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick(item.href);
                        }}
                        className={`text-[24px] font-semibold transition-colors duration-300 inline-block hover:text-purple-500 text-white
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
      </div>
      <TeamSection members={teams.overallCoordinators} size="lg" />
      <DiestaLogoBorder title="EVENTS" />
      <TeamSection id="events" members={teams.eventHeads} size="md" />
      <TeamSection members={teams.eventCoordinators} size="sm" />
      <DiestaLogoBorder title="HOSPITALITY" />
      <TeamSection
        id="hospitality"
        members={teams.hospitalityHeads}
        size="md"
      />
      <TeamSection members={teams.hospitalityCoordinators} size="sm" />
      <DiestaLogoBorder title="PR" />
      <TeamSection id="pr" members={teams.prHeads} size="md" />
      <TeamSection members={teams.prCoordinators} size="sm" />
      <DiestaLogoBorder title="MULTIMEDIA" />
      <TeamSection id="multimedia" members={teams.multimediaHeads} size="md" />
      <TeamSection members={teams.multimediaCoordinators} size="sm" />
      <DiestaLogoBorder title="WEB" />
      <TeamSection id="web" members={teams.webHeads} size="md" />
      <TeamSection members={teams.webCoordinators} size="sm" />
    </div>
  );
};

export default TeamPage;
