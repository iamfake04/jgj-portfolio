// src/components/layout/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', href: '#', icon: 'GH' },
    { name: 'LinkedIn', href: '#', icon: 'LI' },
    { name: 'Twitter', href: '#', icon: 'TW' },
  ];

  return (
    <footer className="bg-gray-800 bg-opacity-70 backdrop-blur-md shadow-top-lg p-6 text-center text-gray-400 mt-auto">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => (
            <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <span className="sr-only">{social.name}</span>
              {social.icon}
            </Link>
          ))}
        </div>
        <p>&copy; {currentYear} JGJ. All rights reserved.</p>
        <p className="text-sm mt-1">
          Crafted with Next.js, TailwindCSS, and Framer Motion.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
