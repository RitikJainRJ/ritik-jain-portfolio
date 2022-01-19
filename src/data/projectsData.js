import one from "../assets/svg/projects/one.svg";
import two from "../assets/svg/projects/two.svg";
import three from "../assets/svg/projects/three.svg";
import four from "../assets/svg/projects/four.svg";
import five from "../assets/svg/projects/five.svg";
import six from "../assets/svg/projects/six.svg";
import seven from "../assets/svg/projects/seven.svg";
import eight from "../assets/svg/projects/eight.svg";

export const projectsData = [
  {
    id: 1,
    projectName: "Blockchain Crowdfunding",
    projectDesc:
      "Aim of the project is to build a Crowdfunding application based on Ethereum. Achieved Enhanced security and More power to contributor in crowdfunding.",
    tags: [
      "Blockchain",
      "Ethereum",
      "React",
      "Solidity",
      "Remix",
      "Ganache",
      "Truffle",
    ],
    code: "https://github.com/RitikJainRJ/OurCamp",
    demo: "https://kickstart.owanh.vercel.app/",
    image: one,
  },
  {
    id: 2,
    projectName: "Web based Chat application",
    projectDesc:
      "Aim of the project is to build a full stack chat application. Achieved a real time chat application where people can send direct messages and create channels.",
    tags: ["React", "Redux", "Semantic-UI", "Firebase", "Node"],
    code: "https://github.com/RitikJainRJ/Coconut-chat",
    demo: "https://chat-app-df397.web.app/login",
    image: two,
  },
  {
    id: 3,
    projectName: "Sentiment Analysis of Slack",
    projectDesc:
      "Aim of the project is to do sentiment analysis of Slack channels messages. Achieved a web application in which we can enter custom text or Slack channel Id to get sentiment of it.",
    tags: ["React", "Redux", "Bootstrap", "AWS", "Git"],
    code: "",
    demo: "",
    image: three,
  },
];

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
