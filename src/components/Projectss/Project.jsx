import styles from "../../components/Projectss/Project.module.css";
import { AnimatedLine, RevealOnScroll } from "../Skills/Skill";
import project1 from "../../../public/project119.png";
import project2 from "../../../public/project124.png";
import project3 from "../../../public/project120.png";
import ProjectBox from "../ProjectBox/ProjectBox";

const text1 =
  "React Movie App is a modern web application built with React that allows users to search, browse, and discover movies effortlessly. It integrates with a public movie API to display real-time data such as ratings, release dates, and descriptions.";
const text2 =
  " Baloach Travels is a modern and responsive bus booking website that allows users to search routes, compare prices, select seats, and book tickets easily. Built with HTML, CSS, and JavaScript (React/Firebase if you’re using them), it offers a smooth multi-step booking process, user authentication, and a clean, user-friendly interface for travelers.";
const text3 =
  "  Foodpanda Clone is a responsive food delivery web app that replicates the core features of Foodpanda. Users can browse restaurants, explore menus, add items to the cart, and place orders seamlessly. Built with modern web technologies like React, HTML, CSS, and JavaScript, it offers a smooth UI, dynamic routing, and a real-world online ordering experience.";
// const text4 =
//   " Travel Explorer is a responsive travel website built using HTML, CSS, and JavaScript. It allows users to explore destinations, view travel packages, and learn about tours through an engaging and visually appealing interface. The site features smooth animations, an organized layout, and a user-friendly design that enhances the overall travel browsing experience.";
// const text5 =
//   "Express Tracker is a React-based web application that allows users to track their parcels or shipments in real time. It features a clean and responsive UI where users can enter tracking IDs to view delivery status, location updates, and shipment details. Built with React and modern UI components, it offers a smooth and efficient package tracking experience.";
// const text6 =
//   "Bubble Game is a fun and interactive web game built using HTML,CSS, and JavaScript. Players pop bubbles appearing on the screen to score points within a limited time. The game features smooth animations, dynamic scoring, and an engaging UI designed for a quick and enjoyable gaming experience.";

const projects = [
  {
    id: 1,
    title: "Movie App",
    text: text1,
    image: project1,
    link: "https://movie-app-using-react-1hgk.vercel.app/",
  },
  {
    id: 2,
    title: "Baloach Travels",
    text: text2,
    image: project2,
    link: "https://test-website-deployment.vercel.app/",
  },
  {
    id: 3,
    title: "Food Panda",
    text: text3,
    image: project3,
    link: "https://responsive-travel-tour-website-desi.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Travel Web",
  //   text: text4,
  //   image: project4,
  //   link: "https://responsive-travel-tour-website-desi.vercel.app/",
  // },
  // {
  //   id: 5,
  //   title: "Expense Tracker",
  //   text: text5,
  //   image: project5,
  //   link: "https://expense-tracker-app-using-react.vercel.app/",
  // },
  // {
  //   id: 6,
  //   title: "Bubble Game",
  //   text: text6,
  //   image: project6,
  //   link: "https://bubble-game-using-pure-js.vercel.app/",
  // },
];

function Project() {
  return (
    <div className={styles.projectsOuterContainer}>
      <RevealOnScroll>
        <h1 className={styles.projectHeading}>
          {/* <TouchAppIcon
            fontSize="large"
            sx={{ color: "#9c27b0", fontSize: "60px", marginBottom: "10px" }}
          /> */}
          Featured <span className={styles.gradText}> Projects</span>
        </h1>
      </RevealOnScroll>
      <RevealOnScroll delay={0.2}>
        <div className={styles.projectText}>
          <p>
            Built from scratch—research, problem-solving, and AI assistance. No
            tutorials, just pure innovation and creativity.
          </p>
          <AnimatedLine className={styles.skillTextLine} />
        </div>
      </RevealOnScroll>
      <div className={styles.projectBoxesContainer}>
        {projects.map((proj) => (
          <ProjectBox key={proj.id} data={proj} />
        ))}
      </div>
      <div className={styles.gitrepo}>
        <a target="_blank" href="https://github.com/farazazeem-6">
          <p>
            View More Projects on GitHub
            <i className="ri-arrow-right-up-line"></i>
          </p>
        </a>
      </div>
    </div>
  );
}

export default Project;
