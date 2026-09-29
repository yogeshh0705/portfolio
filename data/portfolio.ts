// Central content file. Update the `research` object once the VTOL write-up is shared.
// Keeping all copy here means the components below rarely need to change.

export const profile = {
  name: 'Yogesh',
  title: 'Embedded Systems Engineer | Drone & IoT Enthusiast',
  tagline:
    "Final-year ECE student building embedded systems, IoT platforms, and drones from the ground up — currently deep in VTOL drone research.",
  location: 'Bangalore, Karnataka, India',
  phone: '9310201178',
  email: 'yogesh931007@gmail.com',
  github: 'https://github.com/yogeshh0705',
  linkedin: 'https://linkedin.com/in/yogesh931007', // TODO: confirm exact LinkedIn URL
  resumeUrl: '/resume.pdf', // TODO: drop resume.pdf into /public
};

export const about = {
  summary: [
    "I'm a final-year Electronics and Communication Engineering student at Deenbandhu Chhoturam University of Science and Technology, with hands-on experience building embedded systems, IoT platforms, and autonomous hardware — from an ESP32-based defogger tester at Maruti Suzuki to a Raspberry Pi-powered smart dairy farm system.",
    "Right now my focus is drones — I'm designing a nano drone with a self-built flight controller, and extending that work into VTOL (Vertical Take-Off and Landing) research. Outside the lab, I lead campus initiatives through NSS, E-Cell, and Thinkbots Robotics Society, and mentor 60+ first-year students.",
  ],
  highlights: [
    { label: 'Sensors integrated', value: '20+' },
    { label: 'Defogger test accuracy', value: '90%' },
    { label: 'Students mentored', value: '60+' },
  ],
};

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: 'Embedded Systems Intern',
    org: 'Maruti Suzuki India Ltd.',
    period: 'Jul 2025 – Aug 2025',
    location: 'Manesar, Haryana',
    points: [
      'Built a backdoor defogger test system end-to-end — from frame design to complete hardware integration.',
      'Designed and implemented a prototype using an ESP32 and HMC5883L magnetometer sensor module.',
      'Developed ESP32 firmware to process sensor readings for defogger system testing.',
      'Correctly diagnosed system operation by detecting the miniature magnetic field via HMC5883L.',
      'Interlocked the prototype with the wireless RF CLW box used in MSIL for PIKA-PIKA.',
      'Achieved 90% accuracy testing the functioning of the Backdoor Defogger.',
    ],
  },
  {
    role: 'IoT Intern',
    org: 'Sofcon Systems',    
    period: 'Jul 2024 – Aug 2024',
    location: 'NSP, New Delhi',
    points: [
      'Designed embedded projects on Raspberry Pi using Embedded C and MicroPython.',
      'Integrated 20+ sensors (DHT11 temp/humidity, gas, ultrasonic, etc.) for real-time data collection.',
      'Worked with Wi-Fi and MQTT to enable wireless device connectivity.',
      'Configured the Blynk IoT platform for interactive remote-monitoring dashboards.',
      'Delivered projects covering LED control, display tech, ADC, and I2C communication.',
    ],
  },
];

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  details?: string;
};

export const education: EducationItem[] = [
  {
    degree: 'B.Tech, Electronics and Communication Engineering',
    school: 'Deenbandhu Chhoturam University of Science and Technology, Murthal, Sonipat',
    period: 'Oct 2022 – Jul 2026',
    details:
      'Relevant coursework: Data Structures, Microprocessors, Digital Electronics, Database Management, Wireless Communication, Microwave Techniques, Fiber Optic Systems, Computer Architecture.',
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Programming',
    items: ['C', 'C++', 'Embedded C', 'Python', 'Verilog'],
  },
  {
    category: 'Protocols',
    items: ['UART', 'I2C', 'SPI', 'QSPI', 'HTTP/TCP', 'Bluetooth', 'Wi-Fi'],
  },
  {
    category: 'Electronics',
    items: ['PCB Design', 'Circuit Prototyping', 'Analog/Digital Electronics'],
  },
  {
    category: 'Hardware',
    items: ['Arduino', 'Raspberry Pi', 'ESP32/ESP8266', 'Sensors'],
  },
  {
    category: 'Tools',
    items: ['Arduino IDE', 'VS Code', 'Git/GitHub', 'KiCAD', 'Proteus'],
  },
  {
    category: 'Soft Skills',
    items: ['Project Management', 'Team Leadership', 'Technical Documentation', 'Problem Solving'],
  },
];

export type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: ProjectItem[] = [
  {
    title: 'Nano Drone',
    description:
      "Designing a nano drone from the ground up — researching every component that goes into it, and building a custom flight controller in-house. Aiming for reliability using coreless DC motors instead of BLDCs, fully built in India.",
    tags: ['Drones', 'Flight Controller', 'Embedded Systems'],
    featured: true,
  },
  {
    title: 'Smart Dairy Farm System',
    description:
      'IoT-based dairy automation: TDS-based water quality monitoring with sprinkler control, ultrasonic-triggered automatic fodder dispensing, RFID cattle identification for health tracking, and a Node-RED/Blynk dashboard for real-time remote monitoring.',
    tags: ['IoT', 'Raspberry Pi', 'RFID', 'Node-RED'],
  },
  {
    title: 'Digital Logic Alarm Clock',
    description:
      'A ripple-counter clock built on a CD4060 IC, tuned with R/C values to generate the oscillator delay, with a 555-timer buzzer/LED alert and a relay + BC547 BJT stage to switch on a pump when the alarm triggers — a self-help wake-up device.',
    tags: ['Digital Electronics', 'IC Design'],
  },
];

export const research = {
  title: 'VTOL Drone Research',
  subtitle: 'Hybrid Fixed-Wing VTOL — Product Research Proposal, Jan 2026',
  status: 'In Progress',
  overview:
    'A VTOL (Vertical Take-Off and Landing) drone takes off and lands vertically like a helicopter, then transitions to forward flight like a fixed-wing aircraft — no runway needed. This research designs a hybrid fixed-wing VTOL: a quad-rotor lift stack on a fixed-wing airframe with an inverted V-tail and a rear pusher motor for cruise, aimed at long-endurance mapping, surveillance, and payload missions.',
  image: '/research/vtol-hero.png',
  specs: [
    { label: 'Airframe', value: 'Hybrid fixed-wing, inverted V-tail' },
    { label: 'Target weight', value: '10 kg' },
    { label: 'Lift / cruise', value: '4× VL6013 · AT5230 pusher' },
    { label: 'Battery', value: '12S 40Ah · 1,776 Wh' },
    { label: 'Endurance (est.)', value: 'Up to ~200 min' },
  ],
  highlights: [
    'Airframe layout validated in Gazebo simulation before build',
    'Energy budget and climb strategy sized for long-endurance sorties',
    'Terrain mapping, collision avoidance, and surveillance payload support',
    'Roadmap: concept proofing → endurance & payload → foldable-rotor stealth cruise',
  ],
  tags: ['VTOL', 'Fixed-Wing', 'ArduPilot', 'Gazebo'],
};

export type LeadershipItem = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const leadership: LeadershipItem[] = [
  {
    role: 'NSS Co-ordinator',
    org: 'National Service Scheme',
    period: 'Jul 2024 – Present',
    points: ['Organised various campus drives and events.'],
  },
  {
    role: 'Event Management Lead',
    org: 'E-Cell, DCRUSTM',
    period: 'Nov 2022 – Feb 2025',
    points: [
      '1st position at NIFTEM.',
      'Finalist at NEC, IIT Bombay.',
      '1st position at Pitchstart, organised by DCRUSTM.',
    ],
  },
  {
    role: 'Member',
    org: 'Thinkbots Robotics Society',
    period: 'Nov 2022 – Dec 2023',
    points: [
      'Qualified for IIT Bombay Techfest zonals 2023 at SKIT Jaipur.',
      'Represented the society at IIIT Delhi Techfest.',
    ],
  },
  {
    role: 'Mentor, First Year',
    org: 'DCRUSTM',
    period: 'Aug 2024 – Present',
    points: ['Mentoring 60+ students.'],
  },
];
