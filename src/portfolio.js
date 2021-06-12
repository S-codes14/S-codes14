/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Sibongumusa Lungelo",
  title: "I'm Sibongumusa",
  subTitle: emoji(
    "A passionate Full Stack Web Developer/Freelancer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/S-codes14",
  linkedin: "https://www.linkedin.com/in/sibongumusa-lungelo-28268220a/",
  gmail: "smlmnguni14@gmail.com",
  instagram: "https://www.instagram.com/sbongumusas/",
  facebook: "https://www.facebook.com/sbongumusa.sbongumusa.5/",
  twitter: "https://twitter.com/Sibongu14624275",
  stackoverflow: "https://stackoverflow.com/users/15496696/sibongumusa-lungelo",
  upwork: "https://www.upwork.com/freelancers/~013f1fd3a5fd8cb440",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ etc."
    ),
    emoji(
      "⚡ Quick to learn new technologies"
    ),
    emoji(
      "⚡ Effective problem solving skills that can be used in the work place"
    ),
    emoji(
      "⚡ other essential/recommended/optional web development skills are: Web page animation, Web development expertise, Web Design, Front-end web languages, Website creation, Web App Development, Website development, Web development technologies."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "YouTube",
      logo: require("./assets/images/youtube.png"),
      subHeader: "YouTube Videos that teach Web Development",
      duration: "September 2019 - Currently",
      desc: "Participated in livestreams watched videos/tutorials all night learning web development, Got tips and several advice from content creators.",
      descBullets: [
        ".Clever Programmer",
        ".Traversy Media. Massachusetts About Youtuber Traversy Media features the best online web development and programming tutorials for all of the latest web technologies including Node. ...",
        ".LevelUpTuts. ...",
        ".kudvenkat. ...",
        ".mmtuts. ...",
        ".Codecourse. ...",
        ".Google Chrome Developers. ...",
        ".The Net Ninja. ...",
        ".LearnCode."
      ]
    },
    {
      schoolName: "Free Code Camp",
      logo: require("./assets/images/freeCodeCamp.png"),
      subHeader: "Web Development",
      duration: "September 2019 - currently",
      desc:
        "At Free Code Camp, I learnt powerful skills while (eventually) building real-world projects for nonprofit organizations.",
      descBullets: [".It’s an open-source community that provides hundreds (well, thousands) coding challenges, projects, certificates, and connections for aspiring coders--and it’s not a boot camp, so you learn at your own pace. It’s all free, and through it you can even get connected to other up-and-coming coders in your city."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance Web Developer",
      company: "upwork",
      companylogo: require("./assets/images/upwork.png"),
      date: "June 2020 – Present",
      desc:
        "Freelanced at upwork done a few projects/websites.",
      descBullets: [
        "Delivered product or service to customer locations within specific timeframes.",
        "Developed and maintained courteous and effective working relationships.",
        "Worked flexible hours; night, weekend, and holiday hours.",
        "Proved successful working within tight deadlines and fast-paced atmosphere.",
        "Developed and implemented performance improvement strategies and plans to promote continuous improvement.",
        "Handled day-to-day running of project or department or task, ensuring high levels of productivity and progression.",
        "Completed task to ensure compliance with relevant type regulations.",
        "Exceeded goals through effective task prioritization and great work ethic.",
        "Carried out day-day-day duties accurately and efficiently.",
        "Created plans and communicated deadlines to ensure projects were completed on time."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some startup Company i am involved in is rando",
  projects: [
    {
      image: require("./assets/images/rando.jpg"),
      projectName: "Rando",
      projectDesc: "What is expected to be the next big social network after facebook,twitter,instagram,tik tok. Rando's future is looking bright and as the founder i have big dreams for it.. feel free to ask for an update of Rando",
      footerLink: [
        {
          name: "Ask more, Send a message",
          url: "https://www.facebook.com/sbongumusa.sbongumusa.5/"
        }
        //  you can add extra buttons here.
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
      {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Ask More, send a message", url: "https://www.facebook.com/sbongumusa.sbongumusa.5/"},
        
      ]
    },
    {
      title: "Programming Hero - Python",
      subtitle: "Completed Certifcation from Programming Hero for python Development",
      image: require("./assets/images/ph.png"),
      footerLink: [
        {name: "Ask More, send a message", url: "https://www.facebook.com/sbongumusa.sbongumusa.5/"},
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Popular Websites I have made",
  subtitle:
    "click on the card to visit it.",

  blogs: [
    {
      url:
        "https://lordreklaw.netlify.app",
      title: "Lord Reklaw ",
      description:
        "I made a website for my friend who is a rapper, the website fetches audio from spotify's api and plays it when you click the play buttton.I is also has embedded spotify, youtube and twitter -artist portfolio"
    },
    {
      url: "http://30sekify.netlify.app",
      title: "30sekify ",
      description:"Spotify authentication.Looks like spotify. fetches data from spotify's api then plays 30 seconds snippets -spotify ui/ux clone, fetches from spotify's api"
    },
    {
      url: "http://cartoonized.netlify.app/",
      title: "Cartoonized ",
      description:"converts images to cartoon or animated images"
    },
    {
      url: "http://s-chess.netlify.app",
      title: "Chess ",
      description:"chess-ai is a simple chess AI in JavaScript.The primary concern of chess-ai is the decision-making part of the application."
    },
    {
      url: "http://gradientful.netlify.app/",
      title: "Gradientful ",
      description:" gradientful is a community contributed collection of beautiful multi-color gradients "
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talk To Me",
  subtitle: emoji("Write a message say hi or discuss a topic"),
  display: false // Set false to hide this section, defaults to true
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+27 729846089",
  email_address: "smlmnguni14@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "freeCodeCamp", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails
};
