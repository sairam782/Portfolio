import Link from "next/link";
<<<<<<< Updated upstream
import { FaLinkedin, FaInstagram } from "react-icons/fa"; 

const socials = [
  { label: "LinkedIn", icon: <FaLinkedin />, path: "https://www.linkedin.com/in/abhishek-sairam-gaduputi-23899b175/" },
  { label: "Instagram", icon: <FaInstagram />, path: "https://www.instagram.com/abhi_shek_sai_ram" },
=======
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const socials = [
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/abhishek-sairam-gaduputi-23899b175/",
    label: "LinkedIn",
  },
  { icon: <FaGithub />, path: "https://github.com/sairam782", label: "GitHub" },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/abhi_shek_sai_ram",
    label: "Instagram",
  },
  { icon: <HiOutlineMail />, path: "mailto:ag2936@njit.edu", label: "Email" },
>>>>>>> Stashed changes
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
<<<<<<< Updated upstream
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
=======
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          aria-label={item.label}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.icon}
        </Link>
      ))}
>>>>>>> Stashed changes
    </div>
  );
};

export default Social;
