import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; 

const socials = [
  { label: "LinkedIn", icon: <FaLinkedin />, path: "https://www.linkedin.com/in/abhishek-sairam-gaduputi-23899b175/" },
  { label: "Instagram", icon: <FaInstagram />, path: "https://www.instagram.com/abhi_shek_sai_ram" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            aria-label={item.label}
            title={item.label}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
