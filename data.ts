import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { FaDiscord, FaEnvelope, FaEye, FaRegListAlt, FaRegUser, FaSkype, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { MdComputer, MdDashboard } from "react-icons/md";
import { SiEthereum, SiFigma, SiFiverr, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import {TbDeviceMobile} from 'react-icons/tb'
import About from "./components/aboutPage/About";
import Contact from "./components/contactPage/Contact";
import GuestBook from "./components/guestbookPage/GuestBook";
import Resume from "./components/resumePage/Resume";
import Stats from "./components/statistics/Stats";
import Works from "./components/worksPage/Works";
import { ClientData, MenuData, ServiceData, SocialMedia, StatisticsData, TestimonialData } from "./types";

export const menus: MenuData[] = [
  {
    id: 1,
    label: "about",
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: "resume",
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: "works",
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 5,
    label: "stats",
    Icon: MdDashboard,
    Component: Stats,
  },
  {
    id: 6,
    label: "contact",
    Icon: FiSend,
    Component: Contact,
  },
  {
    id: 7,
    label: "guest book",
    Icon: MdComputer,
    Component: GuestBook,
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: FaEnvelope,
    label: "Mail",
    logoColor: "#dd7353",
    mediaUrl: "mailto:schmid@magehire.com",
    info: "Please Contact via schmid@magehire.com",
  },
  {
    id: 2,
    Icon: AiOutlineGithub,
    label: "Github",
    logoColor: "#171515",
    mediaUrl: "https://github.com/goldengm/",
    info: "Star my projects on Github",
  },
  {
    id: 3,
    Icon: AiFillLinkedin,
    label: "Linkedin",
    logoColor: "#0072b1",
    mediaUrl: "https://www.linkedin.com/in/",
    info: "Let's connect via Linkedin",
  },
  {
    id: 4,
    Icon: FaWhatsapp,
    label: "WhatsApp",
    logoColor: "#5865f2",
    mediaUrl: "https://whatsapp.com",
    info: "Let's connect via Whatsapp. +1 440 271 1830",
  },
  {
    id: 5,
    Icon: FaDiscord,
    label: "Discord",
    logoColor: "#5865f2",
    mediaUrl: "https://www.discord.com",
    info: "Let's connect via Discord. My username - ",
  },
  {
    id: 6,
    Icon: FaSkype,
    label: "Skype",
    logoColor: "#00e7ff",
    mediaUrl: "https://join.skype.com",
    info: "Let's connect via Skype. My username - live:.cid.6e17b8a2472cb02e",
  },
];

export const services: ServiceData[] = [
  {
    id: 1,
    title: "Front-end",
    Icon: SiNextdotjs,
    description: "Modern and mobile-ready website that will help you reach all of your marketing.",
  },
  {
    id: 2,
    title: "Mobile",
    Icon: TbDeviceMobile,
    description: "Android & iOS development, publish apps to Google Play & Apple App Store.",
  },
  {
    id: 3,
    title: "Blockchain",
    Icon: SiEthereum,
    description: "Blockchain consulting, development, integration, and education for various industries.",
  },
  {
    id: 4,
    title: "Back-end",
    Icon: SiNodedotjs,
    description: "Back-end with SQL / NoSQL DB and API written in a standard express router or tRPC.",
  },
  {
    id: 5,
    title: "UI/UX design",
    Icon: SiFigma,
    description: "Modern user Interface trends with a highly professional and unique design.",
  },
];

export const clients: ClientData[] = [
  {
    id: 1,
    linkLocation: "www.linkedin.com/in/jose-luis-gomez-19b6aa2b9",
    imgLocation: "/images/lin.png",
  },
  {
    id: 2,
    linkLocation: "https://www.linkedin.com/company/shipitsoftware/about/",
    imgLocation: "/images/testrail.png",
  },
  {
    id: 3,
    linkLocation: "http://deuxit.com/",
    imgLocation: "/images/railflow.png",
  },
  {
    id: 4,
    linkLocation: "http://www.agnosticit.com/",
    imgLocation: "/images/tigerhall.png",
  },
];

export const statisticsData: StatisticsData[] = [
  {
    title: "main stack",
    info: "React/.Net, Angular/Laravel",
  },
  {
    title: "projects",
    info: "58+",
  },
  {
    title: "clients",
    info: "22+",
  },
];
