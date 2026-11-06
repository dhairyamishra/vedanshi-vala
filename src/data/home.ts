const base = import.meta.env.BASE_URL;
export const outcomes = [
  { value: '40k+', label: 'people reached', context: 'BOLT Safety Society initiatives' },
  { value: '63', label: 'Safe Hubs across 20 cities', context: 'Community safety network' },
  { value: '80+', label: 'team members managed', context: 'Nonprofit leadership and operations' },
];
export const caseStudies = [
  { number: '01', label: 'Community safety', title: 'Built a nonprofit around safer, more equitable communities.', problem: 'Sexual violence, harassment, and abuse call for accessible resources and community-focused support.', ownership: 'Co-founded and scaled BOLT Safety Society through workshops, digital resources, Safe Hubs, documentary production, and a national safety hotline.', result: '40,000+ people reached · 63 Safe Hubs', href: `${base}projects/bolt-safety/`, link: 'Explore the BOLT initiative', tags: ['Community safety', 'Advocacy', 'Nonprofit leadership'] },
  { number: '02', label: 'Partnership development', title: 'Brought partners and funding together to extend the reach of safety initiatives.', problem: 'Expanding community programs requires funding, organizational capacity, and sustained public engagement.', ownership: 'Raised grant funding, managed 80+ team members, and developed partnerships with L’Oréal Paris, Ted Baker, Guest In Residence, Kulfi Beauty, and NightCap.', result: '$38,000 in grants · 2.2M+ impressions', href: `${base}projects/bolt-safety/`, link: 'Read about the partnerships', tags: ['Partnerships', 'Fundraising', 'Public engagement'] },
];
export const featuredProjects = [
  { number: '01', eyebrow: 'Community safety', title: 'BOLT Safety Society', description: 'A federally registered nonprofit addressing sexual violence through resources, workshops, safer spaces, documentary production, and a national safety hotline.', ownership: 'Co-Founder, Executive Director & Chairperson', metric: '40,000+', metricLabel: 'people reached', image: `${base}images/projects/bolt.png`, imageAlt: 'BOLT Safety Society logo', imageWidth: 1200, imageHeight: 675, href: `${base}projects/bolt-safety/`, accent: 'rose' as const },
  { number: '02', eyebrow: 'Public health research', title: 'Clinical & Injury Prevention Research', description: 'Research experience spanning clinical methodologies at Mount Sinai and the SHRed youth-athlete concussion study at BC Injury Research and Prevention Unit.', ownership: 'Research training and study support', metric: 'MPH', metricLabel: 'Expected June 2027', image: `${base}images/projects/research.png`, imageAlt: 'Icahn School of Medicine at Mount Sinai logo', imageWidth: 1200, imageHeight: 675, href: `${base}projects/public-health-research/`, accent: 'gold' as const },
  { number: '03', eyebrow: 'Community leadership', title: 'BC Provincial Heritage Fair', description: 'Board leadership and coordination of Canada’s largest Provincial Heritage Fair, supporting historical inquiry and engagement among young people.', ownership: 'Board Director & Provincial Fair Coordinator', metric: '2014–25', metricLabel: 'board and fair coordination', image: `${base}images/projects/heritage.png`, imageAlt: 'BC Heritage Fairs logo', imageWidth: 1200, imageHeight: 675, href: `${base}projects/heritage-fairs/`, accent: 'rose' as const },
];
export const experienceSignals = [
  { brand: 'bolt', label: 'Co-Founder & Executive Director', detail: 'BOLT Safety Society · 2017–Present' },
  { brand: 'concordia', label: 'Coordinator, Data and CRM Systems', detail: 'Concordia · 2025' },
  { brand: 'heritage', label: 'Board Director & Provincial Fair Coordinator', detail: 'BC Heritage Fairs Society · 2014–2025' },
  { brand: 'stjohn', label: 'First Aid Training Officer', detail: 'St. John Ambulance · 2017–2024' },
];
export const technicalAreas = [
  { title: 'Community leadership', detail: 'People, operations, strategy, fundraising, and partnerships that help nonprofit initiatives grow.' },
  { title: 'Public health research', detail: 'Clinical data collection and management, survey design, statistical analysis, and scientific literature synthesis.' },
  { title: 'Advocacy & engagement', detail: 'Public speaking, media relations, governmental engagement, and international conversations on safety and equity.' },
];
