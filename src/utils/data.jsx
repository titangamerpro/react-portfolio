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

import { FaCrown, FaMobileAlt, FaGlobe } from 'react-icons/fa';

export const servicesData = [
  {
    id: 1, // Уникальный идентификатор для ключей React
    icon: FaCrown, // Компонент иконки React
    title: 'UI/UX Design',
    description: 'Turn what you have in mind of a digital product into reality. For any platform you consider.',
  },
  {
    id: 2,
    icon: FaMobileAlt,
    title: 'Application Development',
    description: 'Standard designing, building, and implementing your applications with documentation.',
  },
  {
    id: 3,
    icon: FaGlobe,
    title: 'Web Development',
    description: 'Create and maintain your websites and also take care of its performance and traffic capacity.',
  },
];
