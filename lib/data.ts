import {
  Github,
  Linkedin,
  Mail,
  type LucideIcon,
} from 'lucide-react'

export const profile = {
  name: 'Abel Jose',
  role: 'Frontend Developer',
  tagline: 'Building modern, scalable, and user-friendly web experiences.',
  location: 'Kerala, India',
  email: 'abeljose629@gmail.com',
  resumeUrl: '/resume.pdf',
  intro:
    "I'm a Frontend Developer who loves turning ideas into fast, accessible, and delightful interfaces. I obsess over the small details that make products feel premium — micro-interactions, smooth motion, and pixel-perfect layouts.",
  bio: [
    "My journey into development started with a curiosity for how beautiful websites are built. That curiosity quickly turned into a craft — I taught myself HTML, CSS, and JavaScript, then dove deep into the React and Next.js ecosystem.",
    "Today I work as an Associate UI Developer, building production interfaces with React, TypeScript, and Tailwind CSS. I care deeply about performance, accessibility, and writing clean, maintainable code that scales with the team.",
    "Outside of shipping UI, I'm actively expanding into AI/ML — learning Python, data structures, and machine learning fundamentals with the long-term goal of becoming an AI Engineer who builds intelligent, human-centered products.",
  ],
}

export const stats = [
  { label: 'Projects Completed', value: 12, suffix: '+' },
  { label: 'Technologies Mastered', value: 15, suffix: '+' },
  { label: 'Years of Experience', value: 1, suffix: '+' },
]

export type SkillCategory = {
  title: string
  skills: { name: string; level: number }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
    ],
  },
  {
    title: 'Styling',
    skills: [
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Bootstrap', level: 80 },
      { name: 'SCSS', level: 82 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', level: 88 },
      { name: 'GitHub', level: 88 },
      { name: 'Figma', level: 80 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  tech: string[]
}

export const experiences: Experience[] = [
  {
    role: 'Associate UI Developer',
    company: 'AppStation',
    period: '2025 — Present',
    description:
      'Building and maintaining responsive, accessible user interfaces for production web applications used by thousands of users.',
    achievements: [
      'Developed reusable component libraries that cut feature delivery time by 30%.',
      'Improved Lighthouse performance scores from the 70s to 95+ across key pages.',
      'Collaborated with designers to translate Figma mockups into pixel-perfect UIs.',
      'Introduced motion and micro-interactions that improved engagement metrics.',
    ],
    tech: ['HTML','SaaS', 'Git', 'Bootstrap', 'CSS', 'Figma','Azure','Pug','Jira','Python','WordPress','React'],
  },
]

export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  demoUrl: string
  githubUrl: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Qatar Fund For Development (QFFD)',
    description:
      'A modern website concept designed to showcase QFFD s global development and humanitarian initiatives through a clean, user-friendly, and impactful digital experience.Qatar Fund for Development (QFFD) is the State of Qatar’s official provider for international development and humanitarian assistance.',
    image: 'projects/QFFD_1.jpg',
    tags: ['Wordpress', 'JavaScript', 'Highcharts',],
    demoUrl: 'https://web25prd.qatarfund.org.qa/',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Match4Hope',
    description:
      'Match for Hope combines the power of sport with the influence of the world’s biggest creators and legendary athletes to give those in need hope for a better future.',
    image: 'projects/Match4Hope.jpg',
    tags: ['Wordpress',],
    demoUrl: 'https://match4hope.com/',
    githubUrl: '#',
  },
   {
    title: 'Media City',
    description:
      'Media City Qatar is a leading media and innovation hub in Qatar that supports media companies, startups, content creators, and technology innovators through a business-friendly ecosystem, modern infrastructure, and investment opportunities, helping drive the future of media and creative industries in the region',
    image: 'projects/Media_City.jpg',
    tags: [],
    demoUrl: 'https://mediacity.qa/en/',
    githubUrl: '#',
  },
  {
    title: 'QSW',
    description:
      'The Parenting Center “Kanaf” is dedicated to safeguarding future generations and advancing sustainable human development. It aims to strengthen parent–child relationships and preserve family cohesion by providing essential parenting education for children and adolescents within our society.',
    image: 'projects/QSW_1.jpg',
    tags: ['Drupal', 'JavaScript',],
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Qatar Civil Aviation Authority Chatbot (CAA)',
    description:
      'CAA Chatbot is an AI-powered virtual assistant designed for the Qatar Civil Aviation Authority website, helping users quickly access aviation-related information, services, regulations, and support through a seamless and user-friendly conversational experience.',
    image: 'projects/CAA_1.jpg',
    tags: ['React', 'JavaScript',],
    demoUrl: 'https://stage.caa.gov.qa/en',
    githubUrl: '#',
    featured: true,
  },
  
]

export const learningPath = [
  {
    title: 'Python',
    description:
      'Mastering the language that powers modern data science and machine learning workflows.',
    progress: 75,
  },
  {
    title: 'Machine Learning',
    description:
      'Studying supervised & unsupervised learning, model training, and evaluation.',
    progress: 15,
  },
  {
    title: 'Artificial Intelligence',
    description:
      'Exploring neural networks, deep learning, and the foundations of intelligent systems.',
    progress: 45,
  },
  {
    title: 'Data Structures',
    description:
      'Strengthening problem-solving with algorithms and efficient data structures.',
    progress: 10,
  },
]

export type Certification = {
  title: string
  provider: string
  date: string
  verifyUrl: string
}

export const certifications: Certification[] = [
  {
    title: 'AZ-2007: Get Started With AI-Assisted Development', 
    provider: 'KOENIG',
    date: '2026',
    verifyUrl: '#'
  },
  {
    title: 'The Complete Python Bootcamp From Zero to Hero in Python',
    provider: 'Udemy',
    date: '2026',
    verifyUrl: '#',
  },
  {
    title: 'Introduction to Artificial Intelligence (AI)',
    provider: 'Coursera',
    date: '2025',
    verifyUrl: '#',
  },
  // {
  //   title: 'Python for Everybody',
  //   provider: 'Coursera',
  //   date: '2024',
  //   verifyUrl: '#',
  // },
]

export type SocialLink = {
  label: string
  href: string
  icon: LucideIcon
}

export const socialLinks: SocialLink[] = [
  // { label: 'GitHub', href: 'https://github.com', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abel-jose-b88890366/', icon: Linkedin },
  { label: 'Email', href: 'mailto:abeljose629@gmail.com', icon: Mail },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
]
