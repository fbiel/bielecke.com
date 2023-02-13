type CvEntryType = 'job' | 'education' | 'project' | 'other' | 'military' | 'internship';

export interface SingleCvEntry {
  title: string;
  startDate: Date;
  activities: string[];
  location: string;
  company: string;
  link?: string;
  type: CvEntryType;
  significant?: boolean;
  endDate?: Date;
  current?: boolean;
}

interface CvProject {
  title: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  link?: string;
  technologies: string[];
}

export const cv: (SingleCvEntry)[] = [
  {
    title: 'Lead Software Engineer',
    startDate: new Date('2022-12-01'),
    company: 'K-7 Konzept Karlsruhe GmbH',
    activities: [
      'Responsible for the development of the company\'s software products.',
      'Managing IT infrastructure and software development processes.',
      'Administration of the company\'s IT infrastructure.',
      'Certifying IT systems and processes according to ISO 27001 and ENX TISAX.',
      'Training and mentoring process simulation engineers.',
      'Cloud consulting and implementation.',
    ],
    link: 'https://www.k-7.eu',
    location: 'Karlsruhe, Germany',
    significant: true,
    type: 'job',
    current: true,
  },
  {
    title: 'Robotic Simulation & Software Engineer',
    startDate: new Date('2015-10-01'),
    type: 'job',
    endDate: new Date('2022-11-30'),
    company: 'IBS Ingenieurbüro GmbH',
    activities: [
      'Responsible for the development of the company\'s software products.',
      'Managing IT infrastructure and software development processes.',
      'Assuring process simulation data quality.',
      'Simulation of robotic processes.',
      'Administration of application servers and databases.',
    ],
    link: 'https://www.ibs-ka.de',
    location: 'Karlsruhe, Germany',
    significant: true,
  },
  {
    title: 'Software developer',
    startDate: new Date('2014-01-01'),
    type: 'job',
    company: 'Self-employed',
    activities: [
      'Developed mobile apps for iOS with XCode and Swift',
      'Developed Polymer web componets (discontinued)',
    ],
    location: 'Dresden, Germany',
    significant: true,
    current: false,
  },
  {
    title: 'Brand and advertising support',
    startDate: new Date('2010-06-01'),
    type: 'job',
    company: 'Live Nation/Eventsolutions/FKP Scorpio',
    activities: [
      'On-site support for brand and advertising department of major German music festivals.',
    ],
    location: 'nationwide',
    significant: false,
  },
  {
    title: 'Production line mechanic',
    startDate: new Date('2012-07-01'),
    type: 'job',
    endDate: new Date('2014-07-01'),
    company: 'Takata Petri via Randstad Holding NV',
    activities: [
      'Assembly of gas inflators for OEMS in the Takata Petri plant in Freiberg'
    ],
    link: 'https://www.company.com',
    location: 'Freiberg, Germany',
    significant: false,
  },
  {
    title: 'Internship, department master data',
    startDate: new Date('2009-08-01'),
    endDate: new Date('2009-10-01'),
    type: 'internship',
    company: 'BMW Group',
    activities: [
      'Writing user manuals.',
      'Evaluation of the quality of the master data.',
      'Conceptual design, development and implementation of a project-specific application for the master data department.',
      'Comparing data from different sources and creating a data model for the master data department.'
    ],
    link: 'https://www.bmw.de/de/home.html',
    location: 'Munich, Germany',
    significant: false,
  },
  {
    title: 'Internship, department master data',
    startDate: new Date('2008-01-01'),
    type: 'internship',
    endDate: new Date('2008-07-01'),
    company: 'BMW Group',
    activities: [
      'Writing user manuals.',
      'Evaluation of the quality of the master data.',
      'Conceptual design, development and implementation of a project-specific application for the master data department.',
      'Comparing data from different sources and creating a data model for the master data department.'
    ],
    link: 'https://www.bmw.de/de/home.html',
    location: 'Munich, Germany',
    significant: true,
  },
  {
    title: 'University - Technology management',
    type: 'education',
    startDate: new Date('2008-10-01'),
    endDate: new Date('2012-06-31'),
    company: 'TU Bergakademie Freiberg',
    activities: [
      'Did not graduate'
    ],
    link: 'https://www.company.com',
    location: 'Freiberg, Germany',
    significant: true,
  },
  {
    title: 'Foreign languages correspondence clerk',
    type: 'education',
    startDate: new Date('2005-07-01'),
    endDate: new Date('2006-06-31'),
    company: 'F+U Academy of Languages',
    activities: [
      'Working on commercial tasks in German and English.',
      'Translation of documents from German to English and vice versa.',
      'Proofreading of documents in German and English.',
      'Final grade: Good'
    ],
    location: 'Heidelberg, Germany',
    significant: true,
  },
  {
    title: 'A levels/High school diploma',
    type: 'education',
    startDate: new Date('1997-07-01'),
    endDate: new Date('2005-07-01'),
    company: 'Bertolt-Brecht-Gymnasium',
    activities: [
      'Highest German school diploma',
      'Final grade: 2.5 (Good)'
    ],
    link: 'https://www.company.com',
    location: 'Dresden, Germany',
    significant: true,
  },
  {
    title: 'Military service',
    type: 'military',
    startDate: new Date('2007-04-01'),
    endDate: new Date('2007-12-31'),
    company: 'German Federal Armed Forces',
    activities: [
      'After completing base training I assisted in the training of new recruites.'
    ],
    link: 'https://www.company.com',
    location: 'Gotha, Germany',
    significant: true,
  },
];
