export const profile = {
  name: 'Christian Baumann',
  title: 'Software Engineer',
  bio: 'Hello there, my name is Chris and this is my personal website.',
  location: 'Switzerland',
  email: 'chris.baum.1995@gmail.com',
  avatar: '/img/profile.png',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christian-baumann-49b041239/' },
    { label: 'GitHub', href: 'https://github.com/chbauman' },
    { label: 'Instagram', href: 'http://instagram.com/festival_chrigi' },
    { label: 'Email', href: 'mailto:chris.baum.1995@gmail.com' },
  ],
  skills: [
    { group: 'Languages', items: ['Python', 'C++/C', 'C#/.NET', 'R', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
    { group: 'Tools', items: ['Git', 'Linux', 'Subversion', 'Jenkins', 'Matlab', 'Mathematica', 'Photoshop', 'Powershell'] },
  ],
  formspree: 'https://formspree.io/f/xpzbwoql',
};

export const work: { org: string; logo?: string; url: string; role: string; description: string }[] = [
  { org: 'Solcept AG', logo: '/img/solcept.png', url: 'https://www.solcept.ch/de/', role: 'Full-Time Job (ongoing)', description: 'Embedded software engineer' },
  { org: 'Schiller AG', logo: '/img/schiller.jpg', url: 'https://www.schiller.ch/corp/en', role: 'Full-Time Job', description: 'Software engineer signal processing' },
  { org: 'Empa', logo: '/img/empa.png', url: 'https://www.empa.ch/', role: 'Master thesis', description: 'Data-driven home energy scheduling' },
  { org: 'AGFA Gevaert', logo: '/img/agfa.png', url: 'https://www.agfa.com/', role: 'Internship in R&D', description: 'Image processing using machine learning' },
];

export const education = [
  { org: 'ETH Zürich', logo: '/img/eth.png', url: 'https://ethz.ch/', role: 'Computational Science and Engineering', description: 'Master of Science' },
  { org: 'ETH Zürich', logo: '/img/eth.png', url: 'https://ethz.ch/', role: 'Computational Science and Engineering', description: 'Bachelor of Science' },
];

export const projects = [
  {
    title: 'Sudoku',
    description: 'A sudoku web app written in TypeScript, with pencil marks, hypotheses and a solver.',
    image: '/img/posts/screen_sudoku_broad.png',
    links: [
      { label: 'Try it', href: 'https://chbauman.github.io/sudoku-ts/' },
      { label: 'About the app', href: '/sudoku' },
    ],
  },
];

export const bands: { name: string; url: string; logo?: string; role?: string; description?: string }[] = [
  { name: 'Skapra Zombie', url: 'https://skaprazombie.ch/', logo: '/img/skapra-zombie.jpg', role: 'Trumpet', description: 'Ska-Punk from Zürich' },
  { name: 'YONO Streetband', url: 'https://yonostreetband.ch/', logo: '/img/yono-streetband.png', role: 'Trumpet', description: 'Street-Brass from Zürich' },
  { name: 'Bau-Stei', url: 'https://bau-stei.ch/' },
  { name: 'Artrose', url: 'https://artrose.ch/' },
];
