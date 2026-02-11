import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const socials = [
  {icon: FaFacebookF, url: "https://facebook.com/msitprakriti"},
  {icon: FaInstagram, url: "https://instagram.com/prakriti_msit"},
  {icon: FaLinkedinIn, url: "https://linkedin.com/company/prakritimsit/"},
]


const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">

        {/* Socials */}
        <div className="flex gap-6 mb-6">
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center border border-gray-700 rounded-full hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Text */}
        <p className="text-sm text-center">
          © 2026 ENVA · Prakriti MSIT
        </p>
        <p className="text-xs mt-2">
          Crafted with  <span className="text-red-500">❤️</span> by{" "} by Team Prakriti
        </p>

      </div>
    </footer>
  );
};

export default Footer;
