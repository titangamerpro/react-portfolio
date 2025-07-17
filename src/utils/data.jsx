export const menuItems = [
  { label: "Services", to: "services" },
  { label: "Portfolios", to: "portfolios" },
  { label: "Experience", to: "experience" },
  { label: "Blog", to: "blog" },
];

// Импорт нужных иконок (выбираем нужный набор, например, из `react-icons/fa`)
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";

export const socialLinks = [
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com",
    label: "Instagram",
  },
  {
    icon: <FaTwitter />,
    href: "https://www.twitter.com",
    label: "Twitter",
  },
  {
    icon: <FaGithub />,
    href: "https://www.github.com",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com",
    label: "LinkedIn",
  },
];
