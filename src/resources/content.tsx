import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Row, Text, Icon, IconButton } from "@once-ui-system/core";

const person: Person = {
  firstName: "Viraja",
  lastName: "Palleti",
  name: "Viraja Palleti",
  role: "CS Undergrad",
  avatar: "",
  email: "palletiviraja@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi", "Telugu"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/virajapalleti",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/viraja-palleti/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <></>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      Hi, I'm {person.firstName} — a CS undergrad based in Delhi. I build things that are useful,
      interesting, or ideally both.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Delhi, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I'm Viraja — a CS undergrad based in Delhi. I build things that are useful, interesting,
        or ideally both.
        <br /><br />
        Right now that's a PDF assistant that learns how you write from your own text samples, then
        explains documents back to you in the way you would. Grounded in linguistics and using a
        proper eval framework.
        <br /><br />
        When I'm not building something, I'm either studying, reading about mythology, or three
        hours deep into a rabbit hole that started as a 5-minute curiosity.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "IIIT Hyderabad — LTRC",
        timeframe: "May – Aug 2026",
        role: "Research Intern",
        achievements: [
          <>
            Developing an automatic prosodic phrase classifier for English intonational categories,
            with a custom-annotated ToBI dataset and full speech processing pipeline.
          </>,
          <>Advisor: Prof. Chiranjeevi Yarra</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Shiv Nadar University, Delhi NCR",
        description: (
          <>B.Tech in Computer Science and Engineering, Second Year — GPA: 7.8 (Aug 2024 – Present)</>
        ),
      },
      {
        name: "Narayana Junior College, Hyderabad",
        description: <>12th Grade: 95.2% | JEE Mains: 96.5 Percentile (May 2024)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",
        description: <>C++, Python, C, Java, JavaScript</>,
        tags: [],
        images: [],
      },
      {
        title: "AI/ML",
        description: <>PyTorch, Scikit-learn, HuggingFace, LangChain, LangGraph</>,
        tags: [],
        images: [],
      },
      {
        title: "Systems & Infrastructure",
        description: <>SQL & NoSQL databases, AWS, CUDA, Git</>,
        tags: [],
        images: [],
      },
      {
        title: "Web/Backend",
        description: <>Flask, React, Node</>,
        tags: [],
        images: [],
      },
      {
        title: "Tools",
        description: <>Linux, Raspberry Pi</>,
        tags: [],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Projects by ${person.name}`,
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: `Blog – ${person.name}`,
  description: "",
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: "",
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
