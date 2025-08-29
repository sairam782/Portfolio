import Link from "next/link";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa"; 

const socials = [
  // { icon: <FaGithub />, path: "https://github.com/prabhasreddy-57" },
  // { icon: <FaTwitter />, path: "" }
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/abhishek-sairam-gaduputi-23899b175/" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/abhi_shek_sai_ram" },
  
];

// https://www.instagram.com/abhi_shek_sai_ram?igsh=czAwZzYwaDJzd2F4&utm_source=qr

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
