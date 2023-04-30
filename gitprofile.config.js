// gitprofile.config.js

const config = {
  github: {
    username: 'MahediHasanBijoy', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'md-mahedi-hasan',
    twitter: '',
    facebook: 'mahedihasan.bijoy',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    website: 'https://mahedihasanbijoy.github.io',
    phone: '',
    email: 'bijoycse2014@gmail.com',
  },
  skills: [
    'PHP',
    'Laravel',
    'JavaScript',
    'MySQL',
    'Git',
    'CSS',
    'Bootstrap',
    'Ajax',
  ],
  education: [
    {
      institution: 'Sylhet Engineering College',
      degree: 'Bachelor of Science',
      from: '2015',
      to: '2020',
    },
    {
      institution: 'Adamjee Cantonment College, Dhaka',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2011',
      to: '2013',
    },
    {
      institution: 'Muslim Modern Academy',
      degree: 'Secondary School Certificate (SSC)',
      from: '2000',
      to: '2010',
    },
  ],
  
  themeConfig: {
    defaultTheme: 'corporate',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
