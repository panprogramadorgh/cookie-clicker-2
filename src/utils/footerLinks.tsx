import { FiGithub, PiLinkedinLogoBold, FiYoutube } from "@/utils/reactIcons";
import { FooterLink } from "@/utils/definitions";

const footerLinks: FooterLink[] = [
  {
    name: "GitHub",
    path: "https://github.com/panprogramadorgh",
    icon: <FiGithub />,
  },
  {
    name: "Linkedin",
    path: "/#",
    icon: <PiLinkedinLogoBold />,
  },
  {
    name: "YouTube",
    path: "https://youtube.com/@panprogramador",
    icon: <FiYoutube />,
  },
];

export default footerLinks;
