import { Item } from "@radix-ui/react-select";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaFacebook, FaKaggle, FaItchIo, FaDribbble } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/maria-iut1234" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/shanta-maria" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=100070052212346" },
  { icon: <FaKaggle />, path: "https://www.kaggle.com/shantamaria" },
  { icon: <FaItchIo />, path: "https://xxcoraxxx.itch.io/" },
  { icon: <FaDribbble />, path: "https://dribbble.com/shantamaria" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
