export const profile = {
  name: 'Christian Baumann',
  title: 'Software Engineer',
  bio: 'Hello there, my name is Chris and this is my personal website.',
  location: 'Switzerland',
  email: 'chris.baum.1995@gmail.com',
  avatar: '/img/profile.png',
  links: [
    { label: 'GitHub', href: 'https://github.com/chbauman' },
    { label: 'Instagram', href: 'http://instagram.com/festival_chrigi' },
    { label: 'Facebook', href: 'http://facebook.com/chrigi5.9' },
  ],
  skills: [
    { group: 'Languages', items: ['Python', 'C++/C', 'R', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
    { group: 'Tools', items: ['Git', 'Linux', 'Subversion', 'Jenkins', 'Matlab', 'Mathematica', 'Photoshop', 'Powershell'] },
  ],
  formspree: 'https://formspree.io/f/xpzbwoql',
};

export const work = [
  { org: 'Schiller AG', logo: '/img/schiller.jpg', url: 'https://www.schiller.ch/corp/en', role: 'Full-Time Job (ongoing)', description: 'Software engineer signal processing' },
  { org: 'Empa', logo: '/img/empa.png', url: 'https://www.empa.ch/', role: 'Master thesis', description: 'Data-driven home energy scheduling' },
  { org: 'AGFA Gevaert', logo: '/img/agfa.png', url: 'https://www.agfa.com/', role: 'Internship in R&D', description: 'Image processing using machine learning' },
];

export const education = [
  { org: 'ETH Zürich', logo: '/img/eth.png', url: 'https://ethz.ch/', role: 'Computational Science and Engineering', description: 'Master of Science' },
  { org: 'ETH Zürich', logo: '/img/eth.png', url: 'https://ethz.ch/', role: 'Computational Science and Engineering', description: 'Bachelor of Science' },
];
