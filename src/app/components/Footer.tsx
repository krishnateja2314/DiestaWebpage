import Link from "next/link";
import { Instagram, Mail } from "lucide-react";
import Scroller from "./Scroller";
const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/diesta_iith/",
  },
  {
    name: "Mail",
    icon: Mail,
    href: "mailto:general_secy_1@gymkhana.iith.ac.in",
  },
  {
    name: "Phone",
    icon: PhoneCall,
    href: "tel:+919100831304",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Diesta Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Diesta</h3>
            <p className="mb-6 max-w-sm">
              Experience the interdepartmental sports and cultural fest at
              Diesta, where innovation meets inspiration.
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.name === "Instagram" ? "_blank" : "_self"}
                  rel={link.name === "Instagram" ? "noopener noreferrer" : ""}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                >
                  <link.icon className="h-6 w-6" aria-label={link.name} />
                </Link>
              ))}
            </div>
          </div>

          {/* Location Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Location</h3>
            <p className="mb-2">Indian Institute of Technology Hyderabad</p>
            <p>Yeddumailaram, Telangana 502285</p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold text-purple-400 mb-4">Contact</h3>
            <div className="flex flex-col items-center space-y-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.name === "Instagram" ? "_blank" : "_self"}
                  rel={link.name === "Instagram" ? "noopener noreferrer" : ""}
                  className="text-gray-400 hover:text-purple-400 flex items-center transition-colors duration-200"
                >
                  <link.icon className="h-5 w-5 mr-2" />
                  {link.name === "Phone" && "+91 9100831304"}
                  {link.name === "Mail" && "general_secy_1@gymkhana.iith.ac.in"}
                  {link.name === "Instagram" && "@diesta_iith"}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Scroller />
    </footer>
  );
}
