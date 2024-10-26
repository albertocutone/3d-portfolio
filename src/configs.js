import {
  displayAt,
  STOPS,
  PAGE_DEPTH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Alberto Cutone',
  subTitle: 'Dev portfolio.',
  stars: {
    maxSize: 20,
    emissionIntensity: 40,
    //optionally stars can be an image
    // url: 'icons/realitylabs-logo.png',
    density: 900,
  },
  navTitle: 'Alberto Cutone portfolio.',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPTH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who Am I?',
      infos: [
        "* I am a software engineer with 6+ years of experience, matured among big techs, startups and research organizations.",
        '* I am hungry for knowledge and love to create using state-of-the-art technologies.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPTH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: '',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPTH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPTH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://drive.google.com/drive/folders/1aDLKCRD4KcJN83iRy0pgS7u4ZiRQK48D?usp=sharing',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPTH_MARGIN, 0],
      title: 'Personal Projects',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/carefree-logo.png',
            websiteURL: '',
          },
          {
            url: 'websites-preview/leetcode-logo.png',
            websiteURL: 'https://leetcode.com/u/alcut1/',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPTH_MARGIN, 0, 0],
      title: 'Contacts',
      footer: 'Keep scrolling...',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/alberto-cutone-1414a512b/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/albertocutone',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:albertocutone@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
