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
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center">
          <div>
            <h3 className="text-xl font-bold text-purple-400 ">Diesta</h3>
            <p className="mb-4">
              Experience the interdepartmental sports and cultural fest at
              Diesta, where innovation meets inspiration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-purple-400"
                >
                  <link.icon className="h-6 w-6" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Location</h3>
            <p className="mb-4">Indian Institute of Technology Hyderabad</p>
            <p className="mb-4">Yeddumailaram, Telangana 502285</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-400 mb-4">Phone:</h3>
            <p className="mb-4">9100831304</p>
          </div>
        </div>
      </div>
      <Scroller />
    </footer>
  );
}
